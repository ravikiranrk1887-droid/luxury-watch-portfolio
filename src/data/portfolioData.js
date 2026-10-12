/**
 * Master Portfolio Data for Ravikiran S
 * Luxury Horological Portfolio
 * 
 * All data here is modular, editable, and honest.
 * No fabricated claims, metrics, or credentials.
 */

export const PERSONAL_INFO = {
  name: "Ravikiran S",
  title: "Computer Science Engineering Student",
  monogram: "R",
  subtitle: "CSE · AI · TECHNOLOGY · ENTREPRENEURSHIP",
  tagline: "The Art of Building",
  subtagline: "An evolving portfolio of technology, ideas, and ambition.",
  location: "India",
  status: "Undergraduate Student · Exploring & Building",
  githubUsername: "ravikiran-s", // Configurable
  email: "ravikirans.cse@gmail.com", // Configurable placeholder
  linkedin: "https://linkedin.com/in/ravikirans",
  github: "https://github.com",
  resumePath: "/resume.pdf",
};

export const NAVIGATION_SECTIONS = [
  { id: "01", slug: "about", roman: "I", label: "ABOUT ME", angle: 30, summary: "Background, vision, and core technical interests" },
  { id: "02", slug: "skills", roman: "II", label: "SKILLS", angle: 60, summary: "Languages, web development, AI libraries, and tools" },
  { id: "03", slug: "projects", roman: "III", label: "PROJECTS", angle: 90, summary: "Engineered applications, web systems, and architectures" },
  { id: "04", slug: "ai-llm", roman: "IV", label: "AI / LLM", angle: 120, summary: "Language models, RAG pipelines, and experiment notes" },
  { id: "05", slug: "certifications", roman: "V", label: "CERTIFICATIONS & WORKSHOPS", angle: 150, summary: "Technical workshops, autonomous systems, and training" },
  { id: "06", slug: "entrepreneurship", roman: "VI", label: "ENTREPRENEURSHIP", angle: 180, summary: "Product ideas, business models, and founder journal" },
  { id: "07", slug: "achievements", roman: "VII", label: "ACHIEVEMENTS", angle: 210, summary: "Campus ambassadorship, college activities, and recognitions" },
  { id: "08", slug: "learning", roman: "VIII", label: "LEARNING JOURNEY", angle: 240, summary: "Timeline of computer science topics and milestones" },
  { id: "09", slug: "github", roman: "IX", label: "GITHUB & CODE", angle: 270, summary: "Open-source repositories and development activity" },
  { id: "10", slug: "resume", roman: "X", label: "RESUME / CV", angle: 300, summary: "Academic qualifications, technical summary, and PDF download" },
  { id: "11", slug: "future", roman: "XI", label: "FUTURE ROADMAP", angle: 330, summary: "What's next: DSA, deep AI systems, and venture goals" },
  { id: "12", slug: "contact", roman: "XII", label: "LET'S CONNECT", angle: 0, summary: "Inquiries, collaboration, social links, and message dispatch" },
];

export const ABOUT_DATA = {
  headline: "Turning ideas into practical software through curious engineering.",
  bio: [
    "I'm a Computer Science Engineering student exploring software development, Artificial Intelligence, Large Language Models, and entrepreneurship. I enjoy turning ideas into practical projects, experimenting with technology, and learning how software can solve real-world problems.",
    "Driven by the craftsmanship of software engineering—much like the intricate precision of horology—I focus on understanding core principles rather than just assembling pre-made templates. Whether it's crafting responsive web systems or experimenting with generative AI workflows, I value curiosity, clean code, and disciplined continuous learning."
  ],
  education: {
    degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
    institution: "Engineering College / University",
    status: "Undergraduate Student (Currently Pursuing)",
    focusAreas: ["Algorithms & Data Structures", "Database Management Systems", "Artificial Intelligence & LLMs", "Full-Stack Web Development"]
  },
  interests: [
    { title: "Generative AI & LLMs", desc: "Exploring retrieval augmented generation (RAG), prompt chaining, and embedding search." },
    { title: "Web Engineering", desc: "Building responsive, modern, user-first interfaces with clean architecture." },
    { title: "Product & Venture", desc: "Studying market viability, real user pain points, and technology business models." },
    { title: "Continuous Self-Learning", desc: "Experimenting with new developer tooling, Python workflows, and algorithm practice." }
  ],
  philosophy: "Build deliberately. Understand the mechanics beneath the surface. Ship software that solves authentic human problems."
};

