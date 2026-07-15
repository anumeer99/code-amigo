import theme from '../../../shared/theme/theme';

const { brand, accent } = theme.custom;

export const aiServices = [
  {
    slug: 'ai-consulting',
    shortTitle: 'AI Consulting',
    title: 'AI Consulting',
    heroBadge: 'AI Service',
    heroTitle: 'AI Consulting',
    heroIntro: 'Navigate the AI landscape with expert guidance. We help businesses identify the right opportunities, build actionable strategies, and execute AI initiatives that deliver measurable results.',
    description: 'Helping businesses identify high-impact AI opportunities, define implementation strategies, and accelerate digital transformation with confidence.',
    icon: '🧠',
    gradient: `linear-gradient(135deg, ${brand.blue} 0%, ${brand.blueDark} 100%)`,
    overview: 'AI consulting is the bridge between business ambition and technical possibility. Many organizations know they need AI but struggle to identify where it creates real value, how to implement it responsibly, and what investments will deliver the highest returns. Our AI consulting services cut through the noise. We work closely with your team to understand your business model, data landscape, competitive environment, and strategic goals. From there, we identify the most impactful AI opportunities, build a prioritized roadmap, and guide you through every stage of implementation.',
    approach: [
      { title: 'Discovery', description: 'We sit down with your team to understand your business goals, challenges, and where AI could make the biggest difference.' },
      { title: 'Data Assessment', description: 'We review your existing data, systems, and workflows to determine what is ready for AI and what needs preparation.' },
      { title: 'Strategy Development', description: 'We create a clear AI roadmap that prioritizes opportunities by impact, effort, and timeline so you know exactly where to start.' },
      { title: 'Technology Selection', description: 'We recommend the right tools, platforms, and vendors based on your budget, team skills, and long-term goals.' },
      { title: 'Pilot Planning', description: 'We design a small, focused pilot project that proves the concept works before you commit to a larger investment.' },
      { title: 'Implementation Support', description: 'We guide your team through development, making sure every technical decision supports your business objectives.' },
    ],
    features: [
      'AI opportunity assessment and use case identification',
      'Data readiness and infrastructure audit',
      'Custom AI strategy and implementation roadmap',
      'Technology stack evaluation and recommendation',
      'ROI modeling and business case development',
      'Vendor selection and procurement support',
      'Pilot program design and execution',
      'Team training and organizational change management',
    ],
    benefits: [
      { title: 'Clear Strategic Direction', description: 'Eliminate guesswork with a prioritized roadmap that connects AI initiatives directly to business outcomes.' },
      { title: 'Reduced Risk', description: 'Avoid costly mistakes by validating feasibility and ROI before committing to full-scale implementation.' },
      { title: 'Faster Time to Value', description: 'Focus resources on the highest-impact opportunities that deliver measurable results within months, not years.' },
      { title: 'Competitive Advantage', description: 'Stay ahead of competitors by adopting AI strategically rather than reactively.' },
      { title: 'Informed Decision Making', description: 'Make confident technology investments backed by expert analysis and industry benchmarking.' },
      { title: 'Scalable Foundation', description: 'Build AI capabilities that grow with your business rather than requiring constant rearchitecting.' },
    ],
    industries: ['Healthcare', 'Finance', 'Real Estate', 'Retail', 'Logistics', 'Manufacturing', 'Education', 'SaaS'],
    techStack: ['OpenAI', 'Claude', 'Gemini', 'LangChain', 'Azure OpenAI', 'AWS Bedrock', 'Vector Databases', 'MLOps Platforms'],
    faqs: [
      { q: 'How do we know if our business is ready for AI?', a: 'We conduct a thorough readiness assessment covering data quality, infrastructure, team capabilities, and business process maturity. This gives you a clear picture of where you stand and what steps are needed to prepare for AI adoption.' },
      { q: 'What is the typical timeline for an AI consulting engagement?', a: 'A standard engagement runs 4 to 8 weeks, depending on the complexity of your organization and the scope of the assessment. Deliverables include a prioritized roadmap, feasibility analysis, and implementation plan.' },
      { q: 'Do we need a large data team to benefit from AI consulting?', a: 'No. We work with organizations of all sizes, from startups with minimal data infrastructure to enterprises with mature data teams. Our recommendations are tailored to your current capabilities and growth plans.' },
      { q: 'How do you measure the success of AI initiatives?', a: 'We establish clear KPIs tied to business outcomes before any development begins. These might include cost reduction, revenue growth, time savings, error rates, or customer satisfaction metrics depending on the use case.' },
      { q: 'Can you help us choose between building in-house and buying off-the-shelf solutions?', a: 'Yes. We evaluate the trade-offs between custom development, SaaS tools, and platform solutions based on your specific requirements, budget, timeline, and long-term strategic goals.' },
      { q: 'What industries do you have the most experience with?', a: 'We have delivered AI consulting across healthcare, finance, retail, logistics, real estate, manufacturing, and education. Our methodology is adaptable to any industry where data-driven decisions create business value.' },
    ],
  },
  {
    slug: 'generative-ai-development',
    shortTitle: 'Generative AI',
    title: 'Generative AI Development',
    heroBadge: 'AI Service',
    heroTitle: 'Generative AI Development',
    heroIntro: 'Build intelligent applications that understand, generate, and reason with text, code, images, and structured data. We design and deploy production-grade generative AI solutions powered by the latest foundation models.',
    description: 'Design and build intelligent applications powered by modern large language models, multimodal AI, and retrieval-augmented generation.',
    icon: '✨',
    gradient: `linear-gradient(135deg, ${brand.purple} 0%, ${brand.purpleDark} 100%)`,
    overview: 'Generative AI has moved beyond experimentation. Businesses are using large language models, multimodal systems, and retrieval-augmented generation to build products and workflows that were impossible just two years ago. But turning a model demo into a reliable, scalable production system requires deep expertise in prompt engineering, fine-tuning, vector databases, evaluation frameworks, and deployment infrastructure. We build generative AI applications that work in the real world. From intelligent document processing and conversational agents to content generation platforms and code assistants, we design systems that combine the power of foundation models with robust engineering, proper evaluation, and production monitoring.',
    approach: [
      { title: 'Use Case Definition', description: 'We work with you to identify the specific AI applications that will create the most value for your business.' },
      { title: 'Model Selection', description: 'We evaluate different AI models and choose the one that best fits your accuracy, speed, and budget requirements.' },
      { title: 'Architecture Design', description: 'We plan how the system will work, including how data flows, how the model is accessed, and how results are delivered.' },
      { title: 'Data Pipeline Setup', description: 'We build the data infrastructure that feeds your AI system, organizing and preparing your information for the model.' },
      { title: 'Development', description: 'We build the application with clean, production-ready code, including error handling and performance safeguards.' },
      { title: 'Evaluation & Testing', description: 'We test the system thoroughly to measure accuracy, catch issues, and make sure it works reliably in real conditions.' },
    ],
    features: [
      'Custom LLM-powered application development',
      'Retrieval-Augmented Generation (RAG) systems',
      'Fine-tuning and domain adaptation',
      'Multimodal AI solutions (text, image, audio)',
      'Prompt engineering and optimization',
      'Vector database design and implementation',
      'AI evaluation and testing frameworks',
      'Production monitoring and observability',
    ],
    benefits: [
      { title: 'Automated Content Creation', description: 'Generate high-quality text, code, summaries, and creative content at scale with consistent quality.' },
      { title: 'Intelligent Document Processing', description: 'Extract, classify, and summarize information from unstructured documents automatically.' },
      { title: 'Enhanced Customer Experience', description: 'Build conversational agents and recommendation systems that understand context and personalize interactions.' },
      { title: 'Developer Productivity', description: 'Accelerate software development with AI-powered code generation, review, and documentation tools.' },
      { title: 'Cost Reduction', description: 'Replace manual, repetitive knowledge work with automated AI workflows that operate 24/7.' },
      { title: 'Innovation Speed', description: 'Prototype and launch new AI-powered features and products in weeks rather than months.' },
    ],
    industries: ['SaaS', 'Healthcare', 'Finance', 'Education', 'Retail', 'Legal', 'Media', 'Technology'],
    techStack: ['OpenAI GPT-4', 'Claude', 'Gemini', 'LangChain', 'LlamaIndex', 'Pinecone', 'Weaviate', 'Hugging Face'],
    faqs: [
      { q: 'What is the difference between generative AI and traditional AI?', a: 'Traditional AI focuses on prediction, classification, and pattern recognition. Generative AI creates new content including text, code, images, and audio by learning patterns from training data and applying them in novel contexts.' },
      { q: 'How do you prevent hallucinations in production systems?', a: 'We use multiple strategies including retrieval-augmented generation to ground responses in verified data, prompt engineering to constrain outputs, automated evaluation to catch errors, and human-in-the-loop review for high-stakes applications.' },
      { q: 'Can we use our own private data with these models?', a: 'Yes. We implement RAG systems that keep your data in your infrastructure and only send relevant context to the model. For sensitive use cases, we can also fine-tune open-source models that run entirely on your servers.' },
      { q: 'How much does it cost to build a generative AI application?', a: 'Costs vary based on complexity, model choice, and scale. A focused MVP typically starts around $25,000 to $50,000. We provide detailed estimates after understanding your specific requirements during the discovery phase.' },
      { q: 'Which foundation model should we use?', a: 'The right model depends on your accuracy requirements, latency constraints, data privacy needs, and budget. We evaluate options across GPT-4, Claude, Gemini, and open-source alternatives to recommend the best fit.' },
      { q: 'How do you handle API rate limits and costs?', a: 'We implement intelligent caching, request batching, model routing for different complexity levels, and fallback mechanisms. This optimizes both performance and API costs as usage scales.' },
    ],
  },
  {
    slug: 'ai-poc-mvp',
    shortTitle: 'AI PoC & MVP',
    title: 'AI PoC & MVP Development',
    heroBadge: 'AI Service',
    heroTitle: 'AI PoC & MVP Development',
    heroIntro: 'Validate your AI concepts quickly and confidently. We build proof-of-concepts and minimum viable products that demonstrate real value, reduce risk, and provide the evidence you need to move forward with full-scale development.',
    description: 'Rapidly validate AI ideas with proof-of-concepts and production-ready MVPs before investing in full-scale development.',
    icon: '🚀',
    gradient: `linear-gradient(135deg, ${accent.green} 0%, ${accent.greenDark} 100%)`,
    overview: 'The biggest risk in AI development is building the wrong thing. Before committing significant resources to a full product, you need to validate that your AI concept actually works, delivers meaningful value, and is technically feasible with your data and infrastructure. Our AI PoC and MVP services are designed to answer these questions quickly and cost-effectively. We build focused prototypes that test your most critical assumptions, demonstrate measurable impact, and provide a clear path to production. Unlike traditional MVPs, AI prototypes require careful attention to data quality, model performance, evaluation metrics, and edge case handling from day one.',
    approach: [
      { title: 'Problem Validation', description: 'We confirm that AI is the right solution for your problem before any development work begins.' },
      { title: 'Data Assessment', description: 'We review your available data to determine if it is sufficient and suitable for the proposed AI solution.' },
      { title: 'Success Criteria', description: 'We define clear, measurable goals that the prototype must meet to justify moving forward.' },
      { title: 'Rapid Prototyping', description: 'We build a focused prototype that tests your most critical assumptions quickly and cost-effectively.' },
      { title: 'Performance Evaluation', description: 'We measure the prototype against your goals and provide honest, data-driven recommendations on next steps.' },
      { title: 'Production Roadmap', description: 'We deliver a clear plan for turning your validated concept into a full, production-ready system.' },
    ],
    features: [
      'Rapid AI concept validation',
      'Proof-of-concept development',
      'Minimum viable product delivery',
      'Data quality and feasibility assessment',
      'Performance benchmarking and evaluation',
      'Cost-benefit analysis and ROI projection',
      'Technical risk identification and mitigation',
      'Clear production readiness report',
    ],
    benefits: [
      { title: 'Reduced Investment Risk', description: 'Validate your AI concept before committing significant resources to full-scale development.' },
      { title: 'Faster Decision Making', description: 'Get clear, data-driven answers about feasibility and value within weeks, not months.' },
      { title: 'Stakeholder Confidence', description: 'Demonstrate tangible results to leadership and investors with a working prototype.' },
      { title: 'Clear Technical Direction', description: 'Receive a detailed roadmap and technical recommendations based on real implementation experience.' },
      { title: 'Cost Efficiency', description: 'Spend a fraction of the budget on validation before investing in production development.' },
      { title: 'Competitive Positioning', description: 'Move faster than competitors who are still in the planning and discussion phase.' },
    ],
    industries: ['Healthcare', 'Finance', 'Retail', 'Logistics', 'Manufacturing', 'Real Estate', 'Education', 'Technology'],
    techStack: ['Python', 'FastAPI', 'OpenAI', 'LangChain', 'Scikit-learn', 'Pandas', 'Streamlit', 'Gradio'],
    faqs: [
      { q: 'What is the difference between a PoC and an MVP?', a: 'A proof-of-concept validates that the core AI idea works technically. An MVP goes further by delivering a minimal but functional product that real users can interact with, providing both technical validation and early market feedback.' },
      { q: 'How long does it take to build an AI PoC?', a: 'Most AI proof-of-concepts are delivered within 2 to 4 weeks, depending on data availability and complexity. We focus on testing the most critical assumptions as quickly as possible.' },
      { q: 'What if the PoC does not work?', a: 'That is exactly why we build PoCs. If the concept does not deliver the expected results, you have saved the cost and time of a full development cycle. We provide a detailed analysis of what did not work and what alternatives to consider.' },
      { q: 'Can you build an MVP that is ready for production?', a: 'Yes. Our MVPs are built with production-quality code, proper error handling, and deployment configurations. While they focus on core features, they are designed to scale into full products without requiring a rewrite.' },
      { q: 'How much does an AI PoC or MVP cost?', a: 'AI PoCs typically range from $10,000 to $25,000. MVPs range from $25,000 to $60,000. We provide detailed estimates after understanding your specific requirements during the discovery phase.' },
      { q: 'Do you provide ongoing support after the PoC?', a: 'Yes. We offer continued development, optimization, and support services. Many clients start with a PoC, then engage us for MVP development and eventually full production builds.' },
    ],
  },
  {
    slug: 'agentic-ai-development',
    shortTitle: 'Agentic AI',
    title: 'Agentic AI Development',
    heroBadge: 'AI Service',
    heroTitle: 'Agentic AI Development',
    heroIntro: 'Build autonomous AI agents capable of reasoning, planning, decision making, and executing complex workflows. We design intelligent agent systems that work independently or alongside human teams to achieve business objectives.',
    description: 'Build autonomous AI agents capable of reasoning, planning, decision making, and executing complex workflows.',
    icon: '🤖',
    gradient: `linear-gradient(135deg, ${accent.amber} 0%, ${accent.amberDark} 100%)`,
    overview: 'Agentic AI represents the next evolution of artificial intelligence. Rather than simply responding to prompts, AI agents can plan multi-step tasks, make decisions based on context, use tools and APIs, and autonomously work toward goals. This opens up possibilities for automating complex business processes that previously required human judgment and coordination. We build production-grade agentic systems that are reliable, observable, and aligned with your business rules. Whether you need agents that handle customer support workflows, process documents, manage data pipelines, or coordinate across multiple systems, we design architectures that balance autonomy with control, ensuring agents act safely and predictably.',
    approach: [
      { title: 'Architecture Design', description: 'We design how your AI agents will work, including how they make decisions, remember context, and use tools.' },
      { title: 'Tool Integration', description: 'We connect your agents to the systems they need, such as databases, APIs, CRMs, and internal tools.' },
      { title: 'Safety & Guardrails', description: 'We set up rules and approval workflows so your agents always operate within safe, defined boundaries.' },
      { title: 'Memory & Context', description: 'We build memory systems that help agents maintain context and improve their decisions over time.' },
      { title: 'Development & Testing', description: 'We build and test the agent system with real-world scenarios to make sure it handles edge cases reliably.' },
      { title: 'Monitoring & Optimization', description: 'We deploy monitoring tools that track agent behavior and performance so you always know what is happening.' },
    ],
    features: [
      'Autonomous multi-step task execution',
      'Multi-agent orchestration and collaboration',
      'Tool use and API integration',
      'Planning and reasoning frameworks',
      'Memory and context persistence',
      'Safety guardrails and approval workflows',
      'Real-time monitoring and observability',
      'Human-in-the-loop escalation',
    ],
    benefits: [
      { title: 'Process Automation', description: 'Automate complex workflows that involve multiple steps, decisions, and system interactions.' },
      { title: '24/7 Operations', description: 'Deploy agents that work continuously without breaks, handling tasks across time zones.' },
      { title: 'Consistent Quality', description: 'Eliminate human error in repetitive processes while maintaining consistent output quality.' },
      { title: 'Scalable Workforce', description: 'Scale operations instantly by deploying additional agents without hiring and training.' },
      { title: 'Faster Execution', description: 'Complete multi-step processes in minutes that would take humans hours or days.' },
      { title: 'Reduced Operational Costs', description: 'Lower the cost of executing routine and complex business processes through intelligent automation.' },
    ],
    industries: ['Finance', 'Healthcare', 'Logistics', 'Legal', 'Real Estate', 'Manufacturing', 'Retail', 'Technology'],
    techStack: ['LangChain', 'LangGraph', 'AutoGen', 'CrewAI', 'OpenAI', 'Claude', 'Vector Databases', 'Message Queues'],
    faqs: [
      { q: 'What is agentic AI?', a: 'Agentic AI refers to AI systems that can autonomously plan, reason, make decisions, and take actions to achieve goals. Unlike simple chatbots or prediction models, agents can use tools, maintain memory, and execute multi-step workflows with minimal human oversight.' },
      { q: 'How do you ensure AI agents act safely?', a: 'We implement multiple layers of safety including defined action boundaries, approval workflows for high-risk operations, real-time monitoring, automatic escalation triggers, and human-in-the-loop review for critical decisions.' },
      { q: 'Can agents work alongside human teams?', a: 'Yes. We design agents that collaborate with human workers by handling routine tasks, providing recommendations, and escalating complex situations that require human judgment. The goal is augmentation, not replacement.' },
      { q: 'What tools can agents integrate with?', a: 'Agents can integrate with virtually any API or tool including CRMs, ERPs, databases, email systems, document management platforms, web browsers, and custom internal tools.' },
      { q: 'How do you handle agent failures?', a: 'We implement comprehensive error handling, automatic retries, graceful degradation, fallback mechanisms, and human escalation paths. Agents are designed to fail safely and transparently.' },
      { q: 'What does it cost to build an AI agent system?', a: 'Costs depend on complexity, number of integrations, and required autonomy level. Simple single-agent systems start around $20,000. Multi-agent orchestration systems with complex workflows typically range from $40,000 to $100,000.' },
    ],
  },
  {
    slug: 'ai-automation',
    shortTitle: 'AI Automation',
    title: 'AI Automation',
    heroBadge: 'AI Service',
    heroTitle: 'AI Automation',
    heroIntro: 'Automate repetitive business processes using AI-powered workflows, document intelligence, and intelligent decision systems. We build automation solutions that reduce manual work, minimize errors, and free your team to focus on higher-value activities.',
    description: 'Automate repetitive business processes using AI-powered workflows, document intelligence, and intelligent decision systems.',
    icon: '⚙️',
    gradient: `linear-gradient(135deg, ${accent.pink} 0%, ${accent.pinkDark} 100%)`,
    overview: 'Every business has processes that consume hours of manual effort every week. Data entry, document processing, report generation, email routing, approval workflows, and information extraction are just a few examples. AI-powered automation transforms these repetitive tasks into intelligent, hands-off workflows that execute faster, more accurately, and at a fraction of the cost. We design automation solutions that go beyond simple rule-based scripting. Our systems use machine learning, natural language processing, and computer vision to handle unstructured data, adapt to variations, and make intelligent decisions. From processing invoices and contracts to managing customer onboarding and compliance workflows, we build automations that deliver immediate ROI.',
    approach: [
      { title: 'Process Assessment', description: 'We review your current workflows to find the tasks that will benefit most from automation.' },
      { title: 'Automation Design', description: 'We design intelligent workflows that combine AI with your existing systems and include human oversight where needed.' },
      { title: 'Document Intelligence', description: 'We build systems that can read, extract, and process information from documents automatically.' },
      { title: 'Workflow Development', description: 'We create end-to-end automated workflows with proper error handling and logging so nothing falls through the cracks.' },
      { title: 'Integration & Testing', description: 'We connect the automation to your tools and test it thoroughly with real production data.' },
      { title: 'Monitoring & Optimization', description: 'We set up dashboards and feedback loops so the system continuously improves its accuracy over time.' },
    ],
    features: [
      'Intelligent document processing and extraction',
      'Automated data entry and migration',
      'Smart email routing and response generation',
      'Workflow automation and orchestration',
      'Invoice and contract processing',
      'Compliance and regulatory automation',
      'Report generation and distribution',
      'Approval workflow automation',
    ],
    benefits: [
      { title: 'Time Savings', description: 'Eliminate hours of manual data entry and processing every week across your organization.' },
      { title: 'Error Reduction', description: 'Dramatically reduce human errors in data processing, document handling, and workflow execution.' },
      { title: 'Cost Efficiency', description: 'Lower operational costs by automating high-volume, repetitive tasks without sacrificing quality.' },
      { title: 'Faster Processing', description: 'Complete processes in minutes that previously took hours or days of manual effort.' },
      { title: 'Scalable Operations', description: 'Handle increasing volumes without proportional increases in headcount or overtime costs.' },
      { title: 'Employee Satisfaction', description: 'Free your team from tedious manual work so they can focus on creative and strategic activities.' },
    ],
    industries: ['Finance', 'Healthcare', 'Legal', 'Real Estate', 'Retail', 'Logistics', 'Manufacturing', 'Insurance'],
    techStack: ['Python', 'OCR/Tesseract', 'spaCy', 'OpenAI', 'Apache Airflow', 'n8n', 'Zapier', 'Custom APIs'],
    faqs: [
      { q: 'What types of processes can be automated with AI?', a: 'Most repetitive business processes involving data extraction, classification, routing, or decision-making can be automated. Common examples include invoice processing, contract review, customer onboarding, report generation, and compliance checking.' },
      { q: 'How is AI automation different from traditional automation?', a: 'Traditional automation follows rigid rules and breaks when encountering exceptions. AI automation uses machine learning and NLP to handle unstructured data, adapt to variations, and make intelligent decisions about edge cases.' },
      { q: 'How long does it take to implement AI automation?', a: 'Simple automations can be deployed in 2 to 4 weeks. Complex enterprise workflows involving multiple systems and decision points typically take 6 to 12 weeks. We prioritize quick wins that deliver immediate value.' },
      { q: 'Will automation replace our employees?', a: 'No. AI automation is designed to augment your team by handling repetitive tasks. Your employees can focus on higher-value work that requires creativity, judgment, and human interaction.' },
      { q: 'How accurate are AI automation systems?', a: 'We design systems with accuracy targets tailored to your needs. Most document processing automations achieve 95 to 99 percent accuracy, with human review for edge cases. Accuracy improves over time as the system learns.' },
      { q: 'What is the ROI of AI automation?', a: 'Most clients see ROI within 3 to 6 months. The typical return includes direct cost savings from reduced manual labor, faster processing times, fewer errors, and improved employee productivity.' },
    ],
  },
  {
    slug: 'ml-dl-development',
    shortTitle: 'ML/DL Development',
    title: 'ML/DL Development',
    heroBadge: 'AI Service',
    heroTitle: 'ML/DL Development',
    heroIntro: 'Develop custom machine learning and deep learning models for prediction, computer vision, NLP, recommendation systems, and more. We build production-grade ML systems that turn your data into a competitive advantage.',
    description: 'Develop custom machine learning and deep learning models for prediction, computer vision, NLP, recommendation systems, and more.',
    icon: '📊',
    gradient: `linear-gradient(135deg, ${accent.cyan} 0%, ${accent.cyanDark} 100%)`,
    overview: 'Machine learning and deep learning are transforming every industry. From predicting customer churn and detecting fraud to analyzing medical images and personalizing recommendations, ML models unlock insights and capabilities that traditional software cannot achieve. But building ML models that work in production requires more than notebook experiments. We build end-to-end ML systems that handle the full lifecycle: data pipelines, feature engineering, model training, evaluation, deployment, monitoring, and retraining. Our focus is always on production readiness, ensuring models deliver consistent, reliable results at scale with proper monitoring and governance.',
    approach: [
      { title: 'Problem Definition', description: 'We translate your business problem into a clear machine learning task with defined goals and success metrics.' },
      { title: 'Data Engineering', description: 'We build reliable data pipelines that collect, clean, and prepare your data for model training.' },
      { title: 'Model Development', description: 'We develop and train models using the latest techniques, tuning them for the best possible performance.' },
      { title: 'Evaluation & Validation', description: 'We test models thoroughly against held-out data, edge cases, and real-world conditions to ensure reliability.' },
      { title: 'Deployment', description: 'We deploy your model to production with scalable infrastructure, version control, and rollback capabilities.' },
      { title: 'Monitoring & Retraining', description: 'We monitor model performance over time and set up automated retraining when data patterns change.' },
    ],
    features: [
      'Custom supervised and unsupervised learning models',
      'Deep learning for computer vision and NLP',
      'Time series forecasting and anomaly detection',
      'Recommendation systems and personalization',
      'Fraud detection and risk scoring',
      'Predictive maintenance and optimization',
      'Model serving and inference optimization',
      'ML pipeline automation and MLOps',
    ],
    benefits: [
      { title: 'Data-Driven Decisions', description: 'Transform raw data into actionable insights that drive better business decisions across the organization.' },
      { title: 'Predictive Capabilities', description: 'Anticipate customer behavior, market trends, and operational issues before they occur.' },
      { title: 'Automated Intelligence', description: 'Replace manual analysis with automated systems that continuously learn and improve.' },
      { title: 'Competitive Advantage', description: 'Leverage proprietary data and models to create capabilities that competitors cannot easily replicate.' },
      { title: 'Operational Efficiency', description: 'Optimize processes, reduce waste, and improve resource allocation through intelligent prediction.' },
      { title: 'Scalable Analytics', description: 'Analyze millions of data points in real time, far beyond human analytical capacity.' },
    ],
    industries: ['Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Logistics', 'Technology', 'Energy', 'Agriculture'],
    techStack: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Hugging Face', 'MLflow', 'ONNX', 'Kubeflow'],
    faqs: [
      { q: 'What is the difference between machine learning and deep learning?', a: 'Machine learning encompasses algorithms that learn patterns from data for prediction and classification. Deep learning is a subset that uses neural networks with many layers, excelling at complex tasks like image recognition, natural language processing, and speech recognition.' },
      { q: 'How much data do I need for an ML project?', a: 'It depends on the problem complexity and approach. Some problems can be solved with hundreds of samples using transfer learning. Others may need thousands or millions of examples. We assess your data during the discovery phase and recommend the best approach.' },
      { q: 'How long does it take to build an ML model?', a: 'A focused model with existing data can be developed in 4 to 8 weeks. Complex systems involving custom data pipelines, multiple models, and production deployment typically take 3 to 6 months.' },
      { q: 'Can you work with our existing data infrastructure?', a: 'Yes. We integrate with your current data sources, warehouses, and pipelines. We also recommend improvements where needed to ensure reliable, scalable ML operations.' },
      { q: 'How do you handle model drift and degradation?', a: 'We implement continuous monitoring that tracks model performance, data distribution shifts, and prediction quality. Automated alerts trigger retraining pipelines when performance drops below defined thresholds.' },
      { q: 'Do you provide model explainability?', a: 'Yes. We implement explainability techniques like SHAP values, attention visualization, and feature importance analysis so your team can understand and trust model decisions.' },
    ],
  },
];

