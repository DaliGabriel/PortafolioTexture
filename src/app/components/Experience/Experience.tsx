import React from "react";

interface ExperienceProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const Experience: React.FC<ExperienceProps> = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="py-16 dark:bg-gray-900 dark:text-gray-100 bg-gray-100 rounded"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">
          Experience
        </h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        voluptate earum eos ea odio ratione qui minus, dolorem alias temporibus
        fuga repellat quia veritatis tenetur libero sit praesentium facilis?
        Nemo.
      </div>
    </section>
  );
};

export default Experience;