export const SKILLS_DATA = {
  categories: [
    {
      name: "Programming Languages",
      description: "Core algorithmic and systems languages used for problem solving and scripting.",
      skills: [
        { name: "Python", status: "Building", note: "Primary language for AI experimentation, scripting, and backend APIs." },
        { name: "C++", status: "Comfortable", note: "Used for academic data structures, algorithms, and fundamental computer science." },
        { name: "JavaScript", status: "Comfortable", note: "Modern ES6+ syntax, asynchronous programming, DOM interactions." },
        { name: "SQL", status: "Comfortable", note: "Relational queries, schema design, table joins, and data constraints." }
      ]
    },
    {
      name: "Web Development",
      description: "Frontend layout engines and client-side styling architectures.",
      skills: [
        { name: "HTML5", status: "Comfortable", note: "Semantic structure, accessibility tags, and responsive viewport design." },
        { name: "CSS3", status: "Comfortable", note: "Modern layout models (Flexbox, Grid), custom animations, and responsive media queries." },
        { name: "JavaScript (DOM)", status: "Comfortable", note: "Interactive client-side state handling and API integration." },
        { name: "Bootstrap", status: "Comfortable", note: "Rapid prototyping with mobile-first grid systems and utility classes." },
        { name: "React (Vite)", status: "Exploring", note: "Component-driven interfaces, state hooks, and virtual DOM paradigms." }
      ]
    },
    {
      name: "AI & Development Frameworks",
      description: "Libraries and APIs powering intelligent applications and services.",
      skills: [
        { name: "LangChain", status: "Learning", note: "Orchestrating multi-step LLM chains, document loaders, and vector stores." },
        { name: "LLM APIs (OpenAI / Gemini)", status: "Building", note: "API integration, structured output prompting, and token management." },
        { name: "Flask", status: "Exploring", note: "Lightweight Python REST services for serving AI models and backend logic." },
        { name: "PyPDF / Text Extraction", status: "Building", note: "Parsing unstructured PDF streams into structured text chunks." }
      ]
    },
    {
      name: "Development Tools & Environment",
      description: "Daily engineering toolchain for version control and execution.",
      skills: [
        { name: "Git", status: "Comfortable", note: "Branching, committing, staging, conflict resolution, and local versioning." },
        { name: "GitHub", status: "Comfortable", note: "Remote repository hosting, issues, code sharing, and portfolio projects." },
        { name: "VS Code", status: "Comfortable", note: "Primary IDE with debugging, linting, extensions, and terminal integration." },
        { name: "Google Colab", status: "Comfortable", note: "Cloud notebook environment for rapid Python and ML experimentation." }
      ]
    }
  ],
  statusDefinitions: [
    { label: "Learning", desc: "Currently studying concepts and doing foundational tutorials." },
    { label: "Exploring", desc: "Experimenting with sample projects and testing capabilities." },
    { label: "Building", desc: "Actively constructing working applications with this technology." },
    { label: "Comfortable", desc: "Confidently applying in coursework and software builds." }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "shadowguard-ai",
    title: "ShadowGuard AI",
    badge: "Live Deployment",
    tagline: "AI-Powered Security & Threat Assessment Interface",
    status: "Completed",
    period: "2024",
    liveUrl: "https://shadowguard-ai-one.vercel.app/",
    githubUrl: "https://github.com/ravikiran-s",
    overview: "An AI-assisted safety and monitoring concept platform designed to assist users with intelligent contextual threat evaluation and real-time alerts.",
    problem: "Navigating digital and physical safety risks requires quick contextual interpretation that traditional static dashboards fail to synthesize clearly for non-technical users.",
    solution: "Built a responsive web platform that integrates an intuitive user interface with AI-driven analysis modules, providing actionable intelligence rather than raw uninterpreted logs.",
    keyFeatures: [
      "Intuitive web dashboard with responsive layout across mobile and desktop",
      "AI evaluation module for analyzing contextual security inquiries",
      "Interactive status monitors and alert categorizations",
      "Deployed and verified live on Vercel"
    ],
    techStack: ["Next.js / React", "JavaScript", "TailwindCSS / CSS", "AI Service Integration", "Vercel"]
  },
  {
    id: "ai-pdf-assistant",
    title: "AI PDF Assistant",
    badge: "Active Development",
    tagline: "Intelligent Document Question-Answering via LLMs",
    status: "Building",
    period: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/ravikiran-s",
    overview: "A document-question-answering application that allows users to upload PDF documents and extract answers, summaries, and citations using large language models.",
    problem: "Dense academic papers, technical manuals, and research documents often take hours to skim. Traditional keyword searches miss semantic context and cannot answer natural language questions.",
    solution: "Constructed an automated processing pipeline that parses PDF streams into semantic chunks, generates vector embeddings, retrieves the most relevant context, and passes it to an LLM for factual answering.",
    pipeline: [
      { step: "01", name: "PDF Upload", desc: "User supplies local PDF document via interface" },
      { step: "02", name: "Text Extraction", desc: "PyPDF parses raw character streams and tables" },
      { step: "03", name: "Semantic Chunking", desc: "Recursive text splitter chunks text with overlap" },
      { step: "04", name: "Vector Retrieval", desc: "Embeddings matched with cosine similarity" },
      { step: "05", name: "LLM Reasoning", desc: "Prompt template injected with retrieved context" },
      { step: "06", name: "Fact-Based Answer", desc: "Direct answer generated with source page citation" }
    ],
    keyFeatures: [
      "Upload and parse multi-page PDF documents locally",
      "Context-aware querying avoiding out-of-document hallucination",
      "Page reference tracking for verification",
      "Clean modular Python codebase"
    ],
    techStack: ["Python", "LangChain", "PyPDF", "OpenAI / Gemini API", "Flask API"]
  },
  {
    id: "algorithmic-problem-archive",
    title: "Data Structures & Algorithm Solutions",
    badge: "Core Engineering",
    tagline: "Curated C++ & Python Computational Problem Implementations",
    status: "Ongoing",
    period: "Academic",
    liveUrl: null,
    githubUrl: "https://github.com/ravikiran-s",
    overview: "A systematic repository of computer science algorithm implementations covering core data structures, time complexity trade-offs, and competitive problem patterns.",
    problem: "Mastering software engineering requires rigorous, muscle-memory understanding of algorithmic space/time bounds and fundamental data structures.",
    solution: "Maintained documented C++ implementations of linear structures, binary trees, graphs, sorting mechanisms, and dynamic programming patterns with benchmark notes.",
    keyFeatures: [
      "Detailed time and space complexity annotations for every solution",
      "C++ implementations emphasizing memory safety and clean pointer operations",
      "Covers sorting, searching, recursion, trees, and hash maps"
    ],
    techStack: ["C++", "Python", "Data Structures", "Algorithms", "Git"]
  }
];

