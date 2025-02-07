import Link from "next/link";
import React from "react";
import { PiGithubLogoLight, PiLinkedinLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center py-3 bg-slate-50 dark:bg-slate-950">
      <Link href={"/interactive-map"}>
        <PiGithubLogoLight
          className="text-black dark:text-white text-xl"
          title="Explore Interactive Map"
        />
      </Link>
      <Link href={"/interactive-map"}>
        <PiLinkedinLogoLight
          className="text-black dark:text-white text-2xl"
          title="Explore Interactive Map"
        />
      </Link>
    </footer>
  );
};

export default Footer;
