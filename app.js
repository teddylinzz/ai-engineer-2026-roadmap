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
    {"title": "California Proposes AI 'Kill Switch' and Mandatory Safety Oversight", "category": "Industry & Safety", "date": "November 20, 2026", "org": "Law Commentary", "desc": "California Proposes AI 'Kill Switch' and Mandatory Safety Oversight&nbsp;&nbsp;Law Commentary", "link": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNOEJ3cUVSY1E2dkFCak5MWUR3YVRpeXl4cXp1VWlwanFWb0tLY0o3NVhGZWl4dkVLelkwNkpaUGhuanZwZS1TQ3FrVUZmbl9sVnl1X0ZzSVFOTU9wcWNLYWhrS1VuRk9yckFrbGlieF9QZXNFZUd1LWdoSTFNOV94Qm4wd3FoZllLU19jSk1TeGhORGdsT0E?oc=5"},
    {"title": "Asia shares drop on AI worries, echoing Wall Street's decline despite the strong Anthropic debut - ABC News", "category": "Models", "date": "November 20, 2026", "org": "Breaking News, Latest News and Videos", "desc": "Asia shares drop on AI worries, echoing Wall Street's decline despite the strong Anthropic debut&nbsp;&nbsp;ABC News - Breaking News, Latest News and Videos", "link": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPdnZzQ25ucktqYTRpZVBGZmxRYzV5NkVOdlBvcno0RV9hVW5aRk0xSmQzWWRXV2tjWjN2YUFoWldXTVcydjN4Q0d5UURuQUxhZGhzVVNiWUtKbzJrbWR1TG9tZGsxWUVwRkF3a2pTMVNhenNrRm9kazdWMjNDNlFDWW9tcTN1R1d4b284OGxJLXUxX0ppOVHSAZsBQVVfeXFMTnBNdmtqamoxYWgyVjdrUGVTRTF4bFRnRXE0TU9rNFJLbUt0M05VS0hmQ3NBODVuSEl4NEdaeFc0UW9jbS1xa0t0MXhlWHVnZGgxelZDN2hkcEhpVVdqamU0Uk8yYkZzSEVoQUlUaklydmZKcTh2UjFBSlVILU1EaEtJbnZyNy1aNk44VFRrZTd4eXp0bUpLZUMyNFk?oc=5"},
    {"title": "Urinary Multi-Omics and Artificial Intelligence Framework Proposed for Bladder Cancer Management", "category": "Models", "date": "November 20, 2026", "org": "Bioengineer.org", "desc": "Urinary Multi-Omics and Artificial Intelligence Framework Proposed for Bladder Cancer Management&nbsp;&nbsp;Bioengineer.org", "link": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPS3FiTjJQbFdhVVRiRWczX3ZZYlZ4cUhFU2VFTkxnaE1JMFl0cWNUT0hRVG5mNWNFV2w2eWFnYWNaVzVzMUI4YjVGZXRsdE1uTmphU1JvS1dxbHRxZG5CQ3ZKdFk4enpUMTEzX09zY2RpMldoaXI1RDRHQ04xV3paanEwZkpvRVdINWNQSDlhTU1IOXdrcDNFei1WLXo2VURFM1A5d0pDSVhPdVkxckU1N2txMHAwcUo0eFFXUDFn?oc=5"},
    {"title": "AI-generated picture misrepresented as ex-Nvidia CEO and his wife", "category": "Hardware & Infrastructure", "date": "November 20, 2026", "org": "AFP Fact Check", "desc": "AI-generated picture misrepresented as ex-Nvidia CEO and his wife&nbsp;&nbsp;AFP Fact Check", "link": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFB6bXhmREtTVUFYM0Nab010SmxTUmhKV2VRZ1NqUE5HZHFwbUZIWkNGSTdYdm9TMWE4cXdOMU8xTnpYRkFoMGo4UnZ1ODBTQ0tmNkJDaTdGUzY?oc=5"},
    {"title": "Anthropic pulled off the biggest IPO ever. What that means, by the numbers", "category": "Models", "date": "November 20, 2026", "org": "The Washington Post", "desc": "Anthropic pulled off the biggest IPO ever. What that means, by the numbers&nbsp;&nbsp;The Washington Post", "link": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQZmU4cVJXcTkwZWQ3dUgwTDVKbVdWTkJqUEVjOTQtUVZZUldaVVBPQ3lHSGREcDNOcHE3d085RzBZQ2wtWVhBT2gyZTJhb25YTkhZRGJDWTRzU3A1ZUxxLVlOUF9NVWtqVE03eW1STVhoQmhKQVR6NWplZ1VrU2JUY0h2enVvT2dTZGxpeTU3N2Fud2lnWHY1QkVfRC1zVFVOc3B4bS1sazNmd1VRVkpFbGN1aFZYaUVlZllZeGRQemw?oc=5"},
    {"title": "Asia Shares Drop on AI Worries, Echoing Wall Street's Decline Despite the Strong Anthropic Debut", "category": "Models", "date": "November 20, 2026", "org": "U.S. News & World Report", "desc": "Asia Shares Drop on AI Worries, Echoing Wall Street's Decline Despite the Strong Anthropic Debut&nbsp;&nbsp;U.S. News & World Report", "link": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxObUloT2ZfQ0trWVh6MWJxYURCRE41T3k0QzdvMHB5NlJKaW5VTGstMXZhVWZSQXBFeVg0ZDN5OWRvQTRBcDk0RE92X3BDRkc3bjdYc2RXOTlGckdONGpwa0tpRjNVRzNDS0F0c2xKWWZ4QzR5WWtBSHM4aG1DUmZKcmVnWkhnRGFHcjhjeFBNalh5NnlaWkx5T1pybjhUN2FVZXlOVWdxOXBfekdDeGZ0MkRSdW5zaTluOU1kaTh0RlNybnJQT1hjajFKNmtQNWRoeGMxUTRNU1k1QjRkZ3A3Mk9ST1hyUQ?oc=5"},
    {"title": "'Insane' to see AI in hands of private giants: ex-Anthropic researcher to AFP", "category": "Models", "date": "November 20, 2026", "org": "AFP.com", "desc": "'Insane' to see AI in hands of private giants: ex-Anthropic researcher to AFP&nbsp;&nbsp;AFP.com", "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNeXJYaEdkQ2pmbXZfajBsZWUxdHh4NVUtSTl3dzRhWXZwSHRjNjFKeHU0QlJUV2dPVWhiV19DdGFnTFV5eTV0R1hjV2JoMzJVVWFJTWlMT0RBNUpLdEw0UEFqQmVRRTFMcFlVWHhFZzFQS21MSnV1eXFvaDd2SUZ4Wk1Lb3pNNEdXUGgzT1JR?oc=5"},
    {"title": "China\u2019s AI Firms Are Addicted to Nvidia Chips. Now They Are Facing Withdrawal.", "category": "Hardware & Infrastructure", "date": "November 20, 2026", "org": "WSJ", "desc": "China\u2019s AI Firms Are Addicted to Nvidia Chips. Now They Are Facing Withdrawal.&nbsp;&nbsp;WSJ", "link": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNeHpsUWpRNHV2N1B5QVI4LUdwb1VMWjB1aXRnV2I0YkowdGZDRnBLeGJWYWx3UERrRXNWWmh4QV9wQkd0UlUydEp6WDVYMVJBMHNSOXJUMHhHUUMtbjUzUFp1aXdlX283dWt1aDlUaWhYQW5oNkozeGY2dUVSbkxiZjQ2Nkd0QjBfVjVLRW44YktRbTMtdEx5ZWZuTGl6LVVvRWpWS1hfZU9pR0RVVkRYUUh3?oc=5"},
    {"title": "The \u2018new norm\u2019: How AI is driving mass tech outages", "category": "Models", "date": "November 20, 2026", "org": "Politico", "desc": "The \u2018new norm\u2019: How AI is driving mass tech outages&nbsp;&nbsp;Politico", "link": "https://news.google.com/rss/articles/CBMif0FVX3lxTE92bndjYXU1Y1FBLVdoV0dwUUZlcFA1OXFpWE50ZTk5MTRvdlpkNnkzSnM0SV8tNWZzUThXUVhJbnhJMFo3d0syZzI5eVZsZkZKYUtNWnV5OU5YQTNpd1U5NTdYOFlEQVE3d2MxWTJlZnBtUmtUeDR3T2lMWEMzeDg?oc=5"},
    {"title": "Second case in weeks: Commissioner questions Gilbert police use of AI in report", "category": "Models", "date": "November 20, 2026", "org": "AZ Family", "desc": "Second case in weeks: Commissioner questions Gilbert police use of AI in report&nbsp;&nbsp;AZ Family", "link": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxORXZpejJKRk5oMTEyTjhMLTY4VG0wcy0yaUdyUGY1WkwtZEUwYUt6Sm9uVTFFNWs1U1pVaFZrQU9qV0FzSGwxU1hZTjkwMkloZm4xVU1jbklsY1hnUnlnZVFmc0pmZmo2dllTSkE4UmJSdFpiZlluQmw3bERVR3JmQVduUkF2RndESHh5d1Zpc1kxRElnR25IU0FWTDFnQjg3RHlzdjQtVWNHUQ?oc=5"},
    {"title": "Apple Expands Team Building Privacy-First AI Agent", "category": "Models", "date": "November 20, 2026", "org": "PYMNTS.com", "desc": "Apple Expands Team Building Privacy-First AI Agent&nbsp;&nbsp;PYMNTS.com", "link": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQckY3dFNxT0w3V250LWIyaU9mUTBzSTV6dnB1WDBiaG5iSEd0a2xGNEVXU0VzUXZ3UVBuRk1UZlZuVUZEaWFYREdyYk9MRU1ROVRTUHUtZ3J0SlpPLUFqcVd4VHRuQktLd3g5SEFrUldQMmVFNWZ3M0tLV2oxUjJpZFVTV2pJUmFMeFFaeUpfNmw4X3ZybWE1M2NrR0hIaHg0bDFNdWtWdjRMUjBO?oc=5"},
    {"title": "SoftBank plunges over 16% as AI sell-off hits Asian tech stocks following Anthropic debut", "category": "Industry & Safety", "date": "November 20, 2026", "org": "CNBC", "desc": "SoftBank plunges over 16% as AI sell-off hits Asian tech stocks following Anthropic debut&nbsp;&nbsp;CNBC", "link": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPV0Z3OWtzZHlQVU5iZEZqYV91VG00Vnd6M2J3dk12bUhiSmNRN21Vc3Z3Q3YyVjZLRDZjZmF4d0t3QWJDNTJzX0VfNzh6QmhueTIyUndyRkRkdWFpclpEcmVsVFpMTjRHeml3UEtQSklzcy12VVRlQ1F6WjcyNEh1UVN3b190d28zY2fSAY8BQVVfeXFMT3pEcUJ3Qmgwb3NFM3BNd1p2Rk5DYmZSaHVZcUxMeWFJZW9DQldzTXlaOHdBQ3Y4ZHhRbWVEZ0xwSVJnT1hOSWhJc0FOXzVvS3JsTWxibE9zc0xTRXlFcThPWkZHb1Fvd2pvNXM4eEtSejFMcm9oYWZXbUFzTWxEaE11ZzlCaWNYRktQUTAyLWM?oc=5"},
    {"title": "4K Steelbook of \u2018A.I. \u2014 Artificial Intelligence\u2019 Due Dec. 15 From Alliance", "category": "Models", "date": "November 20, 2026", "org": "Media Play News", "desc": "4K Steelbook of \u2018A.I. \u2014 Artificial Intelligence\u2019 Due Dec. 15 From Alliance&nbsp;&nbsp;Media Play News", "link": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQVVB4NlZmWXA5Z0d2eGpvOGNPc0lnRVBXbGdkekJBNXpndGpPRlBBTmpxUEIyMGZ0NWNtaFNPVUtzYlBtZlhtX09feWR1OVZZM0JnbEFUX2xMS1JEa1FoV2w3UTRJQk1UVEFhYXp6TGo0cFE1MWZoaWZRcXc5aHA1ZjViQ1l2dEU0UHJVRDVB?oc=5"},
    {"title": "Amazon SageMaker Inference: 2026 launches in review, part 2", "category": "Models", "date": "November 20, 2026", "org": "Amazon Web Services (AWS)", "desc": "Amazon SageMaker Inference: 2026 launches in review, part 2&nbsp;&nbsp;Amazon Web Services (AWS)", "link": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOT3dsSHNLeG15cTVodDZEZnNoQlhWVG1wdTJaMEhxaHQtNXBldkZOUEJXUEY4VTdGOERUeHEwQ1h6b3g2d04wbDBxMlJ5OUdha3dzUDZsVmZuSjRnMURWalh3U3ZHQWtuVko0ZmI5a0ZCcUk0NFNUQ3hIVk9VVnh3VjFma3NKdGh5d1lQY2tva0dEVGZDOXA4UlNmcFNsQndZSi1Ya3Fudw?oc=5"},
    {"title": "Use Kimi Code CLI with models on Amazon Bedrock", "category": "Models", "date": "November 20, 2026", "org": "Amazon Web Services (AWS)", "desc": "Use Kimi Code CLI with models on Amazon Bedrock&nbsp;&nbsp;Amazon Web Services (AWS)", "link": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNcEd2ZmhadFZGeTN4NTlHcm5lbW01Mm42cWJpV1ZLRHZmT3c0N2duQ3NNQWJPTmFqamhHcnlvVTl2cGoxVzViRVlpUkRNUlFjSW5FeXFvYmtHZjZkOURsX3VDaXI5Y1dKTF9DdVBXNWRpdXhhaUJuYVlYSksxbUoyN1lacmpfb3R2NHNFXzFzaGhISW1HdmZxdy1n?oc=5"},
    {"title": "Artificial Intelligence Meets Numismatics: PNG to Explore AI at 2027 FUN Convention", "category": "Models", "date": "November 20, 2026", "org": "CoinWeek", "desc": "Artificial Intelligence Meets Numismatics: PNG to Explore AI at 2027 FUN Convention&nbsp;&nbsp;CoinWeek", "link": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPbzRNUGRZNllFYzdyTS03LXI0LVJhUkNFM3d6aHhHNkVESW4wUk00SWU4MTBiY1BfVzJ4MXdlRV80cmdlM0I3MGlzU29OTXhNOWJRVWZrdG9PNVROaTFWV3RCelBDektnbXBZT3BpUWZ2VjNpTGdrdUxTYWZWN1MzTTd3eVA3d1FrYWtpeTFiaHpHd3dmZTZYTlQ4VDJBVWdIMERhLS1Jdw?oc=5"},
    {"title": "Anthropic\u2019s I.P.O. Turns Tech Researchers Into Overnight Millionaires", "category": "Models", "date": "November 20, 2026", "org": "The New York Times", "desc": "Anthropic\u2019s I.P.O. Turns Tech Researchers Into Overnight Millionaires&nbsp;&nbsp;The New York Times", "link": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNcWFRMHVMWFROREx5em8wYWdDZ2pvUk9nLV9OZS10bjZCVVE4Nmd3bEt3ZFZhZUFsdjU3S3RwMThTZzVsSUY5TEd4RlYwbGp0dVRZX3dTOGVjTVlVNWgxeGo5b0I2aG92ZTNmTTB3SzFfX2s5anZDTFZtbGpteDdnY2JTakFKTHdD?oc=5"},
    {"title": "Intel and Microsoft: Building security for the AI PC, together", "category": "Industry & Safety", "date": "November 20, 2026", "org": "Intel", "desc": "Intel and Microsoft: Building security for the AI PC, together&nbsp;&nbsp;Intel", "link": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPZUJMV0RXUk9LazZkLVBray1vMFZsSVNNM0xhSXczX1BwT2h2bE43aEJRZzBDTV9CVzBlMlE5WkRueEt5RkV2aXZiY1ZYS1JLNFZUcGl5T21HZHB3WXhLaDhtOWVCMVNPWTFKQWhWQjcxTTdwUG9VUWdJcy02NDVZWUp1VGdVUUxOSlc5YUEyQUNfV3JjTS1yNzhNSGM0Smw2TjZNU2xrMVhWa0U?oc=5"},
    {"title": "Egyptian Public Health Journal Marks Centennial Milestone With Expansion Into Artificial Intelligence", "category": "Models", "date": "November 20, 2026", "org": "Bioengineer.org", "desc": "Egyptian Public Health Journal Marks Centennial Milestone With Expansion Into Artificial Intelligence&nbsp;&nbsp;Bioengineer.org", "link": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOOHNtQVFKdERHNG0zQ2plR2huTXIzY1E2U0RtMERhdDdzSU9WY00zMHMzX3E5RDNqbzRhN1ZLMm1zQXp6YXBPZDBZMWZnWE9VQWxNOXlEU0NMci12U1NxTEZvVS1WQjJuejg2RWxDUFFNekxBeG9ObnRHZHZOb2FLTXhXc0FfSUJ4a0JLeTk2YUJsSU5DOWI5SXBCSWxYNzN5SG1qd3hsa25fdlJXMVNXbmFrd09Ga0RyRFhobHpzVTE2YVVX?oc=5"},
    {"title": "Meta Staffers Say Muse AI Agent Made Unauthorized Booking and Accessed Private Apps", "category": "Models", "date": "November 20, 2026", "org": "PYMNTS.com", "desc": "Meta Staffers Say Muse AI Agent Made Unauthorized Booking and Accessed Private Apps&nbsp;&nbsp;PYMNTS.com", "link": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxOWlFyMWRqWGZldUlJRFZ3d3JfeklKa2FKdEFyejlXNHNSbDE2ZmlFcEM4cldZREpOYTFHelhFOVF4aHVkUVZZSFBjdXVNUnZ3akhTXzFOdXJiWGZHSGhlcGJ5dGd3WlBFaHlQLTdBeXZmT2RVOHN1R3VFa3dPbDVINEFfb3FhcVpELW54SkMzVEF4cUdJLVNZaHRSSmFGOTJLbFlGZWNNXzRpalVFRFJQeEdnSjhpaG9EbVhENkxoeTRrODRuZ3J3RTZoZHQ0VjFuQWN6Z0JVc0g?oc=5"},
    {"title": "Judge questions use of AI in police reports as Gilbert police defend practice", "category": "Models", "date": "November 20, 2026", "org": "AZ Family", "desc": "Judge questions use of AI in police reports as Gilbert police defend practice&nbsp;&nbsp;AZ Family", "link": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPU2dxcUlmbkU0NUx0djd1VW9qVjZSU28zQXZCcE8yQS1NWjlkSS1rTTdxMDhjam1FNXprczJQNS1hYl85b3JUd2ZHbWFPV2NCcmQtRnJJeHBkbk00Q1VxNzc5MGxmQTg2UHNKcDQ2OWxYOElyNmcydW9CVzNIYzZZSkZ6UXZVbUIwQ0xZVi1zeFljQnRzWmRkMWt1RGxPbllNVHgtS1pKZnZ1X0NWWlo2ZQ?oc=5"},
    {"title": "New UB North Campus structure to house AI supercomputer system for research uses", "category": "Hardware & Infrastructure", "date": "November 19, 2026", "org": "WGRZ", "desc": "New UB North Campus structure to house AI supercomputer system for research uses&nbsp;&nbsp;WGRZ", "link": "https://news.google.com/rss/articles/CBMivwFBVV95cUxPcExZZkZhQjllUHJmZlJvdjI4bkpXUFVlSERYYWFEQUZJN0RNS0JQVTd2eVFJT01pdjBOeXBkNVJlTnJFaFJ4ODRSVHZZSVVhNGRjdnN1dWlMSmhtZm11c0JBRVhGQmJGOFBEWkluY08yUUdDOUE4ZTI4UWQ2OU9BTHFDQlFyVklwY1JTdTBVckRkU0FIMG00dGg1LUp2YTlnUEhwOGFoVnRvU2RCMUl0ZFNuX3cyN1NSSFpLQmYxZw?oc=5"},
    {"title": "Hackers attacked the European Commission using artificial intelligence \u2013 employees\u2019 data was put at risk", "category": "Models", "date": "November 19, 2026", "org": "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0456 \u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u041d\u043e\u0432\u0438\u043d\u0438 (\u0423\u041d\u041d)", "desc": "Hackers attacked the European Commission using artificial intelligence \u2013 employees\u2019 data was put at risk&nbsp;&nbsp;\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0456 \u041d\u0430\u0446\u0456\u043e\u043d\u0430\u043b\u044c\u043d\u0456 \u041d\u043e\u0432\u0438\u043d\u0438 (\u0423\u041d\u041d)", "link": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNUlR0b2NtT0RldFNQOVVoS2U0Tlp3VVA1eDNYczJNZmFrTGlHaDZSSmZYdVB5N3hQUUZjNmNBRFJ6TDEzY0ZzcnFCZFBVNzZFcy0yT3Z6b0RDdGxTOVRJWWkxcXl5MG5oam9mbnZnLUxPZjVDaWlVRW0tU0tJSzg0WHVQOTRmOGNONUNNSUZUamFLdUZGU2hKSTROLUd4Qy1CcmdHcGFManhYT2U1S1FQY0ZMaVBYVVd3aFZiQi1NSk1KQdIBwAFBVV95cUxQYzJVNzRFUFZWOUN6YXBxcnZCQWpOMmtwQlZPN01PT3o5bzRjanlWcGd6MG1INEM4UVVvUjFUb2hSODVXWjNzTXVpR2N5SmpYV0hNanpKSFRTNDQ3VTNJWkVneWpoLWZ4LVJFYkJnUkVBMTYwVkZzenUwOURGNGs3dEZCS1pkNUtVZ0g5Vjd5LXBzSFhNNXJzY2ZkYVl3NFdUMjZiem1HWVp1OUdORDVVNnFkQ0VwUi1sYVZyRzlOOGw?oc=5"},
    {"title": "Tech professional says AI is here to stay as tech stocks slide", "category": "Models", "date": "November 19, 2026", "org": "KFVS12", "desc": "Tech professional says AI is here to stay as tech stocks slide&nbsp;&nbsp;KFVS12", "link": "https://news.google.com/rss/articles/CBMingFBVV95cUxOQWljejNkR1lidUY0WV9YNjlDVTBKUVhpQ1NHSW9TWmsxay1SZFhMVnEzV2hxVVd5NGV0cnJKeFBEMk1UcnZvZnR1N3NMY2dqM2dsTjNraGZBNS0wOFlmN01wSlpYOW9BV2hRb0dYV00xUmVSQjB6V21MZm1yR3BscGhubkk1RzNvUHllbkUwRlB5ZGd0M2NyODRjQzFxdw?oc=5"},
    {"title": "Researchers Examine How Artificial Intelligence Could Reshape Clinical Evidence Production Systems", "category": "Models", "date": "November 19, 2026", "org": "Bioengineer.org", "desc": "Researchers Examine How Artificial Intelligence Could Reshape Clinical Evidence Production Systems&nbsp;&nbsp;Bioengineer.org", "link": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNeXU5WTlDc3RwUVlWVGo2NnVWVzVLWlRQQjBFWld5RFZEbGw0UFRZYmVEdUFoYVNYMXhVTENDX0c4dHg3VGpXZnFwektIS2hJVFFGUEtGdVV0Tk5SZkpXdS0xaHJVckNvTW1UODFIZFJNZ3pDWXVDVG9iSkhTSjVLMmh3SU40ZWk3TGZqZHU3MjhYcl91Q0hCVGFpNU1lYjNQNl9CcFoySkt3LU1XNW8tSWhWUE9SeWF0X3luaHlTTXc?oc=5"},
    {"title": "SFMTA approves $55 million contract with Hayden AI to use artificial intelligence to help ID parking, transit lane violations", "category": "Models", "date": "November 19, 2026", "org": "ABC7 Bay Area", "desc": "SFMTA approves $55 million contract with Hayden AI to use artificial intelligence to help ID parking, transit lane violations&nbsp;&nbsp;ABC7 Bay Area", "link": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxQM084U21SbTNOMDgtTk1LWTZDbFM5TTlpTU92aDBLNFhVUmFfVXVvQTlKSWVpOW51S1VDYW5zeU5yX25TTjVyZURCQnE0OEpKRU1OUFIybk5rOWFVT1djY25oWkh5a1liSjNlMEZ1QlNVRTV4ZkJGZUVPa3pYWUY3eUJWTXlwOU82bWlBVUpLV2ViaTViZ0lqY0xjOHAzMzhnblRmRV9IRUQ1bTA4cWhuazlQcXJsZDVVNjlEZVBhLVBoejBNVWtESnJPU1dROVRja1FBcU01SmpxdlNRc2t6Znln0gHnAUFVX3lxTE90U01DeU80MGVJc1pIeF8wMG1DYlhXVEJHNHFMUkdDcmhSRl9ySDdXWDJxUXdqY1dEWHhSck9pSWlMbHhuRTZZY1VYSmpHVGJqQndRTUthb0xPVm9Bbkp1allBRTdxSjJ0U1ppeGMtQTFNYTRSSWFnNEREeGo3NHR0ME1aTTdpYV96Y215TGVCdUVKd3c3X0tIcl80cWVKWUxKOVlOcTRlWTJhUUpyaWJOSWZJaHAyb1Y3a05oR2lidkJWckNZbURiN2dFZTlaVmZhVWtwMEpreGxEaTNhZHR3N2VsVE9SWQ?oc=5"},
    {"title": "Steven Spielberg\u2019s A.I. ARTIFICIAL INTELLIGENCE| Available on Limited Edition 4K UHD Steelbook December 15th", "category": "Models", "date": "November 19, 2026", "org": "Why So Blu?", "desc": "Steven Spielberg\u2019s A.I. ARTIFICIAL INTELLIGENCE| Available on Limited Edition 4K UHD Steelbook December 15th&nbsp;&nbsp;Why So Blu?", "link": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQQXI3RTFaZGo3Y2FEOVJ0MlJlNzhrY2dLSUV5bUtFU3YzTWtfUTIyUjNYbFh6NUMwVGdVZTNxLUlSQ2dNMmlVQXFlRHhBNDVRa0RqNXBhWFNzZXVobUhZQ2lFUWsydllMMm5nNVBLZkZXTmN6NlFDUnVucFZlUzkySnFtcWpfNXhJRDJ6US1IV0hfMDV5S1ZuR3lpRnBPQWRjRDdfZ1N3Zl8zYVlUY2tLQ3BZeXRKSVUwZHE4SVBYcTBPWnRiUlE?oc=5"},
    {"title": "Economist says stock slide reflects AI worries, not weak economy", "category": "Models", "date": "November 19, 2026", "org": "KUTV", "desc": "Economist says stock slide reflects AI worries, not weak economy&nbsp;&nbsp;KUTV", "link": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNVThaeURJTFdVOFVzOFZRRzk4cFVSZXdoZ3JZM3ZjeGlYX0RmQzcyMTI0MjV1UG9oWDRtLVJXRlBwVHpWUmEzcU91XzlzeUVDZkdWakJ3V2tlMjdFV29fQmNwN2VtQ3o2bnpuQ1BPZENkS0R5aUNLRG1RdjZtUkdaNnR3cmswZEQyYm4xbWF1Y2dYbEZ1dkE?oc=5"},
    {"title": "Border Valley Schools Aim for Middle Ground With AI", "category": "Models", "date": "November 19, 2026", "org": "GovTech", "desc": "Border Valley Schools Aim for Middle Ground With AI&nbsp;&nbsp;GovTech", "link": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPNGMtZ0NsU01GMWRHdWEyZVp0MUlvOW1oWGVkYVlxYmY0YlBXSHNKb3NvVnFYRHI5Q09PQUViNDEyaVNHRlhpMlN1cUl6ZzFQTW1CRDFObGQ5bEtjcV9WaHV2NUl4S04tc1Z0eUhyNmRBRUE3Q3ZNSk1ZM05LUXhOU2s5Vy1oS05UWFZqOEM4X3dJcVNf?oc=5"},
    {"title": "Van Hollen Puts AI at Center of His Challenge to Schumer", "category": "Models", "date": "November 19, 2026", "org": "Time Magazine", "desc": "Van Hollen Puts AI at Center of His Challenge to Schumer&nbsp;&nbsp;Time Magazine", "link": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNaVZtMXItb3VGd1kzTlEzdk1jTlBtNkVxMkQ5b0dVcnpYYmYzZmctX0lOZVlJZENJcThURW5wSDN3dzRFQUcwTTdrZVZ6aXBZOVZ5eUwxNFYtbENBX21YQ3lOeDRHVk85MTRTVWlCWERueVJmMFliYWl4ck4zUHhpbUV4U0FoOWNkcEY3bjU2U21oQUpILWxhTnpRdE5tWGhW?oc=5"}
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
