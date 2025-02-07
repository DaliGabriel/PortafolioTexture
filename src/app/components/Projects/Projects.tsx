import ProjectCard from "./ProjectCard";

const Projects = () => {
  // Array of project data.  Replace with your actual project information.
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of project 1.",
      imageUrl: "/image1.jpg", // Replace with your image path
      demoUrl: "https://example.com/demo1", // Optional: URL to a live demo
      codeUrl: "https://github.com/yourusername/project1", // Optional: URL to the code repository
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of project 2.",
      imageUrl: "/image2.jpg", // Replace with your image path
      demoUrl: "https://example.com/demo2",
      codeUrl: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of project 3.",
      imageUrl: "/image3.jpg", // Replace with your image path
      demoUrl: "https://example.com/demo3",
      codeUrl: "https://github.com/yourusername/project2",
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-16 dark:bg-gray-900 bg-gray-100 mb-1">
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
