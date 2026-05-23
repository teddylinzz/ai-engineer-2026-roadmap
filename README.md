# AI Engineer 2026 Preparation Portal 🚀

An interactive, premium, single-page web application designed for aspiring AI Engineers targeting roles at frontier research labs in 2026.

This portal provides a structured roadmap, interactive study checklists, curated resource directories, system-design & PyTorch interview prep, and learning widgets.

🌐 **Live Demo:** [https://ai-engineer-2026-roadmap.vercel.app/](https://ai-engineer-2026-roadmap.vercel.app/)

---

## 🌟 Key Features

### 1. 📅 Interactive Phase-by-Phase Roadmap
- **6 Chronological Phases**: Covering Foundations (Math/PyTorch/Python OOP), LLM Deep Dives (Attention/Tokenizers), RAG Architecture, Agentic AI, Fine-Tuning & Alignment, and Production LLMOps.
- **Dynamic Checklists**: Track your progress in real-time. Checklists automatically save state via `localStorage` to persist across sessions.

### 2. 📚 Curated Materials Directory
- **20+ Expert Resources**: Curated collection of books, research papers, documentation hubs, and online courses.
- **Categorized and Filterable**: Quickly filter by category (e.g., Foundations, LLMs, Safety, serving scale) or difficulty (Beginner, Intermediate, Advanced).

### 3. 💬 Mock Interview Simulator
- **Lab-Level Questions**: Questions specifically focused on Coding & PyTorch, LLM Architecture, System Design, and Alignment Safety.
- **Interactive Model Answers**: Toggleable model answers complete with structured code implementations (e.g., Scaled Dot-Product Attention, AMP training loops) and design trade-offs.

### 4. 🧠 3D Active-Recall Flashcards
- **Interactive Cards**: Flashcards for crucial concepts like KV Caching, Rotary Positional Embeddings (RoPE), FlashAttention, Speculative Decoding, and Constitutional AI.
- **Flip and Score**: 3D rotation flip animation with mastery level marking ("Mastered" vs. "Need Practice") to identify weak areas.

### 5. 🛠️ Portfolio Project Generator
- **Idea Blueprint**: Select a focus area and difficulty to generate complete project specs.
- Includes concepts, architecture blueprints (via ASCII flowcharts), software stacks, and advanced engineering challenges.

### 6. 📰 Automated AI News & Industry Pulse
- **Live AI News Tab**: Keep up to date with the newest releases and updates from top AI researchers and entities.
- **Multi-Source Aggregation**: Integrates feeds from **OpenAI**, **Anthropic** (via RSSHub), **Hugging Face**, **MIT Technology Review**, **Google AI**, and **Google News RSS**.
- **Daily Cron Pipeline**: Powered by a GitHub Actions workflow that runs a Python update script (`update_news.py`) every midnight to fetch, parse, and commit the 12 latest news stories back to the repository.

---

## 🛠️ Technology Stack
- **Frontend**: Standard, semantic HTML5 structure.
- **Styling**: Pure CSS3 with a sleek glassmorphic theme, responsive layouts, and smooth 3D animations.
- **State & Logic**: Vanilla JavaScript with zero third-party dependencies, featuring local storage persistence.

---

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone git@github.com:teddylinzz/ai-engineer-2026-roadmap.git
cd ai-engineer-2026-roadmap
```

### 2. Run the application
You can run a local development server or open the `index.html` file directly in any modern browser:

**Using Python:**
```bash
python3 -m http.server 8080
# Open http://localhost:8080 in your browser
```

**Using Node.js:**
```bash
npx http-server -p 8080
# Open http://localhost:8080 in your browser
```

---

## 🤖 Credits
This application was created and developed entirely by the AI model **Gemini 3.5 Flash**.

