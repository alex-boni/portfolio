import { useEffect, useState, useCallback } from "react";

export default function Carousel({
  images = [], // Array de URLs de imágenes
  alt = "slide", // Texto alternativo base
  autoPlay = true, // Si avanza automáticamente
  interval = 4000, // Tiempo entre slides
  className = "", // Clases adicionales para el contenedor
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  // Función para ir a un slide específico
  const goTo = useCallback(
    (i) => {
      if (!total) return;
      setIndex((i + total) % total); // Evita índices negativos o superiores al total
    },
    [total]
  );

  const prev = () => goTo(index - 1); // Slide anterior
  const next = () => goTo(index + 1); // Slide siguiente

  // Autoplay
  useEffect(() => {
    if (!autoPlay || total <= 1) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, total, next]);

  if (!total) return null;

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Pista de slides */}

      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="shrink-0 w-full lg:aspect-square aspect-video relative  ">
            <img
              src={src}
              alt={`${alt} ${i + 1}`}
              className="absolute block w-full h-full object-cover scale-100 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Botón Anterior */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              prev();
            }}
            aria-label="Anterior"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4  cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 group-hover:bg-gray-900/90 ">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12.5 15 7.5 10l5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* Botón Siguiente */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            aria-label="Siguiente"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 group-hover:bg-gray-900/90 ">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none">
                <path
                  d="m7.5 15 5-5-5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* Indicadores */}

          <div className="absolute z-30 flex -translate-x-1/2 bottom-2 left-1/2 space-x-3 rtl:space-x-reverse">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(i);
                }}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-3 w-3 rounded-full transition
                  ${
                    i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