export const webDevelopmentService = {
  slug: 'webdevelopment',
  shortTitle: 'Web Development',
  title: 'Web Development',
  heroBadge: 'Web Service',
  heroTitle: 'Web Development',
  heroIntro: 'We build modern, scalable web applications that perform beautifully across every device. From custom SaaS platforms to enterprise dashboards, our engineering team delivers products that grow with your business.',
  description: 'Custom web applications, SaaS platforms, and enterprise software built with modern frameworks and scalable architectures.',
  icon: '🌐',
  gradient: `linear-gradient(135deg, ${brand.blue} 0%, ${brand.blueDark} 100%)`,
  overview: 'Your web application is the foundation of your digital presence. It needs to be fast, reliable, accessible, and built to handle growth without constant rearchitecting. We design and develop web applications that meet these demands from day one. Our engineering team works with modern frameworks and battle-tested architectures to deliver products that perform under real-world conditions. Whether you need a customer-facing SaaS platform, an internal admin dashboard, a progressive web app, or a complex enterprise system, we build software that is clean, maintainable, and engineered to scale. Every project follows a rigorous development process that includes code review, automated testing, performance optimization, and security hardening before launch.',
  approach: [
    { title: 'Discovery & Planning', description: 'We learn about your project goals, define the scope, and create a clear development roadmap with timelines.' },
    { title: 'Architecture Design', description: 'We plan the technical foundation, including how data is stored, how systems connect, and how the app will scale.' },
    { title: 'Frontend Development', description: 'We build the user interface with responsive layouts, smooth interactions, and consistent design across all devices.' },
    { title: 'Backend Development', description: 'We create the server-side logic, APIs, and database integrations that power your application behind the scenes.' },
    { title: 'Testing & QA', description: 'We test every feature across browsers and devices to catch issues before your users do.' },
    { title: 'Deployment & Support', description: 'We launch your application and provide ongoing maintenance, updates, and new feature development.' },
  ],
  features: [
    'Custom web application development',
    'SaaS platform architecture and build',
    'Progressive Web App (PWA) development',
    'Admin dashboards and internal tools',
    'Customer portals and self-service platforms',
    'RESTful and GraphQL API development',
    'Third-party API integrations',
    'Performance optimization and caching',
    'Responsive design across all devices',
    'Accessibility compliance (WCAG)',
    'Security hardening and penetration testing',
    'Long-term maintenance and support',
  ],
  benefits: [
    { title: 'Scalable Architecture', description: 'Build on foundations that handle growth from hundreds to millions of users without costly rewrites.' },
    { title: 'Faster Time to Market', description: 'Modern frameworks and reusable components accelerate development cycles and product launches.' },
    { title: 'Lower Development Costs', description: 'Clean, maintainable code reduces the long-term cost of features, fixes, and updates.' },
    { title: 'Better User Experience', description: 'Responsive, performant interfaces that work flawlessly across desktop, tablet, and mobile.' },
    { title: 'Security & Compliance', description: 'Built with security best practices, authentication, and data protection from the start.' },
    { title: 'Ongoing Partnership', description: 'Long-term support and maintenance to keep your application evolving with your business needs.' },
  ],
  industries: ['SaaS', 'Healthcare', 'Finance', 'E-Commerce', 'Education', 'Real Estate', 'Logistics', 'Technology'],
  techStack: [
    'React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript',
    'Node.js', 'Express.js', 'NestJS', 'Python', 'Django',
    'FastAPI', 'Java', 'Spring Boot', 'ASP.NET Core',
  ],
  faqs: [
    { q: 'How long does it take to build a web application?', a: 'Timelines vary based on complexity. A focused MVP typically takes 8 to 12 weeks. Complex enterprise platforms with multiple integrations and features usually take 4 to 6 months. We provide a detailed timeline after the discovery phase.' },
    { q: 'What technologies do you use for web development?', a: 'We use modern, production-tested stacks including React, Next.js, TypeScript, Node.js, and PostgreSQL on the frontend and backend. The specific technologies are selected based on your project requirements, team capabilities, and long-term goals.' },
    { q: 'Do you build SaaS platforms from scratch?', a: 'Yes. We design and build complete SaaS platforms including multi-tenancy, subscription management, billing integrations, admin dashboards, and customer-facing features. We also help modernize existing SaaS products.' },
    { q: 'Can you work with our existing codebase?', a: 'Yes. We audit existing codebases, identify technical debt, and implement improvements incrementally. We can take over feature development, fix critical issues, or modernize legacy systems.' },
    { q: 'How do you ensure application security?', a: 'We implement authentication and authorization best practices, input validation, CSRF protection, rate limiting, SQL injection prevention, XSS protection, and regular security audits. We follow OWASP guidelines throughout development.' },
    { q: 'Do you provide ongoing maintenance after launch?', a: 'Yes. We offer maintenance plans that include bug fixes, security updates, performance monitoring, and feature development. Many clients engage us as their long-term development partner.' },
  ],
};

