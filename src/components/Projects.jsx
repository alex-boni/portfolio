import pantallaPrincipalP1 from "../assets/pantalla-principal.png";
import altaMaquinaP1 from "../assets/alta-maquina.png";
import alquilarMaquinaP1 from "../assets/alquilar-maquina.png";
import modeloArcadeP1 from "../assets/modelo-arcade.png";
import modeloVideojuegosP1 from "../assets/modelo-videojuegos.png";
import indexParkit from "../assets/index-parkit.png";
import buscadorParkit from "../assets/buscador-parkit.png";
import reserveParkit from "../assets/reserve-parkit.png";
import selectSpotParkit from "../assets/select-spot-parkit.png";
// import casoUsoParkit from "../assets/caso-uso-parkit.mp4";
import Carousel from "../components/Carousel";

function Projects() {
  const proyecto1Imgs = [
    pantallaPrincipalP1,
    altaMaquinaP1,
    alquilarMaquinaP1,
    modeloArcadeP1,
    modeloVideojuegosP1,
  ]; 
  const parkitImgs = [
    indexParkit,
    buscadorParkit,
    reserveParkit,
    selectSpotParkit,
    // casoUsoParkit,
  ];

  return (
    <section id="projects" className="py-14 px-4 lg:px-24 md:px-16">
      <h2 className="pb-8 text-3xl font-bold">Proyectos</h2>

      <div className="flex flex-col gap-12">
        {/* Tarjeta con carrusel */}
        <a
          href="https://github.com/alex-boni/Wei-Little"
          className="flex flex-col lg:flex-row h-full  w-full items-center justify-center px-2 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl hover:ring-white/20"
        >
          <Carousel
            images={proyecto1Imgs}
            alt="Proyecto 1"
            className="w-full lg:w-150 max-h-100 lg:h-full"
          />

          <div className="flex flex-col p-4 leading-normal w-full text-justify font-light text-gray-300">
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white text-center">
              Wei Little
            </h3>
            <p className="mb-3 ">
              Wei-Little es una aplicación de escritorio desarrollada en Java
              que simula la gestión de una tienda de videojuegos y un servicio
              de alquiler de máquinas recreativas. Este proyecto académico se
              centró en aplicar prácticas completas de modelado y desarrollo de
              software, desde la planificación hasta el producto final,
              incluyendo: Especificación de requisitos (SRS) Arquitectura de
              software (DAO, JPA, MVC) Modelado con IBM RSAD (diagramas
              entidad-relación, de clases, casos de uso, actividades y
              secuencia) Separación clara por capas: presentación, negocio e
              integración
            </p>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Soft-skills entrenadas:{" "}
              </strong>
              Trabajo en equipo, gestión de proyectos, comunicación efectiva,
              resolución de problemas, adaptabilidad.
            </div>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Hard-skills trabajadas:{" "}
              </strong>
              Análisis y diseño de sistemas, programación orientada a objetos,
              gestión de bases de datos, diseño de interfaces de usuario.
            </div>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Tecnologías utilizadas:{" "}
              </strong>
              Java, JPL, MySQL, DAO, MVC, IBM RSAD
            </div>
          </div>
        </a>

        <a
          href="https://github.com/alex-boni/ParkIT"
          className="flex flex-col lg:flex-row h-full  w-full items-center justify-center px-2 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl hover:ring-white/20"
        >
          <Carousel
            images={parkitImgs}
            alt="Proyecto 1"
            className="w-full lg:w-150 max-h-100 lg:h-auto "
          />

          <div className="flex flex-col p-4 leading-normal w-full text-justify font-light text-gray-300">
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-white text-center">
              ParkIT
            </h3>
            <p className="mb-3 ">
              ParkIT es una aplicación web que ayuda a los usuarios a encontrar
              plazas de aparcamiento libres en tiempo real, mostrándolas por
              zonas en un mapa interactivo y guiándolos hasta ellas. La
              aplicación cuenta con varias vistas que dependiendo de si el
              usuario es particular o empresa tiene diferentes permisos y
              funcionalidades (El usuario administrador puede acceder a todas
              las vistas) para mejorar la navegación y organización
            </p>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Soft-skills entrenadas:{" "}
              </strong>
              Trabajo en equipo, gestión de proyectos, comunicación efectiva,
              resolución de problemas, adaptabilidad.
            </div>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Hard-skills trabajadas:{" "}
              </strong>
              Análisis y diseño de sistemas, programación orientada a objetos,
              gestión de bases de datos, diseño de interfaces de usuario.
            </div>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Frontend:{" "}
              </strong>
              <p>HTML, CSS, Bootstrap 4, Thymeleaf JavaScript</p>
              <strong className="text-xl font-bold tracking-tight text-white">Backend: </strong>
              <p>Spring-boot, Websockets, H2</p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
