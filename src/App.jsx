import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div>
        <Navbar/>
        <About/>
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Skills />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