export function getWebDevelopmentService() {
  return webDevelopmentService;
}

export function getRelatedWebServices(count = 3) {
  return aiServices.slice(0, count);
}

export const mobileDevelopmentService = {
  slug: 'mobiledevelopment',
  shortTitle: 'Mobile Development',
  title: 'Mobile Development',
  heroBadge: 'Mobile Service',
  heroTitle: 'Mobile Development',
  heroIntro: 'We craft native and cross-platform mobile applications that feel fast, look great, and work flawlessly across iOS and Android. From concept to launch, we build apps your users will love.',
  description: 'Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android.',
  icon: '📱',
  gradient: `linear-gradient(135deg, ${brand.purple} 0%, ${brand.purpleDark} 100%)`,
  overview: 'Mobile is where your users spend most of their time. A poorly performing app loses customers in seconds. We build mobile applications that are fast, intuitive, and reliable from the first tap. Our team works with both native and cross-platform frameworks to deliver the right balance of performance, development speed, and long-term maintainability. Whether you need a consumer-facing app, an enterprise mobility solution, or an internal tool, we handle the full lifecycle from strategy and design through development, testing, and deployment to the App Store and Google Play. Every app we build is tested across real devices, optimized for performance, and designed to meet platform guidelines while staying true to your brand.',
  approach: [
    { title: 'Discovery', description: 'We define your target users, core features, and platform strategy. We help you choose between native and cross-platform based on your needs.' },
    { title: 'UX & UI Design', description: 'We design mobile-first interfaces that feel natural on both iOS and Android while matching your brand identity.' },
    { title: 'Architecture Planning', description: 'We plan the app structure, including navigation, data flow, API connections, and offline capabilities.' },
    { title: 'Development', description: 'We build the app with clean code, reusable components, and platform-specific optimizations for smooth performance.' },
    { title: 'Testing & QA', description: 'We test across real devices, screen sizes, and OS versions to make sure everything works as expected.' },
    { title: 'Launch & Support', description: 'We handle App Store and Google Play submission and provide ongoing updates and improvements after launch.' },
  ],
  features: [
    'Cross-platform development (Flutter, React Native)',
    'Native iOS and Android development',
    'Offline-first architecture',
    'Push notification systems',
    'In-app purchases and subscriptions',
    'Social media and third-party integrations',
    'Camera, GPS, and sensor integration',
    'Real-time data synchronization',
    'Biometric authentication',
    'Deep linking and universal links',
    'App Store optimization (ASO)',
    'Post-launch maintenance and updates',
  ],
  benefits: [
    { title: 'Wider Reach', description: 'Launch on both iOS and Android simultaneously to reach the maximum audience with a single codebase.' },
    { title: 'Faster Development', description: 'Cross-platform frameworks cut development time by 40 to 60 percent compared to building separate native apps.' },
    { title: 'Native Performance', description: 'Optimized rendering and platform-specific APIs ensure your app feels fast and responsive on every device.' },
    { title: 'Lower Costs', description: 'One codebase means lower development, testing, and maintenance costs without sacrificing quality.' },
    { title: 'Consistent Experience', description: 'Users get the same polished experience regardless of whether they are on iOS or Android.' },
    { title: 'Scalable Architecture', description: 'Built with modular architecture that supports feature additions and platform expansion as your user base grows.' },
  ],
  industries: ['Healthcare', 'Finance', 'E-Commerce', 'Education', 'Fitness', 'Food & Beverage', 'Travel', 'Social Networking'],
  techStack: [
    'Flutter', 'React Native', 'Kotlin', 'Swift',
    'Dart', 'Java', 'SwiftUI', 'Jetpack Compose',
  ],
  faqs: [
    { q: 'Should we build a native app or use cross-platform?', a: 'Cross-platform frameworks like Flutter and React Native are ideal for most apps, delivering near-native performance with shared code. Native development is preferred for apps requiring deep OS integration, complex animations, or platform-specific hardware access.' },
    { q: 'How long does it take to build a mobile app?', a: 'A focused MVP takes 8 to 12 weeks. Complex apps with multiple integrations, real-time features, and custom backend systems typically take 4 to 6 months. We provide a detailed timeline after the discovery phase.' },
    { q: 'Do you handle App Store submission?', a: 'Yes. We manage the entire submission process for both the App Store and Google Play, including metadata, screenshots, privacy policies, and compliance requirements.' },
    { q: 'Can you work with our existing backend?', a: 'Yes. We integrate with existing APIs, databases, and backend services. We also build new backends when needed and ensure seamless communication between the app and your systems.' },
    { q: 'How do you handle app updates after launch?', a: 'We offer maintenance plans that include bug fixes, OS compatibility updates, security patches, and feature development. We monitor crash reports and user feedback to prioritize improvements.' },
    { q: 'What about offline functionality?', a: 'We design apps with offline-first architecture where appropriate, using local databases and sync strategies so users can continue working without an internet connection.' },
  ],
};

