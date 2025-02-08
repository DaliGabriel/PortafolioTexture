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
            Hi, I&apos;m <span className="font-bold">Gabriel Dalí Rangel Ahumada</span>, a passionate <strong>React/Next.js</strong> developer with a strong focus on <strong>web performance, AI-driven solutions, and entrepreneurship</strong>.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            I have over <strong>5 years of experience</strong> developing modern web applications, optimizing <strong>SEO</strong>, and building <strong>scalable systems</strong>. I thrive at the intersection of <strong>technology and business</strong>, constantly exploring innovative solutions.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            I&apos;m the creator of <a href="https://www.mexicointeractivo.com" className="text-blue-500 hover:underline">México Interactivo</a>, an interactive map of Mexico, and <a href="https://www.imagenproai.com" className="text-blue-500 hover:underline">ImagenProAI</a>, a professional AI-powered image generator. My mission is to build <strong>products that solve real problems</strong> while learning about <strong>marketing, sales, and financial independence</strong>.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            My interests extend beyond coding—I enjoy <strong>business strategy, AI, and content creation</strong>. Currently, I&apos;m working on growing my <strong>social media presence</strong> and sharing my journey in tech and entrepreneurship.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            My long-term goal? To <strong>achieve financial freedom</strong> through technology and innovation while helping others along the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;