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
        <div
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
            <p className="mb-1 ">
              <strong className="text-xl font-bold tracking-tight text-white">
                Descripción:{" "}
              </strong>
              Wei-Little es una aplicación de escritorio desarrollada en Java
              que simula la gestión de una tienda de videojuegos y un servicio
              de alquiler de máquinas recreativas. El proyecto se centró en
              aplicar prácticas completas de modelado y desarrollo de software,
              desde la planificación hasta el producto final. Incluyó:
            </p>
            <ul className="list-disc pl-5 mb-3">
              <li>Especificación de requisitos (SRS)</li>
              <li>Arquitectura de software (DAO, JPA, MVC)</li>
              <li>
                Modelado con IBM RSAD (diagramas entidad-relación, de clases,
                casos de uso, actividades y secuencia)
              </li>
              <li>
                Separación clara por capas: presentación, negocio e integración
              </li>
            </ul>
            <p>
              <strong className="text-xl font-bold tracking-tight text-white">
                Mi rol desempeñado:{" "}
              </strong>
              Actué como líder del equipo y desarrollador principal. Mis
              responsabilidades incluyeron:
            </p>
            <ul className="list-disc pl-5 mb-3">
              <li>
                Comunicación directa con el cliente (profesor) para levantar
                requisitos y validar avances.
              </li>
              <li>
                Asignación de tareas al equipo de 12 integrantes y resolución de
                conflictos internos.
              </li>
              <li>
                Coordinación de entregas parciales y presentaciones de avance.
              </li>
              <li>
                Contribución activa al código, especialmente en los modulos de
                gestión de alquileres y ventas.
              </li>
            </ul>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Soft-skills entrenadas:{" "}
              </strong>
              <ul className="list-disc pl-5 mb-3">
                <li>
                  Liderazgo y gestión de proyectos: dirigí un equipo de 12
                  personas, logrando entregar el producto en el plazo
                  establecido y cumpliendo los requisitos del cliente.
                </li>
                <li>
                  Comunicación efectiva: mantuvimos reuniones periódicas con el
                  cliente y traduje sus requerimientos en tareas técnicas para
                  el equipo.
                </li>
                <li>
                  Resolución de problemas: abordé y resolví conflictos internos
                  del equipo, así como desafíos técnicos durante el desarrollo.
                </li>
                <li>
                  Trabajo en equipo: coordiné revisiones de código y sesiones de
                  integración, aumentando la calidad del software entregado.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Hard-skills trabajadas:{" "}
              </strong>
              <ul className="list-disc pl-5 mb-3">
                <li>
                  Análisis y diseño de sistemas: elaboré casos de uso y
                  diagramas UML en IBM RSAD que guiaron el desarrollo.
                </li>
                <li>
                  Programación orientada a objetos: implementé clases y patrones
                  de diseño en Java, garantizando modularidad.
                </li>
                <li>
                  Gestión de bases de datos: diseñé y normalicé el modelo en
                  MySQL, asegurando consistencia e integridad de datos.
                </li>
                <li>
                  Diseño de interfaces de usuario: desarrollé vistas y
                  formularios en Java Swing, priorizando usabilidad y
                  consistencia visual.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Tecnologías utilizadas:{" "}
              </strong>
              Java, JPL, MySQL, DAO, MVC, IBM RSAD
            </div>
            <div>
              <strong className="text-xl font-bold tracking-tight text-white">
                Enlaces:{" "}
              </strong>
              <ul className="list-disc pl-5 mb-3">
                <li>
                  <a
                    href="https://github.com/alex-boni/Wei-Little"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositorio en GitHub
                  </a>
                </li>
                <li>
                  <p className="text-red-500 font-bold">
                    Demo del proyecto (no disponible, solo local ejecutando con Eclipse IDE o VS Code)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
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
              <strong className="text-xl font-bold tracking-tight text-white">
                Descripción:{" "}
              </strong>
              ParkIT es una aplicación web que ayuda a los usuarios a encontrar
              plazas de aparcamiento libres de empresas privadas, mostrándolas
              en un mapa interactivo con Leaflet. El sistema ofrece diferentes
              vistas y permisos según el tipo de usuario (particular, empresa o
              administrador), además de funcionalidades adicionales como
              notificaciones en tiempo real y un chat entre usuarios y empresas
              implementados con WebSockets. El proyecto se desarrolló en equipo
              de 6 personas como práctica académica, con entregas periódicas al
              profesor y despliegue final en un servidor de la Universidad
              Complutense de Madrid, dentro de un contenedor Guacamole.
            </p>
            <p>
              <strong className="text-xl font-bold tracking-tight text-white">
                Mi rol desempeñado:{" "}
              </strong>
              Fui desarrollador principal y me encargué del despliegue en
              servidor Linux. Aunque el equipo no tenía una estructura formal de
              roles, mis compañeros acudían a mí de forma natural para resolver
              dudas de diseño, implementación o errores, debido a mi mayor
              experiencia en desarrollo web y manejo de la terminal. Mis
              principales responsabilidades fueron:
            </p>
            <ul className="list-disc pl-5 mb-3">
              <li>
                Configuración y despliegue del sistema en un contenedor remoto
                en la UCM.
              </li>
              <li>
                Implementación de WebSockets para notificaciones en tiempo real
                y chat usuario-empresa.
              </li>
              <li>
                Asegurar la cohesión de las vistas desarrolladas con Thymeleaf y
                Bootstrap.
              </li>
            </ul>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Soft-skills entrenadas:{" "}
              </strong>
              <ul className="list-disc pl-5 mb-3">
                <li>
                  Liderazgo técnico informal: apoyé a 5 compañeros en dudas de
                  implementación y errores, lo que aceleró la integración del
                  proyecto y redujo bloqueos.
                </li>
                <li>
                  Trabajo en equipo: coordiné la integración de vistas y
                  funcionalidades para mantener consistencia visual y técnica.
                </li>
                <li>
                  Comunicación efectiva: expliqué conceptos de WebSockets y
                  despliegue Linux al equipo, facilitando el aprendizaje
                  colectivo.
                </li>
                <li>
                  Adaptabilidad: aprendí a utilizar Spring Boot y Thymeleaf
                  desde cero durante el desarrollo, aplicándolos en un proyecto
                  real en pocas semanas.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Hard-skills trabajadas:{" "}
              </strong>
              <ul className="list-disc pl-5 mb-3">
                <li>
                  Desarrollo backend con Spring Boot: implementé controladores y
                  servicios para la lógica del buscador de parkings.
                </li>
                <li>
                  WebSockets: diseñé e implementé notificaciones y chat en
                  tiempo real, mejorando la experiencia de usuario.
                </li>
                <li>
                  Bases de datos H2: modelé y normalicé la base de datos,
                  integrándola con JPA/Hibernate.
                </li>
                <li>
                  Frontend con Thymeleaf + Bootstrap: desarrollé vistas
                  responsivas para usuarios y empresas.
                </li>
                <li>
                  Despliegue en Linux: configuré y desplegué la aplicación en un
                  servidor remoto con contenedor Guacamole.
                </li>
              </ul>
            </div>
            <div className="mb-2">
              <strong className="text-xl font-bold tracking-tight text-white">
                Tecnologías utilizadas:{" "}
              </strong>
              <ul className="list-disc pl-5 mb-3">
                <li>
                  Frontend: HTML5, CSS3, Bootstrap 4, Thymeleaf, JavaScript,
                  Leaflet
                </li>
                <li>Backend: Spring Boot, WebSockets, JPA</li>
                <li>Base de datos: H2</li>
                <li>Otros: Linux, contenedor Guacamole</li>
              </ul>
            </div>
            <div>
              <strong className="text-xl font-bold tracking-tight text-white">
                Enlaces:{" "}
              </strong>
              <ul className="list-disc pl-5 mb-3">
                <li>
                  <a
                    href="https://github.com/alex-boni/ParkIT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositorio en GitHub
                  </a>
                </li>
                <li>
                  <p className="text-red-500 font-bold">
                    Demo del proyecto (no disponible, solo local ejecutando comando mvn
                    spring-boot:run)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
