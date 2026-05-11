/**
 * Central content repository for all text placeholders across the portfolio
 * Updated based on real data + strong positioning
 */

export const HERO_SECTION = {
  VERSION: 'I AM MUHAMMAD MURTAZA AND I AM',
  TITLE_TEXTS: [
    'AI ENGINEER',
    'FULL-STACK DEVELOPER',
    'SYSTEMS & HARDWARE ENTHUSIAST'
  ],
  DESCRIPTION: {
    PART1: 'Building',
    HIGHLIGHT1: 'AI-powered applications',
    CONNECTOR: '&',
    HIGHLIGHT2: 'scalable real-world solutions',
  },
  CTA_BUTTON: 'Let\'s Collaborate',
  SCROLL_HINT: 'SCROLL RIGHT',
};

export const BENTO_SECTION = {
  TITLE: 'Portfolio',
  CARDS: [
    {
      section: 'Education',
      items: [
        {
          title: 'Bachelors',
          description: 'BS Computer Science - University of Lahore (2022 - Present | Final Year)'
        },
        {
          title: 'Intermediate',
          description: 'ICS (Computer Science) - KIPS College, Lahore'
        }
      ]
    },
    {
      section: 'Certifications & Achievements',
      items: [
        {
          title: '1 Position in CS Quiz',
          description: '1 Position in CS Quiz In Riphah computing challenge cup'
        },
        {
          title: 'Semi Conductor & Chip Design',
          description: 'NAVTTC COURSE'
        },
        {
          title: 'AWS Cloud Services',
          description: 'https://coursera.org/verify/1AHPGFMH7UBN'
        },
        {
          title: 'Introduction to Information Technology and AWS Cloud',
          description: 'https://coursera.org/verify/MJ02H46XZN18'
        },
        {
          title: 'Programming with JavaScript',
          description: 'https://coursera.org/verify/SPZSKU5DWUMN'
        }
      ]
    },
    {
      section: 'Work Experience',
      items: [
        {
          title: 'NetSol Technologies',
          description: 'AI Intern - Developed and deployed a sophisticated Retrieval-Augmented Generation (RAG) chatbot utilizing LangChain and LangGraph to orchestrate agentic, multi-step reasoning workflows. I engineered a high-performance vector search architecture using MongoDB Atlas and Gemini embeddings, enabling sub-second semantic retrieval and contextually grounded responses. To ensure production-grade reliability and cost-efficiency, I integrated Langfuse for advanced prompt management and observability, while enforcing strict Structured Output (JSON/TypedDict) schemas to maintain data integrity. The system features persistent session tracking for multi-turn continuity and detailed usage analytics, providing a scalable solution for transforming unstructured data into actionable, automated intelligence.'
        },
        {
          title: 'Control X Tech',
          description: 'Business Developer Intern - Spearheaded B2B lead generation and market expansion efforts within the tech services sector by executing data-driven research and high-volume outreach campaigns. I orchestrated the full top-of-funnel lifecycle—including cold calling, strategic emailing, and targeted prospecting—to successfully convert cold leads into scheduled follow-ups and business opportunities. By conducting rigorous competitor analysis and market research, I provided the actionable insights necessary to refine sales strategies and identify untapped growth segments, contributing directly to the company’s client acquisition goals and long-term business development pipeline.'
        },
        {
          title: 'Global Expedition Limited',
          description: 'Developed a B2B SaaS loyalty platform that revolutionized employee recognition by enabling companies to distribute reward points as a flexible alternative to traditional cash bonuses. I engineered the full-stack architecture using the MEVN stack (MongoDB, Express.js, Vue.js, Node.js), implementing dynamic user interfaces with SASS to ensure a visually consistent and responsive experience across all devices. My work focused on the core logic for point accumulation and personalized redemption workflows, creating a scalable system that balanced the administrative needs of corporate clients with an intuitive, preference-driven interface for end-users.'
        }
      ]
    },
    {
      section: 'Projects',
      items: [
        {
          title: 'AI PC Part Picker',
          description: 'Architected and developed NeuroBuilds, an AI-driven ecosystem designed to automate high-performance PC configuration through agentic compatibility logic. Built with a modern React, Vite, and TypeScript stack, the platform utilizes a sophisticated AI engine to validate complex hardware interdependencies—such as thermal headroom, physical clearances, and power delivery—beyond standard socket matching. I led the multi-functional development of the marketplace and community modules, implementing a modular microservices architecture that bridges the gap between intelligent hardware selection and real-time procurement, ensuring a seamless, data-validated user experience for PC enthusiasts and professionals.'
        },
        {
          title: 'Intrusion Detection System with Gen AI',
          description: 'Developed an agentic AI pipeline using LangGraph and Groq to automate the end-to-end generation and validation of Suricata intrusion detection signatures. The system architecturally bridges the gap between raw threat intelligence and actionable defense by fetching real-time vulnerability data from the National Vulnerability Database (NVD) and utilizing a Large Language Model to translate natural language descriptions into specialized rule syntax. I engineered an iterative Self-Correction Loop that executes the generated rules against a native Suricata engine, captures syntax errors, and feeds them back into the agent for automated debugging. This project serves as a primary research framework to quantify the efficiency of autonomous AI agents in cybersecurity, focusing on reducing the manual overhead of signature development while maintaining high technical accuracy.'
        },
        {
          title: 'RAG AI Chatbot',
          description: 'Developed a stateful retrieval-augmented generation (RAG) system utilizing LangChain and LangGraph to orchestrate complex agentic workflows and decision-making logic. I engineered a high-performance retrieval pipeline using MongoDB Atlas for vector storage and integrated Tavily for real-time web grounding, ensuring contextually accurate responses while minimizing model hallucinations. To maintain production-grade reliability, I implemented Langfuse for prompt management and observability, allowing for rigorous tracing of agent execution and the continuous optimization of prompt versions for enhanced response quality.'
        },
        {
          title: 'E-commerce Platform',
          description: 'Designed and deployed a full-stack e-commerce platform tailored for mobile accessories, featuring a secure user authentication system and a dynamic shopping cart engine. I engineered a comprehensive seller dashboard for real-time stock management and inventory tracking, ensuring data consistency across the storefront. To streamline the fulfillment process without a third-party payment gateway, I implemented an automated SMTP mailer service that triggers instant order confirmations and invoices to both customers and administrators upon checkout.'
        },
        {
  title: 'FPGA PS1 Emulator',
  description: 'Built a hardware-based PlayStation 1 clone using Verilog to recreate the consoles original internal circuitry on an FPGA chip. Instead of using traditional software emulation, I mapped out the physical logic of the CPU and graphics engine to ensure the system runs with perfect timing and zero lag. I designed a custom controller to manage how data moves between memory and the processor, successfully translating complex legacy hardware into a modern, functional digital design.'
      }
      ]
    },
    {
      section: 'Technical Skills',
      items: [
        {
          title: 'Full-Stack Development',
          description: 'React, TypeScript, Firebase, Node.js, Express, MongoDB'
        },
        {
          title: 'AI Engineering',
          description: 'LangChain, RAG, Embeddings, Gemini LLM, Prompt Engineering, LangGraph, LangFuse'
        },
        {
          title: 'Hardware & FPGA',
          description: 'Verilog, SystemVerilog, Digital Logic Design, PC Hardware assembly & troubleshooting'
        },
        {
          title: 'Tools & Platforms',
          description: 'Git, GitHub, Firebase, MongoDB Atlas, Project Management, MS Office, Jira'
        }
      ]
    },
    {
      section: 'Languages',
      items: [
        {
          title: 'English',
          description: 'Professional working proficiency'
        },
        {
          title: 'Urdu',
          description: 'Native fluency'
        }
      ]
    }
  ]
};

export const CONTACT_SECTION = {
  TITLE: 'Get in Touch',
  SUBTITLE: 'Let\'s build something impactful',
  DESCRIPTION: 'Open to freelance work, collaborations, AI projects, and startup opportunities.',
  CONTACT_NO: '+92-328-0700038',
  EMAIL: 'business.murtaza12@gmail.com',
  LINKEDIN: 'https://linkedin.com/in/muhammadmurtaza',
  GITHUB: 'https://github.com/muhammadmurtaza',
  SOCIAL_TITLE: 'Connect With Me'
};

export const NAVIGATION = {
  THEME_TOGGLE: 'Toggle Dark Mode',
};

export const TYPEWRITER = {
  SPEED: 60,
  DELAY_BETWEEN_TEXTS: 2500,
};

export const RESPONSIVE = {
  MOBILE_BREAKPOINT: 768,
  TABLET_BREAKPOINT: 1024,
  DESKTOP_BREAKPOINT: 1280,
};