import { useState } from "react";
import { Link } from "react-router-dom";
import darkWelcome from "../assets/ab-sf.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // fixed: posición fija en la pantalla
    // top-0: alinea al elemento en la parte superior
    // right-0 left-0: alinea al elemento en los lados derecho e izquierdo
    // mx-auto: centra horizontalmente el elemento
    // md:mt-4: margen superior de 1rem en pantallas medianas+
    // md:w-fit: el ancho se ajusta al contenido en pantallas medianas+
    // md:rounded-full: bordes completamente redondeados en pantallas medianas+
    // bg-gray-800/70: fondo gris oscuro con 70% de opacidad
    // backdrop-blur: desenfoque del fondo detrás del elemento
    // px-4: padding horizontal de 1rem
    // py-1: padding vertical de 0.25rem
    <menu className="fixed z-50 top-0 right-0 left-0 mx-auto md:mt-4 md:w-fit md:rounded-full  bg-gray-800/70 backdrop-blur px-4 py-1">
      {/* flex: usa flexbox para disposición horizontal
          items-center: centra verticalmente los elementos
          gap-6: separación horizontal entre hijos */}
      <nav className="flex items-center gap-6">
        {/* flex: disposición horizontal para logo e icono
            items-center: alinea verticalmente
            gap-2: separación entre logo y texto */}
        <Link to="/?s=about" className="flex items-center gap-2">
          {/* h-8: altura de 2rem para la imagen
              w-auto: ancho automático manteniendo proporción */}
          <img src={darkWelcome} alt="Welcome" className="h-8 w-auto object-cover" />
          {/* sr-only: clase de accesibilidad que oculta visualmente pero lo deja para lectores de pantalla */}
          <span className="sr-only">Inicio</span>
        </Link>

        {/* hidden: oculta el menú por defecto
            items-center: centra verticalmente los elementos
            gap-6: separación horizontal
            md:flex: muestra el menú como flex a partir del breakpoint md */}
        <ul className="hidden items-center gap-6 md:flex">
          <li><Link to="/?s=about">Sobre mí</Link></li>
          <li><Link to="/?s=projects">Proyectos</Link></li>
          <li><Link to="/?s=education">Educación</Link></li>
          <li><Link to="/?s=experience">Experiencia</Link></li>
          <li><Link to="/?s=certificates">Certificaciones</Link></li>
          <li><Link to="/?s=skills">Skills</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>

        {/* ml-auto: empuja el botón hacia el extremo derecho
            inline-flex: disposición en línea con flexbox
            items-center y justify-center: centra contenido del botón
            rounded-md: bordes redondeados medianos
            p-2: padding de 0.5rem
            md:hidden: oculta el botón en pantallas medianas+
            text-white: icono blanco */}
        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Abrir menú</span>
          {/* h-6 w-6: tamaño de 1.5rem para el icono */}
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {open ? (
              // Icono "X" de cerrar menú
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              // Icono hamburguesa para abrir menú
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* md:hidden: visible solo en pantallas pequeñas
          transition-[max-height,opacity]: animar altura máxima y opacidad
          duration-300: duración 0.3s
          ease-out: curva de animación suave
          overflow-hidden: oculta contenido desbordado
          max-h-96: altura máxima 24rem cuando está abierto
          opacity-100: completamente visible cuando abierto
          mt-2: margen superior de 0.5rem
          max-h-0: altura 0 cuando cerrado
          opacity-0: invisible cuando cerrado */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden ${open ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
        aria-hidden={!open}
      >
        {/* space-y-1: separación vertical entre elementos
            rounded-lg: esquinas redondeadas grandes
            bg-gray-800/70: fondo gris oscuro con opacidad
            px-4: padding horizontal 1rem
            py-3: padding vertical 0.75rem */}
        {open && (
        <ul className="space-y-1 rounded-lg bg-gray-800/70 px-4 py-1">
          {/* block: display en bloque
              rounded: esquinas redondeadas
              px-3 py-2: padding
              hover:bg-black/5: fondo sutil al pasar el ratón */}
          <li><Link to="/?s=about" className="block rounded px-3 py-2 hover:bg-black/5 " onClick={() => setOpen(false)}>Sobre mí</Link></li>
          <li><Link to="/?s=projects" className="block rounded px-3 py-2 hover:bg-black/5 " onClick={() => setOpen(false)}>Proyectos</Link></li>
          <li><Link to="/?s=education" className="block rounded px-3 py-2 hover:bg-black/5 " onClick={() => setOpen(false)}>Educación</Link></li>
          <li><Link to="/?s=experience" className="block rounded px-3 py-2 hover:bg-black/5 " onClick={() => setOpen(false)}>Experiencia</Link></li>
          <li><Link to="/?s=certificates" className="block rounded px-3 py-2 hover:bg-black/5 " onClick={() => setOpen(false)}>Certificaciones</Link></li>
          <li><Link to="/?s=skills" className="block rounded px-3 py-2 hover:bg-black/5 " onClick={() => setOpen(false)}>Skills</Link></li>
          <li><Link to="/contact" className="block rounded px-3 py-2 hover:bg-black/5 " onClick={() => setOpen(false)}>🫱​Contáctame🫲​</Link></li>
        </ul>
      )}
      </div>
    </menu>
  );
}
