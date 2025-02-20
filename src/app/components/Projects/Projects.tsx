import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const Projects: React.FC<ProjectsProps> = ({ ref }) => {
  // Array of project data.  Replace with your actual project information.
  const projects = [
    {
      id: 1,
      title: "ImagenProIA",
      description: "High quality image generation using IA",
      imageUrl: "/Imagenproia.JPG", // Replace with your image path
      demoUrl: "https://www.imagenproai.com/", // Optional: URL to a live demo
    },
    {
      id: 2,
      title: "México Interactivo(Interactive Map)",
      description: "An interactive México map to get info about each states",
      imageUrl: "/MexicoInteractivoMap.JPG", // Replace with your image path
      demoUrl: "https://www.mexicointeractivo.com/interactive-map",
      codeUrl: "https://github.com/DaliGabriel/MexicoInteractiveMap",
    },
    {
      id: 3,
      title: "México News web app",
      description: "Top most important mexican news",
      imageUrl: "/MexicoBlog.JPG", // Replace with your image path
      demoUrl: "https://www.mexicointeractivo.com/",
      codeUrl: "https://github.com/DaliGabriel/MexicoInteractiveMap",
    },
    {
      id: 4,
      title: "Tik tok dashboard",
      description: "Top most tik tok hashgtag trends",
      imageUrl: "/tiktokDashboard.JPG", // Replace with your image path
      demoUrl: "https://tiktoktrends-ui.vercel.app/login",
      codeUrl: "https://github.com/DaliGabriel/TiktoktrendsUI",
    },
    {
      id: 5,
      title: "Finance App",
      description: "Simple mobile app to be aware of your finances",
      imageUrl: "/FinanceAppImageHome.jpeg", // Replace with your image path
      codeUrl: "https://github.com/DaliGabriel/Finance-app",
    },
    // Add more projects as needed
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
