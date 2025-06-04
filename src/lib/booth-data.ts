
import type { Booth } from '@/types';

export const booths: Booth[] = [
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
        id: 'f1-prism-edd',
        name: 'Prism for EDD',
        description: 'Epicor Data Discovery (EDD) enables users to visualize real-time data through interactive dashboards. It transforms raw data into actionable insights without exporting data, enhancing performance monitoring and data-driven decisions.',
        image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbnRlcnByaXNlJTIwZGF0YXxlbnwwfHx8fDE3NDkwMzE1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-prism-app-studio',
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
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-self-service-ai',
        name: 'Self-Service Problem Resolution with AI',
        description: 'This feature uses AI and KB articles to guide users through troubleshooting processes. It reduces support dependency, enabling faster and more proactive problem resolution.',
        image: 'https://placehold.co/600x400.png'
      }
    ],
  },
  {
    id: 'non-prism-ai-use-cases',
    name: 'Non Prism AI Use Cases',
    tagline: 'See the Future of Our Product—Through the Lens of AI',
    description: 'Step into the future with our AI pavilion, where cutting-edge demos showcase how AI is revolutionizing business. See how powerful language models transform massive purchase orders into streamlined sales orders, how AI smartly accelerates cloud migrations by analyzing and upgrading customizations, and how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone. Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.',
    iconName: 'Lightbulb',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      {
        id: 'f-np-ecm-ai-order-creation',
        name: 'ECM: AI-Led Order Creation from Document',
        description: 'Discover how AI is transforming order management with this cutting-edge proof of concept. Leveraging GPT and Google Gemini large language models, this demo showcases the automatic conversion of lengthy purchase orders—up to 100 pages—into structured, schema-aligned sales orders in Epicor Kinetic ERP. The AI extracts key details from header, line-item, and schedule levels, enabling high-volume, low-touch processing for faster, smarter order entry.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-np-ascend-ai-migration',
        name: 'Project Ascend: AI-Driven Migration to Cloud',
        description: 'See how AI is accelerating the journey to the cloud with Project Ascend. This demo highlights how AI analyzes existing customizations and provides summaries of their intent. The initiative supports future migration and streamlining of these customizations into the latest Kinetic version on cloud—reducing manual effort and enabling a smoother, smarter upgrade path.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-np-as-ai-integrations',
        name: 'Automation Studio: AI-Enabled Integrations',
        description: 'Discover how AI simplifies integration and automation with Automation Studio. This demo showcases how AI assists in building custom connectors and automation recipes—empowering users to connect systems and streamline workflows without deep technical expertise. It’s low-code integration made smarter, faster, and more accessible.',
        image: 'https://placehold.co/600x400.png'
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
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-unittest-copilot',
        name: 'Unit Test Automation with GitHub Copilot',
        description: 'Boost developer productivity with AI-powered unit test generation. This demo highlights how GitHub Copilot streamlines writing comprehensive test cases—saving time and improving code quality by automating repetitive work, allowing developers to focus on building features.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-pr-review',
        name: 'AI-Based PR Review',
        description: 'AI Agent integrated with Azure DevOps to automatically generate intelligent pull request summaries and previews. This enables faster, more informed code reviews and improves collaboration across development teams.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-epiconnect',
        name: 'EpiConnect – Smarter Development & Testing through AI-Driven Customer Insight',
        description: 'EpiConnect bridges gaps between Engineering and Support using AI to analyze support tickets, identify recurring issues, monitor sentiment, and prioritize improvements. It also recommends severity for reported issues and aligns product testing with real customer pain points for more data-driven decisions.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-log-analyzer',
        name: 'Log Analyzer through AI',
        description: 'An AI-driven tool that semantically analyzes unstructured log files using large language models. It allows users to query logs in natural language, detect anomalies faster, and supports a modular, scalable, and product-agnostic setup—enhancing debugging and incident resolution.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-imagen',
        name: 'iMAGen – Intelligent Manual & Automated Test Generator',
        description: 'iMAGen reads Jira requirements, summarizes feature expectations, and automatically generates detailed manual test cases. It integrates with test repositories and significantly improves QA efficiency—making it scalable across multiple products and projects.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-itrace',
        name: 'iTRACE – Intelligent Test Root-Cause Analysis and Correction Engine',
        description: 'An AI-assisted tool that analyzes logs, screenshots, and scripts to identify test automation failures. It provides actionable root-cause insights and fix suggestions—reducing debugging time from hours to minutes and accelerating continuous testing cycles.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-impact-analyzer',
        name: 'Impact Analyzer – AI-Enabled Precision Testing',
        description: 'Uses LLMs to analyze code diffs or commits from CodeChurn Tool and determine the impacted modules, functionalities, and relevant regression test cases. This enables precision testing and reduces unnecessary test runs—improving test relevance and efficiency.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-recoder-executor',
        name: 'ReCoder Executor – No Code Solution for Test Automation',
        description: 'A no-code test execution platform designed for scripts generated by Epicor ReCoder. It allows users to organize, execute, and monitor automated tests through an intuitive interface—streamlining automation workflows without requiring any programming skills.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-ai-dev-documatch',
        name: 'Epicor DocuMatch',
        description: 'A robust document comparison engine capable of identifying content differences across formats—including images and charts. It can be used manually or integrated into automation workflows, supporting validation and quality assurance across diverse document types.',
        image: 'https://placehold.co/600x400.png'
      },
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
        image: 'https://placehold.co/600x400.png'
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
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-cp-qs-freight',
        name: 'Quick Ship: Integrated Freight Validation',
        description: "This demo highlights seamless freight invoice validation by integrating ECM, Quick Ship, and Kinetic ERP. Invoices captured through ECM are auto-validated by Quick Ship and processed in Kinetic—reducing errors, cutting manual tasks, and optimizing freight workflows.",
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-cp-sls-new-ux-support',
        name: 'SLS New Experience & Support at Home',
        description: "Discover the redesigned, browser-based SLS interface built on Kinetic design principles. Also featured is the “Support at Home” module—helping aged care providers maintain compliance with Australia’s Aged Care Quality Standards. Includes tools for streamlined incident reporting, accurate documentation, and enhanced client privacy and rights.",
        image: 'https://placehold.co/600x400.png'
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
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-mfg-csf-einvoicing',
        name: 'CSF E-invoicing Coverage',
        description: "A visual model showing the structure and information flow in e-invoicing systems mandated globally. The demo helps audiences understand the key entities and processes within a CSF-based e-invoicing framework, essential for ensuring compliance and automation across borders.",
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-mfg-tropos-mobile',
        name: 'Tropos Mobile App',
        description: "Explore the modernized mobile experience of Tropos, where old RBA-based screens have been revamped using the latest technology stack. The new mobile app enhances usability and responsiveness—bringing a contemporary, mobile-first approach to process manufacturing operations.",
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-mfg-tropos-kinetic',
        name: 'Tropos Kinetic Integration',
        description: "This demo highlights the financial integration between Tropos and Kinetic ERP. Experience how data flows seamlessly between systems—enabling consistent financial operations, consolidated reporting, and streamlined business processes across both platforms.",
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-mfg-tropos-liquor',
        name: 'Tropos: Learn to Make Liquor',
        description: "Dive into a smart, unified platform built to manage the planning, simulation, and execution of liquor blending. This feature showcases how precision, experimentation, and quality control come together in one digital solution—empowering manufacturers to maintain batch consistency and compliance.",
        image: 'https://placehold.co/600x400.png'
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
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-int-data-fabric',
        name: 'Data Fabric',
        description: 'Showcasing powerful new capabilities in Data Fabric, this demo includes support for large files, cross-tenant configurations, and Linux-based agent deployments. These enhancements offer greater flexibility, scalability, and platform compatibility for complex integration needs.',
        image: 'https://placehold.co/600x400.png'
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
        image: 'https://placehold.co/600x400.png'
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    tagline: 'Cloud Enablers',
    description: 'Discover the power of self-managed portals, intelligent cloud architecture, and real-time monitoring—designed to drive innovation, agility, and control. Visit us to see how Epicor delivers a smarter, faster path to the cloud.',
    iconName: 'Cloud',
    heroImage: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NDkwMjgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-cld-self-serve-upgrade',
        name: 'Self-Serve Upgrade via Cloud Management Portal',
        description: 'Experience the new Self-Serve Upgrade capability in the Cloud Management Portal (CMP), empowering customers to trigger upgrades independently. This innovation reduces upgrade time from 24+ hours to under 1 hour, eliminates dependency on CloudOps, and accelerates platform agility—improving overall customer experience and operational efficiency.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-cld-solarwinds-monitoring',
        name: 'Resource Monitoring with SolarWinds',
        description: 'See how real-time resource monitoring comes to life with SolarWinds. This demo features intuitive dashboards that provide visibility into the health and performance of servers, networks, and applications—complete with proactive alerting and deep operational insights.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-cld-nextgen-arch-ops',
        name: 'Next-Gen Cloud Architecture & Operations',
        description: 'Explore our next-gen architecture, combining scalable infrastructure, Infrastructure as Code (IaC), CI/CD, and policy-driven governance. With AI-assisted operational insights and anomaly detection, this architecture ensures consistent deployments, faster provisioning, and resilient cloud operations at scale.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-cld-quickship-deployment',
        name: 'Quick Ship Deployment (Cloud-Native)',
        description: 'Discover how Quick Ship’s SaaS solution utilizes ARM templates and PowerShell scripting to enable streamlined deployments and seamless upgrades—delivering speed, reliability, and cloud-native scalability for logistics platforms.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-cld-resource-optimization',
        name: 'Cloud Resource Optimization: Auto Start/Stop',
        description: 'This initiative demonstrates automated scheduling of start/stop routines for non-production cloud VMs—minimizing costs, conserving energy, and ensuring cloud resources are used only when needed. A smart solution to improve sustainability and reduce operational waste.',
        image: 'https://placehold.co/600x400.png'
      },
    ],
  },
  {
    id: 'cloud-enablers',
    name: 'Cloud Enablers',
    tagline: 'Tools for Your Cloud Journey',
    description: 'A suite of tools and services designed to facilitate your adoption and optimization of cloud technologies, ensuring a smooth and successful transition.',
    iconName: 'Layers',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      { id: 'f8-1', name: 'Cloud Migration Tools', description: 'Simplify your move to the cloud.', longDescription: 'Automate and streamline the process of migrating your applications, data, and infrastructure to the cloud. Minimize downtime and risk with our proven methodologies and tools.', image: 'https://placehold.co/600x400.png' },
      { id: 'f8-2', name: 'Cost Optimization', description: 'Control and reduce your cloud spending.', longDescription: 'Gain visibility into your cloud costs, identify savings opportunities, and implement optimization strategies. Ensure you get the most value from your cloud investment.', image: 'https://placehold.co/600x400.png' },
      { id: 'f8-3', name: 'Security & Compliance', description: 'Secure your cloud environment effectively.', longDescription: 'Implement robust security measures and ensure compliance with industry regulations. Our tools help you manage identities, protect data, and detect threats in the cloud.', image: 'https://placehold.co/600x400.png' },
    ],
  },
];

