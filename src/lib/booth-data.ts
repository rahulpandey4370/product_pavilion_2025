
import type { Booth } from '@/types';

// Original booths data array used to derive boothDataWithNumbers
// This is the source array where detailed content updates should be made.
const originalBoothsDataForMapping: Omit<Booth, 'boothNumber'>[] = [
  {
    id: 'prism-ai-use-cases', // BOOTH 1
    name: 'Prism AI Use Cases',
    tagline: 'Journey Towards Cognitive ERP - Powered by PRISM AI',
    description: `Unlock intelligent, seamless operations with the Kinetic platform—powered by AI agents and Prism tools.
Enhance decision-making with List, Metric, and Multimodal agents, and customize with ease using Prism for Application Studio.
Turn data into insights with Prism for EDD, streamline RFQ workflows, and retrieve documents using natural language via the ECM Agent.
Integrated Quick Ship enables real-time freight tracking, while AI-driven KB support empowers self-service.
Experience the future of agile, data-driven business.`,
    iconName: 'Cpu',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx0ZWNobm9sb2d5JTIwYmFubmVyfGVufDB8fHx8MTc0OTAyNjM4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f1-rfq-processing',
        name: 'RFQ Processing (Kinetic)',
        description: `Prism AI for Business Communications is an intelligent automation solution designed to revolutionize the way procurement teams handle supplier interactions during the Request for Quotation (RFQ) process.
By leveraging advanced natural language processing, the system automatically reviews and summarizes communication threads between purchasers and suppliers—extracting key insights such as the most competitive pricing and the shortest lead times.
This eliminates the need for users to manually sift through lengthy email chains or message logs, significantly reducing the time and effort involved in evaluating supplier responses.
With Prism AI, businesses gain a faster, smarter, and more efficient way to make informed purchasing decisions.`,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzQ5MDI4Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-list-metric-agents',
        name: 'Demonstration of List and Metric Agents',
        description: `The Kinetic List & Metric Agent empowers business users to seamlessly access, monitor, and analyze critical operational data directly within the Kinetic environment.
By eliminating the need for complex queries or IT intervention, it enables users to independently retrieve real-time lists—such as open orders, pending tasks, or overdue items—and take informed actions based on those insights.
This intuitive, AI-enhanced experience transforms data interaction into a natural, self-service process, accelerating decision-making and improving operational efficiency across the organization.`,
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8cmVhbHRpbWUlMjBkYXRhfGVufDB8fHx8MTc0OTAzNDcxMHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-edd',
        name: 'Prism for EDD',
        description: `Prism for EDD (Epicor Data Discovery) empowers Kinetic users to effortlessly visualize real-time operational data through dynamic, interactive charts.
By transforming raw data into meaningful visual insights, this tool provides a business intelligence (BI) perspective directly within the Kinetic environment.
Users can explore trends, monitor key performance indicators, and make data-driven decisions—without needing to export data or rely on external BI tools.`,
        image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxlbnRlcnByaXNlJTIwZGF0YXxlbnwwfHx8fDE3NDkwMzE1NDl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-app-studio',
        name: 'Prism Application Studio',
        description: `The Prism Application Studio Agent empowers customization users by providing an intuitive, AI-assisted environment to design, build, and deploy customizations within the Kinetic platform.
Without needing deep technical expertise or coding skills, users can create tailored solutions that align with their unique business processes.
This agent simplifies the customization experience—enabling users to modify forms, workflows, and logic through a guided, low-code interface—accelerating innovation and reducing reliance on development teams.`,
        image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxBcHBsaWNhdGlvbiUyMHN0dWRpb3xlbnwwfHx8fDE3NDkwMzE0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-platform-ux-multimodal',
        name: 'Platform - UX (Grow BI Multimodal Agent)',
        description: `Grow integration with Kinetic and a use case of multimodal agent.
A multimodal agent can be leveraged to intelligently interpret and respond to various types of input—such as images, audio, and video—enabling a more natural and flexible user experience.
For example, users can simply take a snapshot of a Grow BI-integrated chart within the Kinetic platform and ask the agent questions to better understand the underlying operational data.
The agent can analyze the visual content of the chart, extract key metrics, and provide contextual explanations or insights.`,
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxVSSUyMFVYfGVufDB8fHx8MTc0OTAyODI0Nnww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-ecm-prism-agent',
        name: 'ECM Prism Agent: AI-Powered Document Intelligence',
        description: `Unlock smarter document retrieval and analysis with the ECM Agent for Prism.
This demo showcases how AI transforms traditional, manual search processes into dynamic, natural language interactions.
Built on Solr-indexed ECM data, the agent enables users to effortlessly summarize, extract key information, conduct research, and compare documents—all through simple, conversational queries.
It's a new era of document intelligence at your fingertips.`,
        image: 'https://images.unsplash.com/photo-1706466614149-5e04fd018a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxBSXxlbnwwfHx8fDE3NDg5MjMwODV8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-quickship-agent',
        name: 'Quick Ship Agent – AI-Powered Shipment Tracking',
        description: `This demo showcases how Quick Ship's integration with Prism enables customers to monitor shipment status directly from Kinetic screens, eliminating the need to switch to the Quick Ship interface.
Users enjoy real-time visibility without context switching—resulting in a more streamlined logistics experience.`,
        image: 'https://images.unsplash.com/photo-1569938709389-ff8ab00530b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNnx8bmF2aWdhdGlvbnxlbnwwfHx8fDE3NDkwMzU2NDd8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f1-self-service-ai',
        name: 'Self-Service Problem Resolution with AI',
        description: `Empower business users to solve issues independently with AI-driven insights.
This demo showcases how the system leverages knowledge base (KB) articles and the power of AI to guide users through problem resolution—reducing dependency on support teams and accelerating issue turnaround time.
It’s proactive, intelligent assistance—right when you need it.`,
        image: 'https://images.unsplash.com/photo-1526374870839-e155464bb9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8ZGlnaXRhbCUyMGFic3RyYWN0fGVufDB8fHx8MTc0OTAzNTgxMnww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
  },
  {
    id: 'non-prism-ai-use-cases', // BOOTH 2
    name: 'Non Prism AI Use Cases',
    tagline: 'See the Future of Our Product—Through the Lens of AI',
    description: `Step into the future with our AI pavilion, where cutting-edge demos showcase how AI is revolutionizing business.
See how powerful language models transform massive purchase orders into streamlined sales orders, how AI smartly accelerates cloud migrations by analyzing and upgrading customizations, and how low-code AI-driven automation simplifies system integration—making complex tasks faster, smarter, and accessible to everyone.
Experience firsthand how AI is reshaping efficiency across order management, cloud adoption, and workflow automation.`,
    iconName: 'Lightbulb',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxjb3Jwb3JhdGUlMjBkaWdpdGFsfGVufDB8fHx8MTc0OTAzNjM3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-np-ecm-ai-order-creation',
        name: 'ECM: AI-Led Order Creation from Document',
        description: `Discover how AI is transforming order management with this cutting-edge proof of concept.
Leveraging GPT and Google Gemini large language models, this demo showcases the automatic conversion of lengthy purchase orders—up to 100 pages—into structured, schema-aligned sales orders in Epicor Kinetic ERP.
The AI accurately extracts key details from header, line-item, and schedule levels, enabling high-volume, low-touch processing for faster, smarter order entry.`,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMXx8ZG9jdW1lbnRzfGVufDB8fHx8MTc0OTAzNjExNHww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-np-ascend-ai-migration',
        name: 'Project Ascend: AI-Driven Migration to Cloud',
        description: `See how AI is accelerating the journey to the cloud with Project Ascend.
This demo highlights how AI analyzes existing customizations and provides a summary of the intent of each customization.
Future activities include migrating and streamlining customizations into the latest Kinetic version on the cloud.
It’s a smarter, faster path to upgrading—reducing manual effort and ensuring a smoother transition to the cloud.`,
        image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NDkwMjgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-np-as-ai-integrations',
        name: 'Automation Studio: AI-Enabled Integrations',
        description: `Discover how AI simplifies integration and automation with Automation Studio.
This demo showcases how AI assists in building custom connectors and automation recipes—empowering users to connect systems and streamline workflows without deep technical expertise.
It’s low-code integration made smarter, faster, and more accessible.`,
        image: 'https://images.unsplash.com/photo-1602468432285-0fe26e8352ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
  },
  {
    id: 'ai-accelerated-development', // BOOTH 3
    name: 'AI Accelerated Development',
    tagline: 'AI Accelerated Development – Develop Smarter, Innovate Faster',
    description: 'Experience how AI transforms software delivery—from auto-generating C# code for e-invoicing to intelligent unit test creation with GitHub Copilot. See our AI Agent in action, generating smart pull request previews in Azure DevOps. Accelerate development, reduce effort, and empower partners like never before.',
    iconName: 'Rocket',
    heroImage: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc0OTAyNzg4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-ai-dev-csf-einvoicing',
        name: 'CSF E-Invoicing AI',
        description: 'A framework, where once BA creates the e-invoice json structure and mapping, AI will be used to generate a C# code which will query the necessary data, massage it and generate the end json file which can be sent to e-invoice vendor. This will cut down development effort and is a step towards enabling partners to create e-invoicing template without Epicor PD support.',
        image: 'https://images.unsplash.com/photo-1693045181224-9fc2f954f054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8aW52b2ljZXxlbnwwfHx8fDE3NDkwMjg2NzN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-ai-dev-unittest-copilot',
        name: 'Unit Test Automation with GitHub Copilot',
        description: 'Boost developer productivity with AI-powered unit test generation. This demo highlights how GitHub Copilot streamlines the creation of comprehensive test cases—saving time while improving code quality and reliability. By automating repetitive test writing, developers can focus more on building features and less on boilerplate.',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxnaXRodWIlMjB8ZW58MHx8fHwxNzQ5MDM4NTI2fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-ai-dev-pr-review',
        name: 'AI-Based PR Review',
        description: 'Explore how our AI Agent integrates with Azure DevOps to automatically generate intelligent pull request summaries.It helps reviewers understand changes faster, speeds up approvals, and enhances overall code collaboration and quality.',
        image: 'https://images.unsplash.com/photo-1607799632518-da91dd151b38?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
  },
  {
    id: 'qa-meets-ai', // BOOTH 8 - ID CHANGED
    name: 'QA meets AI',
    tagline: 'QA meets AI - Reimagining Quality',
    description: `Step into the future of Quality Assurance at our "QA Meets AI" booth!
Discover how we’re blending the power of AI and the latest tech innovations to transform traditional QA practices and experience how we’re accelerating releases while boosting confidence in quality.
Whether you’re curious about how AI can write tests, find bugs, or even help debug them — or just want to see innovation in action — don’t miss this interactive showcase.
Join us to see how QA is no longer a checkpoint, but a co-pilot in innovation.`,
    iconName: 'Zap',
    heroImage: 'https://placehold.co/1200x400.png',
    features: [
      {
        id: 'f8-epiconnect',
        name: 'EpiConnect – Smarter Development & Testing through AI-Driven Customer Insight',
        description: `EpiConnect bridges the visibility gap between Engineering and Support by leveraging AI to analyze support ticket data, automate ticket resolution, uncover customer usage patterns, and surface actionable insights.
It empowers teams to recognize recurring themes, monitor customer sentiment, and prioritize improvements effectively.
By automatically assessing and recommending the severity of reported issues, EpiConnect helps support teams and stakeholders triage and respond with consistency and urgency. It also enables data-driven decisions by aligning product enhancements and testing strategies with real customer needs and sentiment trends.`,
        image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'AI in QA'
      },
      {
        id: 'f8-log-analyzer',
        name: 'Log Analyzer through AI',
        description: `AI Log Analyzer is an AI-driven system designed to analyze unstructured log files across different applications. It uses large language models (LLMs) to semantically interpret logs, allowing users—from developers to business analysts—to query system behaviors through natural language.
The product features a modular architecture, vector-based log search, and a scalable, product-agnostic core. Key benefits include faster issue resolution, reduced dependence on deep technical knowledge, and adaptability across multiple products.`,
        image: 'https://images.unsplash.com/photo-1746608943132-065d1d4b3c5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'AI in QA'
      },
      {
        id: 'f8-imagen',
        name: 'iMAGen - Intelligent Manual & Automated Test Generator',
        description: `iMAGen (Intelligent Manual & Automated Test Case Generator) is an AI-powered tool that streamlines test case creation by reading Jira requirements, summarizing feature needs, and generating comprehensive manual test cases in minutes.
It integrates with test repositories, boosts QA efficiency, and is easily scalable across products.`,
        image: 'https://images.unsplash.com/photo-1745674684463-62f62cb88d4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'AI in QA'
      },
      {
        id: 'f8-itrace',
        name: 'iTRACE - Intelligent Test Root-cause Analysis and Correction Engine',
        description: `iTRACE is an AI-assisted tool that analyzes automation failures using logs, screenshots, and scripts to quickly identify root causes, suggest fixes, and provide insights—reducing debugging time from hours to minutes and enabling faster, seamless continuous testing.`,
        image: 'https://images.unsplash.com/photo-1573164574472-797cdf4a583a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'AI in QA'
      },
      {
        id: 'f8-impact-analyzer',
        name: 'Impact Analyzer - AI Enabled Precision Testing',
        description: `An intelligent tool that ingests code diffs or commits from the CodeChurn Tool, leverages an LLM to analyze changes, and identifies impacted areas including affected modules, functionalities, and potential regression test cases—enabling precision testing.`,
        image: 'https://images.unsplash.com/photo-1582224369048-e4d2d7a6ba30?q=80&w=2097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'AI in QA'
      },
      {
        id: 'f8-recoder-executor',
        name: 'ReCoder Executor: No-Code Solution for Test Automation',
        description: `Epicor ReCoder Test Executor is a powerful, user-friendly, no-code test script execution and management tool designed to streamline automation workflows for scripts generated by Epicor ReCoder.
It offers a seamless interface to organize, execute, and monitor automated tests efficiently without the need for coding.`,
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'AI in QA'
      },
      {
        id: 'f8-documatch',
        name: 'Epicor DocuMatch',
        description: `DocuMatch is a powerful and versatile document comparison engine designed to compare a wide range of document types with precision and efficiency.
It offers a rich set of features for detecting content differences—including images and charts.
DocuMatch can be seamlessly used through an intuitive UI for manual reviews or integrated as a comparison package within automation projects, making it ideal for both end-users and developers seeking reliable document validation and quality assurance.`,
        image: 'https://images.unsplash.com/photo-1600267165477-6d4cc741b379?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'AI in QA'
      }
    ],
  },
  {
    id: 'cross-platform', // BOOTH 4
    name: 'Cross Platform',
    tagline: 'Cross Platform: Beyond ERP – Powering Possibilities Across Platforms',
    description: 'Explore how we’re transforming legacy products with a modern web-based experience—featuring Mattec’s shift to the ICE framework/UX Platform and a redesigned SLS interface. See new compliance capabilities for Support at Home in aged care, and ECM’s mobile app with mass document approvals. Experience seamless freight invoice processing across Kinetic, ECM, and Quick Ship—showcasing the true power of integrated Epicor solutions. Elevate UX, mobility, and operations—all in one booth.',
    iconName: 'Laptop',
    heroImage: 'https://images.unsplash.com/photo-1605918321371-584f5deab0a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8fHwxNzQ5MDI4MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-cp-mattec-new-ux',
        name: 'Showcasing the New Mattec Experience',
        description: "Step into the future of Mattec with a preview of its modernized user experience. This demo highlights Mattec’s transformation from legacy technologies like C, C++, Embedded C, and MFC to a fully web-based platform. Built on Kinetic’s ICE framework and UX platform, the new Advanced MES interface eliminates client installations, offers seamless navigation across screens, and enables users to personalize their homepage with shortcuts for quicker access.",
        image: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cp-ecm-mobile-bulk',
        name: 'ECM On the Go: Bulk Approvals through Mobile App',
        description: "Experience a smarter, faster way to manage document approvals with ECM’s enhanced mobile capabilities. This demo showcases the new mass approval feature in the ECM mobile app—designed specifically for on-the-go executives. Previously limited by the browser version's usability constraints, users can now select and approve multiple documents in one tap, without the need to open each individually. It's efficiency redefined for mobile-first workflows.",
        image: 'https://images.unsplash.com/photo-1640694514279-090bb1b09ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxkYXNoYm9hcmQlMjBpbiUyMG1vYmlsZXxlbnwwfHx8fDE3NDkwMjkwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-cp-ice-overview',
        name: 'ICE Overview',
        description: "An overview of the Epicor ICE framework and its capabilities and integration into products like Kinetic, Mattec, and SLS, among others. We would also like to emphasize tools like BAQs, BPMs, Epicor Functions, UD Services and Extension Maintenance.",
        image: 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cp-qs-freight',
        name: 'Quick Ship: Integrated Freight Validation',
        description: "Experience end-to-end freight invoice tracking with seamless integration between ECM, Quick Ship, and Kinetic ERP. This demo showcases how freight invoices captured through ECM are automatically validated by Quick Ship and processed within Kinetic—ensuring accuracy, reducing manual effort, and streamlining logistics workflows.",
        image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cp-sls-new-ux-support',
        name: 'SLS New Experience & Support at Home',
        description: "Explore the modernized SLS browser experience, redesigned for an intuitive, user-friendly interface aligned with the Kinetic design principles. This demo also highlights the Support at Home program—empowering approved providers to deliver high-quality, consumer-directed care while upholding recipients’ rights and privacy. Built to support compliance with the Aged Care Quality Standards and the Aged Care Act 1997, the system ensures accurate recordkeeping and streamlined incident reporting.",
        image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
  },
  {
    id: 'manufacturing-erp', // BOOTH 5
    name: 'Manufacturing ERP',
    tagline: 'Manufacturing ERP: Expand Globally, Excel Industry Specifically (Process Mfg)',
    description: 'Explore Country Specific Functions (CSF) in Kinetic ERP, designed to meet local compliance needs. Get a quick insight into global e-invoicing initiatives driving transparency and accountability in financial transactions. Also, discover Tropos—the ERP built for process manufacturers in food, beverage, pharmaceuticals, metals, and chemicals—featuring recipe-based production, full traceability, regulatory compliance, and lean manufacturing support.',
    iconName: 'Factory',
    heroImage: 'https://images.unsplash.com/photo-1611117775350-ac3950990985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8bWFudWZhY3R1cmluZyUyMHxlbnwwfHx8fDE3NDkwMjkxODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-mfg-csf-flow',
        name: 'CSF Overall Flow',
        description: "A generic manufacturing ERP Quote to cash model and demo.",
        image: 'https://images.unsplash.com/photo-1580983559367-0dc2f8934365?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-mfg-csf-einvoicing',
        name: 'CSF E-invoicing Coverage',
        description: "A model of e-invoicing with entities and information flow, so that audience can visualize and understand the various functions within the e-invoicing framework which is being manadated by all coutries across the board",
        image: 'https://images.unsplash.com/photo-1616156027751-fc9a850fdc9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-mfg-tropos-mobile',
        name: 'Tropos Mobile App',
        description: "Conversion of old mobile RBA pages into newer screens with latest tech stack",
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
        description: "Explore a unified platform designed for planning, simulating, and executing liquor blending processes with accuracy and control. This demo showcases how technology brings consistency and precision to every batch—supporting experimentation, quality assurance, and production efficiency in one seamless experience.",
        image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
    ],
  },
  {
    id: 'integration', // BOOTH 6
    name: 'Integration',
    tagline: 'Unify platforms & streamline workflows.',
    description: 'Explore the latest in Automation Studio with newly added connectors and recipes, including Propello and Eclipse. See enhanced Data Fabric capabilities—featuring large file support, cross-tenant configurations, and Linux agent integration. Learn how the GBL process automates license generation for Data Interchange and EULK, streamlining compliance. Plus, watch seamless Quick Ship–Automation Studio integration in action with LTL carriers using QS Connector and automation recipes.',
    iconName: 'GitMerge',
    heroImage: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxpbnRlZ3JhdGlvbnxlbnwwfHx8fDE3NDkwMjk0NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    features: [
      {
        id: 'f-int-connectors-recipes',
        name: 'AI New Connectors/Recipes',
        description: 'Highlighting newly added Connectors and Recipes in Automation Studio, including Propello, Eclipse, and more.',
        image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-int-data-fabric',
        name: 'Data Fabric',
        description: 'Showcasing new capabilities in Data Fabric, including large file support, cross-tenant configuration, and Linux agent integration.',
        image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-int-gbl-licensing',
        name: 'DI / EULK (GBL Licensing Automation)',
        description: 'Demonstrating the GBL process for generating licenses for Data Interchange and EULK. This showcases how licensing is streamlined and automated within the system.',
        image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxHbG9iYWwlMjBMaWNlbnNpbmd8ZW58MHx8fHwxNzQ5MDI5NDc2fDA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-int-quickship-ltl',
        name: 'Quick Ship LTL: Automation Studio Integration',
        description: 'Demonstrating QS-AS integration with an LTL carrier using QS Connector and automation Recipes.',
        image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
  },
  {
    id: 'cloud', // BOOTH 7
    name: 'Cloud',
    tagline: 'Cloud Enablers',
    description: 'Discover the power of self-managed portals, intelligent cloud architecture, and real-time monitoring—designed to drive innovation, agility, and control. Visit us to see how Epicor delivers a smarter, faster path to the cloud.',
    iconName: 'Cloud',
    heroImage: 'https://images.unsplash.com/photo-1690627931320-16ac56eb2588?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: [
      {
        id: 'f-cld-self-serve-upgrade',
        name: "CMP, Infra & it's architecture, Self Serve upgrade",
        description: 'Self-Serve Upgrade capability in the Cloud Management Portal, enabling customers to trigger upgrades independently. This reduces upgrade time from over 24 hours to under 1 hour, significantly improving customer autonomy and experience. It eliminates dependency on CloudOps, streamlines upgrade workflows, and accelerates issue resolution. This capability also enhances platform scalability and reduces operational overhead.',
        image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cld-solarwinds-monitoring',
        name: 'Resource Monitoring with SolarWinds',
        description: 'A SolarWinds resource monitoring demo showcases real-time visibility and performance tracking of network, server, and application resources through intuitive dashboards and alerts.',
        image: 'https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZ3xlbnwwfHx8fDE3NDkwMjgxNjB8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        id: 'f-cld-nextgen-arch-ops',
        name: 'Next-Gen Cloud Architecture & Operations',
        description: 'Next-Gen Cloud Architecture and Operations leverages scalable infrastructure and intelligent automation to streamline environment management. It enables faster provisioning, consistent operations, and improved agility through IaC, CI/CD, policy governance, with AI piloted to assist in operational insights and anomaly detection.',
        image: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cld-quickship-deployment',
        name: 'Quick Ship Deployment',
        description: "QuickShip's SaaS solution leverages cloud-native services, using ARM and PowerShell scripts to streamline deployment and upgrades",
        image: 'https://images.unsplash.com/photo-1577760258779-e787a1733016?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
      {
        id: 'f-cld-resource-optimization',
        name: 'Cloud Resource Optimization through Scheduled Auto Start/Stop',
        description: 'Optimization - Save cost & energy. The goal of this initiative is to best utilize the cloud VMs/accounts which are used for non-production purpose having auto scheduling of start/stop of the machines based on the usage',
        image: 'https://images.unsplash.com/photo-1667984390535-6d03cff0b11a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      },
    ],
  },
];

// This maps the raw data to include the specific boothNumber for display
const boothDataWithNumbers: Booth[] = originalBoothsDataForMapping.map((booth) => {
  let boothNumber;
  // Assign booth numbers based on their ID for the specific display sequence
  switch (booth.id) {
    case 'prism-ai-use-cases': boothNumber = 1; break;
    case 'non-prism-ai-use-cases': boothNumber = 2; break;
    case 'ai-accelerated-development': boothNumber = 3; break;
    case 'qa-meets-ai': boothNumber = 8; break; // ID CHANGED
    case 'cross-platform': boothNumber = 4; break;
    case 'manufacturing-erp': boothNumber = 5; break;
    case 'integration': boothNumber = 6; break;
    case 'cloud': boothNumber = 7; break;
    default:
      const originalOrderForFallback = [
        'prism-ai-use-cases', 'non-prism-ai-use-cases', 'ai-accelerated-development',
        'cross-platform', 'manufacturing-erp', 'integration', 'cloud', 'qa-meets-ai' // ID CHANGED
      ];
      boothNumber = originalOrderForFallback.indexOf(booth.id) + 1;
      if (boothNumber === 0) boothNumber = originalBoothsDataForMapping.length +1;
  }
  return { ...booth, boothNumber };
});


// Helper to get a booth by ID from the `boothDataWithNumbers` array
const getBoothByIdFromMappedData = (id: string, data: Booth[]): Booth => {
    const found = data.find(b => b.id === id);
    if (!found) throw new Error(`Booth with id ${id} not found in provided data. Check originalBoothsDataForMapping and boothDataWithNumbers generation.`);
    return found;
}

// This is the final exported array, ordered for display on the homepage.
// Visual order: [1], [2], [3], [8], [4], [5], [6], [7] (using assigned boothNumbers)
// which maps to IDs: prism-ai-use-cases, non-prism-ai-use-cases, ai-accelerated-development,
// qa-meets-ai (QA), cross-platform, manufacturing-erp, integration, cloud
export const booths: Booth[] = [
  getBoothByIdFromMappedData('prism-ai-use-cases', boothDataWithNumbers),
  getBoothByIdFromMappedData('non-prism-ai-use-cases', boothDataWithNumbers),
  getBoothByIdFromMappedData('ai-accelerated-development', boothDataWithNumbers),
  getBoothByIdFromMappedData('qa-meets-ai', boothDataWithNumbers), // ID CHANGED - This is "QA meets AI", displays number 8
  getBoothByIdFromMappedData('cross-platform', boothDataWithNumbers),
  getBoothByIdFromMappedData('manufacturing-erp', boothDataWithNumbers),
  getBoothByIdFromMappedData('integration', boothDataWithNumbers),
  getBoothByIdFromMappedData('cloud', boothDataWithNumbers),
];


export const getBoothById = (id: string): Booth | undefined => {
  return booths.find(booth => booth.id === id);
};

    