import alex from "../assets/alex-gafas-normal-sf.png";
import SocialNetworks from "./SocialNetworks";
import Stack from "./Stack";
function About() {
  return (
    <section id="about" className="pt-12 px-12 lg:px-24 md:px-16">
      <h1 className="my-8 font-bold">Ey Devs! Soy Alex!</h1>
      <div className="flex flex-col lg:flex-row  items-center text-left gap-4 ">
        <div>
          <img
            src={alex}
            alt="alex"
            
            className="object-cover w-70 -my-5 lg:w-300 mask-radial-at-center mask-radial-from-60% lg:mask-radial-from-40% mask-b-from-70% mask-b-to-95%"
          />
        <SocialNetworks />
        </div>
        <div>
        <p className="text-justify">
          Soy <strong>ingeniero de software</strong>, me apasiona el desarrollo
          web y la creación de aplicaciones funcionales e intuitivas. Me
          considero full-stack junior con experiencia en 
          <strong> Node.js, Java, Spring-Boot, JavaScript y C++</strong>.
          Actualmente, estoy ampliando mis conocimientos en React.js para
          desarrollar PWAs. Por cierto, my portfolio esta desarrollando
          completamente en <strong>React.js + Tailwind 4</strong>. También
          estoy investigando sobre accesibilidad para garantizar la inclusión y
          cumplimiento de las normativas vigentes.
          <br />
          Tengo unas bases sólidas en <strong>lógica, estructura de datos, algoritmia y patrones de diseño</strong>
          , que son mis pilares. En mis ratos libres, suelo realizar deporte e
          intentar resolver problemas de AdaByron.
          <br />
          No quiero alargarme mucho, si tenéis alguna pregunta, comentario y/o
          sugerencia, adelante, soy un dev más como vosotros. Disfrutar del
          portfolio.
        </p>
        <Stack />
        </div>
      </div>
    </section>
  );
}
export default About;
