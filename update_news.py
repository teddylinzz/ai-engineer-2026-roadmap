import urllib.request
import xml.etree.ElementTree as ET
import re
import os
import json
from datetime import datetime

# Curated high-signal AI news RSS feeds from Readless recommendations
rss_feeds = [
    {
        "url": "https://openai.com/news/rss.xml",
        "default_source": "OpenAI"
    },
    {
        "url": "https://huggingface.co/blog/feed.xml",
        "default_source": "Hugging Face"
    },
    {
        "url": "https://www.technologyreview.com/topic/artificial-intelligence/feed/",
        "default_source": "MIT Technology Review"
    },
    {
        "url": "https://blog.google/technology/ai/rss/",
        "default_source": "Google AI Blog"
    },
    {
        "url": "https://www.marktechpost.com/feed/",
        "default_source": "MarkTechPost"
    },
    {
        "url": "https://news.google.com/rss/search?q=Artificial+Intelligence&hl=en-US&gl=US&ceid=US:en",
        "default_source": "Google News"
    }
]

headers = {'User-Agent': 'Mozilla/5.0'}

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

# Helper to parse dates into datetime objects for sorting
def get_sort_date(news):
    raw = news.get("raw_date", "")
    if not raw:
        return datetime.min
    try:
        clean_date = re.sub(r'\s+[\+\-]\d{4}$', '', raw).strip()
        for fmt in ("%a, %d %b %Y %H:%M:%S %Z", "%a, %d %b %Y %H:%M:%S", "%Y-%m-%dT%H:%M:%SZ", "%Y-%m-%dT%H:%M:%S%z", "%Y-%m-%d"):
            try:
                return datetime.strptime(clean_date[:25].strip(), fmt)
            except ValueError:
                continue
    except Exception:
        pass
    return datetime.min

# Parse a single feed
def parse_feed(feed):
    url = feed["url"]
    default_source = feed["default_source"]
    print(f"Fetching {default_source} ({url})...")
    
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as response:
            xml_data = response.read()
    except Exception as e:
        print(f"Error fetching {default_source}: {e}")
        return []
        
    try:
        root = ET.fromstring(xml_data)
    except Exception as e:
        print(f"Error parsing XML from {default_source}: {e}")
        return []
        
    # Support both RSS (<item>) and Atom (<entry>) formats
    items = root.findall('.//item')
    if not items:
        # Try Atom namespace entry
        items = root.findall('.//{http://www.w3.org/2005/Atom}entry')
        if not items:
            # Namespace-agnostic element search
            items = [el for el in root.iter() if el.tag.endswith('entry') or el.tag.endswith('item')]
                
    results = []
    for item in items:
        # Extract title
        title_el = item.find('title')
        if title_el is None:
            title_el = next((el for el in item if el.tag.endswith('title')), None)
        title_full = title_el.text if title_el is not None else ""
        
        # Extract link
        link_el = item.find('link')
        if link_el is None:
            link_el = next((el for el in item if el.tag.endswith('link')), None)
        link = ""
        if link_el is not None:
            link = link_el.text or link_el.get('href') or ""
            
        # Extract date
        date_el = item.find('pubDate')
        if date_el is None:
            date_el = item.find('published')
        if date_el is None:
            date_el = item.find('updated')
        if date_el is None:
            date_el = next((el for el in item if el.tag.endswith('pubDate') or el.tag.endswith('published') or el.tag.endswith('updated')), None)
        pub_date_str = date_el.text if date_el is not None else ""
        
        # Extract description
        desc_el = item.find('description')
        if desc_el is None:
            desc_el = item.find('summary')
        if desc_el is None:
            desc_el = item.find('content')
        if desc_el is None:
            desc_el = next((el for el in item if el.tag.endswith('description') or el.tag.endswith('summary') or el.tag.endswith('content')), None)
        desc = desc_el.text if desc_el is not None else ""
        
        # Normalize source name & title (Google News formats titles as "Headline - Source")
        source = default_source
        title = title_full
        if default_source == "Google News" and " - " in title_full:
            parts = title_full.rsplit(" - ", 1)
            title = parts[0]
            source = parts[1]
            
        # Format Date nicely: e.g. "May 22, 2026"
        date_formatted = pub_date_str
        if pub_date_str:
            try:
                clean_date = re.sub(r'\s+[\+\-]\d{4}$', '', pub_date_str).strip()
                dt = None
                for fmt in ("%a, %d %b %Y %H:%M:%S %Z", "%a, %d %b %Y %H:%M:%S", "%Y-%m-%dT%H:%M:%SZ", "%Y-%m-%dT%H:%M:%S%z", "%Y-%m-%d"):
                    try:
                        dt = datetime.strptime(clean_date[:25].strip(), fmt)
                        break
                    except ValueError:
                        continue
                if dt:
                    date_formatted = dt.strftime("%B %d, %Y")
            except Exception:
                pass
                
        # Clean HTML tags and excessive spacing from summary descriptions
        desc = re.sub(r'<[^>]*>', '', desc or "")
        desc = re.sub(r'\s+', ' ', desc).strip()
        if not desc:
            desc = f"Latest updates from {source}."
            
        category = categorize(title, desc)
        
        results.append({
            "title": title,
            "category": category,
            "date": date_formatted,
            "org": source,
            "desc": desc[:200] + "..." if len(desc) > 200 else desc,
            "link": link,
            "raw_date": pub_date_str
        })
    return results

# Gather articles from all feeds
all_news = []
for feed in rss_feeds:
    all_news.extend(parse_feed(feed))

if not all_news:
    print("No news articles extracted from any feed.")
    exit(1)

# Sort by pubDate descending and take top 12 items
all_news.sort(key=get_sort_date, reverse=True)
top_news = all_news[:12]

# Format newsData as JS array string
js_array_str = "  const newsData = [\n"
for i, news in enumerate(top_news):
    # Remove raw_date key as it is only used for sorting
    news_clean = {k: v for k, v in news.items() if k != "raw_date"}
    comma = "," if i < len(top_news) - 1 else ""
    line = f"    {json.dumps(news_clean)}{comma}\n"
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
    print(f"Successfully updated app.js with the {len(top_news)} latest news items.")
else:
    print("Could not find NEWS_DATA_START and NEWS_DATA_END markers in app.js.")
    exit(1)
