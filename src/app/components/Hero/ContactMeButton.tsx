import React from "react";

const ContactMeButton = () => {
  const cvUrl =
    "https://raw.githubusercontent.com/DaliGabriel/PortafolioTexture/main/Cv/CvDaliRangel.pdf";

  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
    >
      Download CV
    </a>
  );
};

export default ContactMeButton;
