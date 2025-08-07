import alex from "../assets/alex-sin-fondo.png";
function About() {
  return (
    <>
      <h1 className="mt-4">Ey Devs! Soy Alex!</h1>
      <div className="flex ml-50 mr-50 items-center text-left gap-4">
        <img
          src={alex}
          alt="alex"
          width={150}
          className="object-cover mask-radial-at-top mask-radial-from-60% mask-b-from-70% mask-b-to-95%"
        />
        <p>
          Soy ingeniero de software y me apasiona el desarrollo web y la
          creación de aplicaciones funcionales e intuitivas. Mi experiencia se
          centra en el desarrollo full-stack con Node.js, Java, Spring-Boot y
          JavaScript moderno. Actualmente, estoy ampliando mis conocimientos en
          React.js para desarrollar aplicaciones web progresivas (PWA). También
          estoy explorando los últimos requisitos de accesibilidad para
          garantizar que cada solución que creo sea inclusiva y cumpla con las
          normativas vigentes.
        </p>
      </div>
    </>
  );
}
export default About;
