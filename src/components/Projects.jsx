import imgProject from "../assets/proyecto.jpg";
import Carousel from "../components/Carousel";

function Projects() {
  // Ejemplo: cada proyecto con su array de imágenes
  const proyecto1Imgs = [imgProject, imgProject, imgProject]; // reemplaza por tus rutas reales

  return (
    <section id="projects" className="py-14">
      <h2 className="pb-8 text-3xl font-bold">Proyectos</h2>

      <div className="grid lg:grid-cols-2 gap-12 place-items-center">
        {/* Tarjeta con carrusel */}
        <a
          href="https://github.com/alex-boni/portfolio"
          className="flex flex-col w-100 md:w-150 lg:w-150 border rounded-lg shadow-sm md:flex-row md:max-w-xl border-gray-800 hover:bg-gray-700 transition hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <Carousel
            images={proyecto1Imgs}
            alt="Proyecto 1"
            className="w-full md:w-96 h-auto md:rounded-none md:rounded-s-lg"
          />

          <div className="flex flex-col p-4 leading-normal md:w-80 place-items-center ">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Nombre Proyecto
            </h3>
            <p className="mb-3 font-normal text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quasi qui impedit rem ex facilis illo debitis facere
              vel, vero dolor dolorum nulla dolorem? Corrupti possimus suscipit
              nobis beatae obcaecati!
            </p>
          </div>
        </a>
        <a
          href="https://github.com/alex-boni/portfolio"
          className="flex flex-col w-100 md:w-150 lg:w-150 border rounded-lg shadow-sm md:flex-row md:max-w-xl border-gray-800 hover:bg-gray-700 transition hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <Carousel
            images={proyecto1Imgs}
            alt="Proyecto 1"
            className="w-full md:w-96 h-auto md:rounded-none md:rounded-s-lg"
          />

          <div className="flex flex-col p-4 leading-normal md:w-80 place-items-center ">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Nombre Proyecto
            </h3>
            <p className="mb-3 font-normal text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quasi qui impedit rem ex facilis illo debitis facere
              vel, vero dolor dolorum nulla dolorem? Corrupti possimus suscipit
              nobis beatae obcaecati!
            </p>
          </div>
        </a>
        <a
          href="https://github.com/alex-boni/portfolio"
          className="flex flex-col w-100 md:w-150 lg:w-150 border rounded-lg shadow-sm md:flex-row md:max-w-xl border-gray-800 hover:bg-gray-700 transition hover:-translate-y-0.5 hover:shadow-2xl"
        >
          <Carousel
            images={proyecto1Imgs}
            alt="Proyecto 1"
            className="w-full md:w-96 h-auto md:rounded-none md:rounded-s-lg"
          />

          <div className="flex flex-col p-4 leading-normal md:w-80 place-items-center ">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Nombre Proyecto
            </h3>
            <p className="mb-3 font-normal text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates quasi qui impedit rem ex facilis illo debitis facere
              vel, vero dolor dolorum nulla dolorem? Corrupti possimus suscipit
              nobis beatae obcaecati!
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Projects;
