export type ProjectPageData = {
  slug: string;
  title: string;
  image?: string;
  gallery?: string[];

  description?: string;
  responsibilities?: string[];
  skills?: string[];
  teamSize?: number;
};

export const projectData: Record<string, ProjectPageData> = {
  tourismWebsite: {
    slug: "tourism-website",
    title: "Tourism Website (2026)",

    image: `${import.meta.env.BASE_URL}projects/tourism-cover.png`,
    gallery: [
      `${import.meta.env.BASE_URL}projects/tourism-cover.png`,
      `${import.meta.env.BASE_URL}projects/tourism-2.png`,
      `${import.meta.env.BASE_URL}projects/tourism-3.png`,
      `${import.meta.env.BASE_URL}projects/tourism-4.png`,
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
};

export function getProjectData(slug?: string): ProjectPageData | null {
  if (!slug) return null;

  const match = Object.values(projectData).find(
    (project) => project.slug === slug
  );

  return match || null;
}