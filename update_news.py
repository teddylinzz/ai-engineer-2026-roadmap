import urllib.request
import xml.etree.ElementTree as ET
import re
import os
import json
from datetime import datetime

# Fetch RSS Feed
rss_url = "https://news.google.com/rss/search?q=Artificial+Intelligence&hl=en-US&gl=US&ceid=US:en"
headers = {'User-Agent': 'Mozilla/5.0'}

print("Fetching news from Google News RSS...")
try:
    req = urllib.request.Request(rss_url, headers=headers)
    with urllib.request.urlopen(req) as response:
        xml_data = response.read()
except Exception as e:
    print(f"Error fetching RSS: {e}")
    exit(1)

# Parse XML
try:
    root = ET.fromstring(xml_data)
except Exception as e:
    print(f"Error parsing XML: {e}")
    exit(1)

items = root.findall('.//item')
print(f"Found {len(items)} items in RSS feed.")

# Helper to categorize articles
def categorize(title, desc):
    text = (title + " " + desc).lower()
    if any(k in text for k in ["gpu", "nvidia", "blackwell", "h100", "tpu", "hardware", "infrastructure", "compute", "tsmc", "semiconductor"]):
        return "Hardware & Infrastructure"
    if any(k in text for k in ["policy", "regulation", "safety", "red-team", "red team", "copyright", "law", "ethics", "safety institute", "ban", "government", "senate", "security"]):
        return "Industry & Safety"
    if any(k in text for k in ["open-source", "open source", "weights", "pytorch", "hugging face", "huggingface", "github", "fine-tune", "fine tuning", "finetuning", "lora", "dataset"]):
        return "Research & Open Source"
    return "Models"

# Build newsData JSON structure
news_list = []
for item in items[:10]: # Take top 10 articles
    title_full = item.find('title').text or ""
    link = item.find('link').text or ""
    pub_date_str = item.find('pubDate').text or ""
    
    # Parse source from title (Google News formats titles as "Headline - Source Name")
    source = "Unknown"
    title = title_full
    if " - " in title_full:
        parts = title_full.rsplit(" - ", 1)
        title = parts[0]
        source = parts[1]
    
    # Format Date nicely: e.g. "May 22, 2026"
    try:
        # Standard RSS date format: "Sat, 23 May 2026 04:00:00 GMT" or similar
        # Strip time zone parts if necessary, or parse directly
        # Remove timezone offset or GMT suffix if needed
        clean_date = re.sub(r'\s+[\+\-]\d{4}$', '', pub_date_str) # e.g. " +0000"
        clean_date = clean_date.strip()
        
        # Try parsing different formats
        dt = None
        for fmt in ("%a, %d %b %Y %H:%M:%S %Z", "%a, %d %b %Y %H:%M:%S", "%d %b %Y %H:%M:%S %Z"):
            try:
                dt = datetime.strptime(clean_date, fmt)
                break
            except ValueError:
                continue
        
        if dt:
            date_formatted = dt.strftime("%B %d, %Y")
        else:
            date_formatted = pub_date_str
    except Exception:
        date_formatted = pub_date_str
        
    desc = item.find('description').text or ""
    # Strip HTML tags from description
    desc = re.sub(r'<[^>]*>', '', desc)
    if not desc:
        desc = f"Latest updates on {title[:50]}..."
    
    category = categorize(title, desc)
    
    news_list.append({
        "title": title,
        "category": category,
        "date": date_formatted,
        "org": source,
        "desc": desc[:200] + "..." if len(desc) > 200 else desc,
        "link": link
    })

if not news_list:
    print("No news articles extracted.")
    exit(1)

# Format newsData as JS array string
js_array_str = "  const newsData = [\n"
for i, news in enumerate(news_list):
    comma = "," if i < len(news_list) - 1 else ""
    line = f"    {json.dumps(news)}{comma}\n"
    js_array_str += line
js_array_str += "  ];"

# Read app.js
app_js_path = "app.js"
if not os.path.exists(app_js_path):
    print("app.js not found.")
    exit(1)

with open(app_js_path, "r", encoding="utf-8") as f:
    app_js_content = f.read()

# Replace block between NEWS_DATA_START and NEWS_DATA_END
start_marker = "// NEWS_DATA_START\n"
end_marker = "\n  // NEWS_DATA_END"

if start_marker in app_js_content and end_marker in app_js_content:
    parts = app_js_content.split(start_marker)
    rest = parts[1].split(end_marker, 1)
    new_content = parts[0] + start_marker + js_array_str + end_marker + rest[1]
    
    with open(app_js_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("Successfully updated app.js with the latest news.")
else:
    print("Could not find NEWS_DATA_START and NEWS_DATA_END markers in app.js.")
    exit(1)