export function getMobileDevelopmentService() {
  return mobileDevelopmentService;
}

export function getRelatedMobileServices(count = 3) {
  return aiServices.slice(0, count);
}

export const uiuxDesignService = {
  slug: 'ui-ux-design',
  shortTitle: 'UI/UX Design',
  title: 'UI/UX Design',
  heroBadge: 'Design Service',
  heroTitle: 'UI/UX Design',
  heroIntro: 'We design interfaces that users love. Our research-driven approach combines visual craft with usability science to create digital experiences that feel intuitive, look stunning, and drive measurable business results.',
  description: 'User-centered design that combines beautiful aesthetics with intuitive functionality.',
  icon: '🎨',
  gradient: `linear-gradient(135deg, ${accent.pink} 0%, ${accent.pinkDark} 100%)`,
  overview: 'Great design is invisible. Users should not have to think about how to use your product. They should just feel it works. We design digital experiences that reduce friction, increase engagement, and turn visitors into loyal customers. Our design process starts with understanding your users. Through research, interviews, and behavioral analysis, we uncover what people actually need, how they think, and where existing solutions fail them. From there, we create wireframes, prototypes, and high-fidelity designs that solve real problems. We do not design for aesthetics alone. Every color, layout, and interaction is backed by purpose. Our designs are tested with real users before a single line of code is written, ensuring the final product works as beautifully as it looks.',
  approach: [
    { title: 'User Research', description: 'We interview your users, study competitors, and analyze behavior to understand what people actually need.' },
    { title: 'Information Architecture', description: 'We organize content and navigation so users can find what they need quickly without getting lost.' },
    { title: 'Wireframing', description: 'We sketch out rough layouts to test ideas and flows before committing to visual design.' },
    { title: 'Visual Design', description: 'We create a complete visual system with colors, typography, and components that reflect your brand and scale across the product.' },
    { title: 'Prototyping', description: 'We build interactive mockups that feel like the real product for review and user feedback.' },
    { title: 'User Testing', description: 'We test with real users, gather their feedback, and refine the design until it works beautifully.' },
  ],
  features: [
    'User research and persona development',
    'Journey mapping and flow analysis',
    'Wireframing and information architecture',
    'Visual design and brand systems',
    'Interactive prototyping',
    'Usability testing and analysis',
    'Design system creation',
    'Responsive and adaptive design',
    'Micro-interaction and animation design',
    'Accessibility auditing and compliance',
    'Conversion rate optimization',
    'Design-to-code handoff',
  ],
  benefits: [
    { title: 'Reduced Development Costs', description: 'Catching usability issues in design is 10x cheaper than fixing them after development. Testing before building saves time and money.' },
    { title: 'Higher User Satisfaction', description: 'Research-driven design means users get what they actually need, leading to better reviews, retention, and word-of-mouth.' },
    { title: 'Faster Onboarding', description: 'Intuitive interfaces reduce the learning curve, helping new users understand and adopt your product quickly.' },
    { title: 'Increased Conversions', description: 'Optimized flows and clear CTAs guide users toward the actions that matter most to your business.' },
    { title: 'Brand Consistency', description: 'A unified design system ensures every touchpoint feels cohesive, professional, and true to your brand identity.' },
    { title: 'Competitive Differentiation', description: 'A polished, user-friendly product stands out in crowded markets and justifies premium positioning.' },
  ],
  industries: ['SaaS', 'Healthcare', 'Finance', 'E-Commerce', 'Education', 'Media', 'Real Estate', 'Technology'],
  techStack: [
    'Figma', 'Adobe XD', 'Sketch', 'Framer',
    'Miro', 'Photoshop', 'Illustrator', 'Principle',
  ],
  faqs: [
    { q: 'What is the difference between UI and UX design?', a: 'UX design focuses on how a product works: the structure, flow, and usability. UI design focuses on how it looks: the visual elements, typography, color, and interactions. Both are essential for a successful product.' },
    { q: 'How do you ensure designs match our brand?', a: 'We start with brand discovery to understand your values, personality, and visual identity. Every design decision is guided by your brand guidelines while optimizing for usability and modern design trends.' },
    { q: 'Do you design for mobile and web simultaneously?', a: 'Yes. We design responsive experiences that work beautifully across all devices. We create platform-specific optimizations where needed while maintaining consistency.' },
    { q: 'How long does a design project take?', a: 'A focused design project takes 4 to 8 weeks depending on scope. Larger products with multiple features and user flows typically take 8 to 12 weeks. We provide a timeline after understanding your requirements.' },
    { q: 'Do you provide design systems?', a: 'Yes. We create comprehensive design systems with reusable components, tokens, and guidelines that ensure consistency across your product and accelerate future development.' },
    { q: 'Can you work with our development team?', a: 'Yes. We provide design-to-code handoff with detailed specifications, assets, and documentation. We collaborate closely with your engineering team to ensure designs are implemented accurately.' },
  ],
};