export const AI_LLM_DATA = {
  title: "Artificial Intelligence & Large Language Models",
  subtitle: "Exploring intelligent systems, prompt engineering, and language-model applications.",
  intro: "My interest in Artificial Intelligence is grounded in engineering practicality: exploring how foundation models can be harnessed through reliable software architectures to solve real information bottlenecks.",
  focusTopics: [
    { title: "Large Language Models (LLMs)", desc: "Understanding transformer foundations, context windows, token limits, and decoding strategies." },
    { title: "Prompt Engineering", desc: "Designing structured system instructions, few-shot prompts, and JSON schema constraints." },
    { title: "LangChain Orchestration", desc: "Chaining prompts, document loaders, memory buffers, and output parsers." },
    { title: "Retrieval-Augmented Generation (RAG)", desc: "Augmenting models with external private context to minimize hallucinations." },
    { title: "Embeddings & Vector Search", desc: "Converting unstructured text into high-dimensional semantic vectors for similarity retrieval." },
    { title: "Document Processing", desc: "Chunking strategies, metadata preservation, and parsing complex unstructured files." }
  ],
  pipelineSteps: [
    { title: "1. PDF Document", label: "Input", desc: "Upload and validate raw PDF" },
    { title: "2. Text Extraction", label: "Parser", desc: "PyPDF stream parsing" },
    { title: "3. Semantic Chunking", label: "Splitter", desc: "Sliding window token chunks" },
    { title: "4. Vector Indexing", label: "Embeddings", desc: "Cosine similarity top-k search" },
    { title: "5. Context Injection", label: "Prompt", desc: "System prompt + context payload" },
    { title: "6. LLM Synthesis", label: "Output", desc: "Grounded answer with citations" }
  ],
  experiments: [
    {
      topic: "Chunk Size vs Retrieval Accuracy",
      whatILearned: "Smaller chunks (300-500 tokens) yield more precise semantic matches, whereas larger chunks risk diluting the cosine similarity score.",
      whatWorked: "Recursive character splitting with 50-token overlap maintained cross-sentence context nicely.",
      toImprove: "Experiment with semantic-based splitting rather than fixed character count boundaries."
    },
    {
      topic: "System Prompt Grounding for Hallucination Prevention",
      whatILearned: "Explicitly instructing the model to reply 'I cannot find that in the provided text' when confidence is low drastically reduces fabricated answers.",
      whatWorked: "Using strict bracketed delimiter syntax (e.g., <CONTEXT>...</CONTEXT>) to prevent prompt injection.",
      toImprove: "Add automated citation verification to score confidence before output rendering."
    }
  ]
};

