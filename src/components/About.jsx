import alex from "../assets/alex-gafas-normal-sf.png";
function About() {
  return (
    <>
      <h1 className="mt-4">Ey Devs! Soy Alex!</h1>
      <div className="flex ml-50 mr-50 items-center text-left gap-4">
        <img
          src={alex}
          alt="alex"
          width={300}
          className="object-cover mask-radial-at-top mask-radial-from-60% mask-b-from-70% mask-b-to-95%"
        />
        <p>
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
      </div>
    </>
  );
}
export default About;
