import React from "react";

const ContactMeButton = () => {
  const cvUrl =
    "https://raw.githubusercontent.com/DaliGabriel/PortafolioTexture/main/Cv/CvDaliRangel.pdf";

  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-50 pointer-events-auto bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 border border-blue-950 rounded mt-5 inline-block text-center"
    >
      Download CV
    </a>
  );
};

export default ContactMeButton;