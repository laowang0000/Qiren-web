import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./sections/About";
import { Certification } from "./sections/Certification";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Experience } from "./sections/Experience";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink-950 text-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <FeaturedProjects />
        <Projects />
        <Experience />
        <Certification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
