"use client";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import LoadingScreen from "./components/Loading/LoadingScreen";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import TypeWriter from "./components/Hero/TypeWriter";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate content loading (replace with your actual loading logic if needed)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after a delay (simulating load complete)
    }, 1500); // Adjust delay (milliseconds) as needed for realistic loading simulation

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, []); // Empty dependency array means this effect runs only once after initial render

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className="relative flex flex-col min-h-screen text-slate-800  break-words ">
        <Navbar
          homeRef={homeRef} // Pass the refs to Navbar
          projectsRef={projectsRef}
          experienceRef={experienceRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
        <main className="mx-7 lg:mx-6 mt-10 flex-grow ">
          <section className="py-24">
            <Hero>
              <div className="relative z-10 text-center pt-40">
                <h1 className="text-white text-5xl font-bold pb-5">
                  <TypeWriter text="Dalí Rangel" speed={400} />
                </h1>
                <p className="text-gray-300 text-2xl">
                  Software Frontend Engineer
                </p>
              </div>
            </Hero>
          </section>
          {/* Scroll carrousel right here. */}
          <div className="mt-36 mb-8 w-full text-center">
            <Experience ref={experienceRef} />
            <Projects ref={projectsRef} />
            <AboutMe ref={aboutRef} />
            <Contact ref={contactRef} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
