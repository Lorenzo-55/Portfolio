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
    github: "https://github.com/yourusername/tourismwebsite",
    live: "https://your-live-site.com",

    image: `${import.meta.env.BASE_URL}projects/tourism-cover.png`,
    gallery: [
      `${import.meta.env.BASE_URL}projects/tourism_site2.png`,
      `${import.meta.env.BASE_URL}projects/tourism_site3.png`,
      `${import.meta.env.BASE_URL}projects/tourism_site4.png`,
    ],

    description:
      "A modern tourism platform designed to present destinations in a structured, scalable, and visually engaging way, with dynamic content-driven pages and integrated mapping features.",

    responsibilities: [
      "Designed and implemented a scalable content architecture using reusable data-driven components for destinations and articles.",
      "Built a dynamic routing system using slugs to generate pages without hardcoding.",
      "Developed interactive map features with custom markers, zooming, and location-based navigation.",
      "Implemented responsive UI with React and Vite, ensuring smooth performance across devices.",
      "Structured multilingual-ready data system for future internationalization support.",
      "Optimized asset loading and routing for deployment on GitHub Pages.",
    ],

    skills: ["React", "Vite", "JavaScript", "CSS", "UI/UX", "Routing"],
    teamSize: 1,
  },

  restaurantManagementSystem: {
    slug: "restaurant-management-system",
    title: "Restaurant Management System",

    image: `${import.meta.env.BASE_URL}projects/RMS.png`,

    description:
      "A desktop application built to streamline restaurant operations including order management, inventory tracking, billing, and reporting through a centralized system.",

    responsibilities: [
      "Designed and developed a full desktop application using C# and XAML.",
      "Implemented order processing, stock tracking, and billing modules.",
      "Built reporting features to monitor sales and inventory performance.",
      "Integrated SQLite database for persistent and efficient data storage.",
      "Structured the application to simplify daily restaurant workflows.",
    ],

    skills: ["C#", "XAML", "SQLite", ".NET", "Desktop Development"],
    teamSize: 1,
  },

  cryptoPlatform: {
    slug: "crypto-web-platform",
    title: "Crypto Web Platform",

    image: `${import.meta.env.BASE_URL}projects/astrabot.png`,

    description:
      "A web-based crypto analytics platform built during a full-stack internship, featuring real-time data, backend APIs, and responsive frontend components.",

    responsibilities: [
      "Developed backend APIs using Flask to handle market data and analytics.",
      "Built responsive frontend components using React.",
      "Integrated analytics features and data-driven pages.",
      "Worked with crypto market data and server-side functionality.",
      "Improved platform usability and overall performance.",
    ],

    skills: ["Python", "Flask", "React", "APIs", "JavaScript"],
    teamSize: 5,
  },

  portfolioWebsite: {
    slug: "portfolio-website",
    title: "Portfolio Website",

    image: `${import.meta.env.BASE_URL}projects/portfolio.png`,

    description:
      "A personal portfolio website showcasing projects, experience, and technical skills with a clean, responsive, and modern interface.",

    responsibilities: [
      "Designed and developed the website using React, Vite, and TypeScript.",
      "Built reusable components for projects, skills, and experience sections.",
      "Implemented responsive layouts for desktop and mobile devices.",
      "Added smooth scrolling navigation and polished UI styling.",
      "Structured the site for easy updates and future expansion.",
    ],

    skills: ["React", "Vite", "TypeScript", "CSS", "UI/UX"],
    teamSize: 1,
  },

  dataScrapingPlatform: {
    slug: "data-scraping-platform",
    title: "Data Scraping & Crypto Analysis Platform",

    // image: `${import.meta.env.BASE_URL}projects/scraper.png`,

    description:
      "A data-driven platform for collecting, processing, and structuring web data for analysis, including crypto-related insights and backend integration.",

    responsibilities: [
      "Built scraping workflows to collect structured data from web sources.",
      "Processed and cleaned raw data for analysis and storage.",
      "Integrated collected data into backend systems and API flows.",
      "Organized data for analytics and reporting purposes.",
      "Applied the platform to crypto-related data analysis use cases.",
    ],

    skills: ["Python", "Web Scraping", "APIs", "Data Processing"],
    teamSize: 2,
  },
};

export function getProjectData(slug?: string): ProjectPageData | null {
  if (!slug) return null;

  const match = Object.values(projectData).find(
    (project) => project.slug === slug
  );

  return match || null;
}