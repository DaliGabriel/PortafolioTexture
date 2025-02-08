import React from "react";

const ContactMeButton = () => {
  const handleDownload = () => {
    const cvUrl =
      "https://raw.githubusercontent.com/DaliGabriel/PortafolioTexture/main/Cv/CvDaliRangel.pdf"; // Direct link to the CV

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CvDaliRangel.pdf"; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
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