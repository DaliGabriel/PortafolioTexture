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
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-800 dark:text-gray-300">
            Hi, I'm <span className="font-bold">Gabriel Dalí Rangel Ahumada</span>, a passionate **React/Next.js** developer with a strong focus on **web performance, AI-driven solutions, and entrepreneurship**. 
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            I have over **5 years of experience** developing modern web applications, optimizing **SEO**, and building **scalable systems**. I thrive at the intersection of **technology and business**, constantly exploring innovative solutions.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            I'm the creator of <a href="https://www.mexicointeractivo.com" className="text-blue-500 hover:underline">México Interactivo</a>, an interactive map of Mexico, and <a href="https://www.imagenproai.com" className="text-blue-500 hover:underline">ImagenProAI</a>, a professional AI-powered image generator. My mission is to build **products that solve real problems** while learning about **marketing, sales, and financial independence**.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            My interests extend beyond coding—I enjoy **business strategy, AI, and content creation**. Currently, I’m working on growing my **social media presence** and sharing my journey in tech and entrepreneurship.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            My long-term goal? To **achieve financial freedom** through technology and innovation while helping others along the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;