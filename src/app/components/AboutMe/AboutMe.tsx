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
            Hi, I&apos;m{" "}
            <span className="font-bold">Gabriel Dalí Rangel</span> — a Senior
            Full-Stack Engineer based in <strong>Mexico (CST timezone)</strong>{" "}
            with 4 years building production systems for fintech and
            e-commerce.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            I specialize in <strong>backend architecture with Laravel + PostgreSQL</strong>,{" "}
            cloud infrastructure on <strong>AWS (EC2, RDS, S3)</strong>, and
            modern frontends with React + TypeScript + Inertia.js. I keep
            quality high through <strong>automated testing (90%+ coverage)</strong>{" "}
            and CI/CD pipelines with GitHub Actions.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            At Grupo Axo / Privalia I worked on high-traffic e-commerce
            backend infrastructure, optimizing MySQL for peak events like Hot
            Sale and containerizing environments with Docker. At Universidad
            Cuauhtémoc, I integrated <strong>PayU and Stripe</strong> payment
            gateways and automated workflows that saved the team 50+ hours per
            month.
          </p>

          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            I help <strong>US companies scale their engineering through nearshoring</strong>,
            delivering senior-level work with perfect timezone alignment. If
            you&apos;re looking for a reliable backend engineer who ships
            clean, tested code and communicates clearly — let&apos;s talk.
          </p>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Stack: Laravel · PostgreSQL · MySQL · Redis · AWS · Docker · React ·
            TypeScript · Inertia.js · Pest · PHPUnit · GitHub Actions
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
