import { useState } from "react";
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
  const [count, setCount] = useState(0);

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
        <div className="mb-20">
          <h1 className="text-3xl font-bold text-blue-500">
            Próximamente Disponible...
          </h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
          <p className="read-the-docs">Miéntras juega con el contador</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
