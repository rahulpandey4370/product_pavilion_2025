
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
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-list-metric-agents',
        name: 'Demonstration of List and Metric Agents',
        description: 'This feature empowers business users to retrieve real-time operational lists (e.g., open orders, overdue items) without IT support. It accelerates decision-making through AI-driven, self-service insights directly in Kinetic.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-prism-edd',
        name: 'Prism for EDD',
        description: 'Epicor Data Discovery (EDD) enables users to visualize real-time data through interactive dashboards. It transforms raw data into actionable insights without exporting data, enhancing performance monitoring and data-driven decisions.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-prism-app-studio',
        name: 'Prism Application Studio',
        description: 'Allows users to build and deploy Kinetic customizations through a low-code, AI-assisted interface. It reduces reliance on developers, making it easier to tailor forms, workflows, and logic to specific business needs.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-platform-ux-multimodal',
        name: 'Platform - UX (Grow Integration + Multimodal Agent)',
        description: 'A multimodal agent interprets diverse inputs like images and video. For example, it can analyze a Grow BI chart snapshot and answer contextual questions, enhancing data comprehension through visual and intuitive interactions.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-ecm-prism-agent',
        name: 'ECM Prism Agent: AI-Powered Document Intelligence',
        description: 'Transforms ECM search with AI-powered natural language queries. Users can summarize, extract insights, and compare documents using conversational prompts, enabling smarter, faster document handling.',
        image: 'https://placehold.co/600x400.png'
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
    tagline: 'Versatile Solutions Beyond AI',
    description: 'See the Future of Our Product—Through the Lens of AI',
    iconName: 'Lightbulb',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      {
        id: 'f-np-ecm',
        name: 'ECM (Enterprise Content Management)',
        description: 'AI transforms purchase orders to sales orders, reshaping order management efficiency.',
        longDescription: 'See how powerful language models transform massive purchase orders into streamlined sales orders. Experience firsthand how AI is reshaping efficiency across order management.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-np-as',
        name: 'Automation Studio',
        description: 'Low-code AI simplifies system integration, revolutionizing workflow automation.',
        longDescription: 'Experience how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone. See how AI is revolutionizing workflow automation.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f-np-pa',
        name: 'Project Ascend',
        description: 'AI accelerates cloud migrations by analyzing and upgrading customizations.',
        longDescription: 'Discover how AI smartly accelerates cloud migrations by analyzing and upgrading customizations. Step into the future where cutting-edge technology is transforming cloud adoption processes.',
        image: 'https://placehold.co/600x400.png'
      },
    ],
  },
  {
    id: 'ai-accelerated-development',
    name: 'AI Accelerated Development',
    tagline: 'Build Faster, Smarter',
    description: 'Leverage AI to speed up your development lifecycle, from code generation to testing and deployment, ensuring quality and innovation.',
    iconName: 'Rocket',
    heroImage: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0OTAyNzg4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-ad-csf',
        name: 'CSF',
        description: 'AI auto-generates C# code for e-invoicing & creates unit tests with GitHub Copilot.',
        longDescription: 'Experience how AI transforms software delivery through auto-generating C# code for e-invoicing and intelligent unit test creation with GitHub Copilot. Accelerate development and reduce effort like never before.',
        image: 'https://images.unsplash.com/photo-1495592822108-9e6261896da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHx0ZWNobm9sb2d5JTIwYWJzdHJhY3R8ZW58MHx8fHwxNzQ5MDI2Mzg3fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-ad-as',
        name: 'Automation Studio',
        description: 'AI Agent generates smart pull request previews in Azure DevOps, empowering partners.',
        longDescription: 'See our AI Agent in action, generating smart pull request previews in Azure DevOps. Witness how AI is empowering partners through intelligent development automation.',
        image: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwc3R1ZGlvfGVufDB8fHx8MTc0OTAyNzYzOHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-ad-df',
        name: 'Data Fabric',
        description: 'AI transforms software delivery workflows for smarter, efficient data integration.',
        longDescription: 'Discover how AI transforms software delivery workflows, making development processes smarter and more efficient for seamless data integration.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxEYXRhfGVufDB8fHx8MTc0OTAyNzkyOHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
    ],
  },
  {
    id: 'cross-platform',
    name: 'Cross Platform',
    tagline: 'Seamless Experience Everywhere',
    description: 'Develop applications that run smoothly across multiple operating systems and devices, ensuring a consistent user experience with a single codebase.',
    iconName: 'Laptop',
    heroImage: 'https://images.unsplash.com/photo-1605918321371-584f5deab0a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8fHwxNzQ5MDI4MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      { 
        id: 'f-cp-mattec', 
        name: 'Mattec', 
        description: "Mattec's shift to ICE framework/UX Platform modernizes legacy products with cutting-edge UX.", 
        longDescription: "Explore the transformation to modern web-based experience featuring Mattec's shift to the ICE framework/UX Platform. See how legacy products are being elevated with cutting-edge UX design.", 
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxVSSUyMFVYfGVufDB8fHx8MTc0OTAyODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080' 
      },
      { 
        id: 'f-cp-sls', 
        name: 'SLS', 
        description: 'Redesigned SLS interface with modern web capabilities for enhanced UX.', 
        longDescription: 'Experience the redesigned SLS interface with modern web-based capabilities. Witness how traditional systems are being transformed for enhanced user experience.', 
        image: 'https://images.unsplash.com/photo-1549098473-5cc4347b3eb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOHx8bW9kZXJuJTIwd2VifGVufDB8fHx8MTc0OTAyODU4Nnww&ixlib=rb-4.1.0&q=80&w=1080' 
      },
      { 
        id: 'f-cp-ecm', 
        name: 'ECM', 
        description: 'ECM mobile app: mass document approvals & new aged care compliance features.', 
        longDescription: "See ECM's mobile app with mass document approvals and new compliance capabilities for Support at Home in aged care. Experience mobility solutions that enhance operational efficiency.", 
        image: 'https://images.unsplash.com/photo-1640694514279-090bb1b09ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkYXNoYm9hcmQlMjBpbiUyMG1vYmlsZXxlbnwwfHx8fDE3NDkwMjkwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080' 
      },
      { 
        id: 'f-cp-qs', 
        name: 'Quick Ship', 
        description: 'Seamless freight invoice processing with Kinetic & ECM via Quick Ship.', 
        longDescription: 'Experience seamless freight invoice processing integration with Kinetic and ECM. See how Quick Ship showcases the true power of integrated Epicor solutions.', 
        image: 'https://images.unsplash.com/photo-1654263736203-a289f57c0d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxpbnZvaWNlfGVufDB8fHx8MTc0OTAyODY3M3ww&ixlib=rb-4.1.0&q=80&w=1080' 
      },
      { 
        id: 'f-cp-kinetic', 
        name: 'Kinetic', 
        description: 'Kinetic: seamless freight invoice processing & integration with ECM/Quick Ship.', 
        longDescription: 'Discover seamless freight invoice processing capabilities and integration with ECM and Quick Ship, demonstrating comprehensive ERP connectivity.', 
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzQ5MDI4Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080' 
      },
      { 
        id: 'f-cp-ice', 
        name: 'ICE Framework', 
        description: 'ICE framework: modern UX Platform transforming legacy products for better UX & mobility.', 
        longDescription: "Explore the modern web-based UX Platform that's transforming legacy products. See how the ICE framework elevates user experience, mobility, and operations.", 
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxVWCUyMGludGVyZmFjZXxlbnwwfHx8fDE3NDkwMjg4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080' 
      },
    ],
  },
  {
    id: 'manufacturing-erp',
    name: 'Manufacturing ERP',
    tagline: 'Optimize Your Production Line',
    description: 'A comprehensive ERP solution tailored for the manufacturing industry, streamlining operations from inventory management to supply chain and production planning.',
    iconName: 'Factory',
    heroImage: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bWFudWZhY3R1cmluZyUyMHxlbnwwfHx8fDE3NDkwMjkxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      { 
        id: 'f-mfg-csf', 
        name: 'CSF', 
        description: "Kinetic ERP's CSF for local compliance & global e-invoicing insights.", 
        longDescription: 'Explore Country Specific Functions (CSF) in Kinetic ERP, designed to meet local compliance needs. Get quick insights into global e-invoicing initiatives driving transparency and accountability in financial transactions.', 
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8aW5zaWdodHN8ZW58MHx8fHwxNzQ5MDI5Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080' 
      },
      { 
        id: 'f-mfg-tropos', 
        name: 'Tropos', 
        description: 'Tropos: ERP for process manufacturers with recipe-based production, traceability & compliance.', 
        longDescription: 'Discover Tropos, the ERP built for process manufacturers in food, beverage, pharmaceuticals, metals, and chemicals—featuring recipe-based production, full traceability, regulatory compliance, and lean manufacturing support.', 
        image: 'https://images.unsplash.com/photo-1580983559367-0dc2f8934365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxFUlB8ZW58MHx8fHwxNzQ5MDI5MzQzfDA&ixlib=rb-4.1.0&q=80&w=1080' 
      },
    ],
  },
  {
    id: 'integration',
    name: 'Integration',
    tagline: 'Connect Your Ecosystem',
    description: 'Seamlessly integrate various systems, applications, and data sources to create a unified and efficient operational environment.',
    iconName: 'GitMerge',
    heroImage: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxpbnRlZ3JhdGlvbnxlbnwwfHx8fDE3NDkwMjk0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      { 
        id: 'f-int-as', 
        name: 'Automation Studio', 
        description: 'Automation Studio: new connectors (Propello, Eclipse) & Quick Ship LTL integration.', 
        longDescription: 'Explore the latest in Automation Studio with newly added connectors and recipes, including Propello and Eclipse. Watch seamless Quick Ship–Automation Studio integration in action with LTL carriers using QS Connector and automation recipes.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f-int-df', 
        name: 'Data Fabric', 
        description: 'Data Fabric: large file support, cross-tenant configs & Linux agent integration.', 
        longDescription: 'See enhanced Data Fabric capabilities—featuring large file support, cross-tenant configurations, and Linux agent integration for comprehensive data management.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f-int-gl', 
        name: 'Global Licensing', 
        description: 'GBL process automates license generation for Data Interchange & EULK.', 
        longDescription: 'Learn how the GBL process automates license generation for Data Interchange and EULK, streamlining compliance and license management processes.', 
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxHbG9iYWwlMjBMaWNlbnNpbmd8ZW58MHx8fHwxNzQ5MDI5NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080' 
      },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    tagline: 'Elevate Your Business with Cloud',
    description: 'Leverage the power of the cloud for scalability, reliability, and innovation. Our cloud solutions support your digital transformation journey.',
    iconName: 'Cloud',
    heroImage: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NDkwMjgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      { 
        id: 'f-cld-cmp', 
        name: 'CMP', 
        description: 'Self-managed portals & intelligent cloud management platforms for innovation.', 
        longDescription: 'Discover the power of self-managed portals and intelligent cloud management platforms designed to drive innovation and control.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f-cld-infra', 
        name: 'Infra', 
        description: 'Intelligent cloud architecture for agile, scalable performance.', 
        longDescription: 'Experience intelligent cloud architecture and infrastructure solutions that provide agility and scalable performance.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f-cld-upgrade', 
        name: 'Upgrade', 
        description: "Epicor's smarter, faster path to cloud upgrades with streamlined migration.", 
        longDescription: 'See how Epicor delivers a smarter, faster path to cloud upgrades with streamlined migration processes.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f-cld-ss', 
        name: 'Self Serve', 
        description: 'Self-service capabilities for autonomous cloud management & configuration.', 
        longDescription: 'Explore self-service capabilities that empower users with autonomous cloud management and configuration tools.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f-cld-nga', 
        name: 'Cloud Next-Gen Architecture', 
        description: 'Real-time monitoring & next-gen cloud architecture for optimal performance.', 
        longDescription: 'Witness real-time monitoring and next-generation cloud architecture designed for optimal performance and innovation.', 
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
