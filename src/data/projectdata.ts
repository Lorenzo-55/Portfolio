export type ProjectPageData = {
  slug: string;
  title: string;
  image?: string;
  gallery?: string[];
  description?: string;
  responsibilities?: string[];
  skills?: string[];
  teamSize?: number;
  github?: string;
  live?: string;
};

export const projectData: Record<string, ProjectPageData> = {
  tourismWebsite: {
    slug: "tourism-website",
    title: "Tourism Website (2026)",
    github: "https://github.com/Lorenzo-55/Tourism_site",
    live: "https://lorenzo-55.github.io/Tourism_site/",

    image: `${import.meta.env.BASE_URL}projects/tourism-cover.png`,
    gallery: [
      `${import.meta.env.BASE_URL}projects/tourism_site/tourism_site2.png`,
      `${import.meta.env.BASE_URL}projects/tourism_site/tourism_site3.png`,
      `${import.meta.env.BASE_URL}projects/tourism_site/tourism_site4.png`,
    ],

    description:
      "A tourism website I developed for a client who is involved in the tourism industry. The project involved creating a modern, user-friendly platform to showcase travel destinations, articles, and related content. I focused on building a clean and responsive UI using React, while structuring the backend with Laravel and MySQL to manage content efficiently. The website features dynamic routing, interactive maps, and a scalable architecture designed for future expansion and multilingual support.",

    responsibilities: [
      "Designed and implemented a scalable content architecture using reusable data-driven components for destinations and articles.",
      "Built a dynamic routing system using slugs to generate pages without hardcoding.",
      "Developed interactive map features with custom markers, zooming, and location-based navigation.",
      "Implemented responsive UI with React and Vite, ensuring smooth performance across devices.",
      "Structured multilingual-ready data system for future internationalization support.",
      "Optimized asset loading and routing for deployment on GitHub Pages.",
    ],

    skills: ["React", "Vite", "Laravel", "JavaScript", "CSS", "UI/UX", "Routing"],
    teamSize: 1,
  },

  restaurantManagementSystem: {
    slug: "restaurant-management-system",
    title: "Restaurant Management System",


      gallery: [
        `${import.meta.env.BASE_URL}projects/rms/RMS.png`,
        `${import.meta.env.BASE_URL}projects/rms/Picture4.png`,
        `${import.meta.env.BASE_URL}projects/rms/Picture1.png`,
        `${import.meta.env.BASE_URL}projects/rms/Picture2.png`,
      ],

    description:
      "A final-year university project where I developed a modular desktop application using C# and WPF to manage core restaurant operations. I designed the system to handle real-time order processing, table management, and integrated billing, improving coordination between waitstaff and kitchen staff. The project focused on usability, efficiency, and reducing operational errors for small to mid-sized restaurants.",

    responsibilities: [
      "Designed and developed a modular desktop application using C# and XAML (WPF).",
      "Implemented a drag-and-drop table layout system with real-time status tracking.",
      "Built an order management workflow with live updates between waitstaff and kitchen.",
      "Developed an integrated billing system with automatic calculation and order linking.",
      "Structured a local SQLite database for managing orders, users, tables, and transactions.",
      "Implemented role-based access control for managers, waitstaff, and kitchen staff.",
      "Applied layered architecture to separate UI, business logic, and data access.",
    ],

    skills: ["C#", "XAML", "SQLite", ".NET", "Desktop Development"],
    teamSize: 1,
  },

    cryptoPlatform: {
    slug: "crypto-web-platform",
    title: "Crypto Web Platform",

    gallery: [
      `${import.meta.env.BASE_URL}projects/astrabot/astrabot.png`,
      `${import.meta.env.BASE_URL}projects/astrabot/astrabot2.jpg`,
      `${import.meta.env.BASE_URL}projects/astrabot/astrabot3.png`,
      `${import.meta.env.BASE_URL}projects/astrabot/astrabot4.png`,
      `${import.meta.env.BASE_URL}projects/astrabot/astrabot5.png`,
    ],

    description:
      "A full-stack web platform I worked on during my internship at Six Digit Club, centered around Astra Bot—an automated crypto trading system for managing spot and futures strategies. I contributed to both backend and frontend development, building features for bot management, user interaction, and financial tracking. The platform focused on real-time data handling, usability, and scalable system design to support active trading workflows.",

    responsibilities: [
      "Developed backend REST APIs using Flask to support trading bot operations and data handling.",
      "Built and integrated responsive frontend components using React for key platform features.",
      "Implemented a trading bot logging system with structured storage for spot and futures data.",
      "Developed a bot history feature allowing users to reload and reuse previous configurations.",
      "Created multiple user-facing pages including profile management, leaderboard, statements, and referral system.",
      "Designed and improved UI/UX elements for better usability, consistency, and user engagement.",
      "Worked with MySQL database design and query optimization for reliable data management.",
      "Refactored and modularized backend code to improve maintainability and team collaboration.",
    ],

    skills: ["Python", "Flask", "React", "MySQL", "REST APIs", "Full-Stack Development"],
    teamSize: 5,
  },

  portfolioWebsite: {
    slug: "portfolio-website",
    title: "Portfolio Website",
    github: "https://github.com/Lorenzo-55/portfolio",
    live: "https://lorenzo-55.github.io/Portfolio/",

    image: `${import.meta.env.BASE_URL}projects/portfolio.png`,

    description:
      "A personal portfolio website I developed to showcase my projects, experience, and technical skills through a clean, responsive, and modern interface. It highlights selected work across full-stack development, with a focus on usability, structure, and visual consistency. The site also reflects my approach to building scalable front-end applications and organizing content-driven projects.",

    responsibilities: [
      "Designed and developed the website using React, Vite, and TypeScript.",
      "Implemented responsive layouts for desktop and mobile devices.",
      "Structured the site for easy updates and future expansion.",
    ],

    skills: ["React", "Vite", "TypeScript", "CSS", "UI/UX"],
    teamSize: 1,
  },

  dataScrapingPlatform: {
    slug: "data-scraping-platform",
    title: "Crypto Analysis Platform",

    gallery: [
      `${import.meta.env.BASE_URL}projects/datascrapping/hero.png`,
      `${import.meta.env.BASE_URL}projects/datascrapping/picture1.png`,
      `${import.meta.env.BASE_URL}projects/datascrapping/picture3.png`,
      `${import.meta.env.BASE_URL}projects/datascrapping/picture4.png`,
      `${import.meta.env.BASE_URL}projects/datascrapping/picture6.png`,
    ],

    description:
      "A data-driven platform I contributed to during my internship at Six Digit Club, designed to collect and deliver real-time blockchain data for crypto analysis and trading insights. The system enables users to access structured datasets for market research, supported by backend scraping pipelines and interactive frontend tools. I worked on enhancing usability and functionality, including building authentication flows and integrating an advisor chatbot to help interpret and analyze the generated data.",

    responsibilities: [
      "Contributed to planning and scoping the platform to align with data and user requirements.",
      "Built login and registration functionality for user authentication and access control.",
      "Developed and integrated an advisor chatbot to assist users in analyzing collected crypto data.",
      "Supported frontend UI/UX improvements to enhance accessibility and user interaction.",
      "Built and refined data scraping workflows to collect structured blockchain data.",
      "Processed and organized raw data for integration into backend systems and APIs.",
      "Assisted in structuring data for analytics and user-facing reporting features.",
    ],

    skills: ["Python", "Web Scraping", "APIs", "Data Processing", "React", "Full-Stack Development"],
    teamSize: 3,
  },
};

export function getProjectData(slug?: string): ProjectPageData | null {
  if (!slug) return null;

  const match = Object.values(projectData).find(
    (project) => project.slug === slug
  );

  return match || null;
}