export const CERTIFICATIONS_DATA = [
  {
    id: "cert-iot-av",
    title: "Autonomous Vehicle & IoT Workshop",
    issuer: "Technical Institution / Workshop Program",
    date: "Hands-on Technical Workshop",
    category: "Workshop",
    status: "Completed",
    description: "Hands-on workshop exploring Internet of Things (IoT) sensors, embedded microcontrollers, and foundational principles behind autonomous vehicle sensor telemetry and remote telemetry.",
    topics: ["Embedded Sensors", "IoT Protocols", "Microcontroller Basics", "Sensor Fusion Concepts"]
  },
  {
    id: "cert-python-dev",
    title: "Python for Problem Solving & Programming",
    issuer: "Academic Curriculum & Technical Modules",
    date: "Coursework / Practical Labs",
    category: "Academic & Practical",
    status: "Completed",
    description: "In-depth study of Python syntax, object-oriented concepts, algorithmic scripts, file handling, and modular package organization.",
    topics: ["Object-Oriented Python", "Modular Programming", "Exception Handling", "Standard Libraries"]
  },
  {
    id: "cert-web-fundamentals",
    title: "Web Development Foundations (HTML, CSS, JS)",
    issuer: "Independent Learning & Practical Lab Work",
    date: "Practical Training",
    category: "Development",
    status: "Completed",
    description: "Comprehensive study and construction of responsive web interfaces, DOM event manipulation, CSS layout architectures, and interactive client workflows.",
    topics: ["Responsive Grid Design", "CSS Animation", "DOM Manipulation", "Asynchronous Fetch"]
  }
];

