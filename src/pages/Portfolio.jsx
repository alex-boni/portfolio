import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../App.css";

import About from "../components/About";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certificates from "../components/Certificates";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

function Portfolio() {
  const [params] = useSearchParams();

  useEffect(() => {
    const sectionId = params.get("s");
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [params]);

  return (
    <div>
      <About />
      <Projects />
      <Education />
      <Experience />
      <Certificates />
      <Skills />
    </div>
  );
}

export default Portfolio;