export const getBoothById = (id: string): Booth | undefined => {
  return booths.find(booth => booth.id === id);
};

// Original data for booth 'f1-kinetic' and 'f1-app-studio' and 'f1-edd' which are now part of 'prism-ai-use-cases'
// These were likely individual features before being grouped.
// Retaining them here for context or if they need to be re-integrated separately.
// {
//   id: 'f1-kinetic',
//   name: 'Kinetic',
//   description: 'Drive intelligent operations and enhanced decision-making with the AI-powered Kinetic platform and Prism tools.',
//   longDescription: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
//   image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxEYXNoYm9hcmR8ZW58MHx8fHwxNzQ5MDMxMzAyfDA&ixlib=rb-4.1.0&q=80&w=1080'
// },
// {
//   id: 'f1-app-studio',
//   name: 'Application Studio',
//   description: 'Easily customize and extend AI capabilities within Kinetic using Prism for Application Studio.',
//   longDescription: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
//   image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxBcHBsaWNhdGlvbiUyMHN0dWRpb3xlbnwwfHx8fDE3NDkwMzE0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
// },
// {
//   id: 'f1-edd',
//   name: 'Prism for EDD',
//   description: 'Leverage Prism for EDD to transform your enterprise data into actionable business insights.',
//   longDescription: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
//   image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbnRlcnByaXNlJTIwZGF0YXxlbnwwfHx8fDE3NDkwMzE1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080'
// },
// Original data for 'f-mfg-csf' and 'f-mfg-tropos' which are part of 'manufacturing-erp'
// {
//   id: 'f-mfg-csf',
//   name: 'CSF',
//   description: "Kinetic ERP's CSF for local compliance & global e-invoicing insights.",
//   longDescription: "Explore Country Specific Functions (CSF) in Kinetic ERP, designed to meet local compliance needs. Get quick insights into global e-invoicing initiatives driving transparency and accountability in financial transactions.",
//   image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aW5zaWdodHN8ZW58MHx8fHwxNzQ5MDI5Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080'
// },
// {
//   id: 'f-mfg-tropos',
//   name: 'Tropos',
//   description: 'Tropos: ERP for process manufacturers with recipe-based production, traceability & compliance.',
//   longDescription: 'Discover Tropos, the ERP built for process manufacturers in food, beverage, pharmaceuticals, metals, and chemicals—featuring recipe-based production, full traceability, regulatory compliance, and lean manufacturing support.',
//   image: 'https://images.unsplash.com/photo-1580983559367-0dc2f8934365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxFUlB8ZW58MHx8fHwxNzQ5MDI5MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080'
// },
// Original data for 'f-int-di-eulk-licensing' which is part of 'integration'
// {
//   id: 'f-int-di-eulk-licensing',
//   name: 'DI / EULK (GBL Licensing Automation)',
//   description: 'GBL process automates license generation for Data Interchange & EULK.',
//   longDescription: 'Learn how the GBL process automates license generation for Data Interchange and EULK, streamlining compliance and license management processes.',
//   image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxHbG9iYWwlMjBMaWNlbnNpbmd8ZW58MHx8fHwxNzQ5MDI5NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
// }