export function getUIUXDesignService() {
  return uiuxDesignService;
}

export function getRelatedUIUXServices(count = 3) {
  return aiServices.slice(0, count);
}

export const qaAutomationService = {
  slug: 'qa-automation',
  shortTitle: 'QA & Automation',
  title: 'QA & Automation',
  heroBadge: 'Quality Service',
  heroTitle: 'QA & Automation',
  heroIntro: 'We ensure your software works flawlessly before your users find the problems. Our QA engineers combine manual testing expertise with automation frameworks to deliver reliable, bug-free releases at speed.',
  description: 'Comprehensive testing strategies and automation frameworks that ensure bug-free releases.',
  icon: '🔍',
  gradient: `linear-gradient(135deg, ${accent.amber} 0%, ${accent.amberDark} 100%)`,
  overview: 'Software quality is not optional. Every bug that reaches your users erodes trust, increases support costs, and damages your brand. We build quality into your development process so defects are caught early, fixes are fast, and releases are confident. Our QA team works alongside your developers throughout the development lifecycle, not just at the end. We design test strategies, build automation frameworks, perform manual exploratory testing, and provide the reporting you need to make informed release decisions. From smoke tests to regression suites, from performance benchmarks to security audits, we cover every dimension of software quality.',
    approach: [
      { title: 'Requirement Analysis', description: 'We study your application and business requirements to understand what needs to be tested and how.' },
      { title: 'Test Planning', description: 'We create a test strategy that covers functional testing, automation, performance, and security.' },
      { title: 'Test Case Creation', description: 'We write detailed test cases that cover all user scenarios, edge cases, and error conditions.' },
      { title: 'Automation Setup', description: 'We build automated test scripts that run quickly and reliably, integrated into your development workflow.' },
      { title: 'Execution & Reporting', description: 'We run tests across devices and browsers, then provide clear reports with issues ranked by severity.' },
      { title: 'Regression Testing', description: 'We continuously retest existing features to make sure new changes do not break anything that was working before.' },
    ],
  features: [
    'Manual functional testing',
    'Test automation (Selenium, Playwright, Cypress)',
    'Mobile testing (Appium)',
    'API testing and validation',
    'Performance and load testing',
    'Cross-browser and cross-device testing',
    'Security vulnerability scanning',
    'Accessibility testing (WCAG compliance)',
    'Regression testing automation',
    'CI/CD pipeline integration',
    'Test case management and reporting',
    'User acceptance testing (UAT)',
  ],
  benefits: [
    { title: 'Fewer Production Bugs', description: 'Catching defects before release reduces costly production incidents and customer-facing issues.' },
    { title: 'Faster Releases', description: 'Automated regression suites enable confident, rapid deployments without the risk of breaking existing features.' },
    { title: 'Lower Testing Costs', description: 'Automation reduces repetitive manual effort, freeing testers to focus on complex exploratory testing.' },
    { title: 'Better Coverage', description: 'Automated tests run consistently across browsers, devices, and scenarios that manual testing cannot cover at scale.' },
    { title: 'Continuous Quality', description: 'Integration with CI/CD pipelines means every code change is tested automatically, catching issues early.' },
    { title: 'Measurable Quality', description: 'Clear metrics on test coverage, defect rates, and pass rates give you data-driven confidence in release readiness.' },
  ],
  industries: ['Healthcare', 'Finance', 'E-Commerce', 'SaaS', 'Education', 'Logistics', 'Technology', 'Insurance'],
  techStack: [
    'Selenium', 'Playwright', 'Cypress', 'Appium',
    'Postman', 'JMeter', 'BrowserStack', 'TestRail',
    'Jira', 'Charles Proxy',
  ],
  faqs: [
    { q: 'When should we start QA in our project?', a: 'QA should start as early as possible. Involving QA during requirements and design prevents defects rather than just finding them. We recommend engaging QA from the planning phase.' },
    { q: 'How much test automation is appropriate?', a: 'It depends on your product. We typically automate regression tests, critical user journeys, and API tests. Exploratory and usability testing remain manual. We recommend a balanced approach that maximizes coverage and ROI.' },
    { q: 'Do you integrate with our CI/CD pipeline?', a: 'Yes. We integrate automated tests into your CI/CD pipeline so tests run on every commit or pull request. This provides immediate feedback to developers and prevents regressions from reaching production.' },
    { q: 'Can you test our mobile app on real devices?', a: 'Yes. We test on real devices through cloud platforms like BrowserStack and DeviceFarm, as well as physical device labs covering the most common screen sizes, OS versions, and manufacturers.' },
    { q: 'How do you report test results?', a: 'We provide detailed test reports including pass/fail rates, defect summaries, screenshots, and reproduction steps. Dashboards are available through tools like TestRail or your preferred test management platform.' },
    { q: 'Do you offer ongoing QA support?', a: 'Yes. We provide retainer-based QA services that include continuous test maintenance, new test case creation, regression testing for updates, and expansion of automation coverage as your product grows.' },
  ],
};

