import React from "react";

const ContactMeButton = () => {
  return (
    <a
      href="/CvDaliRangel.pdf"
      download="CvDaliRangel.pdf"
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
    >
      Download CV
    </a>
  );
};

export default ContactMeButton;
