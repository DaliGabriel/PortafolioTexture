import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const Projects: React.FC<ProjectsProps> = ({ ref }) => {
  // Array of project data.  Replace with your actual project information.
  const projects = [
    {
      id: 1,
      title: "University Payment & Intranet Platform",
      description:
        "Full-stack Laravel + React platform managing enrollment, grades, and payments (Stripe & PayU) for a university. Automated workflows saved 50+ manual hours/month.",
      imageUrl: "/UCGLogo.png",
    },
    {
      id: 2,
      title: "E-commerce Backend — Privalia / Grupo Axo",
      description:
        "Backend engineering for Privalia's high-traffic e-commerce platform. Led Adobe Commerce migration, Docker containerization, and MySQL optimization for Hot Sale peak events.",
      imageUrl: "/PrivaliaLogo.jpg",
    },
    {
      id: 3,
      title: "ImagenProIA",
      description:
        "AI-powered professional image generator. Prompt engineering + automation pipeline delivering high-quality thematic images at scale.",
      imageUrl: "/Imagenproia.JPG",
      demoUrl: "https://www.imagenproai.com/",
    },
    {
      id: 4,
      title: "México Interactivo",
      description:
        "Interactive map and content platform for exploring Mexico's states, history, and culture. Next.js frontend with Firestore backend and SEO-optimized blog.",
      imageUrl: "/MexicoInteractivoMap.JPG",
      demoUrl: "https://www.mexicointeractivo.com/interactive-map",
      codeUrl: "https://github.com/DaliGabriel/MexicoInteractiveMap",
    },
    {
      id: 5,
      title: "Finance App",
      description:
        "Mobile-first personal finance tracker with expense categorization and automated monthly reporting.",
      imageUrl: "/FinanceAppImageHome.jpeg",
      codeUrl: "https://github.com/DaliGabriel/Finance-app",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-16 dark:bg-gray-900 dark:text-gray-100 bg-gray-100 mb-1 rounded"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