export const ENTREPRENEURSHIP_DATA = {
  title: "Entrepreneurship & Product Ideas",
  subtitle: "Ideas, opportunities, and products worth building.",
  intro: "Beyond writing code, I am fascinated by product thinking—identifying genuine inefficiencies in the real world and designing sustainable, technology-backed solutions that deliver measurable value.",
  statusGuide: [
    { label: "CONCEPT", color: "#C8A46A", desc: "Initial thesis and problem formulation" },
    { label: "UNDER RESEARCH", color: "#B87956", desc: "User interviews and competitor landscape analysis" },
    { label: "PROTOTYPE", color: "#50B07A", desc: "Early proof-of-concept built and tested" }
  ],
  ideas: [
    {
      id: "idea-1",
      title: "Contextual Academic Research Synthesizer",
      category: "AI & Education",
      stage: "UNDER RESEARCH",
      problem: "Undergraduate engineering students waste countless hours searching for relevant papers and cross-referencing citations across disparate library databases.",
      targetCustomer: "Engineering students, research scholars, and university project teams.",
      proposedSolution: "A lightweight research workspace that parses local PDF library collections, auto-generates comparative concept tables, and tracks literature review gaps.",
      marketOpportunity: "Growing demand for domain-specific, privacy-first AI study tools that operate on local or self-hosted files.",
      businessModel: "Freemium local tool with optional cloud team collaboration subscription.",
      nextSteps: "Conduct interviews with 15 engineering peers to map exact paper reading workflows."
    },
    {
      id: "idea-2",
      title: "Campus Resource & Waste Reduction Hub",
      category: "Sustainability & Operations",
      stage: "CONCEPT",
      problem: "Substantial paper waste and unorganized equipment sharing occurs in college departments due to lack of a unified digital tracking board.",
      targetCustomer: "Colleges, departmental laboratories, and student event organizers.",
      proposedSolution: "A lightweight peer-to-peer portal for reserving laboratory equipment, sharing surplus project components, and digitizing notice circulation.",
      marketOpportunity: "Institutions striving to meet green-campus compliance targets while cutting stationery expenditure.",
      businessModel: "Departmental licensing / institutional annual SaaS.",
      nextSteps: "Draft wireframes and survey student clubs regarding equipment lending bottlenecks."
    },
    {
      id: "idea-3",
      title: "Micro-Local Logistics & Order Aggregation",
      category: "Technology-Enabled Commerce",
      stage: "CONCEPT",
      problem: "Small suburban food stalls and local retailers pay prohibitive 30%+ commissions to national delivery aggregators, eroding their margins.",
      targetCustomer: "Independent neighborhood food vendors and local cluster communities.",
      proposedSolution: "A community-pooled ordering system that batches nearby scheduled orders to enable flat-fee, low-overhead deliveries without predatory cuts.",
      marketOpportunity: "Rising pushback from small merchants seeking hyper-local independence.",
      businessModel: "Transparent flat per-order transaction fee (e.g. fixed nominal rate) instead of % commission.",
      nextSteps: "Analyze unit economics for scheduled vs on-demand delivery runs."
    }
  ]
};

export const ACHIEVEMENTS_DATA = [
  {
    title: "Campus Ambassador / Student Representative",
    organization: "Technical Campus Community",
    date: "Academic Term",
    description: "Represented student initiatives, facilitated communication between peers and event organizers, and promoted technical skill-building workshops on campus.",
    impact: "Helped coordinate student participation and spread awareness for tech sessions."
  },
  {
    title: "Technical Workshop Participation",
    organization: "College Technical Forum",
    date: "Hands-on Sessions",
    description: "Actively participated in college-level technical workshops, hands-on IoT sessions, and peer programming bootcamps.",
    impact: "Applied workshop learnings directly into personal coding experiments."
  },
  {
    title: "Web Project Delivery & Deployment",
    organization: "Independent Development",
    date: "2024",
    description: "Architected, coded, and successfully deployed web projects (such as ShadowGuard AI) to cloud infrastructure with zero downtime.",
    impact: "Established hands-on proficiency in modern frontend frameworks and deployment pipelines."
  }
];

export const LEARNING_JOURNEY_DATA = [
  {
    phase: "Phase 1: Foundations",
    title: "Computer Science Principles & C++",
    status: "COMPLETED",
    description: "Gained a strong foundation in structured programming, memory models, pointers, and problem-solving through C++."
  },
  {
    phase: "Phase 2: Modern Web",
    title: "HTML5, CSS3 & JavaScript",
    status: "COMPLETED",
    description: "Learned the core building blocks of the web: semantic DOM structures, modern CSS layout models, and asynchronous JavaScript."
  },
  {
    phase: "Phase 3: Python & Scripting",
    title: "Python for Automation & APIs",
    status: "COMPLETED",
    description: "Adopted Python for scripting, working with files, consuming REST APIs, and building foundational backend services with Flask."
  },
  {
    phase: "Phase 4: Intelligent Systems",
    title: "AI, LLMs & Retrieval Pipelines",
    status: "BUILDING",
    description: "Currently exploring LangChain, prompt engineering, vector search, and constructing interactive document intelligence tools."
  },
  {
    phase: "Phase 5: Systems & Scale",
    title: "Data Structures, Algorithms & Full-Stack",
    status: "PRACTICING",
    description: "Deepening problem solving speed across arrays, trees, and graphs, while mastering modern React component design."
  },
  {
    phase: "Phase 6: Future Horizons",
    title: "Production Engineering & Product Ventures",
    status: "LEARNING",
    description: "Studying scalable backend architectures, cloud deployments, and turning verified student concepts into real-world ventures."
  }
];

