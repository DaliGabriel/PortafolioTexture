import Image from "next/image";
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
          {/* Grupo Axo / Privalia */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-4 mb-2">
              <Image
                src="/PrivaliaLogo.jpg"
                alt="Privalia logo"
                width={48}
                height={48}
                className="rounded object-contain"
              />
              <h3 className="text-xl font-semibold dark:text-gray-100">
                Senior Backend Developer — Grupo Axo® / Privalia
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Remote | September 2025 – January 2026
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>
                Core backend engineer on the Privalia e-commerce platform; led
                the architectural transition toward Adobe Commerce ensuring{" "}
                <strong>high availability during peak events</strong> (Hot
                Sale, Buen Fin).
              </li>
              <li>
                Containerized development and production environments with{" "}
                <strong>Docker</strong>, improving deployment consistency and
                reducing onboarding time across the team.
              </li>
              <li>
                Optimized complex <strong>MySQL queries</strong> to handle
                high-concurrency traffic during seasonal sales spikes.
              </li>
              <li>
                Established coding standards and automated testing practices
                to ensure system stability in a cross-functional remote team.
              </li>
            </ul>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Stack: Laravel · Docker · MySQL · Adobe Commerce · Scrum
            </p>
          </div>

          {/* Nice de México */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-4 mb-2">
              <Image
                src="/NiceLogo.webp"
                alt="Nice de México logo"
                width={48}
                height={48}
                className="rounded object-contain"
              />
              <h3 className="text-xl font-semibold dark:text-gray-100">
                Full-Stack Engineer — Nice de México
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Guadalajara, Jalisco | January 2024 – September 2025
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>
                Built and optimized scalable product interfaces using{" "}
                <strong>Next.js, React, and GraphQL</strong> (Apollo Client &
                Server), improving performance and user engagement.
              </li>
              <li>
                Implemented <strong>Redux Toolkit</strong> state management,
                increasing performance and reducing complexity across the
                frontend codebase.
              </li>
              <li>
                Led frontend architectural improvements that reduced technical
                debt and raised Lighthouse scores, resulting in faster load
                times.
              </li>
            </ul>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Stack: Next.js · React · Redux Toolkit · GraphQL · Tailwind CSS
            </p>
          </div>

          {/* Universidad Cuauhtémoc */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-4 mb-2">
              <Image
                src="/UCGLogo.png"
                alt="Universidad Cuauhtémoc logo"
                width={48}
                height={48}
                className="rounded object-contain"
              />
              <h3 className="text-xl font-semibold dark:text-gray-100">
                Full-Stack Developer — Universidad Cuauhtémoc
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Guadalajara, Jalisco | October 2022 – January 2024
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>
                Built a scalable university intranet with{" "}
                <strong>React, Laravel, and MySQL</strong> managing
                enrollment, grades, schedules, and internal communications.
              </li>
              <li>
                Integrated <strong>PayU and Stripe</strong> payment gateways,
                reducing failed transactions and cutting payment-related
                support tickets significantly.
              </li>
              <li>
                Automated academic workflows (enrollment alerts, email
                notifications, payment confirmations), saving{" "}
                <strong>50+ manual hours per month</strong>.
              </li>
            </ul>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Stack: Laravel · React · MySQL · Stripe · PayU · Redux Toolkit ·
              Bootstrap
            </p>
          </div>

          {/* Librerías Hidalgo */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <div className="flex items-center gap-4 mb-2">
              <Image
                src="/LibreriasHidalgoLogo.webp"
                alt="Librerías Hidalgo logo"
                width={48}
                height={48}
                className="rounded object-contain"
              />
              <h3 className="text-xl font-semibold dark:text-gray-100">
                Full-Stack Developer — Librerías Hidalgo
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Morelia, Michoacán | September 2021 – October 2022
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>
                Built a custom e-commerce platform for book sales with{" "}
                <strong>Laravel and React</strong>, optimizing the browsing
                and checkout experience.
              </li>
              <li>
                Developed a <strong>WhatsApp chatbot</strong> for real-time
                customer support, reducing manual inquiry handling and
                improving response times.
              </li>
              <li>
                Automated Mercado Libre product listings and catalog syncs,
                cutting manual data entry by{" "}
                <strong>over 50%</strong>.
              </li>
            </ul>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Stack: Laravel · React · MySQL · WhatsApp API · Mercado Libre API
            </p>
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