export function getQAAutomationService() {
  return qaAutomationService;
}

export function getRelatedQAServices(count = 3) {
  return aiServices.slice(0, count);
}

export const cloudDevOpsService = {
  slug: 'cloud-devops',
  shortTitle: 'Cloud & DevOps',
  title: 'Cloud & DevOps',
  heroBadge: 'Infrastructure Service',
  heroTitle: 'Cloud & DevOps',
  heroIntro: 'We build and manage cloud infrastructure that scales with your business. From containerization to CI/CD pipelines, we ensure your applications deploy reliably, perform consistently, and cost efficiently.',
  description: 'Scalable cloud infrastructure and CI/CD pipelines for rapid, reliable deployments.',
  icon: '☁️',
  gradient: `linear-gradient(135deg, ${accent.cyan} 0%, ${accent.cyanDark} 100%)`,
  overview: 'Modern software requires modern infrastructure. Moving to the cloud or optimizing what you have there demands expertise across provisioning, containerization, orchestration, monitoring, and security. We help organizations build reliable, scalable, and cost-effective cloud environments. Our team works with AWS, Azure, and Google Cloud to design architectures that match your performance requirements and budget. We automate everything from infrastructure provisioning to deployment pipelines, so your team can ship code confidently and quickly. We also implement monitoring, alerting, and cost optimization so you always know what is running, how it performs, and what it costs.',
  approach: [
    { title: 'Infrastructure Assessment', description: 'We review your current setup, find inefficiencies, and plan the best path for migration or improvement.' },
    { title: 'Architecture Planning', description: 'We design a cloud architecture that balances performance, reliability, and cost for your specific workload.' },
    { title: 'Environment Setup', description: 'We configure your cloud environment with security, networking, and access controls built in from the start.' },
    { title: 'CI/CD Implementation', description: 'We set up automated build and deployment pipelines so your team can release code quickly and safely.' },
    { title: 'Monitoring & Alerting', description: 'We deploy monitoring tools that track performance, uptime, and costs so you always know what is running.' },
    { title: 'Optimization & Support', description: 'We continuously optimize your infrastructure for cost and performance as your business grows.' },
  ],
  features: [
    'Cloud migration and optimization',
    'AWS, Azure, and Google Cloud setup',
    'Infrastructure as Code (Terraform, CloudFormation)',
    'Docker containerization',
    'Kubernetes orchestration',
    'CI/CD pipeline design and implementation',
    'Automated testing in pipelines',
    'Monitoring and alerting (Prometheus, Grafana)',
    'Log management and analysis',
    'Cost optimization and governance',
    'Security hardening and compliance',
    'Disaster recovery planning',
  ],
  benefits: [
    { title: 'Reliable Deployments', description: 'Automated pipelines eliminate manual errors and ensure every deployment follows the same proven process.' },
    { title: 'Scalable Infrastructure', description: 'Cloud-native architectures scale automatically with demand, handling traffic spikes without manual intervention.' },
    { title: 'Faster Releases', description: 'CI/CD pipelines reduce deployment time from hours to minutes, enabling rapid iteration and feature delivery.' },
    { title: 'Cost Efficiency', description: 'Right-sized resources, auto-scaling, and cost monitoring prevent waste and keep cloud bills predictable.' },
    { title: 'High Availability', description: 'Multi-region, multi-AZ architectures ensure your applications stay online even during infrastructure failures.' },
    { title: 'Security & Compliance', description: 'Built-in security best practices, audit logging, and compliance frameworks protect your data and meet regulations.' },
  ],
  industries: ['Technology', 'Healthcare', 'Finance', 'E-Commerce', 'SaaS', 'Media', 'Logistics', 'Education'],
  techStack: [
    'AWS', 'Azure', 'Google Cloud', 'Docker',
    'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions',
    'GitLab CI', 'Argo CD', 'Prometheus', 'Grafana',
    'Nginx', 'Ansible',
  ],
  faqs: [
    { q: 'Which cloud provider should we use?', a: 'The best provider depends on your existing team expertise, budget, compliance requirements, and specific services needed. We evaluate AWS, Azure, and Google Cloud against your requirements and provide an honest recommendation.' },
    { q: 'How long does a cloud migration take?', a: 'Migration timelines vary from 4 weeks for simple lift-and-shift projects to 6 months or more for complex re-architecture. We provide a detailed plan after assessing your current infrastructure.' },
    { q: 'Do you manage our cloud infrastructure after setup?', a: 'Yes. We offer managed infrastructure services including monitoring, patching, scaling, cost optimization, and incident response. We become an extension of your team.' },
    { q: 'How do you reduce cloud costs?', a: 'We right-size instances, implement auto-scaling, use reserved instances where appropriate, clean up unused resources, and set up cost alerts. Most clients see 20 to 40 percent cost reductions.' },
    { q: 'Can you work with our existing CI/CD setup?', a: 'Yes. We improve and extend existing pipelines rather than replacing them. We add automation, testing, security scanning, and deployment strategies that fit your workflow.' },
    { q: 'How do you handle disaster recovery?', a: 'We design DR strategies based on your RTO and RPO requirements, including backups, failover automation, multi-region replication, and regular disaster recovery testing.' },
  ],
};

export function getCloudDevOpsService() {
  return cloudDevOpsService;
}

export function getRelatedCloudServices(count = 3) {
  const all = [cloudDevOpsService, ...aiServices.slice(0, count)];
  return all.slice(0, count);
}

export function getAiServiceBySlug(slug) {
  return aiServices.find((s) => s.slug === slug);
}

export function getRelatedAiServices(currentSlug, count = 3) {
  const current = aiServices.find((s) => s.slug === currentSlug);
  if (!current) return aiServices.slice(0, count);
  return aiServices.filter((s) => s.slug !== currentSlug).slice(0, count);
}

const ALL_SERVICES = [
  ...aiServices,
  webDevelopmentService,
  mobileDevelopmentService,
  uiuxDesignService,
  qaAutomationService,
  cloudDevOpsService,
];

export function getServiceBySlug(slug) {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug, count = 3) {
  return ALL_SERVICES.filter((s) => s.slug !== currentSlug).slice(0, count);
}