export const GITHUB_REPOS_DATA = [
  {
    name: "shadowguard-ai",
    description: "AI-assisted threat detection and monitoring web application interface.",
    language: "JavaScript / React",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran-s"
  },
  {
    name: "ai-pdf-assistant",
    description: "Document question-answering tool leveraging LangChain, PyPDF, and LLM completions.",
    language: "Python",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran-s"
  },
  {
    name: "cpp-data-structures",
    description: "Clean, documented C++ implementations of fundamental algorithms and data structures.",
    language: "C++",
    stars: 0,
    forks: 0,
    url: "https://github.com/ravikiran-s"
  },
  {
    name: "portfolio-luxury-horology",
    description: "Interactive luxury mechanical-watch-inspired personal portfolio engineered with React & SVG.",
    language: "JavaScript / CSS",
    stars: 1,
    forks: 0,
    url: "https://github.com/ravikiran-s"
  }
];

export const RESUME_DATA = {
  name: "Ravikiran S",
  title: "Computer Science Engineering Student",
  contact: {
    email: "ravikirans.cse@gmail.com",
    github: "github.com/ravikiran-s",
    linkedin: "linkedin.com/in/ravikirans"
  },
  summary: "Driven Computer Science Engineering student with hands-on experience in software development, Python scripting, responsive web design, and generative AI integrations. Passionate about engineering reliable software, learning core algorithmic fundamentals, and building products with entrepreneurial curiosity.",
  education: {
    degree: "Bachelor of Engineering in Computer Science & Engineering",
    period: "Undergraduate (In Progress)",
    coursework: "Data Structures & Algorithms, Database Systems, Object-Oriented Programming, Computer Networks, Software Engineering"
  },
  skills: [
    { group: "Languages", items: "Python, C++, JavaScript, SQL, HTML5, CSS3" },
    { group: "Libraries / Frameworks", items: "React, Bootstrap, Flask, LangChain, PyPDF" },
    { group: "Developer Tools", items: "Git, GitHub, VS Code, Google Colab, Vite, Vercel" },
    { group: "Domains of Interest", items: "LLM Orchestration, Prompt Engineering, Full-Stack Development" }
  ],
  selectedProjects: [
    {
      name: "ShadowGuard AI",
      tech: "React, Next.js, AI Integration, Vercel",
      points: [
        "Architected an intuitive security surveillance web interface for contextual threat assessment.",
        "Integrated AI inquiry responses and deployed live application with verified performance."
      ]
    },
    {
      name: "AI PDF Assistant",
      tech: "Python, LangChain, PyPDF, LLM APIs",
      points: [
        "Constructed a multi-stage document parsing and semantic retrieval pipeline for document question-answering.",
        "Implemented strict prompt grounding to cite accurate source excerpts and reduce hallucinations."
      ]
    }
  ],
  activities: [
    "Campus Ambassador / Student Representative for technical initiatives.",
    "Participant in Autonomous Vehicle & IoT Workshop.",
    "Continuous learner exploring open-source contributions and algorithmic challenges."
  ]
};

export const FUTURE_ROADMAP = [
  {
    id: "f-1",
    stage: "Near Term",
    title: "Master Data Structures & Algorithms",
    focus: "Solve 200+ computational problems in C++ and Python to build deep algorithmic intuition for systems-level interviews."
  },
  {
    id: "f-2",
    stage: "Intermediate",
    title: "Advanced Autonomous & Multi-Agent AI Systems",
    focus: "Go beyond basic RAG pipelines to build autonomous reasoning agents with tool usage, memory graphs, and local model inference."
  },
  {
    id: "f-3",
    stage: "Intermediate",
    title: "Production Backend Engineering",
    focus: "Master distributed systems, Docker containerization, PostgreSQL performance optimization, and robust REST/gRPC APIs."
  },
  {
    id: "f-4",
    stage: "Long Term",
    title: "Venture Incubation & Practical Tech Products",
    focus: "Collaborate with peers to develop and launch an authentic SaaS or hardware-enabled tech solution that solves real consumer problems."
  }
];

export const EASTER_EGG = {
  triggerClicks: 3,
  badge: "HAUTE HORLOGERIE × CODE",
  quote: "BUILT WITH CURIOSITY. KEPT RUNNING BY COFFEE.",
  subtext: "Every gear has its purpose. Every line of code has its reason."
};
