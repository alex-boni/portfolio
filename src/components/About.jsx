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
            Soy <strong>Ingeniero de Software</strong> apasionado por el
            desarrollo web y la creación de aplicaciones funcionales e
            intuitivas. Me considero full-stack junior, con experiencia en
            <strong> Node.js, Java, Spring Boot, JavaScript y C++</strong>.
            Actualmente estoy ampliando mis conocimientos en React.js para
            desarrollar PWAs, y este portfolio está desarrollado
            completamente en <strong>React.js + Tailwind CSS</strong>. También
            investigo sobre accesibilidad web para garantizar la inclusión
            y cumplimiento de las normativas vigentes.
            <br />
            Cuento con bases sólidas en{" "}
            <strong>
              lógica, estructuras de datos, algoritmia y patrones de diseño
            </strong>
            , que son mis pilares. En mis ratos libres disfruto del deporte y de
            resolver problemas de AdaByron.
            <br />
            No quiero extenderme demasiado: si tienes alguna pregunta, comentario o
            sugerencia, estaré encantado de hablar contigo. ¡Disfruta del
            portfolio!.
          </p>
          <Stack />
        </div>
      </div>
    </section>
  );
}
export default About;
