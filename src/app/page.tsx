"use client";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import ContactMeButton from "./components/Hero/ContactMeButton";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen text-slate-800 break-words">
        <Navbar />
        <main className="mx-7 lg:mx-6 mt-10 flex-grow">
          <section className="py-24">
            <Hero>
              <div className="relative z-10 text-center pt-32 ">
                <h1 className="text-white text-5xl font-bold">Your Name</h1>
                <p className="text-gray-300 text-2xl">Software Engineer</p>
                <ContactMeButton />
              </div>
            </Hero>
          </section>
          {/* Scroll carrousel right here. */}
          <div className="mt-36 mb-8">
            <Projects />
            <Experience />
            <AboutMe />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
