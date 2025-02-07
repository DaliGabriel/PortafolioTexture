import React from "react";

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard = ({
  imageUrl,
  title,
  description,
  demoUrl,
  codeUrl,
}: ProjectCardProps) => {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />

      {/* Overlay (initially hidden) */}
      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-4">
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300 text-center mb-4">{description}</p>

        {/* Buttons (Demo and Code) */}
        <div className="flex space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Demo
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
