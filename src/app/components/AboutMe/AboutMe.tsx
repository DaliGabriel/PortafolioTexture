import React from "react";

interface AboutMeProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const AboutMe: React.FC<AboutMeProps> = ({ ref }) => {
  return (
    <section
      ref={ref}
      className="py-16 dark:bg-gray-900 dark:text-gray-100 bg-gray-100 my-1 rounded"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">
          About me
        </h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        voluptate earum eos ea odio ratione qui minus, dolorem alias temporibus
        fuga repellat quia veritatis tenetur libero sit praesentium facilis?
        Nemo.
      </div>
    </section>
  );
};

export default AboutMe;
