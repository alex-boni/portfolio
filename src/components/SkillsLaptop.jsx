import { useEffect, useRef, useState } from "react";
// Ajusta estas rutas a tus imágenes reales:
import imgClosed from "../assets/laptop-cerrada.jpg";
import imgHalf from "../assets/laptop-semiabierta.jpg";
import imgOpen from "../assets/laptop-abierta.jpg";

const DEFAULT_SKILLS = [
  "React", "Vite", "Tailwind", "JavaScript",
  "TypeScript", "Node.js", "Express",
  "PostgreSQL", "MongoDB", "Git", "Jest",
];

export default function SkillsLaptop({
  skills = DEFAULT_SKILLS,
  autoAdvanceDelay = 450, // ms: de semi → open
}) {
  const [stage, setStage] = useState("closed"); // "closed" | "semi" | "open"
  const timerRef = useRef(null);

  const startSequence = () => {
    // closed → semi (click)
    if (stage === "closed") {
      setStage("semi");
      // semi → open (auto)
      timerRef.current = setTimeout(() => setStage("open"), autoAdvanceDelay);
      return;
    }
    // open → closed (click para resetear)
    if (stage === "open") {
      setStage("closed");
      return;
    }
    // si está en semi y hacemos click, forzamos open
    if (stage === "semi") {
      clearTimeout(timerRef.current);
      setStage("open");
    }
  };

  // Limpieza del timeout
  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  // Handler accesible por teclado
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      startSequence();
    }
  };

  // Helpers para clases según stage
  const isClosed = stage === "closed";
  const isSemi = stage === "semi";
  const isOpen = stage === "open";

  return (
    <section id="skills" className={`py-0  ${isClosed ? "-mt-0" : "-mt-0"}`}>
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className={`${isOpen ? "text-3xl font-bold " : "hidden absolute"}`}>Skills</h2>
        {/* Contenedor interactivo */}
        <div
          role="button"
          tabIndex={0}
          aria-pressed={isOpen}
          onClick={startSequence}
          onKeyDown={onKey}
          className="
            absolute mx-auto w-full max-w-xl
            
            overflow-hidden select-none
          "
        >
          {/* Lienzo que mantiene proporción (ajusta al aspecto real de tu imagen) */}
          <div className={`${isClosed ? "relative h-9 lg:h-12 w-full  mask-radial-[40%_95%] mask-radial-from-60% mask-t-from-75% " : "relative aspect-[4/3] w-full"}`}>
            {/* Imagen: cerrado */}
            <img
              src={imgClosed}
              alt="Portátil cerrado"
              className={`
                absolute inset-0 h-full w-full object-cover object-[50%_70%] lg:object-[50%_69%]
                transition duration-500 ease-out
                ${isClosed ? "opacity-100 scale-120 mask-radial-from-amber-50" : "opacity-0 scale-160"}
              `}
              draggable="false"
            />

            {/* Imagen: semiabierto */}
            <img
              src={imgHalf}
              alt="Portátil semiabierto"
              className={`
                absolute inset-0 h-full w-full object-cover object-[50%_30%]
                transition duration-500 ease-out
                ${isSemi ? "opacity-100 scale-100" : "opacity-0 scale-140"}
              `}
              draggable="false"
            />

            {/* Imagen: abierto */}
            <img
              src={imgOpen}
              alt="Portátil abierto"
              className={`
                absolute inset-0 h-full w-full object-cover
                transition duration-500 ease-out
                ${isOpen ? "opacity-100 scale-130" : "opacity-0 scale-115"}
              `}
              draggable="false"
            />

            {/* Overlay de skills - visible solo en estado abierto */}
            <div
              className={`
                pointer-events-none absolute left-1/2 -translate-x-1/2
                top-[10%] w-[70%] h-[64%]  /* <-- ajusta estos valores a tu imagen */
                transition duration-500 ease-out
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
              `}
            >
              {/* Panel con sutil glass para simular pantalla con reflejo */}
              <div className="pointer-events-auto h-full w-full rounded-lg bg-black/30 backdrop-blur-sm ring-1 ring-white/10 shadow-inner p-4 overflow-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {skills.map((s, i) => (
                    <span
                      key={i}
                      className="
                        inline-flex items-center justify-center
                        rounded-full px-3 py-1
                        text-xs font-medium tracking-wide
                        text-cyan-200 bg-cyan-400/10 ring-1 ring-cyan-400/20
                        hover:bg-cyan-400/15 transition
                        whitespace-nowrap
                      "
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Pie de pantalla opcional */}
                <div className="mt-3 flex items-center justify-between text-[10px] text-white/50">
                  <span>Click para cerrar</span>
                  <span>Shift + Click: pausa (opcional)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
