/* ==========================================
   AI Engineer 2026 Career Prep Portal Script
   ========================================== */

(function() {
  'use strict';

  // 1. DATABASE DEFINITIONS
  const roadmapData = [
    {
      id: "phase1",
      number: "Phase 1",
      title: "Math & Software Eng Foundations",
      duration: "4 - 6 Weeks",
      description: "Master the fundamental software engineering paradigms and numerical foundations required to handle matrix calculations and asynchronous network interactions.",
      checklist: [
        { id: "p1_1", title: "Advanced Python & OOP", desc: "Understand closures, decorators, dunder/magic methods, generators, and custom metaclasses." },
        { id: "p1_2", title: "Asynchronous Python (Asyncio)", desc: "Master coroutines, event loops, tasks, semaphore rate-limiting, and concurrent gathers for high-speed API workflows." },
        { id: "p1_3", title: "Linear Algebra & Calculus", desc: "Understand dot products, matrix transformations, eigenvalues, partial derivatives, and gradient vectors." },
        { id: "p1_4", title: "PyTorch Basics & Autograd", desc: "Build basic neural network layers, compute gradients using autograd, and write vectorized operations." }
      ]
    },
    {
      id: "phase2",
      number: "Phase 2",
      title: "Transformer Architecture & LLM Internals",
      duration: "6 - 8 Weeks",
      description: "Dive deep into the mathematical models that power modern large language models, starting from basic attention up to structural optimizations.",
      checklist: [
        { id: "p2_1", title: "Self-Attention Mechanism", desc: "Code query-key-value scaling and softmax attention equations from scratch in Python/PyTorch." },
        { id: "p2_2", title: "Byte Pair Encoding (BPE)", desc: "Understand subword tokenizers, vocab size trade-offs, and tokenizer-related logical bugs." },
        { id: "p2_3", title: "Autoregressive Decoding", desc: "Implement greedy search, temperature scaling, top-k, top-p (nucleus), and beam search decoding strategies." },
        { id: "p2_4", title: "Inference Optimizations", desc: "Learn the core concepts of KV Caching, Rotary Position Embeddings (RoPE), and FlashAttention layers." }
      ]
    },
    {
      id: "phase3",
      number: "Phase 3",
      title: "Retrieval-Augmented Generation (RAG)",
      duration: "5 - 7 Weeks",
      description: "Connect static models to dynamic, proprietary data systems. Master chunking, hybrid vector searches, and evaluation frameworks.",
      checklist: [
        { id: "p3_1", title: "Semantic Chunking Strategies", desc: "Implement sliding window, document hierarchy, and embedding-based semantic chunking divisions." },
        { id: "p3_2", title: "Vector Indexes (HNSW & PQ)", desc: "Understand Hierarchical Navigable Small World graphs, Product Quantization, and search latency trade-offs." },
        { id: "p3_3", title: "Hybrid Search & Reranking", desc: "Combine dense vectors with sparse token indexes (BM25) and use cross-encoder rerankers for retrieval optimization." },
        { id: "p3_4", title: "RAG Evaluation Metrics", desc: "Measure Faithfulness, Answer Relevance, and Context Recall using automated evaluation frameworks like Ragas." }
      ]
    },
    {
      id: "phase4",
      number: "Phase 4",
      title: "Stateful Agentic AI & Loops",
      duration: "6 - 8 Weeks",
      description: "Build autonomous applications that reason, call external APIs, self-correct, and collaborate in multi-agent networks.",
      checklist: [
        { id: "p4_1", title: "The ReAct Framework", desc: "Design reasoning loops enabling models to alternate between Thought, Action (tool execution), and Observation." },
        { id: "p4_2", title: "Structured Tool Protocols", desc: "Implement deterministic schema extraction (JSON Schema), function registries, and structured output formatting." },
        { id: "p4_3", title: "Multi-Agent Graphs", desc: "Build state machines with cycles and conditional routes using modern graphing engines like LangGraph." },
        { id: "p4_4", title: "Input/Output Guardrails", desc: "Implement system checks to detect prompt injection, restrict toxic outputs, and sanitize tool execution inputs." }
      ]
    },
    {
      id: "phase5",
      number: "Phase 5",
      title: "Fine-Tuning, Alignment & Safety",
      duration: "6 - 8 Weeks",
      description: "Learn how to specialize models for specific domains and align them with human values or strict safety parameters.",
      checklist: [
        { id: "p5_1", title: "Parameter-Efficient Tuning (LoRA)", desc: "Freeze core parameters and train low-rank weight update matrices to fine-tune models efficiently." },
        { id: "p5_2", title: "Direct Preference Optimization", desc: "Contrast DPO against traditional RLHF (PPO). Write scripts to directly tune probability distributions." },
        { id: "p5_3", title: "Constitutional AI & alignment", desc: "Study Anthropic's methodology of supervising critiques and revisions via a set of rules (constitution)." },
        { id: "p5_4", title: "Preparedness & Safety Audits", desc: "Understand OpenAI's risk frameworks regarding cybersecurity, CBRN hazards, and model autonomy thresholds." }
      ]
    },
    {
      id: "phase6",
      number: "Phase 6",
      title: "LLMOps & High-Throughput serving",
      duration: "4 - 6 Weeks",
      description: "Scale models to serve millions of requests. Master memory layouts, quantization types, and observability setups.",
      checklist: [
        { id: "p6_1", title: "PagedAttention & vLLM", desc: "Set up high-throughput serving systems that solve KV Cache fragmentation and handle bulk requests." },
        { id: "p6_2", title: "Model Quantization (AWQ/GGUF)", desc: "Quantize FP16 models to INT8/INT4 using AWQ/GPTQ for cloud, or GGUF formats for edge processing." },
        { id: "p6_3", title: "Semantic Caching & Rate-Limiting", desc: "Configure caching systems to avoid redundant LLM executions, and protect APIs with token-bucket limiters." },
        { id: "p6_4", title: "Inference Observability", desc: "Log system metrics, trace agent actions, and monitor token usage and cost distributions using observability hubs." }
      ]
    }
  ];

  const resourcesData = [
    // Foundations
    { title: "Neural Networks: Zero to Hero", category: "Foundations", difficulty: "Beginner", type: "Course", link: "https://karpathy.ai/zero-to-hero.html", org: "Andrej Karpathy", desc: "A masterclass playlist building micrograd, makemore, and a complete GPT from scratch in PyTorch." },
    { title: "Fluent Python (2nd Edition)", category: "Foundations", difficulty: "Advanced", type: "Book", link: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/", org: "Luciano Ramalho", desc: "Essential reading to master advanced Python paradigms, async task execution, and generator functions." },
    { title: "Deep Learning with PyTorch (60 min Blitz)", category: "Foundations", difficulty: "Beginner", type: "Docs", link: "https://pytorch.org/tutorials/beginner/deep_learning_60min_blitz.html", org: "PyTorch Team", desc: "The official fast-paced tutorial for understanding tensors, autograd computation, and basic training loops." },
    { title: "Stanford CS229 Linear Algebra Review", category: "Foundations", difficulty: "Intermediate", type: "Paper", link: "https://cs229.stanford.edu/section/cs229-linalg.pdf", org: "Stanford University", desc: "Rigorous math review of matrix operations, eigenvalues, singular value decompositions, and gradients." },

    // LLM Deep Dive
    { title: "Attention Is All You Need", category: "LLM Deep Dive", difficulty: "Advanced", type: "Paper", link: "https://arxiv.org/abs/1706.03762", org: "Google Research", desc: "The legendary foundational paper introducing the Transformer, self-attention, and multi-head layer architectures." },
    { title: "The Illustrated Transformer", category: "LLM Deep Dive", difficulty: "Beginner", type: "Article", link: "https://jalammar.github.io/illustrated-transformer/", org: "Jay Alammar", desc: "Visual, highly intuitive breakdown of multi-head attention, vectors, and positional values." },
    { title: "FlashAttention-1 & 2 Papers", category: "LLM Deep Dive", difficulty: "Advanced", type: "Paper", link: "https://arxiv.org/abs/2205.14135", org: "Tri Dao et al.", desc: "Breakthrough research on optimizing attention layer computation speed and memory access patterns on GPUs." },
    { title: "Hugging Face Tokenizers Guide", category: "LLM Deep Dive", difficulty: "Intermediate", type: "Docs", link: "https://huggingface.co/docs/tokenizers/index", org: "Hugging Face", desc: "Deep dive into BPE, WordPiece, subword vocabularies, and tokenization performance metrics." },

    // RAG
    { title: "LlamaIndex Production RAG Guide", category: "RAG", difficulty: "Intermediate", type: "Docs", link: "https://docs.llamaindex.ai/", org: "LlamaIndex Team", desc: "Advanced documentation covering hierarchical node parsing, metadata filtering, and semantic search routing." },
    { title: "Pinecone Vector Learning Center", category: "RAG", difficulty: "Beginner", type: "Article", link: "https://www.pinecone.io/learn/", org: "Pinecone Team", desc: "Clear explanations of vector databases, distance metrics, HNSW graph structures, and semantic search." },
    { title: "Ragas Evaluation Framework", category: "RAG", difficulty: "Advanced", type: "GitHub", link: "https://docs.ragas.io/", org: "Exploding Gradients", desc: "Open-source framework to evaluate RAG pipelines using metrics like faithfulness, answer relevance, and context precision." },

    // Agents
    { title: "ReAct: Synergizing Reasoning & Acting", category: "Agents", difficulty: "Advanced", type: "Paper", link: "https://arxiv.org/abs/2210.03629", org: "Yao et al.", desc: "Foundational paper detailing the ReAct loop structure where LLMs alternate thoughts and tool executions." },
    { title: "LangGraph Tutorials", category: "Agents", difficulty: "Intermediate", type: "Docs", link: "https://langchain-ai.github.io/langgraph/", org: "LangChain", desc: "Tutorials on building stateful, multi-actor applications with graph loops, error correction, and manual validation." },
    { title: "PydanticAI Documentation", category: "Agents", difficulty: "Intermediate", type: "Docs", link: "https://ai.pydantic.dev/", org: "Pydantic Team", desc: "Official guides on creating type-safe agents with structured responses and schema validation built-in." },
    { title: "Hermes Agent", category: "Agents", difficulty: "Advanced", type: "GitHub", link: "https://github.com/nousresearch/hermes-agent", org: "Nous Research", desc: "An open-source agent framework optimized for Hermes models, supporting robust local function-calling and structured tool schemas." },
    { title: "OpenClaw", category: "Agents", difficulty: "Intermediate", type: "GitHub", link: "https://github.com/openclaw/openclaw", org: "OpenClaw Team", desc: "An open-source orchestration framework and web UI designed to replicate Anthropic's Claude agent capabilities for tool-use loops." },

    // Fine-Tuning & Safety
    { title: "LoRA: Low-Rank Adaptation of LLMs", category: "Fine-Tuning & Safety", difficulty: "Advanced", type: "Paper", link: "https://arxiv.org/abs/2106.09685", org: "Microsoft Research", desc: "The landmark paper on parameter-efficient fine-tuning (PEFT) using low-rank decomposition updates." },
    { title: "Direct Preference Optimization (DPO)", category: "Fine-Tuning & Safety", difficulty: "Advanced", type: "Paper", link: "https://arxiv.org/abs/2305.18290", org: "Stanford University", desc: "Innovative approach to aligning LLMs directly on human preferences without training a reward model first." },
    { title: "Constitutional AI Alignment", category: "Fine-Tuning & Safety", difficulty: "Advanced", type: "Paper", link: "https://arxiv.org/abs/2212.08073", org: "Anthropic Research", desc: "Detailing Anthropic's mechanism of training models using a written constitution to guide critique loops." },
    { title: "OpenAI Safety & Preparedness Guidelines", category: "Fine-Tuning & Safety", difficulty: "Intermediate", type: "Docs", link: "https://openai.com/safety", org: "OpenAI", desc: "Outlines OpenAI's methodology for auditing high-risk models across cybersecurity and autonomous scaling." },

    // LLMOps & serving
    { title: "vLLM High-Throughput serving Engine", category: "LLMOps & serving", difficulty: "Advanced", type: "GitHub", link: "https://github.com/vllm-project/vllm", org: "UC Berkeley", desc: "An open-source library utilizing PagedAttention to serve LLM requests efficiently with minimal KV Cache fragmentation." },
    { title: "Hugging Face Quantization Guide", category: "LLMOps & serving", difficulty: "Intermediate", type: "Docs", link: "https://huggingface.co/docs/transformers/main_classes/quantization", org: "Hugging Face", desc: "Detailed guide on AWQ, GPTQ, and bitsandbytes setups to run compressed models with minor precision loss." },

    // Cookbooks
    { title: "OpenAI Cookbook", category: "Cookbooks", difficulty: "Intermediate", type: "GitHub", link: "https://github.com/openai/openai-cookbook", org: "OpenAI", desc: "Official collection of interactive notebooks and examples for prompt engineering, embeddings, and API usage." },
    { title: "Anthropic Claude Cookbook", category: "Cookbooks", difficulty: "Intermediate", type: "GitHub", link: "https://github.com/anthropics/anthropic-cookbook", org: "Anthropic", desc: "Practical guides and code recipes for optimizing Claude prompts, structural XML parsing, and tool routing." },
    { title: "Google Gemini Cookbook", category: "Cookbooks", difficulty: "Intermediate", type: "GitHub", link: "https://github.com/google-gemini/cookbook", org: "Google AI", desc: "Developer cookbook featuring guides for multimodal video processing, context caching, and native code execution APIs." }
  ];

  const mockQuestionsData = [
    {
      id: "mq1",
      category: "coding",
      labs: ["OpenAI", "Anthropic"],
      title: "Implement Scaled Dot-Product Attention in PyTorch",
      question: "Write a PyTorch function that computes scaled dot-product attention given tensors Q, K, and V. Support an optional mask tensor. Explain the spatial and time complexity.",
      answer: "<h4>Model Answer & Implementation</h4>\n<p>Scaled dot-product attention is calculated as:</p>\n<p style='text-align:center;'><code>Attention(Q, K, V) = Softmax( (Q Kᵀ) / √d_k ) V</code></p>\n<div class='code-block-wrapper'>\n<code>import torch\nimport torch.nn as nn\nimport math\n\ndef scaled_dot_product_attention(Q, K, V, mask=None):\n    # Q, K, V shapes: [batch_size, num_heads, seq_len, d_k]\n    d_k = Q.size(-1)\n    \n    # Compute raw attention scores (matmul of Q and K transposed)\n    # Shape: [batch_size, num_heads, seq_len, seq_len]\n    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)\n    \n    # Apply causal or padding mask if provided\n    if mask is not None:\n        # Fill masked positions with negative infinity so softmax forces them to 0\n        scores = scores.masked_fill(mask == 0, -1e9)\n        \n    # Compute softmax attention weights\n    attn_weights = torch.softmax(scores, dim=-1)\n    \n    # Compute weighted sum of values\n    # Shape: [batch_size, num_heads, seq_len, d_v]\n    output = torch.matmul(attn_weights, V)\n    \n    return output, attn_weights</code>\n</div>\n<h4>Complexity Analysis:</h4>\n<ul>\n  <li><strong>Time Complexity:</strong> O(N² · d_k) where N is sequence length. The matrix multiplication <code>Q @ Kᵀ</code> requires multiplying an (N x d) matrix by a (d x N) matrix, resulting in N² operations.</li>\n  <li><strong>Space Complexity:</strong> O(N²) to store the attention score matrix prior to multiplying by V. This quadratic memory footprint is the primary bottleneck of standard Transformers, which techniques like FlashAttention address by computing softmax block-by-block in GPU SRAM.</li>\n</ul>"
    },
    {
      id: "mq2",
      category: "architecture",
      labs: ["OpenAI", "Google AI"],
      title: "KV Cache Space Complexity & Math during Inference",
      question: "Explain how the KV Cache speeds up inference. Deduce the exact space complexity formula to store the KV Cache for a Llama-3-8B model under a batch size of 8 and sequence length of 2048 in FP16 precision.",
      answer: "<h4>Model Answer & Analysis</h4>\n<p>During autoregressive decoding, the model generates one token at a time. Without caching, the attention layers must recompute key and value vectors for all historical tokens at every single generation step, resulting in O(N²) computation. The <strong>KV Cache</strong> stores these computed Key and Value vectors in GPU memory, reducing the computation per step to O(N).</p>\n\n<h4>Space Complexity Calculation:</h4>\n<p>The memory size of the KV cache is determined by:</p>\n<p style='text-align:center;'><code>Memory (bytes) = 2 · B · L · H · D · P</code></p>\n<p>Where:</p>\n<ul>\n  <li><code>2</code>: Represents separate caches for Keys and Values.</li>\n  <li><code>B</code>: Batch size (8).</li>\n  <li><code>L</code>: Number of transformer layers. (For Llama 3 8B, <code>L = 32</code>).</li>\n  <li><code>H</code>: Number of Key/Value attention heads. Note that Llama 3 uses <strong>Grouped-Query Attention (GQA)</strong> where the number of KV heads is 8, while query heads is 32. So <code>H_kv = 8</code>.</li>\n  <li><code>D</code>: Dimension size of each head (For Llama 3 8B, <code>D = 128</code>).</li>\n  <li><code>P</code>: Precision bytes. For FP16, <code>P = 2</code> bytes.</li>\n  <li><code>seq_len</code>: Sequence context length (2048).</li>\n</ul>\n<p>Plugging in the Llama 3 8B numbers:</p>\n<p style='font-family: monospace; background:#000; padding:10px; border-radius:5px;'>Bytes = 2 * 8 * 32 * 8 * 128 * 2 * 2048 = 2,147,483,648 bytes = 2.15 GB</p>\n<p><strong>Significance:</strong> Under FP16 precision, the KV Cache requires 2.15 GB of VRAM. As sequence lengths scale (e.g. 100K+ tokens), KV Cache size quickly exceeds model weight size, necessitating techniques like <em>PagedAttention</em> (used in vLLM) to optimize memory fragmentation.</p>"
    },
    {
      id: "mq3",
      category: "sysdesign",
      labs: ["OpenAI", "Anthropic", "Google AI"],
      title: "Design a Low-Latency Document RAG Platform for 10M Users",
      question: "Design a search-and-chat backend that serves 10 million active users asking questions over millions of company PDFs. Latency budget is under 1.5 seconds. What is your vector index architecture, caching, and serving stack?",
      answer: "<h4>Model Answer & System Design</h4>\n<p>To serve 10M active users with an end-to-end latency budget of &lt;1.5 seconds, we must build a decoupled, scalable system:</p>\n\n<ol>\n  <li><strong>Ingestion Pipeline (Asynchronous):</strong>\n    <ul>\n      <li>Extract text using high-speed parsers; segment text using <em>Recursive Character Text Splitter</em> (chunk size 512, overlap 64).</li>\n      <li>Compute embeddings using a lightweight model (e.g., <code>text-embedding-3-small</code>) in bulk.</li>\n      <li>Insert embeddings into a vector database (e.g. Qdrant or Milvus) using an <strong>HNSW index</strong> (M=16, efConstruction=200) for fast retrieval speed.</li>\n    </ul>\n  </li>\n  <li><strong>Query/Retrieval Pipeline (&lt;200ms budget):</strong>\n    <ul>\n      <li>Embed incoming query. Perform a hybrid search: Dense search (cosine similarity on embeddings) + Sparse search (BM25 for keyword hits).</li>\n      <li>Run top-100 results through a fast cross-encoder rerank model (e.g. BGE-Reranker) to select the top-5 highly relevant chunks.</li>\n    </ul>\n  </li>\n  <li><strong>Caching Layer (&lt;50ms budget):</strong>\n    <ul>\n      <li>Implement a <strong>Semantic Cache</strong> (using Redis / GPTCache). If a query embedding has <code>cos_sim &gt; 0.96</code> with a previous query, return the cached text answer directly without running LLM generation.</li>\n    </ul>\n  </li>\n  <li><strong>LLM Generation serving (&lt;1000ms budget):</strong>\n    <ul>\n      <li>Use a high-throughput engine like **vLLM** hosting Llama-3-70B-Instruct quantized to AWQ 4-bit.</li>\n      <li>Enable **Streaming outputs** so the user receives the first token in &lt;200ms.</li>\n      <li>Configure **Speculative Decoding** (using a Llama-3-8B model to generate draft tokens rapidly) to speed up decoding speeds by 1.8x.</li>\n    </ul>\n  </li>\n</ol>\n\n<h4>Key Engineering Trade-off:</h4>\n<p>We choose HNSW over flat-index search because HNSW provides logarithmic search time O(log N) compared to O(N), sacrificing minor retrieval accuracy to ensure low latency under high concurrency loads.</p>"
    },
    {
      id: "mq4",
      category: "safety",
      labs: ["Anthropic"],
      title: "Explain Constitutional AI and how it works during training",
      question: "Explain the Constitutional AI training process pioneered by Anthropic. How does it differ from standard RLHF, and what are its core phases?",
      answer: "<h4>Model Answer & Technical Explanation</h4>\n<p><strong>Constitutional AI (CAI)</strong> is an alignment framework designed to train language models to be helpful and harmless without requiring humans to review and rate thousands of toxic outputs. Instead of humans labeling outputs, the model uses a written set of principles (a <strong>Constitution</strong>) to critique and align its own behaviors.</p>\n\n<h4>The Two Key Phases:</h4>\n<ol>\n  <li><strong>Supervised Learning Phase (Self-Critique):</strong>\n    <ul>\n      <li>The model is prompted to generate responses to harmful prompts (e.g., 'How do I hack a router?'). These initial responses may be toxic or helpful to malicious actions.</li>\n      <li>The model is then prompted to critique its own response based on a specific constitution principle (e.g., 'Review your response and modify it to be safe, ethical, and helpful').</li>\n      <li>The model rewrites its response. This forms a set of safe target responses. The base model is fine-tuned on these self-corrected targets.</li>\n    </ul>\n  </li>\n  <li><strong>Reinforcement Learning Phase (AI Feedback - RLAIF):</strong>\n    <ul>\n      <li>Instead of humans scoring two candidate responses to train a reward model, a model is shown two alternative outputs and asked: 'Which response is better based on the constitution principles?'</li>\n      <li>The model's classification logs generate a dataset of preferences. A **Reward Model (RM)** is trained on this AI-labeled preference dataset.</li>\n      <li>Finally, the model is trained using reinforcement learning (DPO or PPO) against this AI-trained reward model.</li>\n    </ul>\n  </li>\n</ol>\n\n<h4>Core Advantages over RLHF:</h4>\n<ul>\n  <li><strong>Scalability:</strong> Significantly cheaper and faster than recruiting crowdsourced human raters.</li>\n  <li><strong>Explainability:</strong> Alignment is governed by transparent constitutional clauses rather than the implicit biases of varied human raters.</li>\n  <li><strong>Safety Stability:</strong> Makes the model less prone to sycophancy (agreeing with users just to score high ratings).</li>\n</ul>"
    },
    {
      id: "mq5",
      category: "coding",
      labs: ["Google AI"],
      title: "Write a PyTorch Training Loop with Mixed-Precision (AMP)",
      question: "Implement a robust PyTorch training loop incorporating Automated Mixed Precision (AMP), gradient clipping, and dynamic learning rate scheduler updates.",
      answer: "<h4>Model Answer & Implementation</h4>\n<p>Automated Mixed Precision (AMP) uses FP16 for operations that are numerically stable (like matmuls) while keeping critical sums in FP32. This doubles throughput and saves VRAM on modern NVIDIA GPUs.</p>\n<div class='code-block-wrapper'>\n<code>import torch\nfrom torch.cuda.amp import autocast, GradScaler\n\ndef train_one_epoch(model, dataloader, optimizer, scheduler, device, max_grad_norm=1.0):\n    model.train()\n    # GradScaler manages loss scaling to prevent FP16 underflow issues\n    scaler = GradScaler()\n    total_loss = 0.0\n    \n    for batch_idx, (inputs, targets) in enumerate(dataloader):\n        inputs, targets = inputs.to(device), targets.to(device)\n        optimizer.zero_grad()\n        \n        # autocast handles automatic precision conversion within this scope\n        with autocast():\n            outputs = model(inputs)\n            loss = criterion(outputs, targets)\n            \n        # Scale loss to prevent gradients from underflowing to 0 in FP16\n        scaler.scale(loss).backward()\n        \n        # Unscale gradients prior to clipping\n        scaler.unscale_(optimizer)\n        \n        # Clip gradients to prevent gradient explosion\n        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=max_grad_norm)\n        \n        # Step optimizer and update scale factor\n        scaler.step(optimizer)\n        scaler.update()\n        \n        # Update learning rate scheduler\n        scheduler.step()\n        \n        total_loss += loss.item()\n        \n    return total_loss / len(dataloader)</code>\n</div>\n<p><strong>Note:</strong> Under FP16 precision, tiny gradient values can underflow to 0. <code>GradScaler</code> solves this by multiplying losses by a large scale factor before backprop, and dividing gradients back before they update weights.</p>"
    }
  ];

  const flashcardsData = [
    { category: "LLM Architecture", front: "KV Caching", back: "Saves computed Key and Value vectors of past tokens during autoregressive token generation. This avoids redundant matrix multiplications and shifts time complexity per token from O(N²) to O(N)." },
    { category: "LLM Architecture", front: "Rotary Position Embeddings (RoPE)", back: "An encoding technique that multiplies key and query vectors by a rotation matrix, injecting relative position information. Used in Llama models because of its stable extrapolation to long sequence lengths." },
    { category: "LLM Optimization", front: "FlashAttention", back: "An algorithm that speeds up attention computation by computing softmax blocks incrementally in GPU SRAM (cache) rather than writing the entire intermediate N x N attention matrix to HBM (VRAM). Saves memory and bandwidth." },
    { category: "LLM Optimization", front: "Speculative Decoding", back: "Speeds up token generation by running a small, fast 'draft' model to guess several tokens, then checking them simultaneously in a single forward pass of the large target model. Increases throughput with zero accuracy loss." },
    { category: "Alignment & Safety", front: "Direct Preference Optimization (DPO)", back: "A mathematical shortcut that replaces RLHF. Shows that the RL training objective can be solved directly by optimizing a loss function over preference pairs (A vs B) using the reference model weights, eliminating the need to train a separate reward model." },
    { category: "Alignment & Safety", front: "Constitutional AI", back: "Anthropic's safety system where models align themselves. It uses critiques guided by a written 'constitution' to rewrite toxic outputs, and generates preference datasets labeled by AI feedback (RLAIF) to train reward modules." },
    { category: "LLM serving", front: "PagedAttention", back: "A memory management method (used in vLLM) inspired by virtual memory paging in OS. It splits the KV Cache into small, non-contiguous memory blocks, eliminating VRAM fragmentation and allowing multiple concurrent queries to share cache cells." },
    { category: "Model Quantization", front: "AWQ (Activation-aware Quantization)", back: "A quantization method that compresses model weights (to 4-bit) by protecting the top 1% 'salient' weights that carry most of the features, while compressing remaining parameters, keeping model accuracy high while reducing memory footprints." },
    { category: "RAG & Retrieval", front: "Cross-Encoder Reranker", back: "A model that processes both the query and document together to compute a deep similarity score. It is much more accurate than embedding cosine similarity (bi-encoders) but slower, so it is used as a secondary step to rank retrieved documents." },
    { category: "RAG & Retrieval", front: "Hybrid Search", desc: "Dense + Sparse search", back: "Combines semantic vector search (which captures conceptual meaning) with classic sparse keyword search (like BM25, which matches exact names/serial numbers). Improves retrieval coverage." },
    { category: "LLM Optimization", front: "Chinchilla Scaling Laws", back: "Empirical laws stating that compute-optimal LLM training requires scaling parameters and token quantities in equal proportions. For optimal cost, a model should have about 20 tokens of training data per parameter." },
    { category: "Foundations", front: "Gradient Clipping", back: "A safety technique that clamps gradient updates to a maximum value if their norm exceeds a threshold. Prevents extreme weight updates ('gradient explosion') that cause training runs to crash or diverge." }
  ];

  // NEWS_DATA_START
  const newsData = [
    {"title": "Asian shares slip after another sell-off of AI stocks on Wall St, while oil prices rise", "category": "Models", "date": "June 11, 2026", "org": "WSLS", "desc": "Asian shares slip after another sell-off of AI stocks on Wall St, while oil prices rise&nbsp;&nbsp;WSLS", "link": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPdVVOekFPU2VqNHNNb21OT2laVkRpWVIyQmNFR3Q5a3ZSbndhbS1Kd1VJX0dKUUZuUVR5bjN3a2JBb1pNdk9ZM01iTTNGUHB0NXdSd1V6Y0JhZGxmajZMSUdtWkZwcEVOaUg2NWh5cUVNaHpfOWdxbjFYNHh3QzN1VDNHVXZ2aDFsMXhMZzZudkk5NHFRRzBFSWpZME1YR2NWUDM5UTNCWnRDTV9kUzRQOUVma0FIazB5SFY3dmdkeTFRR01uR3dN?oc=5"},
    {"title": "2 Bargain Artificial Intelligence (AI) Stocks to Buy Now Down Around 25% From Their All-Time Highs", "category": "Models", "date": "June 11, 2026", "org": "The Globe and Mail", "desc": "2 Bargain Artificial Intelligence (AI) Stocks to Buy Now Down Around 25% From Their All-Time Highs&nbsp;&nbsp;The Globe and Mail", "link": "https://news.google.com/rss/articles/CBMihAJBVV95cUxONDZpMjdOeWVCOFhTNFQ3Wmk0cnVVTC02Q3g2TGc0bHd3TzNDZjFHcnNnSWZiR2M5bzVqdkhTWVg2aFoxbFJ1UGNFcUJWb1hFdmdneWRJSThKbVozRUdXeFdIYU80UzlHNGtiZ3hHMnpYR0dGZFZhTGkwOVhHc3lmMFRSUnQ3MzVlWThhT1lJWWYybHFxYk5Mek10Qm0xRnVjeDB1b0ZTVGplWTg1dEtLRjloaFhyaVE0RGZTVlNjcXdRdGs1OFUyeWlFOVI4M1d2azhIVE93MDlzWjUwei1nOTc3VmhOMGFjMmE2eE1QMnY4Sy04STJhendPQy1WVzRHRDd6Vg?oc=5"},
    {"title": "How frontier teams are reinventing AI-native development", "category": "Models", "date": "June 11, 2026", "org": "Amazon Web Services (AWS)", "desc": "How frontier teams are reinventing AI-native development&nbsp;&nbsp;Amazon Web Services (AWS)", "link": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQcVJURHFsMTlVSHY5RDR1bnBYZWdWNDR4aVMyV2xHS0hCRmJwS0l3NEsyejFiZGN3MFZLbmJ6QWExWm9MNlNtMUN4LVVKVGl1V3dJeTZqM2M0bE55T2hPZk9mYWNkaEloTTlDdUxIbTZ2OWs4VkZhb1FsSlB1dEVTQ0pXYXJSQ0laNXVwX1I2RFNOWEd0N2VpNDhSRFREbjhDQ2ZjYjBB?oc=5"},
    {"title": "2 Bargain Artificial Intelligence (AI) Stocks to Buy Now Down Around 25% From Their All-Time Highs", "category": "Models", "date": "June 11, 2026", "org": "The Motley Fool", "desc": "2 Bargain Artificial Intelligence (AI) Stocks to Buy Now Down Around 25% From Their All-Time Highs&nbsp;&nbsp;The Motley Fool", "link": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNOFRiRC15TFY4QVNIQUdZOWR3RFVmcDZwdWpIWGhDWTFMR0otcWI1QW5ZbjI4WVdleGF2cUdNbEt1bHVITnlia05QeGx5RS12VWRncjB5bjFqTzMybXBDMUNuN2x0V3pKYnRzYjVBRFk2WHpEUzF1UWFvV3loc2M1WU04QzRnV1prOVBiQkl1cTZfblA4RDJ5Tg?oc=5"},
    {"title": "53% of Americans fear AI could take their jobs, poll finds", "category": "Models", "date": "June 11, 2026", "org": "USA Today", "desc": "53% of Americans fear AI could take their jobs, poll finds&nbsp;&nbsp;USA Today", "link": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNVDl6QTh6LUVTTXNVMDdsSm1rRjlQWHpJbnlPYVd5bUU3OXN0TEQtb3BWOGx1Skh4em40Y0J4SEdHUUJ1Y1VqWTc3Ry00dEExVGpDOFRXUmtXUGZsVWdiV2VCQzdJVnJXLXNKb3J6SDhac0FGelVNUzhvYk5BTF9YNDBaLWRmeFd2eUlwZEI5SEE1d1ZOeFgxMlBR?oc=5"},
    {"title": "What Do Teachers Really Think of AI in the Classroom?", "category": "Models", "date": "June 11, 2026", "org": "The Good Men Project", "desc": "What Do Teachers Really Think of AI in the Classroom?&nbsp;&nbsp;The Good Men Project", "link": "https://news.google.com/rss/articles/CBMingFBVV95cUxNdlFMOFBkRWJaZ19WckcyWktBM0c0LUxjZElVTGttRk1ibm9mbzNYaTQ2Zkp2VVNrWklTOXRZbEFXNEk0bFNRQ2RtUnIybzNaU1ZTOUpNY1VRSjFlQ2RDaV9lMTJOR1ZaNHVWUWhDenplbDh2Z3RPeDdGV09mUFQ0bldPOXgyX3ZaV2M2a0FhdV8yelBCMEFrMjJWLTBEdw?oc=5"},
    {"title": "Babel, Jerusalem and the challenge of artificial intelligence", "category": "Models", "date": "June 11, 2026", "org": "The Catholic Weekly", "desc": "Babel, Jerusalem and the challenge of artificial intelligence&nbsp;&nbsp;The Catholic Weekly", "link": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPaGdjTEJncVVLS1BYVG9pVHA2VDZrV3JtQTJIMHhrTmVtUnUxWUlqSmRjMVBVY3gydkxKX0VDYXJTeUdsM0dPS3lpZVhUM24tUy1QTzdVY0tyVlJ0MHRqQkFZQ0hGM1RRWXNFbi1CWFp5RXU4QkpFTmNXaDlLcUJRd2dEMnlETlRGQUlKRkl2NXdzeDdyVHc?oc=5"},
    {"title": "How an astrophysicist uses Codex to help simulate black holes", "category": "Models", "date": "June 11, 2026", "org": "OpenAI", "desc": "Discover how astrophysicist Chi-kwan Chan uses Codex to build black hole simulations, helping scientists study extreme physics and test Einstein\u2019s theory of general relativity.", "link": "https://openai.com/index/using-codex-to-simulate-black-holes"},
    {"title": "WATCH LIVE: Senate Banking Committee holds hearing on artificial intelligence", "category": "Industry & Safety", "date": "June 10, 2026", "org": "PBS", "desc": "WATCH LIVE: Senate Banking Committee holds hearing on artificial intelligence&nbsp;&nbsp;PBS", "link": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNZGVkaUpkQ0pMamJlaWtTODZ5dG9MaDNITWh0QWJkaDBNVHRtaE5XRm4tQU9iY1JmVEl0bmo0NkZXVFB6OW10NlJQVzVtbERDLW16TU9BNU13MERKVU1rbGdfajZBcDZmWFBRWnJ3QlB5UTl6TzJiQ2tnN0NyN3A1LVA4MTU5Y1dtdE1CeU5ZbFJ4aFA1dTFleERURGowbUpRNFpsd1ZnS0FxOU1PRXNGekJUSUzSAboBQVVfeXFMT2d4VFBVS0pLdnNydmJXcnlvdWhmd3UydkpIWWw3SzZ2cnRNMmk1T1pfbkpwdVVXX05Qa3dnT2wyYzdzS2pIcmFhZGNuUkV4aDZ6NEFpWnlpOFlBVjA2M0diVmJwbm82aXFCU2d1VnU0c0dkRUxIdjc1V2dQNGxtdVdNVGNKY1J3REZKZDJNdEl6OURMMy1vZERpYUdvOGF2WjNyZmt3SDFwMmJ3NEVzcjY3eEFUeTlrYXpR?oc=5"},
    {"title": "Utah man says he can't get customer service from Apple because artificial intelligence is calling the shots", "category": "Models", "date": "June 10, 2026", "org": "KSL News", "desc": "Utah man says he can't get customer service from Apple because artificial intelligence is calling the shots&nbsp;&nbsp;KSL News", "link": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxPYmx1SU1zTng2RGJCd1RWNVJ0Uk8wLXBESWJONTN1UUxJeF9yX3ZEeGJLV2JDQXR3SUo2cWdIUEZPYWZJNGZhTDRkUEJJekdNbGJfSE1wYnJOWlZDR1BJRmM2a1NJQlVPMTlTLWlhRGlWQ2xvRFl1dnFDeldhRnFZVHd1UjRPakFRSWhaLV82ZThZUGlKdzY0Zk1EN1RQbld6Y0x2QVFSd3IyZE5pbkQ2THFMbEVENGZHWjFsLWJxaHdub3JEZTBIUXhZVXFsT2QwM3BLU2FrRm1hMXZRRDVoUjhEcjVWamRZU0FpOHJn?oc=5"},
    {"title": "Jensen Huang Thinks the Artificial Intelligence (AI) Memory Boom Is Impossible to Ignore. Here's My Top Pick That No One Is Talking About.", "category": "Models", "date": "June 10, 2026", "org": "AOL.com", "desc": "Jensen Huang Thinks the Artificial Intelligence (AI) Memory Boom Is Impossible to Ignore. Here's My Top Pick That No One Is Talking About.&nbsp;&nbsp;AOL.com", "link": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNRHY2TU1OX2RyMllQNHdDNm9Yb0tCNGdnZGtnZjFTRGdLT0hvbDhORXpJZ0hGOG1LZWhJZU1aQmloQWEwb2VOSHI4YVZsXzgwOFp2Ujh5TnVIU3kzWllfaHVHa2MyWGlOdjhIaTJfU2l3QjFYdkJIWjgtaHppQ25WWElocVc4REdGTU0zNHprSDU?oc=5"},
    {"title": "AI directive focuses patching efforts on \u2018highest risk\u2019 vulnerabilities", "category": "Models", "date": "June 10, 2026", "org": "Federal News Network", "desc": "AI directive focuses patching efforts on \u2018highest risk\u2019 vulnerabilities&nbsp;&nbsp;Federal News Network", "link": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNQzRLblVnTjJReThjZFpLUUNpRTFwMVI1TkVIZmJlYUV6eExEZGpqQU1wM2dUbFNaZ0NEYjlTNFlkclMxaGp2bzlwWlNIRTlDd0FDR0tpaHhfeWFyWFBVaUhVekFwNVdubGU1ejRqckNVWF9XQ3hjb2JEX3BMMkFwNFhtRnkwYkViOTk1U3JadmJTbmZiOVpHeTBYemh2c1VDU3d5WEZsNFR2clB0YTZLRHRNYzAyMFowbnhYMlFOVy0?oc=5"},
    {"title": "Judge Punishes 4 Lawyers After Catching Both Sides Using A.I. in Lawsuit", "category": "Industry & Safety", "date": "June 10, 2026", "org": "The New York Times", "desc": "Judge Punishes 4 Lawyers After Catching Both Sides Using A.I. in Lawsuit&nbsp;&nbsp;The New York Times", "link": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQMTNuQVo3aGo1WDN3ZGptTEFNSWdlX3QxYTlWVlpzZXZJZHVwYWhrVGFlZThUUjVueVZpZTB1YUg1cHZRN1hFaVpGcFFxTzdnTEFsajhCOXI2Nl9MS1B6TWI1QUhwOUVNN19XaDV5SlY0cmp6RGFxVGRLeXNoT1FkTi1B?oc=5"},
    {"title": "Will Artificial Intelligence Replace Therapy for Addiction?", "category": "Models", "date": "June 10, 2026", "org": "Psychology Today", "desc": "Will Artificial Intelligence Replace Therapy for Addiction?&nbsp;&nbsp;Psychology Today", "link": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPb1l0UG55QzFSaGhKVmdJTXE2NmxVcUJHenJna1IyRkJhNFNWbTVUeUxHelJNczY5UENWamQ0ZzVYZFB2dUxjbkJyZHB0cWs0eVJQVlRJS05xa3RZT1U0WEp3QWIwYnprLVVHeEEwSnp0Q0s5enFHY0wxdXNuSWJxWFREc25Eb0V5bDlsMUVtNm9zRGNiY204Z3FkcmpTVWNuV3Jha1c5NXRYS0g5WE12NXpyU0lCMjJxQkRIY3ViajhzR2o4dkMybHRpbC12eXc?oc=5"},
    {"title": "McGuireWoods\u2019 Garen Marshall Recognized Again on Lawdragon\u2019s \u201cNext Generation\u201d List", "category": "Industry & Safety", "date": "June 10, 2026", "org": "McGuireWoods", "desc": "McGuireWoods\u2019 Garen Marshall Recognized Again on Lawdragon\u2019s \u201cNext Generation\u201d List&nbsp;&nbsp;McGuireWoods", "link": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNRktFSEl2dndKLVRnQVhiSjZHR1AxMGRvMy1sc0h2akozTWJUcXlYNDdJeWozN0l1enhzX3otUXRVRXFSMVN3YldleFJfTi12YWY3VTNvcm1zWHNEYWxaNE80cGRiMFh5Z09YTWJUSTByTzdxb3hmTjFIYWV5NnFkd2JyN3hkLU56cngwMzhvLVRkMVRnQzVodTBDNzBEQjFMYlJWVWtYdFFjYThzeUdtTDVNRTJITGc0bjY0U0tEWkFKRGhrYnY5TGQ2bFphdVUzMHc?oc=5"},
    {"title": "Jensen Huang Thinks the Artificial Intelligence (AI) Memory Boom Is Impossible to Ignore. Here's My Top Pick That No One Is Talking About.", "category": "Models", "date": "June 10, 2026", "org": "The Motley Fool", "desc": "Jensen Huang Thinks the Artificial Intelligence (AI) Memory Boom Is Impossible to Ignore. Here's My Top Pick That No One Is Talking About.&nbsp;&nbsp;The Motley Fool", "link": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQanB4ckRKV2NTUkZhamVTRGZlRVZpNUFsaEJhNXlRaXNVQ3M0dUxGSWdHMXlDa0puZGpKU2E5YUk2cmFQT0xnaE1ZMWR0NXpiZ2VwZURZdzFjQjVMNEFsYkpUejh6YXdPSlFuOHNqX3k2cHZxYWpkZE1HOTlvRVBBNEtiYUZaZmlReS1HeEE5UUs2RnhyalA3Uw?oc=5"},
    {"title": "Trump executive order allows vetting of AI systems", "category": "Models", "date": "June 10, 2026", "org": "WSFA", "desc": "Trump executive order allows vetting of AI systems&nbsp;&nbsp;WSFA", "link": "https://news.google.com/rss/articles/CBMihwFBVV95cUxQMjdfVU80dGNyeTEzZEpVd1M4R1dDTThCLTVCdEg2aFg1VnB4R1hrRm1IeVZjVXlsTHA3T0FjWHhSOXZHcHBiWmZWc002cmpKdk1BLXJTVGRxRXo1MVlGSlAzWjZ3T1JBUzlfRWJXbDFfX3NGbXg2OEJJN29BTkVuMHpJenp5RUHSAZsBQVVfeXFMTl81WW45TURiZjU5NG1lUFNuS0tITmRCd1doZEVGYTZZXzh3MVl4bERyY0RUSkc2WjAxSTU1Vy1sNmFweVA1NU1PRWlIWXVTbGh6aFZWZnRoX0NCbFlONWNkMFF5YTRvTXRELWJhaUljeFdzY0sySU1pb1gta2hhSVdFY3RYOE1qTUhnX3ozUVV2S3VybmgzVE5LdXc?oc=5"},
    {"title": "A Coding Implementation on Microsoft SkillOpt for Instrumented Prompt Optimization, Skill Evolution Analysis, and Baseline Comparison", "category": "Models", "date": "June 10, 2026", "org": "MarkTechPost", "desc": "We implement an instrumented workflow for Microsoft SkillOpt end to end. We set up the repository, connect OpenAI-compatible model access, and configure the optimizer and target models. We evaluate th...", "link": "https://www.marktechpost.com/2026/06/10/a-coding-implementation-on-microsoft-skillopt-for-instrumented-prompt-optimization-skill-evolution-analysis-and-baseline-comparison/"},
    {"title": "Trump Muses About Government Taking a Piece of A.I. Companies", "category": "Industry & Safety", "date": "June 10, 2026", "org": "The New York Times", "desc": "Trump Muses About Government Taking a Piece of A.I. Companies&nbsp;&nbsp;The New York Times", "link": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOU0dVamJJdWhzWWhVYUwtQkpyVXBTVWRKZjRaaEs2R2hjOTE2N0hDRmR0clZBeUlDcTJmRjdoR2J6TlVCT2dQQVBibXNZb1B2YV8zUEExN0EtYUppZzAtcjJYY2kzUDNYQk9ia3VqOXctdVpXaFFkd21VdU9ZVWJLVFowS29TV0Z0ZDgxYkFwZUpPUHEzeWRxSUh3?oc=5"},
    {"title": "AI, Creative Destruction, And The Politicization Of Economic Change \u2013 OpEd", "category": "Models", "date": "June 10, 2026", "org": "Eurasia Review", "desc": "AI, Creative Destruction, And The Politicization Of Economic Change \u2013 OpEd&nbsp;&nbsp;Eurasia Review", "link": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQWDVXdGFSTEZnSHFqLTlwU09JTEFYTGdzTnRuT2ZrTlFCb2d5Z1Z2X3NNdGZCQ3A5SG9pWkFmREJnQnBlM2Y2VkJPcGYxUDZOV0lsS21XOXpCUjBuR2ZSZ25fUS1QOWdyb0FlSmNvTVNQcEdfaVB6NVhmbnFWZkRwcXNTRjZFS1BwWTE0SXFLR0x5RU9Ick9qN2ZxcTc2VGp6ZnVlb01PWnFxNC1DSHJJ?oc=5"},
    {"title": "US shortens cyber fix window to three days as AI threats rise", "category": "Models", "date": "June 10, 2026", "org": "Reuters", "desc": "US shortens cyber fix window to three days as AI threats rise&nbsp;&nbsp;Reuters", "link": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOYUJ0Y3ZPOE9IbWdjS0xqd20zczBOanREM3JhNmk5bVpDYlhkbFlhMTBwTWkxZ080TTEwcHJKVnhocTU3UTdBTGVmQUhrUDhqbE40bGpqS0tpQWI1RmNUMVhNTF9Kb09OYkZIanduaEN5ek1PUkdyZVRJOWxORW9fWFI4Q1Y0OWxYMk9XelRpWmJDVURweXBLT19ORl9RaWh2eWcyVkhmcGNqZ0tn?oc=5"},
    {"title": "Investors Feed A.I. Firms\u2019 Voracious Appetite for New Money", "category": "Models", "date": "June 10, 2026", "org": "The New York Times", "desc": "Investors Feed A.I. Firms\u2019 Voracious Appetite for New Money&nbsp;&nbsp;The New York Times", "link": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPVmp0aV9fcTlidTJ4MFVhSkQyVzN2OFphWWpzZFZGMnZEZjFlRTlKZVZ5YmhITWZmc0JwWm5HWU5Mc2MzbmIwY3J5OEZNUWIzNEhzNmZ4amxGWF9ObmxFLURrZ0R4Y0tOYUkyZEVqQWg4Zkt4S2ZHcjNCaG5vUVh1bjZOMFB3Qi1vbFE?oc=5"},
    {"title": "OpenAI says China launched influence campaign to shape US attitudes on AI data centers", "category": "Models", "date": "June 10, 2026", "org": "Politico", "desc": "OpenAI says China launched influence campaign to shape US attitudes on AI data centers&nbsp;&nbsp;Politico", "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPLXcwaXBhY3BNaDJjc2QxSmJ4MlNMODNFNERwNlFaUjVJbDkyeVdULS1PRXZzU2hTOUk0NVZwS1hGV3FFRDl3Z1FaaWpXNm92eDR6NVA2UTA3QjhoaTVSSV9tU0J2LXo4R0hrc1Q3a1NLLTZRZDJ6dURfejRqekxGZVNJRVRPa212WHFuVVBR?oc=5"},
    {"title": "Opinion | China-UK cooperation vital in ensuring the AI era puts people first", "category": "Models", "date": "June 10, 2026", "org": "South China Morning Post", "desc": "Opinion | China-UK cooperation vital in ensuring the AI era puts people first&nbsp;&nbsp;South China Morning Post", "link": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNWktPQTFmekZhcm5ESFRPUlFXMV9HdGl6MkZiWW1pXzJmWWs2Q0ZicWpsbWlRclFidTFaU0dNVkIzUFZfU2lIVUxBMVJGbXJ5Z2lwa3hhX2Fsc0stclpjaFFlZTM2RmpYbmZJbVZMUmtCekw0d09YZElvWEFRMl9xRmlvZWYyU2JpNTRLaUNWT1ZLaWdJTUMxZHFXYzJRbGhJMDlhTklXYXJKek0tUTF1ZjRsWjNuekVoOUtN0gG7AUFVX3lxTFB6Z1BZMzNuNnZ2QnhDdS1fMW4yaFV4ZDRlS3VGNTlWRU5ERVdMY2UwUzNNbW1Rb1RCem8tV2hpM1gwODF3UjNjQTFPV0NwbnhzZXNOWkEyZm1EaWVfRVdWUk8wcTNRNkU5M2dDZkhXX2tJNGs1VXJrRnN3bFBBUTE2TlJpQWhyQUs2cFRxNXdRU0YwTzNCMnN1cy1BS0VMR001MzV4OWxSQTQ3elF6Y0FOb1lqSkd3V3JHYUU?oc=5"},
    {"title": "\u00a320m artificial intelligence tech \u2018will speed up cancer diagnosis for millions\u2019 of UK patients", "category": "Models", "date": "June 10, 2026", "org": "The Independent", "desc": "\u00a320m artificial intelligence tech \u2018will speed up cancer diagnosis for millions\u2019 of UK patients&nbsp;&nbsp;The Independent", "link": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNOXpKZTFTT190NFpvSjluM2pjOE1vckFCYmZfcUtjODlmTnA2OHktTjZkMmwwcjZjVjdqZHk0Y0Ria0pzSUp3ZGU0bTVQeWRSLTM4Z3hnM2F0bmQwZDh6ZGxGYm45RjJBemJGTXI1NkpEb09ZcnF1ODI0NHd3aVdHQk5VV2FKeXBCLWd2Zk1kRlhqREhoZ05rc3BRMjBudUo0Z01FNWVLVFZlQQ?oc=5"},
    {"title": "On-demand webinar: AI in deals: How artificial intelligence is reshaping legal due diligence", "category": "Models", "date": "June 10, 2026", "org": "Wolters Kluwer", "desc": "On-demand webinar: AI in deals: How artificial intelligence is reshaping legal due diligence&nbsp;&nbsp;Wolters Kluwer", "link": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNUXZmaHdadnhQNnJlcVNGeVlNcm1kSm9wTGVidmRURjBwTEQ1WWRBb3NIOUxUeTZkVTJGYkpSMmVFbXZtMnpFTWwwbHJJNFlwMkZvbW8tNTJJc3Y0a3l0cG1Tc1VXMzdqSEJpNlFwLWUtbkxiRU1Gb1NXUnllMEtCYkRHcEU?oc=5"},
    {"title": "The Meeting Bot Nobody Invited Is Now Exhibit A", "category": "Models", "date": "June 10, 2026", "org": "PYMNTS.com", "desc": "The Meeting Bot Nobody Invited Is Now Exhibit A&nbsp;&nbsp;PYMNTS.com", "link": "https://news.google.com/rss/articles/CBMipAFBVV95cUxONHJtcVlBUWFFTU5vdEx1X19nZE1aMldJTFdYOHAwY2tHOEtOSFplZGhvVm5NMV9xQ202am5Rbk5KdzhEUGpuNjdqdWlDb0diQlJXY1FROWxZWVJ6ZGstTFFkTTNUMjdfdFFnbGlQRUlhcGdCdG9ESUxVRXdISTRreFNsUlFBSExrZk91VzQxd2c2aGtia1ZqMzRpckNiVkN4ZHhtRw?oc=5"},
    {"title": "Mexico\u2019s Largest Department Store Chain Coppel Expands AI Merchandising Pilot Program to Footwear", "category": "Models", "date": "June 10, 2026", "org": "WWD", "desc": "Mexico\u2019s Largest Department Store Chain Coppel Expands AI Merchandising Pilot Program to Footwear&nbsp;&nbsp;WWD", "link": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQTGpmX2VQTnB4cE43SlZaQmJ0X3NCTlY2UDZoNi10dFhkVExhbnFmcmJnbG9GVnRDcUI3WmdMd3c4Vlc0SjB6UWRVSGdmbWplUlRRRjF0UWo1NVZ1blFwUkRDcnNYcEhqWWttbnlrcXkxQlFRZmJXYVNTb2JmS3VtLUhDcXpZRnFsZm9Xbm5GTUFQWGhsU0IwenRNOFkzbk90a1ZDQzZJS3VJWktBcnd3UHgtNUV0MExBZVE?oc=5"},
    {"title": "State of Artificial Intelligence: Banning Nudification Apps", "category": "Industry & Safety", "date": "June 10, 2026", "org": "WENY News", "desc": "State of Artificial Intelligence: Banning Nudification Apps&nbsp;&nbsp;WENY News", "link": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOajA1UjJFbE9YaWNFWE51dWE2OWZSUGZ1UkotV1Q5YmJoWGF1YWs1bWVXM05MZXI3UE9ZZ1lTd1dHTjVRN19DWkotTHlwcDNnOVZkQ1kwZkNfUEt0UFZ0akxJZHdYYXNCWDhZWXloMllsYVdNQ212UlUxN1Y4T0M5dGd6LWhhcG9KT2c1V2NKUDNobWRvb0RxS0I2czFRekhzWk9EbUdNeTNISGJid1M2clZhanB4TTc4eFZoS1JBVFFvTGZBV3NVNnY4QWg0cTJaY0xFVm9rd3VPbUM3Q1E?oc=5"},
    {"title": "Law enforcement relied too heavily on AI, falsely arrested a suspect, ACLU argues", "category": "Industry & Safety", "date": "June 10, 2026", "org": "Florida Phoenix", "desc": "Law enforcement relied too heavily on AI, falsely arrested a suspect, ACLU argues&nbsp;&nbsp;Florida Phoenix", "link": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOYlJGZGxuRDZKbEtFVWJMSC1vOEJKREt2QUFqYVV4MWswWXF0eW1DRDF0MUpWNTdLRFZLbUhMZmliemVJUG5kNV9YUnNsWWxpSHhMWTQ1bTM1cE1zR25XUi1mbG1IWTJYcFpuYUdfV2FnSkFkaEV2N3N1aUdQQXNZYzZJX2dxQmVZMEs5eG1KQWdmQUF6LWJYSWs4SWlITzdlc01PTVRQMXZhSVhLblltVXB0OHNVNlRXRkE?oc=5"}
  ];
  // NEWS_DATA_END

  const projectTemplates = {
    rag: {
      title: "OmniSearch: Production-Grade Hybrid RAG with Cohere Rerank & Ragas Eval",
      desc: "An enterprise document ingestion and Q&A engine built to handle millions of pages. It features recursive semantic chunking, dual-database indexing, hybrid keyword-embedding retrieval, a semantic caching layer, and a continuous automated evaluation pipeline.",
      diagram: 
`[Company PDFs] ──► [Semantic Chunking] ──► [Sparse Index (BM25)] & [Dense Embeddings (Vector DB)]
                                                              │
[User Query] ────► [Semantic Cache Check (Redis)] ─────────────┤
                          │ (if miss)                         ▼
                          └──────────────────────────► [Hybrid Retrieval]
                                                              │ (Top 100)
                                                              ▼
                                                        [Cohere Rerank]
                                                              │ (Top 5)
                                                              ▼
[User Output] ◄─── [Streaming vLLM Serving] ◄──────── [Llama-3 Prompt Assembly]`,
      tech: ["FastAPI", "Python Asyncio", "Qdrant Vector DB", "Elasticsearch (BM25)", "Cohere Rerank", "Ragas", "vLLM", "Redis"],
      challenges: [
        "<strong>Solving Index Fragmentation:</strong> Design an index migration schema to rebuild HNSW graphs on Qdrant during bulk uploads without taking the search API offline.",
        "<strong>Semantic Cache Tuning:</strong> Establish a dynamic cosine-similarity threshold (e.g., 0.96) to prevent returning cached answers for queries that look similar but demand different answers.",
        "<strong>Reducing Context Chunk Costs:</strong> Implement a prompt-compressor (like LLMLingua) to remove redundant filler words from retrieved context, cutting input tokens by up to 30%."
      ],
      difficulty: {
        intermediate: "Focuses on deploying local Docker containers, configuring FastAPI async routers, basic BM25-embedding combination, and evaluating query pipelines with 100 test samples.",
        advanced: "Focuses on deploying distributed vector clusters, implementing dynamic batching, utilizing Triton Inference Server, and building automated CI/CD evaluation suites that run Ragas assertions on check-ins."
      }
    },
    agents: {
      title: "AutoAnalyst: Stateful Multi-Agent SQL Data Analysis Graph",
      desc: "An autonomous agentic workflow that translates natural language requests into SQL queries, executes them against databases, sanitizes the responses, generates markdown charts, and performs self-correction loops when queries crash.",
      diagram:
`                 ┌─────────────────── [Router Agent] ──────────────────┐
                 │                                                     │
                 ▼                                                     ▼
        [SQL Generator Agent]                                  [Chart Renderer Agent]
                 │                                                     │
                 ▼                                                     ▼
        [DB Executor Agent]                                    [Data Auditor Agent]
                 │                                                     │
                 └────────► [Self-Correction Loop on Error] ───────────┘
                                         │ (if valid)
                                         ▼
                               [Report Compiler Agent]`,
      tech: ["LangGraph", "PydanticAI", "PostgreSQL", "SQLAlchemy", "Plotly / Matplotlib", "OpenAI / Claude API", "Docker"],
      challenges: [
        "<strong>Preventing Query Injection:</strong> Sandbox database executions inside read-only, ephemeral Docker targets with strict CPU/memory limits to avoid dangerous data drops.",
        "<strong>Graph Loop Termination:</strong> Design state guardrails that detect infinite self-correction loops (e.g., if SQL syntax errors repeat 3 times) and safely return a human-in-the-loop fallback request.",
        "<strong>State Memory Management:</strong> Manage long-running conversation context blocks, summarizing SQL schemas dynamically so prompt windows do not overflow during long debugging runs."
      ],
      difficulty: {
        intermediate: "Focuses on building a single-user LangGraph workspace with basic error loops, reading SQL tables, and returning simple text summaries of database metrics.",
        advanced: "Focuses on supporting multi-user workspaces, integrating human-in-the-loop approval screens for schema changes, and dynamically editing graphs to add new tools at runtime."
      }
    },
    finetuning: {
      title: "AdaptaNet: Quantized LoRA Adapter Fine-Tuning and Evaluation Pipeline",
      desc: "An end-to-end pipeline that ingests domain-specific documents, formats instruction training pairs, performs PEFT fine-tuning (QLoRA) on Llama-3 models in 4-bit precision, and runs comparative benchmarks against the base model.",
      diagram:
`[Dataset Ingestion] ──► [Tokenization & Padding] ──► [Quantized Base Model (4-bit)]
                                                            │
                                                            ▼
                                                   [LoRA Adapter Layers]
                                                            │ (Train Target)
                                                            ▼
                                                   [W&B Metrics Logging]
                                                            │
                                                            ▼
[Production Deployment] ◄── [Merge Adapter Weights] ◄──── [Evaluation Benchmarks]`,
      tech: ["PyTorch", "Hugging Face PEFT", "Transformers", "TRL (Transformer Reinforcement Learning)", "BitsAndBytes (Quantization)", "Weights & Biases", "A100 GPU target"],
      challenges: [
        "<strong>Gradient Instability:</strong> Troubleshoot model loss spikes by implementing learning rate warmup schedules and optimizing LoRA alpha/dropout parameters.",
        "<strong>Weight Merging:</strong> Merge trained 16-bit LoRA adapter weights back into 4-bit base weights without causing quantization drift or significant performance degradation.",
        "<strong>Evaluation Overfitting:</strong> Design a task validation framework to evaluate model performance on out-of-domain prompts to check if fine-tuning degraded general reasoning."
      ],
      difficulty: {
        intermediate: "Focuses on training a 7B parameter model using Google Colab or a single local GPU, tracking loss curves on Weights & Biases.",
        advanced: "Focuses on scaling to multi-GPU machines using PyTorch DDP/FSDP, optimizing data pipelines, and evaluating outputs across standardized benchmarks like MMLU."
      }
    },
    ops: {
      title: "ScaleServe: Distributed Speculative Decoding and Serving Gateway",
      desc: "A high-performance inference serving architecture designed to run Llama-3 70B models at maximum throughput. Features speculative decoding with a draft model, dynamic batching, and custom semantic load balancers.",
      diagram:
`[User Request] ──► [API Gateway / Load Balancer] ──► [vLLM Serving Cluster]
                                                           │ (Requests)
                                                           ▼
                                               [Speculative Decoding Core]
                                            (70B Target Model + 8B Draft Model)
                                                           │
                                                           ▼
[Response Stream] ◄─── [Structured Output validation] ◄─── [PagedAttention Cache]`,
      tech: ["vLLM", "Triton Inference Server", "Ray (Distributed Computing)", "NGINX Load Balancer", "Prometheus & Grafana", "Python async", "Kubernetes"],
      challenges: [
        "<strong>Draft Model Latency:</strong> Sync the small draft model and large target model sizes. If the draft model is too slow, verification benefits are lost and latency increases.",
        "<strong>Dynamic Batching Bottlenecks:</strong> Tune query batching timeout windows to balance throughput and per-request response speeds under varying concurrent loads.",
        "<strong>KV Cache Eviction:</strong> Design policy parameters (like Least Recently Used) to handle VRAM constraints when handling massive streams of concurrent context queries."
      ],
      difficulty: {
        intermediate: "Focuses on setting up a single vLLM server with speculative decoding active, measuring response speeds (tokens per second) under simple scripts.",
        advanced: "Focuses on deploying serving containers in a Kubernetes cluster, load balancing requests across GPU nodes, and logging hardware metrics (SRAM utilization, queue delays) in Grafana."
      }
    }
  };


  // 2. STATE MANAGER
  class AppState {
    constructor() {
      this.roadmapProgress = {};
      this.bookmarks = [];
      this.reviewedMocks = [];
      this.flashcardStatus = {};
      this.currentFlashcardIndex = 0;
      this.skillsRatings = { math: 3, pytorch: 3, llm: 3, rag: 3, agents: 3, infra: 3 };
      this.targetLab = "openai";
      
      this.load();
    }

    load() {
      try {
        const progressStr = localStorage.getItem("ai_prep_roadmap_progress");
        this.roadmapProgress = progressStr ? JSON.parse(progressStr) : {};

        const bookmarksStr = localStorage.getItem("ai_prep_bookmarks");
        this.bookmarks = bookmarksStr ? JSON.parse(bookmarksStr) : [];

        const reviewedMocksStr = localStorage.getItem("ai_prep_reviewed_mocks");
        this.reviewedMocks = reviewedMocksStr ? JSON.parse(reviewedMocksStr) : [];

        const fcStr = localStorage.getItem("ai_prep_flashcard_status");
        this.flashcardStatus = fcStr ? JSON.parse(fcStr) : {};
        
        const fcIdxStr = localStorage.getItem("ai_prep_flashcard_index");
        this.currentFlashcardIndex = fcIdxStr ? parseInt(fcIdxStr, 10) : 0;

        const skillsStr = localStorage.getItem("ai_prep_skills_ratings");
        this.skillsRatings = skillsStr ? JSON.parse(skillsStr) : { math: 3, pytorch: 3, llm: 3, rag: 3, agents: 3, infra: 3 };

        const labStr = localStorage.getItem("ai_prep_target_lab");
        this.targetLab = labStr || "openai";
      } catch (e) {
        console.error("Failed to load local storage state:", e);
      }
    }

    save() {
      try {
        localStorage.setItem("ai_prep_roadmap_progress", JSON.stringify(this.roadmapProgress));
        localStorage.setItem("ai_prep_bookmarks", JSON.stringify(this.bookmarks));
        localStorage.setItem("ai_prep_reviewed_mocks", JSON.stringify(this.reviewedMocks));
        localStorage.setItem("ai_prep_flashcard_status", JSON.stringify(this.flashcardStatus));
        localStorage.setItem("ai_prep_flashcard_index", this.currentFlashcardIndex.toString());
        localStorage.setItem("ai_prep_skills_ratings", JSON.stringify(this.skillsRatings));
        localStorage.setItem("ai_prep_target_lab", this.targetLab);
      } catch (e) {
        console.error("Failed to save local storage state:", e);
      }
    }

    reset() {
      this.roadmapProgress = {};
      this.bookmarks = [];
      this.reviewedMocks = [];
      this.flashcardStatus = {};
      this.currentFlashcardIndex = 0;
      this.skillsRatings = { math: 3, pytorch: 3, llm: 3, rag: 3, agents: 3, infra: 3 };
      this.targetLab = "openai";
      this.save();
    }
  }


  // 3. UI CONTROLLER
  class AppController {
    constructor() {
      this.state = new AppState();
      this.activeView = "dashboard";
      this.init();
    }

    init() {
      this.bindNavEvents();
      this.bindRoadmapEvents();
      this.bindResourceEvents();
      this.bindMockEvents();
      this.bindProjectEvents();
      this.bindFlashcardEvents();
      this.bindNewsEvents();
      this.bindVramEvents();
      this.bindProfilerEvents();
      
      // Global Reset Button
      const resetBtn = document.getElementById("reset-progress-btn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          if (confirm("Are you sure you want to reset all your progress, bookmarks, and mock results?")) {
            this.state.reset();
            this.updateAllUI();
          }
        });
      }

      // Initial Render
      this.updateAllUI();
    }

    // Navigation Tab Controller
    bindNavEvents() {
      const navItems = document.querySelectorAll(".nav-item");
      navItems.forEach(item => {
        item.addEventListener("click", () => {
          const viewId = item.getAttribute("data-view");
          this.navigateTo(viewId);
        });
      });
    }

    navigateTo(viewId) {
      if (!viewId) return;
      this.activeView = viewId;

      // Update Nav active style
      document.querySelectorAll(".nav-item").forEach(btn => {
        btn.classList.remove("active");
      });
      const activeNav = document.querySelector(`.nav-item[data-view="${viewId}"]`);
      if (activeNav) activeNav.classList.add("active");

      // Update View active style
      document.querySelectorAll(".view-section").forEach(sec => {
        sec.classList.remove("active");
      });
      const targetSec = document.getElementById(`view-${viewId}`);
      if (targetSec) targetSec.classList.add("active");

      // Scroll top
      const mainContent = document.querySelector(".main-content");
      if (mainContent) mainContent.scrollTop = 0;

      // Lazy render modules when entering views
      if (viewId === "roadmap") this.renderRoadmap();
      if (viewId === "resources") this.renderResources();
      if (viewId === "mock") this.renderMocks();
      if (viewId === "flashcards") this.renderFlashcard();
      if (viewId === "news") this.renderNews();
      if (viewId === "vram") this.renderVram();
      if (viewId === "profiler") this.renderProfiler();
      
      this.updateGlobalProgress();
    }

    updateAllUI() {
      this.updateGlobalProgress();
      this.renderRoadmap();
      this.renderResources();
      this.renderMocks();
      this.renderFlashcard();
      this.renderNews();
      this.renderVram();
      this.renderProfiler();
      this.updateDashboardMetrics();
    }

    // Dynamic metrics calculation
    updateGlobalProgress() {
      // 1. Calculate Roadmap Checklist Items Progress
      let totalRoadmapItems = 0;
      let completedRoadmapItems = 0;
      roadmapData.forEach(p => {
        p.checklist.forEach(item => {
          totalRoadmapItems++;
          if (this.state.roadmapProgress[item.id]) {
            completedRoadmapItems++;
          }
        });
      });

      const roadmapPercent = totalRoadmapItems > 0 ? Math.round((completedRoadmapItems / totalRoadmapItems) * 100) : 0;
      
      // Update UI bar and labels
      const progressText = document.getElementById("overall-progress-text");
      const progressBarFill = document.getElementById("overall-progress-fill");
      const countLabel = document.getElementById("completed-items-count");
      const totalLabel = document.getElementById("total-items-count");
      const badgeText = document.getElementById("roadmap-progress-badge");

      if (progressText) progressText.innerText = `${roadmapPercent}%`;
      if (progressBarFill) progressBarFill.style.width = `${roadmapPercent}%`;
      if (countLabel) countLabel.innerText = completedRoadmapItems;
      if (totalLabel) totalLabel.innerText = totalRoadmapItems;
      if (badgeText) badgeText.innerText = `${roadmapPercent}% Completed`;

      // Update dashboard values if active
      const dashRoadmapPercent = document.getElementById("dash-roadmap-percent");
      if (dashRoadmapPercent) dashRoadmapPercent.innerText = `${roadmapPercent}%`;
      
      this.updateDashboardMetrics();
    }

    updateDashboardMetrics() {
      // Bookmarks Count
      const bookmarkCountEl = document.getElementById("dash-resources-count");
      if (bookmarkCountEl) {
        bookmarkCountEl.innerText = `${this.state.bookmarks.length} / ${resourcesData.length}`;
      }

      // Flashcards Count
      const masteredCount = Object.values(this.state.flashcardStatus).filter(s => s === "mastered").length;
      const flashcardCountEl = document.getElementById("dash-flashcards-count");
      if (flashcardCountEl) {
        flashcardCountEl.innerText = `${masteredCount} / ${flashcardsData.length}`;
      }

      // Mocks Count
      const mockCountEl = document.getElementById("dash-mock-count");
      if (mockCountEl) {
        mockCountEl.innerText = `${this.state.reviewedMocks.length} / ${mockQuestionsData.length}`;
      }

      const mockRatioEl = document.getElementById("mock-reviewed-ratio");
      if (mockRatioEl) {
        mockRatioEl.innerText = `${this.state.reviewedMocks.length} / ${mockQuestionsData.length}`;
      }

      const fcMasteryRatioEl = document.getElementById("flashcard-mastery-count");
      if (fcMasteryRatioEl) {
        fcMasteryRatioEl.innerText = `${masteredCount} / ${flashcardsData.length}`;
      }
    }

    // ========================================================
    // ROADMAP CONTROLLER
    // ========================================================
    renderRoadmap() {
      const container = document.getElementById("roadmap-timeline-container");
      if (!container) return;

      container.innerHTML = "";

      // Load expanded state helper
      let expandedPhases = {};
      try {
        const savedExpanded = localStorage.getItem("ai_prep_expanded_phases");
        expandedPhases = savedExpanded ? JSON.parse(savedExpanded) : {"phase1": true}; // Expanded phase1 by default
      } catch(e) {
        expandedPhases = {"phase1": true};
      }

      roadmapData.forEach((phase) => {
        const card = document.createElement("div");
        card.className = "roadmap-phase-card";
        card.id = `card-${phase.id}`;
        
        // Calculate items status in phase
        let completed = 0;
        phase.checklist.forEach(item => {
          if (this.state.roadmapProgress[item.id]) completed++;
        });

        const isFullyCompleted = completed === phase.checklist.length;
        if (isFullyCompleted) {
          card.classList.add("completed-phase");
        } else if (completed > 0) {
          card.classList.add("active-phase");
        }

        const isExpanded = expandedPhases[phase.id];
        if (isExpanded) {
          card.classList.add("expanded-phase");
        }

        // Render checklist layout
        let checklistHTML = "";
        phase.checklist.forEach(item => {
          const isChecked = !!this.state.roadmapProgress[item.id];
          checklistHTML += `
            <div class="checklist-item ${isChecked ? 'checked-item' : ''}" data-item-id="${item.id}">
              <div class="checkbox-custom"></div>
              <div class="item-details">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
              </div>
            </div>
          `;
        });

        card.innerHTML = `
          <div class="phase-checkpoint-indicator"></div>
          <div class="phase-header">
            <div class="phase-title-meta">
              <span class="phase-number">${phase.number}</span>
              <h3>${phase.title}</h3>
              <span class="phase-duration">${phase.duration}</span>
            </div>
            <div class="phase-toggle-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
          </div>
          <div class="phase-details-content">
            <p class="phase-description">${phase.description}</p>
            <div class="checklist-container">
              ${checklistHTML}
            </div>
          </div>
        `;

        // Toggle Expand
        const header = card.querySelector(".phase-header");
        header.addEventListener("click", () => {
          card.classList.toggle("expanded-phase");
          expandedPhases[phase.id] = card.classList.contains("expanded-phase");
          localStorage.setItem("ai_prep_expanded_phases", JSON.stringify(expandedPhases));
        });

        // Click checklist triggers
        const items = card.querySelectorAll(".checklist-item");
        items.forEach(el => {
          el.addEventListener("click", (e) => {
            e.stopPropagation();
            const itemId = el.getAttribute("data-item-id");
            const currentlyChecked = !!this.state.roadmapProgress[itemId];
            
            this.state.roadmapProgress[itemId] = !currentlyChecked;
            this.state.save();
            
            // Re-render roadmap view and updates stats
            this.updateAllUI();
          });
        });

        container.appendChild(card);
      });
    }

    bindRoadmapEvents() {
      // Click listeners are dynamically attached inside renderRoadmap
    }

    // ========================================================
    // RESOURCES CONTROLLER
    // ========================================================
    renderResources() {
      const container = document.getElementById("resources-grid-container");
      if (!container) return;

      const searchInput = document.getElementById("resource-search-input");
      const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : "";
      const difficultyVal = document.getElementById("filter-difficulty")?.value || "all";
      const categoryVal = document.getElementById("filter-category")?.value || "all";

      container.innerHTML = "";

      const filtered = resourcesData.filter(res => {
        // Text Match
        const matchText = res.title.toLowerCase().includes(searchVal) || 
                          res.desc.toLowerCase().includes(searchVal) ||
                          res.org.toLowerCase().includes(searchVal);
        // Difficulty Match
        const matchDifficulty = difficultyVal === "all" || res.difficulty === difficultyVal;
        // Category Match
        const matchCategory = categoryVal === "all" || res.category === categoryVal;

        return matchText && matchDifficulty && matchCategory;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="project-empty-state" style="grid-column: 1 / -1; padding: 60px 0;">
            <h3>No Materials Found</h3>
            <p>Try modifying your search keywords or resetting category filters.</p>
          </div>
        `;
        return;
      }

      filtered.forEach(res => {
        const isBookmarked = this.state.bookmarks.includes(res.title);
        const card = document.createElement("div");
        card.className = `resource-card ${isBookmarked ? 'bookmarked' : ''}`;
        card.setAttribute("data-category", res.category);

        const diffClass = res.difficulty === "Beginner" ? "diff-beginner" : 
                          res.difficulty === "Intermediate" ? "diff-intermediate" : "diff-advanced";

        card.innerHTML = `
          <div class="resource-meta">
            <span class="resource-tag">${res.category}</span>
            <span class="resource-difficulty">
              <span class="difficulty-dot ${diffClass}"></span>
              ${res.difficulty}
            </span>
          </div>
          <h3>${res.title}</h3>
          <p>${res.desc}</p>
          <div class="resource-footer">
            <a href="${res.link}" target="_blank" class="resource-link">
              Open ${res.type}
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
            <button class="bookmark-btn" title="Bookmark resource">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
            </button>
          </div>
        `;

        // Toggle bookmark
        const bookmarkBtn = card.querySelector(".bookmark-btn");
        bookmarkBtn.addEventListener("click", () => {
          const idx = this.state.bookmarks.indexOf(res.title);
          if (idx > -1) {
            this.state.bookmarks.splice(idx, 1);
          } else {
            this.state.bookmarks.push(res.title);
          }
          this.state.save();
          this.updateAllUI();
        });

        container.appendChild(card);
      });
    }

    bindResourceEvents() {
      const search = document.getElementById("resource-search-input");
      const diff = document.getElementById("filter-difficulty");
      const cat = document.getElementById("filter-category");

      if (search) search.addEventListener("input", () => this.renderResources());
      if (diff) diff.addEventListener("change", () => this.renderResources());
      if (cat) cat.addEventListener("change", () => this.renderResources());
    }

    // ========================================================
    // AI NEWS CONTROLLER
    // ========================================================
    renderNews() {
      const container = document.getElementById("news-grid-container");
      if (!container) return;

      const searchInput = document.getElementById("news-search-input");
      const searchVal = searchInput ? searchInput.value.toLowerCase().trim() : "";
      const categoryVal = document.getElementById("filter-news-category")?.value || "all";

      container.innerHTML = "";

      const filtered = newsData.filter(item => {
        // Text Match
        const matchText = item.title.toLowerCase().includes(searchVal) || 
                          item.desc.toLowerCase().includes(searchVal) ||
                          item.org.toLowerCase().includes(searchVal);
        // Category Match
        const matchCategory = categoryVal === "all" || item.category === categoryVal;

        return matchText && matchCategory;
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="project-empty-state" style="grid-column: 1 / -1; padding: 60px 0;">
            <h3>No News Found</h3>
            <p>Try modifying your search keywords or resetting category filters.</p>
          </div>
        `;
        return;
      }

      filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "resource-card";
        card.setAttribute("data-category", item.category);

        card.innerHTML = `
          <div class="resource-meta">
            <span class="resource-tag">${item.category}</span>
            <span class="resource-difficulty" style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 500;">
              <span class="difficulty-dot" style="background-color: var(--accent-blue);"></span>
              ${item.date}
            </span>
          </div>
          <h3>${item.title}</h3>
          <div style="font-size: 0.75rem; font-weight: 600; color: var(--accent-blue); margin-bottom: 12px; font-family: 'Outfit', sans-serif; text-transform: uppercase; letter-spacing: 0.5px;">Source: ${item.org}</div>
          <p style="margin-bottom: 16px; flex-grow: 1;">${item.desc}</p>
          <div class="resource-footer" style="margin-top: auto; padding-top: 15px; border-top: 1px dashed var(--border-light); display: flex; align-items: center; justify-content: space-between;">
            <a href="${item.link}" target="_blank" class="resource-link" style="display: inline-flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 600; color: var(--accent-blue); transition: var(--transition-smooth); text-decoration: none;">
              Read Official Announcement
              <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none" style="transition: transform var(--transition-smooth);"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        `;

        container.appendChild(card);
      });
    }

    bindNewsEvents() {
      const search = document.getElementById("news-search-input");
      const cat = document.getElementById("filter-news-category");

      if (search) search.addEventListener("input", () => this.renderNews());
      if (cat) cat.addEventListener("change", () => this.renderNews());
    }

    // ========================================================
    // LLM VRAM & SERVING CALCULATOR CONTROLLER
    // ========================================================
    bindVramEvents() {
      const presetSelect = document.getElementById("vram-preset");
      const paramsSlider = document.getElementById("vram-params");
      const paramsNum = document.getElementById("vram-params-num");
      const quantSelect = document.getElementById("vram-quant");
      const contextSlider = document.getElementById("vram-context");
      const contextNum = document.getElementById("vram-context-num");
      const batchSlider = document.getElementById("vram-batch");
      const batchNum = document.getElementById("vram-batch-num");
      const advancedToggle = document.getElementById("vram-advanced-toggle");

      const layersInput = document.getElementById("vram-layers");
      const headDimInput = document.getElementById("vram-head-dim");
      const qHeadsInput = document.getElementById("vram-q-heads");
      const kvHeadsInput = document.getElementById("vram-kv-heads");

      // Setup sync between slider and numeric input
      const syncInput = (slider, num, callback) => {
        if (slider && num) {
          slider.addEventListener("input", () => {
            num.value = slider.value;
            callback();
          });
          num.addEventListener("input", () => {
            let val = parseFloat(num.value);
            if (!isNaN(val)) {
              slider.value = val;
              callback();
            }
          });
        }
      };

      syncInput(paramsSlider, paramsNum, () => {
        if (presetSelect) presetSelect.value = "custom";
        this.renderVram();
      });

      syncInput(contextSlider, contextNum, () => this.renderVram());
      syncInput(batchSlider, batchNum, () => this.renderVram());

      if (quantSelect) quantSelect.addEventListener("change", () => this.renderVram());

      // Preset architecture configurations
      const presets = {
        "llama3-8b": { params: 8.0, layers: 32, heads: 32, kvHeads: 8, headDim: 128 },
        "llama3-70b": { params: 70.0, layers: 80, heads: 64, kvHeads: 8, headDim: 128 },
        "mistral-7b": { params: 7.2, layers: 32, heads: 32, kvHeads: 8, headDim: 128 },
        "mixtral-8x7b": { params: 46.7, layers: 32, heads: 32, kvHeads: 8, headDim: 128 }
      };

      if (presetSelect) {
        presetSelect.addEventListener("change", () => {
          const val = presetSelect.value;
          if (val && presets[val]) {
            const config = presets[val];
            if (paramsSlider) paramsSlider.value = config.params;
            if (paramsNum) paramsNum.value = config.params;
            if (layersInput) layersInput.value = config.layers;
            if (headDimInput) headDimInput.value = config.headDim;
            if (qHeadsInput) qHeadsInput.value = config.heads;
            if (kvHeadsInput) kvHeadsInput.value = config.kvHeads;
          }
          this.renderVram();
        });
      }

      // Toggle advanced panel
      if (advancedToggle) {
        advancedToggle.addEventListener("change", () => {
          const panel = document.getElementById("vram-advanced-panel");
          if (panel) {
            if (advancedToggle.checked) {
              panel.classList.remove("collapsed");
              if (presetSelect) presetSelect.value = "custom";
            } else {
              panel.classList.add("collapsed");
            }
          }
          this.renderVram();
        });
      }

      // Listener for advanced inputs
      const advInputs = [layersInput, headDimInput, qHeadsInput, kvHeadsInput];
      advInputs.forEach(input => {
        if (input) {
          input.addEventListener("input", () => {
            if (presetSelect) presetSelect.value = "custom";
            this.renderVram();
          });
        }
      });
    }

    renderVram() {
      // Gather inputs
      const params = parseFloat(document.getElementById("vram-params-num")?.value) || 8.0;
      const quant = parseFloat(document.getElementById("vram-quant")?.value) || 16;
      const context = parseInt(document.getElementById("vram-context-num")?.value) || 8192;
      const batch = parseInt(document.getElementById("vram-batch-num")?.value) || 8;

      const layers = parseInt(document.getElementById("vram-layers")?.value) || 32;
      const headDim = parseInt(document.getElementById("vram-head-dim")?.value) || 128;
      const kvHeads = parseInt(document.getElementById("vram-kv-heads")?.value) || 8;

      // 1. Calculate Model Weights Size (GB)
      // quant: 32-bit = 4 bytes, 16-bit = 2 bytes, 8-bit = 1 byte, 4-bit = 0.5 bytes
      const bytesPerParam = quant === 32 ? 4.0 : quant === 16 ? 2.0 : quant === 8 ? 1.0 : 0.5;
      // 1.2x overhead factor for CUDA memory buffers/context in serving frameworks like vLLM
      const weightsGB = (params * bytesPerParam) * 1.2;

      // 2. Calculate KV Cache Size (GB)
      // Formula: 2 (Key, Value) * 2 (bytes, FP16 precision) * KV_Heads * head_dim * seq_len * layers * batch
      // In Gigabytes (decimal GB, i.e., / 1e9)
      const kvGB = (2.0 * 2.0 * kvHeads * headDim * context * layers * batch) / 1e9;

      // 3. System/CUDA overhead
      const systemGB = 2.0; // Flat overhead approximation

      // 4. Total VRAM
      const totalGB = weightsGB + kvGB + systemGB;

      // Update UI elements
      const totalValEl = document.getElementById("vram-total-value");
      if (totalValEl) totalValEl.textContent = totalGB.toFixed(2);

      const weightsValEl = document.getElementById("legend-weights-val");
      if (weightsValEl) weightsValEl.textContent = `${weightsGB.toFixed(2)} GB`;

      const kvValEl = document.getElementById("legend-kv-val");
      if (kvValEl) kvValEl.textContent = `${kvGB.toFixed(2)} GB`;

      // Update stacked percentage bar
      const barWeights = document.getElementById("bar-weights");
      const barKv = document.getElementById("bar-kv");
      const barSys = document.getElementById("bar-sys");

      const pctWeights = (weightsGB / totalGB) * 100;
      const pctKv = (kvGB / totalGB) * 100;
      const pctSys = (systemGB / totalGB) * 100;

      if (barWeights) barWeights.style.width = `${pctWeights}%`;
      if (barKv) barKv.style.width = `${pctKv}%`;
      if (barSys) barSys.style.width = `${pctSys}%`;

      // Hardware Recommendation logic
      const hwTitleEl = document.getElementById("vram-hardware-title");
      const hwDescEl = document.getElementById("vram-hardware-desc");
      const hwBox = document.getElementById("vram-hardware-box");

      let hwTitle = "";
      let hwDesc = "";
      let glowColor = "var(--accent-emerald)";

      if (totalGB <= 22) {
        hwTitle = "1x NVIDIA RTX 3090 / 4090 (24GB)";
        hwDesc = "Perfect for consumer hardware or small cloud nodes. Weights and KV cache fit easily in a single 24GB card.";
        glowColor = "rgba(16, 185, 129, 0.4)"; // emerald
      } else if (totalGB <= 38) {
        hwTitle = "1x NVIDIA A100 (40GB) or 2x RTX 4090 (48GB total)";
        hwDesc = "Fits on a single professional datacenter card, or requires 2x consumer GPUs running TensorParallel (TP=2).";
        glowColor = "rgba(59, 130, 246, 0.4)"; // blue
      } else if (totalGB <= 76) {
        hwTitle = "1x A100/H100 (80GB) or 4x RTX 4090 (TP=4)";
        hwDesc = "Ideal for standard datacenter deployment. Sits comfortably inside a single high-end 80GB card with plenty of throughput headroom.";
        glowColor = "rgba(139, 92, 246, 0.4)"; // purple
      } else if (totalGB <= 152) {
        hwTitle = "2x NVIDIA A100 / H100 (80GB) (TP=2)";
        hwDesc = "Requires a multi-GPU serving engine with TensorParallel 2 to split the model weights across dual cards.";
        glowColor = "rgba(236, 72, 153, 0.4)"; // pink
      } else if (totalGB <= 304) {
        hwTitle = "4x NVIDIA H100 (80GB) (TP=4)";
        hwDesc = "High-tier serving setup. Requires an 8-card server node configured to run TP=4 to handle weights and huge active query context batching.";
        glowColor = "rgba(239, 68, 68, 0.4)"; // red
      } else {
        hwTitle = "8x NVIDIA H100 (80GB) Node (TP=8)";
        hwDesc = "Enterprise scale. Requires a full DGX server cabinet node to host the model weights and parallelize prompt evaluations.";
        glowColor = "rgba(239, 68, 68, 0.6)"; // strong red
      }

      if (hwTitleEl) hwTitleEl.textContent = hwTitle;
      if (hwDescEl) hwDescEl.textContent = hwDesc;
      if (hwBox) {
        hwBox.style.borderColor = glowColor;
        hwBox.style.boxShadow = `0 4px 20px ${glowColor.replace("0.4", "0.15")}`;
      }
    }


    // ========================================================
    // MOCK INTERVIEWS Simulator CONTROLLER
    // ========================================================
    renderMocks() {
      const container = document.getElementById("mock-questions-container");
      if (!container) return;

      container.innerHTML = "";

      const activeBtn = document.querySelector(".mock-cat-btn.active");
      const category = activeBtn ? activeBtn.getAttribute("data-category") : "all";

      const filtered = mockQuestionsData.filter(q => {
        return category === "all" || q.category === category;
      });

      filtered.forEach(q => {
        const isReviewed = this.state.reviewedMocks.includes(q.id);
        const card = document.createElement("div");
        card.className = `mock-question-card ${isReviewed ? 'answer-revealed' : ''}`;
        card.id = `mock-${q.id}`;

        let labsBadges = "";
        q.labs.forEach(lab => {
          const labClass = lab === "OpenAI" ? "lab-openai" : 
                           lab === "Anthropic" ? "lab-anthropic" : "lab-google";
          labsBadges += `<span class="q-lab-badge ${labClass}">${lab}</span>`;
        });

        card.innerHTML = `
          <div class="mock-card-header">
            <div class="q-title-area">
              <div class="q-meta-tags">
                <span class="q-category-tag">${q.category}</span>
                <div class="q-labs-tag">${labsBadges}</div>
              </div>
              <h3>${q.title}</h3>
            </div>
            <button class="reveal-answer-indicator">
              ${isReviewed ? "Model Answer Revealed" : "Reveal Answer"}
            </button>
          </div>
          <div class="mock-answer-body">
            <p><strong>Question Context:</strong> ${q.question}</p>
            <div class="answer-detail-wrapper">
              ${q.answer}
            </div>
          </div>
        `;

        const header = card.querySelector(".mock-card-header");
        header.addEventListener("click", () => {
          const wasRevealed = card.classList.contains("answer-revealed");
          
          if (!wasRevealed) {
            card.classList.add("answer-revealed");
            if (!this.state.reviewedMocks.includes(q.id)) {
              this.state.reviewedMocks.push(q.id);
              this.state.save();
            }
          } else {
            card.classList.remove("answer-revealed");
            // Keep in reviewed history even if collapsed
          }

          this.updateAllUI();
        });

        container.appendChild(card);
      });
    }

    bindMockEvents() {
      const catBtns = document.querySelectorAll(".mock-cat-btn");
      catBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          catBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          this.renderMocks();
        });
      });
    }

    // ========================================================
    // PORTFOLIO PROJECT BUILDER CONTROLLER
    // ========================================================
    bindProjectEvents() {
      const genBtn = document.getElementById("generate-project-btn");
      if (genBtn) {
        genBtn.addEventListener("click", () => {
          this.generateProject();
        });
      }
    }

    generateProject() {
      const focus = document.getElementById("project-focus")?.value;
      const diff = document.getElementById("project-difficulty")?.value;
      
      const placeholder = document.getElementById("project-output-placeholder");
      const content = document.getElementById("project-output-content");
      
      if (!focus || !diff || !placeholder || !content) return;

      const template = projectTemplates[focus];
      if (!template) return;

      placeholder.style.display = "none";
      content.style.display = "flex";
      
      // Determine complexity desc
      const complexityTitle = diff === "intermediate" ? "Intermediate (Solid Portfolio)" : "Advanced (Staff/Senior Portfolio)";
      const difficultyDesc = template.difficulty[diff];

      // Format Tech tags
      let techHTML = "";
      template.tech.forEach(t => {
        techHTML += `<span class="tech-tag">${t}</span>`;
      });

      // Format Challenges
      let challengesHTML = "";
      template.challenges.forEach(ch => {
        challengesHTML += `<li>${ch}</li>`;
      });

      content.innerHTML = `
        <div class="project-spec-header">
          <h3>${template.title}</h3>
          <div class="spec-badges-row">
            <span class="badge lab-openai">${complexityTitle}</span>
            <span class="badge lab-google">${focus.toUpperCase()} Focus</span>
          </div>
        </div>

        <div class="project-spec-section">
          <h4>Core Concept</h4>
          <p>${template.desc}</p>
        </div>

        <div class="project-spec-section">
          <h4>Architecture &amp; Flow Diagram</h4>
          <div class="architecture-flow">${template.diagram}</div>
        </div>

        <div class="project-spec-section">
          <h4>Technology Stack</h4>
          <div class="tech-tags-list">${techHTML}</div>
        </div>

        <div class="project-spec-section">
          <h4>Scope &amp; Deliverables (${diff.toUpperCase()})</h4>
          <p>${difficultyDesc}</p>
        </div>

        <div class="project-spec-section">
          <h4>Advanced Challenges to Implement</h4>
          <ul class="challenge-list">
            ${challengesHTML}
          </ul>
        </div>
      `;

      // Smooth fade-in
      content.style.animation = "none";
      setTimeout(() => {
        content.style.animation = "fade-in 0.4s ease-out";
      }, 10);
    }

    // ========================================================
    // ACTIVE RECALL FLASHCARDS CONTROLLER
    // ========================================================
    renderFlashcard() {
      const cardContainer = document.getElementById("active-flashcard");
      const inner = document.getElementById("active-flashcard-inner");
      
      const frontTitle = document.getElementById("fc-front-title");
      const backTitle = document.getElementById("fc-back-title");
      const backDef = document.getElementById("fc-back-definition");
      const tagFront = document.getElementById("fc-tag");
      const tagBack = document.getElementById("fc-tag-back");
      const counterText = document.getElementById("fc-counter-text");

      if (!cardContainer || !inner) return;

      // Reset card state (face-front)
      cardContainer.classList.remove("flipped");

      const idx = this.state.currentFlashcardIndex;
      const total = flashcardsData.length;
      
      if (counterText) counterText.innerText = `Concept ${idx + 1} of ${total}`;

      const cardData = flashcardsData[idx];
      if (!cardData) return;

      if (frontTitle) frontTitle.innerText = cardData.front;
      if (backTitle) backTitle.innerText = cardData.front;
      if (backDef.innerHTML) {
        backDef.innerText = cardData.back;
      }
      if (tagFront) tagFront.innerText = cardData.category;
      if (tagBack) tagBack.innerText = `${cardData.category} - Details`;

      // Update button colors based on current mastery
      const isMastered = this.state.flashcardStatus[cardData.front] === "mastered";
      const masteredBtn = document.getElementById("fc-mastered-btn");
      const unmasteredBtn = document.getElementById("fc-unmastered-btn");

      if (masteredBtn && unmasteredBtn) {
        if (isMastered) {
          masteredBtn.className = "btn btn-success";
          unmasteredBtn.className = "btn btn-secondary";
        } else if (this.state.flashcardStatus[cardData.front] === "unmastered") {
          masteredBtn.className = "btn btn-secondary";
          unmasteredBtn.className = "btn btn-danger";
        } else {
          masteredBtn.className = "btn btn-secondary";
          unmasteredBtn.className = "btn btn-secondary";
        }
      }
    }

    bindFlashcardEvents() {
      const card = document.getElementById("active-flashcard");
      if (card) {
        card.addEventListener("click", () => {
          card.classList.toggle("flipped");
        });
      }

      // Prev Button
      const prevBtn = document.getElementById("fc-prev-btn");
      if (prevBtn) {
        prevBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (this.state.currentFlashcardIndex > 0) {
            this.state.currentFlashcardIndex--;
            this.state.save();
            this.renderFlashcard();
          }
        });
      }

      // Next Button
      const nextBtn = document.getElementById("fc-next-btn");
      if (nextBtn) {
        nextBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (this.state.currentFlashcardIndex < flashcardsData.length - 1) {
            this.state.currentFlashcardIndex++;
            this.state.save();
            this.renderFlashcard();
          }
        });
      }

      // Mastered Trigger
      const masteredBtn = document.getElementById("fc-mastered-btn");
      if (masteredBtn) {
        masteredBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const cardData = flashcardsData[this.state.currentFlashcardIndex];
          if (cardData) {
            this.state.flashcardStatus[cardData.front] = "mastered";
            this.state.save();
            this.updateAllUI();
            
            // Auto advance after short timeout if not at the end
            setTimeout(() => {
              if (this.state.currentFlashcardIndex < flashcardsData.length - 1) {
                this.state.currentFlashcardIndex++;
                this.state.save();
                this.renderFlashcard();
              }
            }, 300);
          }
        });
      }

      // Need Practice Trigger
      const unmasteredBtn = document.getElementById("fc-unmastered-btn");
      if (unmasteredBtn) {
        unmasteredBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const cardData = flashcardsData[this.state.currentFlashcardIndex];
          if (cardData) {
            this.state.flashcardStatus[cardData.front] = "unmastered";
            this.state.save();
            this.updateAllUI();

            // Auto advance
            setTimeout(() => {
              if (this.state.currentFlashcardIndex < flashcardsData.length - 1) {
                this.state.currentFlashcardIndex++;
                this.state.save();
                this.renderFlashcard();
              }
            }, 300);
          }
        });
      }
    }

    bindProfilerEvents() {
      // Rating buttons clicks
      document.querySelectorAll(".rating-blocks").forEach(block => {
        const skill = block.getAttribute("data-skill");
        block.querySelectorAll(".rate-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const val = parseInt(btn.getAttribute("data-val"), 10);
            if (this.state.skillsRatings) {
              this.state.skillsRatings[skill] = val;
              this.state.save();
              this.renderProfiler();
            }
          });
        });
      });

      // Target lab select
      const targetLabSelect = document.getElementById("profiler-target-lab");
      if (targetLabSelect) {
        targetLabSelect.value = this.state.targetLab;
        targetLabSelect.addEventListener("change", (e) => {
          this.state.targetLab = e.target.value;
          this.state.save();
          this.renderProfiler();
        });
      }
    }

    renderProfiler() {
      // 1. Update the buttons UI state based on current rating values
      const skills = ['math', 'pytorch', 'llm', 'rag', 'agents', 'infra'];
      
      skills.forEach(skill => {
        const rating = this.state.skillsRatings[skill] || 3;
        const block = document.querySelector(`.rating-blocks[data-skill="${skill}"]`);
        if (block) {
          block.querySelectorAll(".rate-btn").forEach(btn => {
            const btnVal = parseInt(btn.getAttribute("data-val"), 10);
            if (btnVal <= rating) {
              btn.classList.add("active");
            } else {
              btn.classList.remove("active");
            }
          });
        }
      });

      // 2. Generate SVG elements
      const svg = document.getElementById("radar-svg");
      if (!svg) return;
      
      // Clear svg contents
      svg.innerHTML = "";

      // Center and Radius
      const xc = 150;
      const yc = 150;
      const R = 105; // Make the chart slightly larger to fit well within 300x300

      // Helper function to get coordinates
      const getCoords = (i, val) => {
        const angle = (i * 2 * Math.PI / 6) - (Math.PI / 2);
        const r = R * (val / 5);
        return {
          x: xc + r * Math.cos(angle),
          y: yc + r * Math.sin(angle)
        };
      };

      // Draw background concentric hexagons (levels 1 to 5)
      for (let level = 1; level <= 5; level++) {
        const hexPoints = [];
        for (let i = 0; i < 6; i++) {
          const { x, y } = getCoords(i, level);
          hexPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
        }
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        polygon.setAttribute("points", hexPoints.join(" "));
        polygon.setAttribute("class", `radar-grid-ring radar-grid-level-${level}`);
        svg.appendChild(polygon);
      }

      // Draw axis lines from center to outer vertices (level 5)
      for (let i = 0; i < 6; i++) {
        const { x, y } = getCoords(i, 5);
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", xc);
        line.setAttribute("y1", yc);
        line.setAttribute("x2", x.toFixed(1));
        line.setAttribute("y2", y.toFixed(1));
        line.setAttribute("class", "radar-axis-line");
        svg.appendChild(line);
      }

      // Draw axis text labels
      const labels = [
        "DL Math",
        "PyTorch",
        "LLM Arch",
        "RAG",
        "Agents",
        "Infra"
      ];

      for (let i = 0; i < 6; i++) {
        const angle = (i * 2 * Math.PI / 6) - (Math.PI / 2);
        // Position label slightly further than max radius
        const labelR = R + 18;
        const lx = xc + labelR * Math.cos(angle);
        const ly = yc + labelR * Math.sin(angle);
        
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.textContent = labels[i];
        text.setAttribute("x", lx.toFixed(1));
        text.setAttribute("y", ly.toFixed(1));
        text.setAttribute("class", "radar-axis-label");
        
        // Alignments based on angle
        if (Math.abs(Math.cos(angle)) < 0.1) {
          text.setAttribute("text-anchor", "middle");
          if (Math.sin(angle) < 0) {
            text.setAttribute("y", (ly - 4).toFixed(1)); // shift top label up slightly
          } else {
            text.setAttribute("y", (ly + 8).toFixed(1)); // shift bottom label down slightly
          }
        } else if (Math.cos(angle) > 0) {
          text.setAttribute("text-anchor", "start");
          text.setAttribute("x", (lx + 2).toFixed(1));
        } else {
          text.setAttribute("text-anchor", "end");
          text.setAttribute("x", (lx - 2).toFixed(1));
        }
        // Vertical centering alignment helper
        text.setAttribute("dominant-baseline", "middle");
        svg.appendChild(text);
      }

      // 3. Draw Target Lab Polygon (if selected)
      const targetLab = this.state.targetLab || "openai";
      const targetProfiles = {
        openai: { math: 5, pytorch: 4, llm: 5, rag: 3, agents: 4, infra: 5 },
        anthropic: { math: 4, pytorch: 4, llm: 5, rag: 4, agents: 5, infra: 4 },
        deepmind: { math: 5, pytorch: 5, llm: 5, rag: 3, agents: 3, infra: 5 }
      };

      if (targetLab !== "none" && targetProfiles[targetLab]) {
        const targetProfile = targetProfiles[targetLab];
        const targetPoints = [];
        skills.forEach((skill, i) => {
          const val = targetProfile[skill];
          const { x, y } = getCoords(i, val);
          targetPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
        });
        
        const targetPolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        targetPolygon.setAttribute("points", targetPoints.join(" "));
        targetPolygon.setAttribute("class", "radar-polygon-target");
        svg.appendChild(targetPolygon);
      }

      // 4. Draw User Profile Polygon
      const userPoints = [];
      skills.forEach((skill, i) => {
        const val = this.state.skillsRatings[skill] || 3;
        const { x, y } = getCoords(i, val);
        userPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      });

      const userPolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      userPolygon.setAttribute("points", userPoints.join(" "));
      userPolygon.setAttribute("class", "radar-polygon-user");
      svg.appendChild(userPolygon);

      // Draw active dots at the vertices for the user polygon to make it look extra premium
      skills.forEach((skill, i) => {
        const val = this.state.skillsRatings[skill] || 3;
        const { x, y } = getCoords(i, val);
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x.toFixed(1));
        circle.setAttribute("cy", y.toFixed(1));
        circle.setAttribute("r", "4");
        circle.setAttribute("class", "radar-user-dot");
        svg.appendChild(circle);
      });

      // 5. Compute Alignment Score and Action Plan
      let score = 0;
      let lowestSkill = "math";
      let lowestVal = 6;

      skills.forEach(skill => {
        const val = this.state.skillsRatings[skill] || 3;
        if (val < lowestVal) {
          lowestVal = val;
          lowestSkill = skill;
        }
      });

      if (targetLab !== "none" && targetProfiles[targetLab]) {
        const targetProfile = targetProfiles[targetLab];
        // Calculate similarity score: min(userVal, targetVal) / targetVal average
        let totalRatio = 0;
        skills.forEach(skill => {
          const userVal = this.state.skillsRatings[skill] || 3;
          const targetVal = targetProfile[skill];
          totalRatio += Math.min(userVal, targetVal) / targetVal;
        });
        score = Math.round((totalRatio / 6) * 100);
      } else {
        // User profile only: average score percentage
        let totalVal = 0;
        skills.forEach(skill => {
          totalVal += this.state.skillsRatings[skill] || 3;
        });
        score = Math.round((totalVal / 30) * 100);
      }

      // Update alignment score UI
      const scoreEl = document.getElementById("profiler-alignment-score");
      if (scoreEl) {
        scoreEl.textContent = score;
      }

      // Dynamic action plans based on lowest skill
      const actionPlans = {
        math: "Your primary gap is in DL Foundations & Math. We recommend reviewing **Phase 1 (Linear Algebra & Calculus)** checklist items, implementing **Backpropagation and Optimizer equations from scratch**, and reading the original transformer papers to master the attention equations.",
        pytorch: "Your primary gap is in PyTorch Optimization. We recommend building a **custom PyTorch autograd layer**, running the **PyTorch Profiler** on standard models to identify memory bottlenecks, and reading the FSDP/DDP documentation in depth.",
        llm: "Your primary gap is in LLM Architectures. We recommend writing a complete **Decoder-only Transformer from scratch in PyTorch** (refer to Phase 2 checklist), manually calculating KV Cache sizing, and implementing a basic **FlashAttention wrapper**.",
        rag: "Your primary gap is in RAG & Vector Databases. We recommend working on **Phase 3 tasks**, implementing a manual **HNSW retrieval traversal script**, and setting up a hybrid search using BM25 and a cross-encoder reranker.",
        agents: "Your primary gap is in Stateful Multi-Agent Systems. We recommend building **stateful loop workflows using LangGraph** (Phase 4), writing strict schemas for JSON tool calling protocols, and testing LLM output validations with Pydantic.",
        infra: "Your primary gap is in Serving & GPU Infrastructure. We recommend profiling serving metrics with **vLLM PagedAttention**, running local quantization experiments (AWQ/GPTQ/GGUF) using our VRAM calculator, and testing inference scaling bottlenecks."
      };

      const actionPlanEl = document.getElementById("profiler-action-plan");
      if (actionPlanEl) {
        let formattedText = actionPlans[lowestSkill] || "Select ratings on the left to see your personalized recommendations.";
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        actionPlanEl.innerHTML = formattedText;
      }
    }
  }


  // 4. INSTANTIATE APP & EXPOSE TO GLOBAL
  document.addEventListener("DOMContentLoaded", () => {
    window.app = new AppController();
  });

})();
