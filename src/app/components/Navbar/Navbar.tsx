"use client";
import React, { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavbarProps {
  homeRef?: React.RefObject<HTMLDivElement | null>;
  projectsRef?: React.RefObject<HTMLDivElement | null>;
  experienceRef?: React.RefObject<HTMLDivElement | null>;
  aboutRef?: React.RefObject<HTMLDivElement | null>;
  contactRef?: React.RefObject<HTMLDivElement | null>;
  isOnBlogSection?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  homeRef,
  projectsRef,
  experienceRef,
  aboutRef,
  contactRef,
  isOnBlogSection = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [SelectedSection, setSelectedSection] = useState("Home");

  const router = useRouter();

  // Smooth scrolling function
  const scrollToSection = (
    elementRef: React.RefObject<HTMLDivElement | null> | undefined,
    section: string
  ) => {
    if (section == "Blog") {
      router.push("/blog");
      setSelectedSection(section);
      return;
    }

    if (isOnBlogSection) {
      router.push("/");
      // Optionally, you can add a fallback behavior here, like scrolling to the top:
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      setSelectedSection(section);
    }

    setSelectedSection(section);

    if (elementRef?.current) {
      // Check if elementRef.current is not null
      console.log(section);
      window.scrollTo({
        top: elementRef.current.offsetTop - 64,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    } else {
      // Optionally, you can add a fallback behavior here, like scrolling to the top:
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Function to handle scroll and set isMenuOpen to false if it's true
  const handleScroll = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, handleScroll]); // Depend on isMenuOpen so the listener is updated if isMenuOpen changes

  return (
    <>
      <nav className="bg-gray-800  fixed top-0 z-50 opacity-95">
        <div className="mx-auto w-screen px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Hamburger
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                {/* Replace with your logo image and solve the warning hight and with directly style??? i know new updated and probably fix is to add az-99 or high thant the other components  */}
                <Image
                  src="/logo.png"
                  alt="Gabriel Dalí Rangel | Frontend & Full-Stack Developer Logo"
                  width={32}
                  height={100}
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <button
                    onClick={() => scrollToSection(homeRef, "Home")}
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                      SelectedSection === "Home" ? "bg-gray-900" : "" // Add bg-gray-900 if SelectedSection is "Home", otherwise no extra class
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => scrollToSection(projectsRef, "Projects")}
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                      SelectedSection === "Projects" ? "bg-gray-900" : "" // Add bg-gray-900 if SelectedSection is "Home", otherwise no extra class
                    }`}
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection(experienceRef, "Experience")}
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                      SelectedSection === "Experience" ? "bg-gray-900" : "" // Add bg-gray-900 if SelectedSection is "Home", otherwise no extra class
                    }`}
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection(aboutRef, "About")}
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                      SelectedSection === "About" ? "bg-gray-900" : "" // Add bg-gray-900 if SelectedSection is "Home", otherwise no extra class
                    }`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef, "Contact")}
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                      SelectedSection === "Contact" ? "bg-gray-900" : "" // Add bg-gray-900 if SelectedSection is "Home", otherwise no extra class
                    }`}
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => scrollToSection(contactRef, "Blog")}
                    className={`rounded-md px-3 py-2 text-sm font-medium text-white ${
                      SelectedSection === "Blog" ? "bg-gray-900" : "" // Add bg-gray-900 if SelectedSection is "Home", otherwise no extra class
                    }`}
                  >
                    Blog
                  </button>
                </div>
              </div>
            </div>
            {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "" : "hidden"
          } sm:hidden  absolute top-16 left-0 w-full bg-gray-800 z-10`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            <button
              onClick={() => scrollToSection(homeRef, "Home")}
              className={`block rounded-md px-3 py-2 text-base font-medium text-white ${
                SelectedSection === "Home" ? "bg-gray-900" : ""
              }`}
              aria-current="page"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection(projectsRef, "Projects")}
              className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                SelectedSection === "Projects" ? "bg-gray-900" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(experienceRef, "Experience")}
              className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                SelectedSection === "Experience" ? "bg-gray-900" : ""
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection(aboutRef, "About")}
              className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                SelectedSection === "About" ? "bg-gray-900" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(contactRef, "Contact")}
              className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                SelectedSection === "Contact" ? "bg-gray-900" : ""
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection(contactRef, "Blog")}
              className={`block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                SelectedSection === "Blog" ? "bg-gray-900" : ""
              }`}
            >
              Blog
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
