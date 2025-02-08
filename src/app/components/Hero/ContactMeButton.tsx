import React from "react";

const ContactMeButton = () => {
  const handleDownload = () => {
    const cvUrl =
      "https://raw.githubusercontent.com/DaliGabriel/PortafolioTexture/main/Cv/CvDaliRangel.pdf"; // Direct link to the CV

    // Open the file in a new tab (GitHub automatically triggers the download)
    window.open(cvUrl, "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-800 hover:bg-blue-950 text-white font-bold py-2 px-4 border border-blue-950 rounded mt-5"
    >
      Download CV
    </button>
  );
};

export default ContactMeButton;