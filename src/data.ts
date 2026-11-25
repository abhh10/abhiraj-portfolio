export const PROFILE = {
  name: 'Abhiraj Karpe',
  tagline: 'AI engineer building LLM systems, agents and the data infrastructure behind them.',
  intro: [
    "I build and evaluate AI agents, focusing on tool execution, server-side guardrails, and measuring coding-agent performance on SWE-bench Lite. I've also built full-stack AI applications and backend systems. Previously, at Jio Platforms, I shipped a production ingestion API that QA teams used in their daily testing cycles.",
    'I enjoy working across the stack, solving engineering problems, and taking ideas from prototype to production.',
  ],
  github: 'https://github.com/abhh10',
  githubUser: 'abhh10',
  linkedin: 'https://www.linkedin.com/in/abhiraj-karpe',
  email: 'abhirajrkarpe7@gmail.com',
  resume: `${import.meta.env.BASE_URL}Abhiraj_Karpe_Resume.pdf`,
}

export const EXPERIENCE = [
  {
    role: 'Software Engineering Intern',
    company: 'Jio Platforms Limited',
    location: 'Pune',
    period: 'Jan 2026 – Jul 2026',
    logo: 'jio.png',
    points: [
      'Designed and deployed a production ingestion API for crash and profiling data, integrating ADB tooling, custom parsing and database storage. Used by the QA team across daily test cycles.',
      'Converted legacy raw-text ADB outputs to structured JSON across OTT device/app profiling workflows, reducing storage overhead by 30–40% and downstream parsing time by ~35%.',
      'Built Python and shell scripts to collect device-level metrics (RAM usage, foreground apps, storage stats) and emit structured JSON for backend ingestion.',
      'Optimized memory and CPU profiling workflows, reducing job runtime by ~20%.',
    ],
    tags: ['Python', 'Shell', 'ADB', 'JSON', 'REST APIs'],
  },
]

export type Project = {
  name: string
  icon: 'layers' | 'database' | 'users' | 'bolt'
  description: string
  tags: string[]
  status: 'Live' | 'Build'
  github: string
  external?: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Nuvora',
    icon: 'bolt',
    description:
      'Event-driven AI support platform: RAG over pgvector with hybrid ranking and tool-using LLM orchestration. A validating server-side executor is the only path from model output to code. 800+ tests plus a deterministic AI eval suite.',
    tags: ['RAG', 'pgvector', 'React', 'Express', 'Kafka'],
    status: 'Build',
    github: 'https://github.com/abhh10/nuvora',
  },
  {
    name: 'AIEP',
    icon: 'layers',
    description:
      'Agentic Intelligence & Evaluation Platform. A/B tests Claude Code on SWE-bench Lite in isolated Docker containers behind a metering gateway, scored by an independent evaluator.',
    tags: ['Python', 'Docker', 'SWE-bench', 'Anthropic API'],
    status: 'Build',
    github: 'https://github.com/abhh10/aiep',
  },
  {
    name: 'ReferPilot',
    icon: 'users',
    description:
      'Referral platform connecting candidates with opportunities, with referrer verification, resume parsing and referral matching. Live on a custom domain.',
    tags: ['React', 'Node.js', 'Supabase', 'AWS S3'],
    status: 'Live',
    github: 'https://github.com/abhh10/referpilot',
    external: 'https://referpilot.in',
  },
  {
    name: 'CDC Lakehouse',
    icon: 'database',
    description:
      'PostgreSQL changes streamed through Debezium and Kafka into Apache Iceberg, queried with Trino. A 7-service containerized stack.',
    tags: ['Kafka', 'Debezium', 'Iceberg', 'Trino'],
    status: 'Build',
    github: 'https://github.com/abhh10/cdc-lakehouse',
  },
]

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: 'AI',
    items: ['LLMs', 'RAG', 'Agentic AI', 'LLM Evaluation', 'LangChain', 'LangGraph', 'Hugging Face', 'Vector Search'],
  },
  { group: 'Backend', items: ['Python', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Docker', 'React', 'JavaScript'] },
  { group: 'Data & Cloud', items: ['SQL', 'Kafka', 'PySpark', 'Airflow', 'Iceberg', 'Snowflake', 'Databricks', 'AWS'] },
]
