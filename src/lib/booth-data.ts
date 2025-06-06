
import type { Booth } from '@/types';

// Original booths array for reference to reconstruct the new order
const originalBoothsData: Omit<Booth, 'boothNumber'>[] = [
  {
    id: 'prism-ai-use-cases',
    name: 'Prism AI Use Cases',
    tagline: 'Journey Towards Cognitive ERP - Powered by PRISM AI',
    description: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
    iconName: 'Cpu',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwYmFubmVyfGVufDB8fHx8MTc0OTAyNjM4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f1-rfq-processing',
        name: 'RFQ Processing (Kinetic)',
        description: 'Prism AI for Business Communications revolutionizes RFQ workflows by leveraging NLP to review and summarize supplier interactions. It identifies optimal pricing and lead times, eliminating manual review and enabling procurement teams to focus on strategy and relationships.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzQ5MDI4Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-list-metric-agents',
        name: 'Demonstration of List and Metric Agents',
        description: 'This feature empowers business users to retrieve real-time operational lists (e.g., open orders, overdue items) without IT support. It accelerates decision-making through AI-driven, self-service insights directly in Kinetic.',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8cmVhbHRpbWUlMjBkYXRhfGVufDB8fHx8MTc0OTAzNDcxMHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-edd',
        name: 'Prism for EDD',
        description: 'Epicor Data Discovery (EDD) enables users to visualize real-time data through interactive dashboards. It transforms raw data into actionable insights without exporting data, enhancing performance monitoring and data-driven decisions.',
        image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbnRlcnByaXNlJTIwZGF0YXxlbnwwfHx8fDE3NDkwMzE1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-app-studio',
        name: 'Prism Application Studio',
        description: 'Allows users to build and deploy Kinetic customizations through a low-code, AI-assisted interface. It reduces reliance on developers, making it easier to tailor forms, workflows, and logic to specific business needs.',
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxBcHBsaWNhdGlvbiUyMHN0dWRpb3xlbnwwfHx8fDE3NDkwMzE0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-platform-ux-multimodal',
        name: 'Platform - UX (Grow Integration + Multimodal Agent)',
        description: 'A multimodal agent interprets diverse inputs like images and video. For example, it can analyze a Grow BI chart snapshot and answer contextual questions, enhancing data comprehension through visual and intuitive interactions.',
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxVSSUyMFVYfGVufDB8fHx8MTc0OTAyODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-ecm-prism-agent',
        name: 'ECM Prism Agent: AI-Powered Document Intelligence',
        description: 'Transforms ECM search with AI-powered natural language queries. Users can summarize, extract insights, and compare documents using conversational prompts, enabling smarter, faster document handling.',
        image: 'https://images.unsplash.com/photo-1706466614149-5e04fd018a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxBSXxlbnwwfHx8fDE3NDg5MjMwODV8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-quickship-agent',
        name: 'Quick Ship Agent – AI-Powered Shipment Tracking',
        description: 'Integrates shipment tracking into Kinetic, allowing users to monitor delivery statuses without leaving the platform. It enhances visibility and user convenience by eliminating UI switching.',
        image: 'https://images.unsplash.com/photo-1569938709389-ff8ab00530b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8bmF2aWdhdGlvbnxlbnwwfHx8fDE3NDkwMzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-self-service-ai',
        name: 'Self-Service Problem Resolution with AI',
        description: 'This feature uses AI and KB articles to guide users through troubleshooting processes. It reduces support dependency, enabling faster and more proactive problem resolution.',
        image: 'https://images.unsplash.com/photo-1526374870839-e155464bb9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8ZGlnaXRhbCUyMGFic3RyYWN0fGVufDB8fHx8MTc0OTAzNTgxMnww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
  },
  {
    id: 'non-prism-ai-use-cases',
    name: 'Non Prism AI Use Cases',
    tagline: 'See the Future of Our Product—Through the Lens of AI',
    description: 'Step into the future with our AI pavilion, where cutting-edge demos showcase how AI is revolutionizing business. See how powerful language models transform massive purchase orders into streamlined sales orders, how AI smartly accelerates cloud migrations by analyzing and upgrading customizations, and how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone. Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.',
    iconName: 'Lightbulb',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjb3Jwb3JhdGUlMjBkaWdpdGFsfGVufDB8fHx8MTc0OTAzNjM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-np-ecm-ai-order-creation',
        name: 'ECM: AI-Led Order Creation from Document',
        description: 'Discover how AI is transforming order management with this cutting-edge proof of concept. Leveraging GPT and Google Gemini large language models, this demo showcases the automatic conversion of lengthy purchase orders—up to 100 pages—into structured, schema-aligned sales orders in Epicor Kinetic ERP. The AI extracts key details from header, line-item, and schedule levels, enabling high-volume, low-touch processing for faster, smarter order entry.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8ZG9jdW1lbnRzfGVufDB8fHx8MTc0OTAzNjExNHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-np-ascend-ai-migration',
        name: 'Project Ascend: AI-Driven Migration to Cloud',
        description: 'See how AI is accelerating the journey to the cloud with Project Ascend. This demo highlights how AI analyzes existing customizations and provides summaries of their intent. The initiative supports future migration and streamlining of these customizations into the latest Kinetic version on cloud—reducing manual effort and enabling a smoother, smarter upgrade path.',
        image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NDkwMjgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-np-as-ai-integrations',
        name: 'Automation Studio: AI-Enabled Integrations',
        description: 'Discover how AI simplifies integration and automation with Automation Studio. This demo showcases how AI assists in building custom connectors and automation recipes—empowering users to connect systems and streamline workflows without deep technical expertise. It’s low-code integration made smarter, faster, and more accessible.',
        image: 'https://images.unsplash.com/photo-1602468432285-0fe26e8352ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
  },
  {
    id: 'ai-accelerated-development',
    name: 'AI Accelerated Development',
    tagline: 'AI Accelerated Development – Develop Smarter, Innovate Faster',
    description: 'Experience how AI transforms software delivery—from auto-generating C# code for e-invoicing to intelligent unit test creation with GitHub Copilot. See our AI Agent in action, generating smart pull request previews in Azure DevOps. Accelerate development, reduce effort, and empower partners like never before.',
    iconName: 'Rocket',
    heroImage: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0OTAyNzg4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-ai-dev-csf-einvoicing',
        name: 'CSF E-Invoicing AI',
        description: 'A framework where, once the business analyst creates the e-invoice JSON structure and mapping, AI generates the corresponding C# code. This code fetches, processes, and formats the data to produce the final e-invoice JSON file—ready for transmission to vendors. This innovation cuts down manual development effort and empowers partners to create e-invoicing templates without needing Epicor PD support.',
        image: 'https://images.unsplash.com/photo-1693045181224-9fc2f954f054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8aW52b2ljZXxlbnwwfHx8fDE3NDkwMjg2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-ai-dev-unittest-copilot',
        name: 'Unit Test Automation with GitHub Copilot',
        description: 'Boost developer productivity with AI-powered unit test generation. This demo highlights how GitHub Copilot streamlines writing comprehensive test cases—saving time and improving code quality by automating repetitive work, allowing developers to focus on building features.',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxnaXRodWIlMjB8ZW58MHx8fHwxNzQ5MDM4NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-ai-dev-pr-review',
        name: 'AI-Based PR Review',
        description: 'AI Agent integrated with Azure DevOps to automatically generate intelligent pull request summaries and previews. This enables faster, more informed code reviews and improves collaboration across development teams.',
        image: 'https://images.unsplash.com/photo-1607799632518-da91dd151b38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-ai-dev-epiconnect',
        name: 'EpiConnect – Smarter Development & Testing through AI-Driven Customer Insight',
        description: 'EpiConnect bridges gaps between Engineering and Support using AI to analyze support tickets, identify recurring issues, monitor sentiment, and prioritize improvements. It also recommends severity for reported issues and aligns product testing with real customer pain points for more data-driven decisions.',
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-ai-dev-log-analyzer',
        name: 'Log Analyzer through AI',
        description: 'An AI-driven tool that semantically analyzes unstructured log files using large language models. It allows users to query logs in natural language, detect anomalies faster, and supports a modular, scalable, and product-agnostic setup—enhancing debugging and incident resolution.',
        image: 'https://images.unsplash.com/photo-1746608943132-065d1d4b3c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-ai-dev-imagen',
        name: 'iMAGen – Intelligent Manual & Automated Test Generator',
        description: 'iMAGen reads Jira requirements, summarizes feature expectations, and automatically generates detailed manual test cases. It integrates with test repositories and significantly improves QA efficiency—making it scalable across multiple products and projects.',
        image: 'https://images.unsplash.com/photo-1745674684463-62f62cb88d4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-ai-dev-itrace',
        name: 'iTRACE – Intelligent Test Root-Cause Analysis and Correction Engine',
        description: 'An AI-assisted tool that analyzes logs, screenshots, and scripts to identify test automation failures. It provides actionable root-cause insights and fix suggestions—reducing debugging time from hours to minutes and accelerating continuous testing cycles.',
        image: 'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-ai-dev-impact-analyzer',
        name: 'Impact Analyzer – AI-Enabled Precision Testing',
        description: 'Uses LLMs to analyze code diffs or commits from CodeChurn Tool and determine the impacted modules, functionalities, and relevant regression test cases. This enables precision testing and reduces unnecessary test runs—improving test relevance and efficiency.',
        image: 'https://images.unsplash.com/photo-1582224369048-e4d2d7a6ba30?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-ai-dev-recoder-executor',
        name: 'ReCoder Executor – No Code Solution for Test Automation',
        description: 'A no-code test execution platform designed for scripts generated by Epicor ReCoder. It allows users to organize, execute, and monitor automated tests through an intuitive interface—streamlining automation workflows without requiring any programming skills.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-ai-dev-documatch',
        name: 'Epicor DocuMatch',
        description: 'A robust document comparison engine capable of identifying content differences across formats—including images and charts. It can be used manually or integrated into automation workflows, supporting validation and quality assurance across diverse document types.',
        image: 'https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
  },
  {
    id: 'cloud-enablers', // This ID remains, but content changes
    name: 'QA meets AI',
    tagline: 'QA meets AI - Reimagining Quality',
    description: 'Step into the future of Quality Assurance at our "QA Meets AI" booth!\nDiscover how we’re blending the power of AI and the latest tech innovations to transform traditional QA practices and experience how we’re accelerating releases while boosting confidence in quality.\nWhether you’re curious about how AI can write tests, find bugs, or even help debug them — or just want to see innovation in action — don’t miss this interactive showcase.\nJoin us to see how QA is no longer a checkpoint, but a co-pilot in innovation.',
    iconName: 'Zap', // Updated icon
    heroImage: 'https://placehold.co/1200x400.png', // Keeping placeholder for now, or use a more relevant one
    features: [
      {
        id: 'f8-epiconnect',
        name: 'EpiConnect – Smarter Development & Testing through AI-Driven Customer Insight',
        description: 'EpiConnect bridges the visibility gap between Engineering and Support by leveraging AI to analyze support ticket data, automate ticket resolution, uncover customer usage patterns, and surface actionable insights.\nIt empowers teams to recognize recurring themes, monitor customer sentiment, and prioritize improvements effectively.\nBy automatically assessing and recommending the severity of reported issues, EpiConnect helps support teams and stakeholders triage and respond with consistency and urgency. It also enables data-driven decisions by aligning product enhancements and testing strategies with real customer needs and sentiment trends.',
        image: 'https://placehold.co/600x400.png',
        category: 'AI in QA'
      },
      {
        id: 'f8-log-analyzer',
        name: 'Log Analyzer through AI',
        description: 'AI Log Analyzer is an AI-driven system designed to analyze unstructured log files across different applications. It uses large language models (LLMs) to semantically interpret logs, allowing users—from developers to business analysts—to query system behaviors through natural language.\nThe product features a modular architecture, vector-based log search, and a scalable, product-agnostic core. Key benefits include faster issue resolution, reduced dependence on deep technical knowledge, and adaptability across multiple products.',
        image: 'https://placehold.co/600x400.png',
        category: 'AI in QA'
      },
      {
        id: 'f8-imagen',
        name: 'iMAGen - Intelligent Manual & Automated Test Generator',
        description: 'iMAGen (Intelligent Manual & Automated Test Case Generator) is an AI-powered tool that streamlines test case creation by reading Jira requirements, summarizing feature needs, and generating comprehensive manual test cases in minutes.\nIt integrates with test repositories, boosts QA efficiency, and is easily scalable across products.',
        image: 'https://placehold.co/600x400.png',
        category: 'AI in QA'
      },
      {
        id: 'f8-itrace',
        name: 'iTRACE - Intelligent Test Root-cause Analysis and Correction Engine',
        description: 'iTRACE is an AI-assisted tool that analyzes automation failures using logs, screenshots, and scripts to quickly identify root causes, suggest fixes, and provide insights—reducing debugging time from hours to minutes and enabling faster, seamless continuous testing.',
        image: 'https://placehold.co/600x400.png',
        category: 'AI in QA'
      },
      {
        id: 'f8-impact-analyzer',
        name: 'Impact Analyzer - AI Enabled Precision Testing',
        description: 'An intelligent tool that ingests code diffs or commits from the CodeChurn Tool, leverages an LLM to analyze changes, and identifies impacted areas including affected modules, functionalities, and potential regression test cases—enabling precision testing.',
        image: 'https://placehold.co/600x400.png',
        category: 'AI in QA'
      },
      {
        id: 'f8-recoder-executor',
        name: 'ReCoder Executor: No-Code Solution for Test Automation',
        description: 'Epicor ReCoder Test Executor is a powerful, user-friendly, no-code test script execution and management tool designed to streamline automation workflows for scripts generated by Epicor ReCoder.\nIt offers a seamless interface to organize, execute, and monitor automated tests efficiently without the need for coding.',
        image: 'https://placehold.co/600x400.png',
        category: 'AI in QA'
      },
      {
        id: 'f8-documatch',
        name: 'Epicor DocuMatch',
        description: 'DocuMatch is a powerful and versatile document comparison engine designed to compare a wide range of document types with precision and efficiency.\nIt offers a rich set of features for detecting content differences—including images and charts.\nDocuMatch can be seamlessly used through an intuitive UI for manual reviews or integrated as a comparison package within automation projects, making it ideal for both end-users and developers seeking reliable document validation and quality assurance.',
        image: 'https://placehold.co/600x400.png',
        category: 'AI in QA'
      }
    ],
  },
  {
    id: 'cross-platform',
    name: 'Cross Platform',
    tagline: 'Cross Platform: Beyond ERP – Powering Possibilities Across Platforms',
    description: 'Explore how we’re transforming legacy products with a modern web-based experience—featuring Mattec’s shift to the ICE framework/UX Platform and a redesigned SLS interface. See new compliance capabilities for Support at Home in aged care, and ECM’s mobile app with mass document approvals. Experience seamless freight invoice processing across Kinetic, ECM, and Quick Ship—showcasing the true power of integrated Epicor solutions. Elevate UX, mobility, and operations—all in one booth.',
    iconName: 'Laptop',
    heroImage: 'https://images.unsplash.com/photo-1605918321371-584f5deab0a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8fHwxNzQ5MDI4MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-cp-mattec-new-ux',
        name: 'Showcasing the New Mattec Experience',
        description: "Step into the future of Mattec with a modernized user experience. This demo illustrates the migration from legacy tech like C, C++, and MFC to a fully web-based platform built on the Kinetic ICE framework. The new Advanced MES interface eliminates client installs, enhances navigation, and lets users personalize their homepage with shortcuts—creating a faster, more user-friendly experience.",
        image: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cp-ecm-mobile-bulk',
        name: 'ECM On the Go: Bulk Approvals through Mobile App',
        description: "Revolutionize mobile workflows with ECM’s enhanced mobile app, now featuring mass document approval. Executives on the move can quickly select and approve multiple documents in one tap—without needing to open each one—bringing desktop-level efficiency to mobile devices.",
        image: 'https://images.unsplash.com/photo-1640694514279-090bb1b09ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkYXNoYm9hcmQlMjBpbiUyMG1vYmlsZXxlbnwwfHx8fDE3NDkwMjkwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-cp-ice-overview',
        name: 'ICE Overview',
        description: "An overview of Epicor’s powerful ICE framework and its role in enabling innovation across products like Kinetic, Mattec, and SLS. Learn about key tools like BAQs, BPMs, Epicor Functions, UD Services, and Extension Maintenance—empowering users and developers to extend and automate the platform with ease.",
        image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cp-qs-freight',
        name: 'Quick Ship: Integrated Freight Validation',
        description: "This demo highlights seamless freight invoice validation by integrating ECM, Quick Ship, and Kinetic ERP. Invoices captured through ECM are auto-validated by Quick Ship and processed in Kinetic—reducing errors, cutting manual tasks, and optimizing freight workflows.",
        image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cp-sls-new-ux-support',
        name: 'SLS New Experience & Support at Home',
        description: "Discover the redesigned, browser-based SLS interface built on Kinetic design principles. Also featured is the “Support at Home” module—helping aged care providers maintain compliance with Australia’s Aged Care Quality Standards. Includes tools for streamlined incident reporting, accurate documentation, and enhanced client privacy and rights.",
        image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
  },
  {
    id: 'manufacturing-erp',
    name: 'Manufacturing ERP',
    tagline: 'Manufacturing ERP: Expand Globally, Excel Industry Specifically (Process Mfg)',
    description: 'Explore Country Specific Functions (CSF) in Kinetic ERP, designed to meet local compliance needs. Get a quick insight into global e-invoicing initiatives driving transparency and accountability in financial transactions. Also, discover Tropos—the ERP built for process manufacturers in food, beverage, pharmaceuticals, metals, and chemicals—featuring recipe-based production, full traceability, regulatory compliance, and lean manufacturing support.',
    iconName: 'Factory',
    heroImage: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bWFudWZhY3R1cmluZyUyMHxlbnwwfHx8fDE3NDkwMjkxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-mfg-csf-flow',
        name: 'CSF Overall Flow',
        description: "An end-to-end demonstration of the Quote to Cash cycle in a generic manufacturing ERP context. This model provides a high-level understanding of the business flow supported by Kinetic ERP, enabling a deeper appreciation of the integrated capabilities that support global operations.",
        image: 'https://images.unsplash.com/photo-1580983559367-0dc2f8934365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-mfg-csf-einvoicing',
        name: 'CSF E-invoicing Coverage',
        description: "A visual model showing the structure and information flow in e-invoicing systems mandated globally. The demo helps audiences understand the key entities and processes within a CSF-based e-invoicing framework, essential for ensuring compliance and automation across borders.",
        image: 'https://images.unsplash.com/photo-1616156027751-fc9a850fdc9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-mfg-tropos-mobile',
        name: 'Tropos Mobile App',
        description: "Explore the modernized mobile experience of Tropos, where old RBA-based screens have been revamped using the latest technology stack. The new mobile app enhances usability and responsiveness—bringing a contemporary, mobile-first approach to process manufacturing operations.",
        image: 'https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-mfg-tropos-kinetic',
        name: 'Tropos Kinetic Integration',
        description: "This demo highlights the financial integration between Tropos and Kinetic ERP. Experience how data flows seamlessly between systems—enabling consistent financial operations, consolidated reporting, and streamlined business processes across both platforms.",
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-mfg-tropos-liquor',
        name: 'Tropos: Learn to Make Liquor',
        description: "Dive into a smart, unified platform built to manage the planning, simulation, and execution of liquor blending. This feature showcases how precision, experimentation, and quality control come together in one digital solution—empowering manufacturers to maintain batch consistency and compliance.",
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
  },
  {
    id: 'integration',
    name: 'Integration',
    tagline: 'Unify platforms & streamline workflows.',
    description: 'Explore the latest in Automation Studio with newly added connectors and recipes, including Propello and Eclipse. See enhanced Data Fabric capabilities—featuring large file support, cross-tenant configurations, and Linux agent integration. Learn how the GBL process automates license generation for Data Interchange and EULK, streamlining compliance. Plus, watch seamless Quick Ship–Automation Studio integration in action with LTL carriers using QS Connector and automation recipes.',
    iconName: 'GitMerge',
    heroImage: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxpbnRlZ3JhdGlvbnxlbnwwfHx8fDE3NDkwMjk0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-int-connectors-recipes',
        name: 'AI New Connectors/Recipes',
        description: 'Discover the latest additions to Automation Studio’s connector library, including integrations with Propello, Eclipse, and more. These new recipes enable smoother automation and wider platform support—empowering users to connect business systems faster and build intelligent workflows with minimal effort.',
        image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-int-data-fabric',
        name: 'Data Fabric',
        description: 'Showcasing powerful new capabilities in Data Fabric, this demo includes support for large files, cross-tenant configurations, and Linux-based agent deployments. These enhancements offer greater flexibility, scalability, and platform compatibility for complex integration needs.',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-int-gbl-licensing',
        name: 'DI / EULK (GBL Licensing Automation)',
        description: 'This demo walks through the GBL (Global Business Logic) process used to automatically generate licenses for Data Interchange and EULK. By eliminating manual intervention, this automation streamlines compliance tasks and accelerates license provisioning in enterprise environments.',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxHbG9iYWwlMjBMaWNlbnNpbmd8ZW58MHx8fHwxNzQ5MDI5NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-int-quickship-ltl',
        name: 'Quick Ship LTL: Automation Studio Integration',
        description: 'Experience seamless integration between Quick Ship and Automation Studio. This demo shows how the QS Connector and automation recipes are used to coordinate logistics workflows with LTL carriers—reducing manual processing, increasing visibility, and improving shipping efficiency.',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    tagline: 'Cloud Enablers',
    description: 'Discover the power of self-managed portals, intelligent cloud architecture, and real-time monitoring—designed to drive innovation, agility, and control. Visit us to see how Epicor delivers a smarter, faster path to the cloud.',
    iconName: 'Cloud',
    heroImage: 'https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      {
        id: 'f-cld-self-serve-upgrade',
        name: 'Self-Serve Upgrade via Cloud Management Portal',
        description: 'Experience the new Self-Serve Upgrade capability in the Cloud Management Portal (CMP), empowering customers to trigger upgrades independently. This innovation reduces upgrade time from 24+ hours to under 1 hour, eliminates dependency on CloudOps, and accelerates platform agility—improving overall customer experience and operational efficiency.',
        image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cld-solarwinds-monitoring',
        name: 'Resource Monitoring with SolarWinds',
        description: 'See how real-time resource monitoring comes to life with SolarWinds. This demo features intuitive dashboards that provide visibility into the health and performance of servers, networks, and applications—complete with proactive alerting and deep operational insights.',
        image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NDkwMjgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-cld-nextgen-arch-ops',
        name: 'Next-Gen Cloud Architecture & Operations',
        description: 'Explore our next-gen architecture, combining scalable infrastructure, Infrastructure as Code (IaC), CI/CD, and policy-driven governance. With AI-assisted operational insights and anomaly detection, this architecture ensures consistent deployments, faster provisioning, and resilient cloud operations at scale.',
        image: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cld-quickship-deployment',
        name: 'Quick Ship Deployment (Cloud-Native)',
        description: 'Discover how Quick Ship’s SaaS solution utilizes ARM templates and PowerShell scripting to enable streamlined deployments and seamless upgrades—delivering speed, reliability, and cloud-native scalability for logistics platforms.',
        image: 'https://images.unsplash.com/photo-1577760258779-e787a1733016?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cld-resource-optimization',
        name: 'Cloud Resource Optimization: Auto Start/Stop',
        description: 'This initiative demonstrates automated scheduling of start/stop routines for non-production cloud VMs—minimizing costs, conserving energy, and ensuring cloud resources are used only when needed. A smart solution to improve sustainability and reduce operational waste.',
        image: 'https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
  },
];

