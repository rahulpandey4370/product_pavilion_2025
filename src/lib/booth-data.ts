
import type { Booth } from '@/types';

export const booths: Booth[] = [
  {
    id: 'prism-ai-use-cases',
    name: 'Prism AI Use Cases',
    tagline: 'Unlock the Power of AI',
    description: 'Explore innovative applications and solutions driven by Prism AI, transforming industries and everyday tasks with intelligent automation and insights.',
    iconName: 'Cpu',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      {
        id: 'f1-kinetic',
        name: 'Kinetic',
        description: 'Drive intelligent operations and enhanced decision-making with the AI-powered Kinetic platform and Prism tools.',
        longDescription: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-app-studio',
        name: 'Application Studio',
        description: 'Easily customize and extend AI capabilities within Kinetic using Prism for Application Studio.',
        longDescription: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-edd',
        name: 'EDD',
        description: 'Leverage Prism for EDD to transform your enterprise data into actionable business insights.',
        longDescription: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-ecm',
        name: 'ECM',
        description: 'Seamlessly retrieve and manage documents using natural language queries with the ECM Agent.',
        longDescription: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f1-quick-ship',
        name: 'Quick Ship',
        description: 'Integrate real-time freight tracking and logistics management with AI-driven Quick Ship.',
        longDescription: 'Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools. Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio. Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent. Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service. Experience the future of agile, data-driven business.',
        image: 'https://placehold.co/600x400.png'
      }
    ],
  },
  {
    id: 'non-prism-ai-use-cases',
    name: 'Non Prism AI Use Cases',
    tagline: 'Versatile Solutions Beyond AI',
    description: 'Discover a range of powerful applications that excel in their domains without relying on Prism AI, showcasing robust and specialized functionalities.',
    iconName: 'Lightbulb',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      {
        id: 'f2-ecm-updated',
        name: 'ECM',
        description: 'AI transforming purchase orders, accelerating cloud migrations, and simplifying integrations.',
        longDescription: 'Step into the future with our AI pavilion, where cutting-edge demos showcase how AI is revolutionizing business. See how powerful language models transform massive purchase orders into streamlined sales orders, how AI smartly accelerates cloud migrations by analyzing and upgrading customizations, and how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone. Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f2-automation-studio-updated',
        name: 'Automation Studio',
        description: 'Low-code AI-driven automation making complex system integration faster and smarter.',
        longDescription: 'Step into the future with our AI pavilion, where cutting-edge demos showcase how AI is revolutionizing business. See how powerful language models transform massive purchase orders into streamlined sales orders, how AI smartly accelerates cloud migrations by analyzing and upgrading customizations, and how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone. Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f2-project-ascend-updated',
        name: 'Project Ascend',
        description: 'Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.',
        longDescription: 'Step into the future with our AI pavilion, where cutting-edge demos showcase how AI is revolutionizing business. See how powerful language models transform massive purchase orders into streamlined sales orders, how AI smartly accelerates cloud migrations by analyzing and upgrading customizations, and how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone. Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.',
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
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      {
        id: 'f3-csf-dev',
        name: 'CSF',
        description: 'AI-driven C# code generation for e-invoicing and intelligent unit test creation.',
        longDescription: 'Experience how AI transforms software delivery—from auto-generating C# code for e-invoicing to intelligent unit test creation with GitHub Copilot. See our AI Agent in action, generating smart pull request previews in Azure DevOps. Accelerate development, reduce effort, and empower partners like never before',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f3-automation-studio-dev',
        name: 'Automation Studio',
        description: 'AI Agent generating smart pull request previews in Azure DevOps for faster cycles.',
        longDescription: 'Experience how AI transforms software delivery—from auto-generating C# code for e-invoicing to intelligent unit test creation with GitHub Copilot. See our AI Agent in action, generating smart pull request previews in Azure DevOps. Accelerate development, reduce effort, and empower partners like never before',
        image: 'https://placehold.co/600x400.png'
      },
      {
        id: 'f3-data-fabric-dev',
        name: 'Data Fabric',
        description: 'Accelerate development and empower partners using AI-enhanced software delivery.',
        longDescription: 'Experience how AI transforms software delivery—from auto-generating C# code for e-invoicing to intelligent unit test creation with GitHub Copilot. See our AI Agent in action, generating smart pull request previews in Azure DevOps. Accelerate development, reduce effort, and empower partners like never before',
        image: 'https://placehold.co/600x400.png'
      },
    ],
  },
  {
    id: 'cross-platform',
    name: 'Cross Platform',
    tagline: 'Seamless Experience Everywhere',
    description: 'Develop applications that run smoothly across multiple operating systems and devices, ensuring a consistent user experience with a single codebase.',
    iconName: 'Laptop',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      { 
        id: 'f4-mattec', 
        name: 'Mattec', 
        description: 'Modernizing Mattec with a web-based experience using the ICE framework and UX Platform.', 
        longDescription: 'Explore how we’re transforming legacy products with a modern web-based experience—featuring Mattec’s shift to the ICE framework/UX Platform and a redesigned SLS interface. See new compliance capabilities for Support at Home in aged care, and ECM’s mobile app with mass document approvals. Experience seamless freight invoice processing across Kinetic, ECM, and Quick Ship—showcasing the true power of integrated Epicor solutions. Elevate UX, mobility, and operations—all in one booth.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f4-sls', 
        name: 'SLS', 
        description: 'Redesigned SLS interface delivering an enhanced, modern user experience.', 
        longDescription: 'Explore how we’re transforming legacy products with a modern web-based experience—featuring Mattec’s shift to the ICE framework/UX Platform and a redesigned SLS interface. See new compliance capabilities for Support at Home in aged care, and ECM’s mobile app with mass document approvals. Experience seamless freight invoice processing across Kinetic, ECM, and Quick Ship—showcasing the true power of integrated Epicor solutions. Elevate UX, mobility, and operations—all in one booth.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f4-ecm-cross', 
        name: 'ECM', 
        description: 'ECM mobile app enabling mass document approvals and new aged care compliance features.', 
        longDescription: 'Explore how we’re transforming legacy products with a modern web-based experience—featuring Mattec’s shift to the ICE framework/UX Platform and a redesigned SLS interface. See new compliance capabilities for Support at Home in aged care, and ECM’s mobile app with mass document approvals. Experience seamless freight invoice processing across Kinetic, ECM, and Quick Ship—showcasing the true power of integrated Epicor solutions. Elevate UX, mobility, and operations—all in one booth.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f4-quickship-cross', 
        name: 'Quick Ship', 
        description: 'Seamless freight invoice processing integrated across Kinetic, ECM, and Quick Ship.', 
        longDescription: 'Explore how we’re transforming legacy products with a modern web-based experience—featuring Mattec’s shift to the ICE framework/UX Platform and a redesigned SLS interface. See new compliance capabilities for Support at Home in aged care, and ECM’s mobile app with mass document approvals. Experience seamless freight invoice processing across Kinetic, ECM, and Quick Ship—showcasing the true power of integrated Epicor solutions. Elevate UX, mobility, and operations—all in one booth.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f4-kinetic-cross', 
        name: 'Kinetic', 
        description: 'Showcasing integrated solutions and the power of Kinetic in cross-platform scenarios.', 
        longDescription: 'Explore how we’re transforming legacy products with a modern web-based experience—featuring Mattec’s shift to the ICE framework/UX Platform and a redesigned SLS interface. See new compliance capabilities for Support at Home in aged care, and ECM’s mobile app with mass document approvals. Experience seamless freight invoice processing across Kinetic, ECM, and Quick Ship—showcasing the true power of integrated Epicor solutions. Elevate UX, mobility, and operations—all in one booth.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f4-ice-framework', 
        name: 'ICE Framework', 
        description: 'The foundation for transforming legacy products into modern web experiences.', 
        longDescription: 'Explore how we’re transforming legacy products with a modern web-based experience—featuring Mattec’s shift to the ICE framework/UX Platform and a redesigned SLS interface. See new compliance capabilities for Support at Home in aged care, and ECM’s mobile app with mass document approvals. Experience seamless freight invoice processing across Kinetic, ECM, and Quick Ship—showcasing the true power of integrated Epicor solutions. Elevate UX, mobility, and operations—all in one booth.', 
        image: 'https://placehold.co/600x400.png' 
      },
    ],
  },
  {
    id: 'manufacturing-erp',
    name: 'Manufacturing ERP',
    tagline: 'Optimize Your Production Line',
    description: 'A comprehensive ERP solution tailored for the manufacturing industry, streamlining operations from inventory management to supply chain and production planning.',
    iconName: 'Factory',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      { 
        id: 'f5-csf', 
        name: 'CSF', 
        description: 'Kinetic ERP\'s Country Specific Functions (CSF) for local compliance and global e-invoicing initiatives.', 
        longDescription: 'Explore Country Specific Functions (CSF) in Kinetic ERP, designed to meet local compliance needs. Get a quick insight into global e-invoicing initiatives driving transparency and accountability in financial transactions. Also, Discover Tropos, the ERP built for process manufacturers in food, beverage, pharmaceuticals, metals, and chemicals—featuring recipe-based production, full traceability, regulatory compliance, and lean manufacturing support.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f5-tropos', 
        name: 'Tropos', 
        description: 'Tropos: ERP for process manufacturers (food, pharma, chemicals) with recipe-based production, traceability, and compliance.', 
        longDescription: 'Discover Tropos, the ERP built for process manufacturers in food, beverage, pharmaceuticals, metals, and chemicals—featuring recipe-based production, full traceability, regulatory compliance, and lean manufacturing support.', 
        image: 'https://placehold.co/600x400.png' 
      },
    ],
  },
  {
    id: 'integration',
    name: 'Integration',
    tagline: 'Connect Your Ecosystem',
    description: 'Seamlessly integrate various systems, applications, and data sources to create a unified and efficient operational environment.',
    iconName: 'GitMerge',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      { id: 'f6-1', name: 'API Gateway', description: 'Centralized API management and security.', longDescription: 'Securely expose, manage, and monitor your APIs with our robust API Gateway. Control access, enforce policies, and analyze traffic.', image: 'https://placehold.co/600x400.png' },
      { id: 'f6-2', name: 'Data Synchronization', description: 'Keep data consistent across systems.', longDescription: 'Automate data synchronization between disparate systems in real-time or on a scheduled basis. Ensure data accuracy and consistency across your organization.', image: 'https://placehold.co/600x400.png' },
      { id: 'f6-3', name: 'Workflow Automation', description: 'Connect apps to automate workflows.', longDescription: 'Design and automate complex business workflows that span multiple applications and services. Improve efficiency and reduce manual intervention.', image: 'https://placehold.co/600x400.png' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    tagline: 'Elevate Your Business with Cloud',
    description: 'Leverage the power of the cloud for scalability, reliability, and innovation. Our cloud solutions support your digital transformation journey.',
    iconName: 'Cloud',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      { id: 'f7-1', name: 'Scalable Infrastructure', description: 'Compute and storage that grows with you.', longDescription: 'Dynamically scale your compute, storage, and networking resources to meet changing demands. Pay only for what you use and ensure high availability.', image: 'https://placehold.co/600x400.png' },
      { id: 'f7-2', name: 'Cloud-Native Applications', description: 'Build and deploy modern applications.', longDescription: 'Develop and run resilient, scalable applications using microservices, containers, and serverless architectures. Accelerate innovation with cloud-native technologies.', image: 'https://placehold.co/600x400.png' },
      { id: 'f7-3', name: 'Managed Cloud Services', description: 'Focus on your business, not infrastructure.', longDescription: 'Offload the management of your cloud infrastructure, databases, and applications to our expert team. Benefit from proactive monitoring, security, and optimization.', image: 'https://placehold.co/600x400.png' },
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

