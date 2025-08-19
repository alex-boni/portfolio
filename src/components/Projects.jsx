import pantallaPrincipalP1 from "../assets/pantalla-principal.png";
import altaMaquinaP1 from "../assets/alta-maquina.png";
import alquilarMaquinaP1 from "../assets/alquilar-maquina.png";
import modeloArcadeP1 from "../assets/modelo-arcade.png";
import modeloVideojuegosP1 from "../assets/modelo-videojuegos.png";
import Carousel from "../components/Carousel";

function Projects() {
  // Ejemplo: cada proyecto con su array de imágenes
  const proyecto1Imgs = [
    pantallaPrincipalP1,
    altaMaquinaP1,
    alquilarMaquinaP1,
    modeloArcadeP1,
    modeloVideojuegosP1,
  ]; // reemplaza por tus rutas reales

  return (
    <section id="projects" className="py-14 px-12">
      <h2 className="pb-8 text-3xl font-bold">Proyectos</h2>

      <div className="grid lg:grid-cols-2 gap-4 place-items-center">
        {/* Tarjeta con carrusel */}
        <a
          href="https://github.com/alex-boni/Wei-Little"
          className="flex flex-col w-full border rounded-lg shadow-sm md:flex-row  border-gray-800 hover:bg-gray-700 transition hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <Carousel
            images={proyecto1Imgs}
            alt="Proyecto 1"
            className="w-full  h-auto md:rounded-none md:rounded-s-lg"
          />

          <div className="flex flex-col p-4 leading-normal md:w-80 lg:w-full place-items-center ">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Wei Little
            </h3>
            <p className="mb-3 font-light text-gray-400 text-start">
              Es una aplicación de escritorio desarrollada en Java que simula la
              gestión de una tienda de videojuegos y alquiler de máquinas
              recreativas. Se centró en aplicar prácticas completas de modelado
              y desarrollo de software, incluyendo: Arquitectura de software
              (DAO, JPA, MVC) Modelado con IBM RSAD (diagramas entidad-relación,
              de clases, casos de uso, actividades y secuencia) Separación clara
              por capas: presentación, negocio e integración
            </p>
          </div>
        </a>
        <a
          href="https://github.com/alex-boni/Wei-Little"
          className="flex flex-col w-full border rounded-lg shadow-sm md:flex-row  border-gray-800 hover:bg-gray-700 transition hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <Carousel
            images={proyecto1Imgs}
            alt="Proyecto 1"
            className="w-full  h-auto md:rounded-none md:rounded-s-lg"
          />

          <div className="flex flex-col p-4 leading-normal md:w-80 lg:w-full place-items-center ">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Wei Little
            </h3>
            <p className="mb-3 font-light text-gray-400 text-start">
              Es una aplicación de escritorio desarrollada en Java que simula la
              gestión de una tienda de videojuegos y alquiler de máquinas
              recreativas. Se centró en aplicar prácticas completas de modelado
              y desarrollo de software, incluyendo: Arquitectura de software
              (DAO, JPA, MVC) Modelado con IBM RSAD (diagramas entidad-relación,
              de clases, casos de uso, actividades y secuencia) Separación clara
              por capas: presentación, negocio e integración
            </p>
          </div>
        </a>
        

      </div>
    </section>
  );
}

export default Projects;