const boothDataWithNumbers: Booth[] = originalBoothsData.map((booth, index) => {
  // Determine display number based on desired final visual order
  // Original IDs: prism, non-prism, ai-dev, cross-platform, mfg-erp, integration, cloud, cloud-enablers
  // New visual order of cards:
  // 1. prism-ai-use-cases (original index 0) -> display 1
  // 2. non-prism-ai-use-cases (original index 1) -> display 2
  // 3. ai-accelerated-development (original index 2) -> display 3
  // 4. cloud-enablers (original index 7, now "QA meets AI") -> display 8
  // 5. cross-platform (original index 3) -> display 4
  // 6. manufacturing-erp (original index 4) -> display 5
  // 7. integration (original index 5) -> display 6
  // 8. cloud (original index 6) -> display 7

  let boothNumber;
  switch (booth.id) {
    case 'prism-ai-use-cases': boothNumber = 1; break;
    case 'non-prism-ai-use-cases': boothNumber = 2; break;
    case 'ai-accelerated-development': boothNumber = 3; break;
    case 'cloud-enablers': boothNumber = 8; break; // This is the "QA meets AI" booth
    case 'cross-platform': boothNumber = 4; break;
    case 'manufacturing-erp': boothNumber = 5; break;
    case 'integration': boothNumber = 6; break;
    case 'cloud': boothNumber = 7; break;
    default: boothNumber = index + 1; // Fallback, should not happen if all IDs are covered
  }
  return { ...booth, boothNumber };
});


