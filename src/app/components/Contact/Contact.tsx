import React from "react";

interface ContactProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<ContactProps> = ({ ref }) => {
  const email = "admin@dalirangel.com"; // Temporary or official email

  return (
    <section
      ref={ref}
      className="py-16 dark:bg-gray-900 dark:text-gray-100 bg-gray-100 rounded"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">
          Contact Me
        </h2>

        <p className="text-lg text-gray-800 dark:text-gray-300">
          Feel free to reach out to me for collaborations, job opportunities, or just to connect!
        </p>

        <div className="mt-6">
          <a
            href={`mailto:${email}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Email Me
          </a>
        </div>

        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Or email me directly at:{" "}
          <a
            href={`mailto:${email}`}
            className="text-blue-500 hover:underline"
          >
            {email}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;