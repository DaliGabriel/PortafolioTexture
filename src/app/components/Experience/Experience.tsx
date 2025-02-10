import React from "react";
import ContactMeButton from "../Hero/ContactMeButton";

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
        <div className="space-y-8">
          {/* NICE de Mexico */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold dark:text-gray-100">
              React Developer - NICE de Mexico
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Guadalajara, Jalisco | January 2024 – Present
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>
                Developed SEO-optimized, responsive websites using Next.js,
                increasing organic traffic by 35%.
              </li>
              <li>
                Designed and implemented an AI-powered jewelry personalization
                application using the Gemini API.
              </li>
              <li>
                Collaborated with design and marketing teams to create tailored
                e-commerce solutions, enhancing user retention and sales.
              </li>
            </ul>
          </div>

          {/* Universidad Cuauhtémoc */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold dark:text-gray-100">
              Full-Stack Developer - Universidad Cuauhtémoc
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Guadalajara, Jalisco | October 2022 – December 2024
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>
                Migrated legacy systems to Next.js, reducing maintenance costs
                by 20%.
              </li>
              <li>
                Developed custom React.js web applications, boosting workflow
                efficiency by 30%.
              </li>
              <li>
                Standardized development practices, increasing code reusability
                and team productivity.
              </li>
            </ul>
          </div>

          {/* Librerías Hidalgo */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold dark:text-gray-100">
              Web Developer - Librerías Hidalgo
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Guadalajara, Jalisco | September 2021 – October 2022
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>
                Reduced website load times by 40% by integrating dynamic product
                listings via external APIs.
              </li>
              <li>
                Automated 70% of customer support queries using Twilio chatbots,
                improving response times.
              </li>
              <li>
                Enhanced site performance, leading to increased user engagement
                and repeat visits.
              </li>
            </ul>
          </div>

          <div>
            <ContactMeButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