// Reorder the array for final export based on desired visual presentation on homepage
// Visual order: [1], [2], [3], [8], [4], [5], [6], [7] (using assigned boothNumbers)
// which maps to IDs: prism, non-prism, ai-dev, cloud-enablers (QA), cross-platform, mfg-erp, integration, cloud

const getBoothByIdFromMapped = (id: string, data: Booth[]): Booth => {
    const found = data.find(b => b.id === id);
    if (!found) throw new Error(`Booth with id ${id} not found in provided data.`);
    return found;
}

export const booths: Booth[] = [
  getBoothByIdFromMapped('prism-ai-use-cases', boothDataWithNumbers),
  getBoothByIdFromMapped('non-prism-ai-use-cases', boothDataWithNumbers),
  getBoothByIdFromMapped('ai-accelerated-development', boothDataWithNumbers),
  getBoothByIdFromMapped('cloud-enablers', boothDataWithNumbers), // This is "QA meets AI", displaying number 8
  getBoothByIdFromMapped('cross-platform', boothDataWithNumbers),
  getBoothByIdFromMapped('manufacturing-erp', boothDataWithNumbers),
  getBoothByIdFromMapped('integration', boothDataWithNumbers),
  getBoothByIdFromMapped('cloud', boothDataWithNumbers),
];


export const getBoothById = (id: string): Booth | undefined => {
  return booths.find(booth => booth.id === id);
};
