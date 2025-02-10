import Link from "next/link";
import React from "react";
import { PiGithubLogoLight, PiLinkedinLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-3 bg-slate-50 dark:bg-slate-950">
      <Link href={"https://github.com/DaliGabriel"}>
        <PiGithubLogoLight
          className="text-black dark:text-white text-xl"
          title="Explore My Github account"
        />
      </Link>
      <Link
        href={
          "https://www.linkedin.com/in/dal%C3%AD-rangel-x?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        }
      >
        <PiLinkedinLogoLight
          className="text-black dark:text-white text-2xl"
          title="Explore My Linkedin Account"
        />
      </Link>
    </footer>
  );
};

export default Footer;
