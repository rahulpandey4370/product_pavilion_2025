
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
        id: 'f2-ecm', 
        name: 'ECM', 
        description: 'AI transforming purchase orders, accelerating cloud migrations, and simplifying integrations.', 
        longDescription: 'Step into the future with our AI pavilion, where cutting-edge demos showcase how AI is revolutionizing business. See how powerful language models transform massive purchase orders into streamlined sales orders, how AI smartly accelerates cloud migrations by analyzing and upgrading customizations, and how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone. Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f2-automation-studio', 
        name: 'Automation Studio', 
        description: 'Low-code AI-driven automation making complex system integration faster and smarter.', 
        longDescription: 'Step into the future with our AI pavilion, where cutting-edge demos showcase how AI is revolutionizing business. See how powerful language models transform massive purchase orders into streamlined sales orders, how AI smartly accelerates cloud migrations by analyzing and upgrading customizations, and how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone. Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.', 
        image: 'https://placehold.co/600x400.png' 
      },
      { 
        id: 'f2-project-ascend', 
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
      { id: 'f3-1', name: 'AI Code Assistant', description: 'Smart code suggestions and auto-completion.', longDescription: 'Our AI Code Assistant integrates with your IDE to provide intelligent code suggestions, auto-completion, and bug detection, speeding up development and improving code quality.', image: 'https://placehold.co/600x400.png' },
      { id: 'f3-2', name: 'Automated Testing with AI', description: 'Generate and run tests intelligently.', longDescription: 'Reduce testing time and improve coverage with AI-driven test case generation, prioritization, and automated execution. Identify critical bugs faster.', image: 'https://placehold.co/600x400.png' },
      { id: 'f3-3', name: 'AI Project Management', description: 'Optimize project timelines and resources.', longDescription: 'Utilize AI for smarter project planning, resource allocation, and risk assessment. Get predictive insights to keep your projects on track and within budget.', image: 'https://placehold.co/600x400.png' },
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
      { id: 'f4-1', name: 'Unified Codebase', description: 'Write once, deploy anywhere.', longDescription: 'Maximize efficiency by using a single codebase to build applications for iOS, Android, web, and desktop. Reduce development time and maintenance efforts.', image: 'https://placehold.co/600x400.png' },
      { id: 'f4-2', name: 'Native Performance', description: 'Achieve near-native performance on all platforms.', longDescription: 'Our cross-platform framework is optimized for performance, delivering a smooth and responsive user experience that feels native to each platform.', image: 'https://placehold.co/600x400.png' },
      { id: 'f4-3', name: 'Consistent UI/UX', description: 'Maintain brand consistency across devices.', longDescription: 'Ensure a cohesive user experience with UI components that adapt to different screen sizes and platform conventions while maintaining your brand identity.', image: 'https://placehold.co/600x400.png' },
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
      { id: 'f5-1', name: 'Production Planning', description: 'Efficiently schedule and manage production.', longDescription: 'Optimize your manufacturing schedules, manage resources, and track progress in real-time with our advanced production planning module.', image: 'https://placehold.co/600x400.png' },
      { id: 'f5-2', name: 'Inventory Control', description: 'Real-time tracking of inventory levels.', longDescription: 'Maintain optimal inventory levels, reduce waste, and automate reordering processes with our comprehensive inventory control system.', image: 'https://placehold.co/600x400.png' },
      { id: 'f5-3', name: 'Supply Chain Management', description: 'Integrated supply chain visibility.', longDescription: 'Gain end-to-end visibility of your supply chain, from raw materials procurement to finished goods delivery. Collaborate effectively with suppliers and partners.', image: 'https://placehold.co/600x400.png' },
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

