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
    {"title": "Is there a 'middle course' for implementing AI in NYC classrooms?", "category": "Models", "date": "August 05, 2026", "org": "Spectrum News NY1", "desc": "Is there a 'middle course' for implementing AI in NYC classrooms?&nbsp;&nbsp;Spectrum News NY1", "link": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPU1NWMHFGMUVhVngzU2tVYUxtOWdxdzQ1VHJUalRDVDkxbDk5VWlHdHlubjVMeHh3R2N1WU5JYUZUbm5vZ1JzdUpKdFFERi12TjAyc0RNZGZ6WTQzV3YyOTE3NWVDUV9ucmlVbk9TbUgtMmw0c2pueG5wYzl5TnVsZXNwdnJudmpTazlSQkJXQUlKVk1jdE1seTlBbm9jOEh3VC1mUngtVjk3bDhFc1lFMVpQUG5QYWpNMW9ubzdNdnItNURz?oc=5"},
    {"title": "Opinion | The E.U.\u2019s new AI law keeps the best technology out of European hands", "category": "Industry & Safety", "date": "August 05, 2026", "org": "The Washington Post", "desc": "Opinion | The E.U.\u2019s new AI law keeps the best technology out of European hands&nbsp;&nbsp;The Washington Post", "link": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQMGNPVldRVVB0NFhETE5lSk4zSXZ6WDhicnJiYUV6NVZ5b3hreW1nOXljWmpjdjEtMndOV2VKQjlDdC11YVRmRnpJdUFHVFJMRTVSVHJiYTVlM3BEamxITGVFYVY2dnZ4WUFjN1FnQWZ3Wkh4RmI2N2c2cmhKTG5hWU1KTW8td2FlWldoSkxIZHd1MDE3cTRKV21JRkRrdkQ1ckxJUW1Sa1NkRGp0SUZUSEZQR2YzZktubHc?oc=5"},
    {"title": "China\u2019s Open-Weight Models to Be Spared US Tests, US Firms Told", "category": "Industry & Safety", "date": "August 05, 2026", "org": "Bloomberg Government News", "desc": "China\u2019s Open-Weight Models to Be Spared US Tests, US Firms Told&nbsp;&nbsp;Bloomberg Government News", "link": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNa3BGLUEtRV9tSjhwbFNSdVNtRkhrdmN4MkVVMjdWcmZaT2F0dlJLTE9GeTg3bXJscmNUbGdlNHVQaGtrS3BSeGNmakRjdmFFVFlKOGtTS3U2V0hUU1ZLWXM0eHlsYmpSTWRESlROWHVkQ2k3TkY4eDBRTF9GcV9BNzZFbGFVNjVjVTRmbGFGTk91RzE3enU4cmk4SlRZNTBzWlhpdFo0cndvaXc?oc=5"},
    {"title": "Anthropic's AI used fake human profiles to trick people in safety test", "category": "Industry & Safety", "date": "August 05, 2026", "org": "BBC", "desc": "Anthropic's AI used fake human profiles to trick people in safety test&nbsp;&nbsp;BBC", "link": "https://news.google.com/rss/articles/CBMiWkFVX3lxTE05cW1FRW5ELW1tV0ZySExSZG4zek5yT3BaZVBJMDdBYms0Wk4ySEQ1YjVNVnp6X2RGR29ERG9OakpRQlpRT1JvTXhtZVdMTWVIV1JxUFdUQU9GUQ?oc=5"},
    {"title": "White House AI vetting plan to exempt lower-cost \u2018open\u2019 models", "category": "Models", "date": "August 04, 2026", "org": "Politico", "desc": "White House AI vetting plan to exempt lower-cost \u2018open\u2019 models&nbsp;&nbsp;Politico", "link": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNQS1FYUZPYVdVdDlxdWdUcU5xNmV5S1l0MVpGRmJjOHJiSHl1SmdvTDN6UTROcmh5MjJtdE5VTnRjM0JScGVYeUdPaW56cnEycFR5VGx1R0x6Q0VZREFQaDVyOUVoT09KRkxvLUJqb0c3T1R4dWxNUko0SldIT0tON2VlY2dOeEhSNVQtWFNta1FlYzNwLVIzNS1mbUlOT0pqRU5pdVVLLWtkbGNJSWc?oc=5"},
    {"title": "Microsoft vs. Aehr Test Systems: Comparing Revenue Trends Between These Artificial Intelligence Companies", "category": "Models", "date": "August 04, 2026", "org": "fool.com", "desc": "Microsoft vs. Aehr Test Systems: Comparing Revenue Trends Between These Artificial Intelligence Companies&nbsp;&nbsp;fool.com", "link": "https://news.google.com/rss/articles/CBMi5wFBVV95cUxPSWlKRnZrZ0JFaWtUVDlXc2YyeEFfQWtaZTgzRUZlQ0lKLTQwNHk5U005b1lmMTJya21kWUZnQ0R0Zlh6YlpJZ1J1ZlZKZGxCQ2ZPTTZRZDBfVDVZRkVqdWJjeDJUd01CQi1EeHJzaTcxWjJUdHpkUWJZc2tqb3pIVXVFYmwycXR0N1pMbVJfTVdOcVhWRHBPWWdDNXRfeHNBTGVNZ3lRMmlyLTZLa0d4bnJfYm5ZUW1nNDFUb1FCU29ZU1ZkNlRLQVdyaFFDaHdqNFoxeFE2ZEFZWHp2dkZGVjRLbmhaYlE?oc=5"},
    {"title": "White House AI Guidelines Exempt U.S. Open Models From Government Review", "category": "Industry & Safety", "date": "August 04, 2026", "org": "WSJ", "desc": "White House AI Guidelines Exempt U.S. Open Models From Government Review&nbsp;&nbsp;WSJ", "link": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQZGlqeXItS3prNUZ6V3BSRlQ0MzJ0NkdFNHF1SkVvY1RQUmlIb2wta2s3elpvUVNqMU4xS01WVEpRWVh1cGFJQlRlWHM1dzZsX0M3MS1fN0xfaVVESjJCWGJLc1NrcmxjWFpadDh4SldFeTg0RXNlSjNhdG5mVWNoY19BcWl0WTVUTXJHTmRHQVIyMENZZHRvZEo5dmV2aWNxVE1WY2lqLVpiSkFyNmc?oc=5"},
    {"title": "Florida Democrats press DeSantis administration for details about AI contract for SNAP", "category": "Models", "date": "August 04, 2026", "org": "Florida Phoenix", "desc": "Florida Democrats press DeSantis administration for details about AI contract for SNAP&nbsp;&nbsp;Florida Phoenix", "link": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQTUhXSlRsWThoRW9nTzlKc0Z2bUx5LXlRR2N5VzZTNTdwaHM0Y1Bma2R0YUJfOGxKQjFYeVRtUi11M2dKdWlyc3AyZzlCdXU0VTRTLTNCQk1QbmpFN3JGMDh4blVOckwtVnd3cTVnTFJLeUFJLUF2WjlVVzVVODU0SE5LS3Bqb0xUSWFId0ZpWXpNLU1QckUxLVgxNjQ2SXNYU2ZXWFdwTUdoelRXZ3ZMcGVIaFB3OUE5NnMzOVFnLTdORm8?oc=5"},
    {"title": "Empowering employees to use AI requires leadership, not technological expertise, experts say", "category": "Models", "date": "August 04, 2026", "org": "Maryland Daily Record", "desc": "Empowering employees to use AI requires leadership, not technological expertise, experts say&nbsp;&nbsp;Maryland Daily Record", "link": "https://news.google.com/rss/articles/CBMib0FVX3lxTE9pNEhLWHVXbVFUWDlDWGJsNlB6STRYYVppZWM4YTlXRmQzY05fWXZKUEl2LXJ6VjBmMl96alY3OTNmTTlxeEhpSi1mM3V0RmhlblU4LW44U2piSGRXbkVOSkxHWjNOYTRualVmVzJrdw?oc=5"},
    {"title": "AI-generated stories rated better quality than human-written ones, study finds", "category": "Models", "date": "August 04, 2026", "org": "The Guardian", "desc": "AI-generated stories rated better quality than human-written ones, study finds&nbsp;&nbsp;The Guardian", "link": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPSjJQTFhjTUNpdG03blhNOWhCU3R1eVNQa05EaUlPMkd6UHNuVGFvbEhvQUtVRHJoSmJRSFRfcHdtYVI2dU52d0xhcVRvQ05jSkw3TmliT1JzT2lOQWhpbWoxbUFNSHFUXzQ3OXFIYlZueGR0N0U2VUhpTVRtcjlMU3hZLXNEWldXbHdVQzZiTDhlNUVXRjJqSVI5a0UxeU0yTE5KYUdSeTlFdFZYQTAwV2NwSG5iOF95VkVHU0FXUUpSX2FyUjVZ?oc=5"},
    {"title": "Concordia Board of Aldermen approves Generative Artificial Intelligence Use Policy", "category": "Industry & Safety", "date": "August 04, 2026", "org": "KMZU.com", "desc": "Concordia Board of Aldermen approves Generative Artificial Intelligence Use Policy&nbsp;&nbsp;KMZU.com", "link": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQRm9WYkdJbl91ZXVFVkhoOXNTQjducWtSdGplN1ZjVEs5RzBaNHZWWHFOZmdFZGRFUlBmRU1LWjhxQ0pQelFTdzlCdmtyaWRTM09ycEhLUEV6TGVyYXg2bWJMcEpJdmowa1RHSnJBYTExTDZJYjZBa1A0dVI3WWJ5bW9jLWRhUFJLSngtTFNDb2RfSElvTUFvUFFKNThZVUhsY21Wa1VRQ2dCRzJzN3h1Ymt1Z2lIUmV2VklYaEJHR0dqTXJNVHY3akpvaEMwWFRzcTJRd2xfUmRXbFNsLVhzR0EzUTFSdzRPREZrNDRoUQ?oc=5"},
    {"title": "For Detailed Maps of Its Service Area, CAL FIRE Turns to AI", "category": "Models", "date": "August 04, 2026", "org": "GovTech", "desc": "For Detailed Maps of Its Service Area, CAL FIRE Turns to AI&nbsp;&nbsp;GovTech", "link": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQcE4tSTNUZEJYdlpsSTRhT3RzZU5zTnBVNU52QnlHZXJjbnR5Ym0yVGhKOW9JWW56dmU2TGtublVZb0dTWi1DLWVjRUU1YUkxQUdaYjdqVkt6X1J0alVDLUJFc0UwM2JzRUZ1bEpudlpXdjhuemp6b1FRY2k0Y0FSZTFCTlF5QzJuNmJxeEtWaGpuUVN5amNEbVQ3Q1MwZ05DeFR0WVVnRUU4UQ?oc=5"},
    {"title": "MSU to host Future of AI conference", "category": "Models", "date": "August 04, 2026", "org": "NBC Montana", "desc": "MSU to host Future of AI conference&nbsp;&nbsp;NBC Montana", "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE40RGVJSS1SeEIyanV1aERuQW1ULUJUOEhnV29UVkw5RXhtYVF0Rjl6enRQV1FKZk1pLVRqUFV0eEZqS2xFdzRqQThUX2k5aURQRkY1RlF2bnVXcC13V0J2QjAzdWg1REZvc2tVVFFWeE9FYkNjZ3JsbQ?oc=5"},
    {"title": "In an age of artificial intelligence, trust has never been more human", "category": "Models", "date": "August 04, 2026", "org": "jewishaz.com", "desc": "In an age of artificial intelligence, trust has never been more human&nbsp;&nbsp;jewishaz.com", "link": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxQclJjRDFhVU9xZ2JrRXBBMFZfQW1WSVFQUjIzQTVYajBSb0M4UzF1aXg2bDdvaUJiVVF0dTN3aW1uTW5JQzJEaExWdldZT1FDR01kbW9wTHNBT1ppS0kxcml5bUYzbTkydUZDM0N5TDU3OExDSHZ0TGJSdHJIR21wWWNmRFRHdFNwTE5jOG5TbTNtbTJsNzdPWU1fUWFnczNYSXB6SlRNMGpBbm5YcEoyNEh4WVYzNHRUY3BsS05SaXY1R3FDMGVLYjFuUkRUbURtLVpKQVYxVElGcFJzcDdNZGRZanZZM2x0?oc=5"},
    {"title": "As students head back to school, districts grapple with new AI policies", "category": "Models", "date": "August 04, 2026", "org": "Central Florida Public Media", "desc": "As students head back to school, districts grapple with new AI policies&nbsp;&nbsp;Central Florida Public Media", "link": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPSThSQUhDR3pLeUVnTm5lQXRkRTVxdGw4bFFpaU9UZG5ZLVp5NkJwVHh5azM1UzFBSmZDOGZHRHB3Tm5tSUl4dFFqSWVSMHU5Ni1jaXdLNm80VmU2d2pDODBqUnVyT21obk1GRU1Ram9qUlZUQi1QR2tSeVRhOWJUZVdQZC1vc2RRNFhYM093TkpEa0FhQWpET2ZVSG1LVzItWTVlejRFR1BQS2h0ZHNmWHFXd0RoeE0?oc=5"},
    {"title": "Pixel-Native RAG: A Practical Guide to Visual Document Indexing", "category": "Models", "date": "August 04, 2026", "org": "MarkTechPost", "desc": "Move beyond traditional text-based parsing with PixelRAG, an end-to-end system that treats web pages and PDFs as images. This tutorial explores the complete pipeline\u2014from rendering and tiling to multi...", "link": "https://www.marktechpost.com/2026/08/04/pixel-native-rag-a-practical-guide-to-visual-document-indexing/"},
    {"title": "White House Readies A.I. Framework to Review Security Risks", "category": "Industry & Safety", "date": "August 04, 2026", "org": "The New York Times", "desc": "White House Readies A.I. Framework to Review Security Risks&nbsp;&nbsp;The New York Times", "link": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOMlB1UDdKalpjUzY3Q2JFVXZtRDZLcld6aF9hOWRpZHRzcVp3QlpVVjdneFlNR3FGY2xyWVBocFluTk9KMmVsZjBLSGFPWC00aFh6WndYcmhJMGtUMk5Vdm0xRldhZzFJWUxiQlJMc1YtV0VmaGhQUkhtc2prRGNaRA?oc=5"},
    {"title": "OpenAI settles claims of discrimination against US workers for $3.2 million", "category": "Models", "date": "August 04, 2026", "org": "Politico", "desc": "OpenAI settles claims of discrimination against US workers for $3.2 million&nbsp;&nbsp;Politico", "link": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPdXFHYUlhNnN6S09IODhSM2dKX0owTU9KNGVmOHd0dkFZRWd3WWJiVVRBMUxFMl9zWXE4NXJ5R3lxbGhyV2N6d09Va2o4MGV5ZFV2YWU3Vm1UUmZqdkpQb3AycVVpdHcwZldsVmdTZm45MlZvZ3g1dk9tZEFkNDEtX043UU05TmRZQmxucktoNEs?oc=5"},
    {"title": "Emergency management's AI challenge isn't technology \u2014 it's implementation, new reports say", "category": "Models", "date": "August 04, 2026", "org": "StateScoop", "desc": "Emergency management's AI challenge isn't technology \u2014 it's implementation, new reports say&nbsp;&nbsp;StateScoop", "link": "https://news.google.com/rss/articles/CBMiakFVX3lxTFBEM3BMUS1INFYtY1JUcUttWDJ2bkxrVGdoQS1NSHRHZC1zRlppa3Z0bzNLT3lWSXQ4TmY0cFh4SFRuZVpyNldxeU5uNjc1VmtqekNLMWsyMWotbjRzNDJScFNRRTRxWjc4dnc?oc=5"},
    {"title": "Chicago high school students can learn about AI at free, 3-day bootcamp this fall", "category": "Models", "date": "August 04, 2026", "org": "Chicago Sun-Times", "desc": "Chicago high school students can learn about AI at free, 3-day bootcamp this fall&nbsp;&nbsp;Chicago Sun-Times", "link": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOcEh3aUtHRlNFYmRYbExtMGV3ZlRPQ1hiWl9LRmJyM3VxRElhLWktQmpMNzVyRWo3MGQ2b1Yyb043X25namYyMHk4MDhaV21DZjNFX1BpVVVSRXpjdnNFWWxqekU5eGJSUHRVY1BnUmRFR0IyTlc4eWRteW5vcFRJTEpKcmM4U3hnbGsxUjg5d2VDMF9GQXhTSTBGOW4tTDgzM3dGYjlkZFZMU2JqTERYYTZMVnZkVHhOTU9Lek82SnBYY3N4ZjFzbmFoRGwzUFhwTkF5aXd0RllVVnM?oc=5"},
    {"title": "ASU Law\u2019s latest initiative aims to prepare future lawyers for the AI era", "category": "Industry & Safety", "date": "August 04, 2026", "org": "ASU News", "desc": "ASU Law\u2019s latest initiative aims to prepare future lawyers for the AI era&nbsp;&nbsp;ASU News", "link": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQbXlUT0FhMEtHTjRLYjlqQmx6bldGSjd4ZXFnMlVGMndXT1VBVmkwelpZbmxxcjhLRTlqZHNlajBwcVFlUjN6aFpMM3hyWXk4YkVteEJzQXJWWlZJRlRoNURGRGZ3QnJRSjkzQkQ0ZnhLUXRfc3NiajRtRDQ5NFc3UjVJVUFhRHZOS0NaVnlrU29OaXpIWExUZ2NpNnF5aFgxTjNuUW42VnM5dkRJMmZwVXhHaktqR25uV2NV?oc=5"},
    {"title": "Ask the expert: How GeoAI is reshaping land monitoring", "category": "Models", "date": "August 04, 2026", "org": "msutoday.msu.edu", "desc": "Ask the expert: How GeoAI is reshaping land monitoring&nbsp;&nbsp;msutoday.msu.edu", "link": "https://news.google.com/rss/articles/CBMieEFVX3lxTE9Ua1hZZEFRZ2N5YVhnLUp5VWh2T0Vnbi1ieWdSWEx3YTZtdlhuZ21LVExWOUhLTVY4bXdHRjBLem40SzVMeW9PYkh2cV9NWVVROXB2QXBSekxpSDJiSTBpV3ljZEUyRkRxaXVHaGlnRm10ZUtCaWo5Zw?oc=5"},
    {"title": "AI for care of seniors: Who\u2019s minding the recipe\u2014and whose taste buds should hold sway?", "category": "Models", "date": "August 04, 2026", "org": "HealthExec", "desc": "AI for care of seniors: Who\u2019s minding the recipe\u2014and whose taste buds should hold sway?&nbsp;&nbsp;HealthExec", "link": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPc1NrM2xrbEVJSTlfNW14MGpiQTY0dHpFS1k3TlkyZFJ0MXB1a0NOLW5aNk5jTklmUjhqaVpQbFNhMkNESU90V2ZlR3d3eVN4SC03cTNmMDIxQ1I4eHNfQ3VCU2VPc2pjY1lRRnJpaGxHVFFTSkk0cTZTX3NRMURFU3FFcmlCOXpjbDRzcDFsejNjNDg0RTBYUW5HMzdSMVRxSFZVcHFiVUZqZklURFFuN2xuaS14SVRqYURpRFhoc0FCSkE3aHc?oc=5"},
    {"title": "Let competition regulate artificial intelligence", "category": "Models", "date": "August 04, 2026", "org": "Washington Times", "desc": "Let competition regulate artificial intelligence&nbsp;&nbsp;Washington Times", "link": "https://news.google.com/rss/articles/CBMingFBVV95cUxQVTg5Z1BPOExMdXJ6a3NhYzdQeUlDdGRqTHlpakYzR0tQUUNnSWxadHhSNEgyS3hQWW9vU3FLaUhoZjdtUjFFUml3SG1veEdVdDJJcEI4THJtLUNkSy1NLWxZSUk4ZmlkY2I5OXdQcHBNbHJDZ3JZTDZGTVJEZzdZTnYyektDdDVvUU0wX0g3R2xwcVVDOFp6dnpkcERfdw?oc=5"},
    {"title": "Opinion | I\u2019m Begging You: Never Write With A.I.", "category": "Models", "date": "August 04, 2026", "org": "The New York Times", "desc": "Opinion | I\u2019m Begging You: Never Write With A.I.&nbsp;&nbsp;The New York Times", "link": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNcjVoUVhCUTFjY01GVi16ajNGNzNlSXVEZGVsU0hKbzR1SmdaMjBBRjdXMGtXTml4Ukhpa1BrSTV3aW5LaU10emdCMU9nOFp4UEJhM0d2am9KMjhfWms0WkJ5bHBLbU82WlY4ei11SmhKbmtGY0FfbXBhRUliZ3dNbVlXcnlOM3VzV1E?oc=5"},
    {"title": "Union demands greater transparency around OHSU's use of artificial intelligence", "category": "Models", "date": "August 04, 2026", "org": "The Lund Report", "desc": "Union demands greater transparency around OHSU's use of artificial intelligence&nbsp;&nbsp;The Lund Report", "link": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQcF9wQWVMUEdXcGduYnREQllKeVNIdUdJajlzZWpxSXNxR0FLQTA5ZzAyejJWRHM5NDBLYkU1c0pMcE15R3Zwdnc5MjAzVllTNk1BYTkwRGswN1JxRFJZYW9mZXdUODdCSzh5b205UFRMWEVPRHJISk5UZ3F2WUFNY0NvVWs5bDQ2aEhfeEVWeDhMUzduZFU3SVNiU3RiTE9GVUNFU2dqOHJKQmZTQzVHX3pLdw?oc=5"},
    {"title": "With FCC ban on new Chinese-made optical transceivers for DCs likely, it may be time to stock up", "category": "Industry & Safety", "date": "August 04, 2026", "org": "Network World", "desc": "With FCC ban on new Chinese-made optical transceivers for DCs likely, it may be time to stock up&nbsp;&nbsp;Network World", "link": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQMHU2WFd4bWstNEFYaU1vdEVTWnB3S0hlMGl4aUJ4SjJxOUlnSnpueHo5U19DT3pUODJnbzlsX3d4bFZLOTR2dmcxOTlsbEF4ZDVlenNGSUI3TGp3RGpocWNVNDV3TmdvNzUzYUpnemxxWUphVFAxM2dtb2ZocHg0YzZqSF9zZWpNMzFOUXpKWHA2M2ZqbEZaR250Y2IzZEM0cm15MVhJaFJYcHZXZGRqaWRqV1RiRXRFOTczMGd5NURlOTVGbVZaRGlJN2RwNnZodkNDdnJNaV9CMWFkWFE?oc=5"},
    {"title": "Union demands greater transparency around OHSU's artificial intelligence use", "category": "Models", "date": "August 04, 2026", "org": "The Lund Report", "desc": "Union demands greater transparency around OHSU's artificial intelligence use&nbsp;&nbsp;The Lund Report", "link": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOeDVtYWpqaVZwTjU5S2pVVmRBdDNtQXMxZjFLUnF1T3pFWkc4QXNTblRZcFp2eEYzdXBrLTA1NnloZVVuLVgyemJJZGhiYndOdGxDdHAzV3Bva1QxUWxDRlZPQWVMdWg4QzNneGtSWV9HMW9CZ1lPWTVlWms3UUtYQUpkSTJBa1g5SmRSNVpYdVMxeklUMmNIdER1eWNwNm9Za1ZRM0xCZnhEek1jdkppRmJBRQ?oc=5"},
    {"title": "Oracle tests its financial strength to accelerate its push into artificial intelligence", "category": "Models", "date": "August 04, 2026", "org": "marketscreener.com", "desc": "Oracle tests its financial strength to accelerate its push into artificial intelligence&nbsp;&nbsp;marketscreener.com", "link": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPVmpwV1B1LVVwWURqVUJ6aEk2ckdMTWV1MHdrLUVDX1lTc2hxYVhVUjVwT2xoRk9LcTFZSjJLWlBoeXRoTWVaTDB3amJXTGpORW53SjFYNk83S3JXdkRpU2ZqdUJMVVdhTl9hSy1LNkd5UkVnZXBrYVpiX1BVNExuOUViMHlIWFBEQUh3MVBLMlhIbFlSdERGNDVwVDJSR0hhdWktSG5wS3NhbGJ0QnNJUHVsc1g0c0xaMHBrWFRkT09IaXlQQmJKVFpqalJocWFzQjNYLXA5NA?oc=5"},
    {"title": "Buy the Firm, Then Rebuild It With AI", "category": "Models", "date": "August 04, 2026", "org": "PYMNTS.com", "desc": "Buy the Firm, Then Rebuild It With AI&nbsp;&nbsp;PYMNTS.com", "link": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNQ0MzUER0cGcwMHJDR1daMVdLTFdSdzBhT3dUYnJkV3VOSGo4Ry1oVFkyc3JuZGJ0M2ZxM0dYOFV3MFIzbHFNcUNVUU5kUHNjaDJYWHBCRWxrOXM3RXVqQzlhVVZ2Umo3UFBKWG5WTjBDQ19sVERvLXYxR0J0RXpVd2dxdEUtenNiS2lXaUNSRElUR2NHRWtNR1B3?oc=5"}
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
