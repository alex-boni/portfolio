import React from "react";

/* Punto de la línea */
function NodeDot() {
  return (
    <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-white/10 ring-2 ring-cyan-400/60 shadow-[0_0_0_4px_rgba(0,0,0,0.35)] overflow-hidden">
        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
    </div>
  );
}

/* Tarjeta */
function ItemCard({ metaTop, title, subtitle, description, bullets }) {
  return (
    <article className="group relative w-full rounded-xl bg-white/5 backdrop-blur ring-1 ring-white/10 shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl hover:ring-white/20">
      <div className="relative p-4 md:p-5">
        {metaTop && (
          <div className="mb-2 absolute items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 ring-1 ring-cyan-400/20">
            {metaTop}
          </div>
        )}
        <h4 className="mt-8 text-lg md:text-xl font-semibold text-white">{title}</h4>
        {subtitle && <p className="mt-0.5 text-sm text-white/70">{subtitle}</p>}
        {description && <p className="mt-3 text-sm text-white/80">{description}</p>}
        {Array.isArray(bullets) && bullets.length > 0 && (
          <ul className="mt-3 space-y-2">
            {bullets.map((b, i) => (
              <li key={i} className="text-sm text-white/75 flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

/* Timeline “tonto”: recibe items ya normalizados */
export default function Timeline({ items = [] }) {
  return (
    <section className="relative">
      <div className="absolute left-5 top-8 h-full w-px bg-gradient-to-b from-cyan-400/80 via-blue-500/60 to-transparent" />
      <div className="space-y-8">
        {items.map((it) => (
          <div key={it.key} className="grid grid-cols-[min-content,1fr] items-start gap-6" style={{ gridTemplateColumns: '40px 1fr' }}>
            <div className="col-[1] flex justify-center mt-4">
              <NodeDot />
            </div>
            <div className="col-[2] ">
              <ItemCard
                metaTop={it.metaTop}
                title={it.title}
                subtitle={it.subtitle}
                description={it.description}
                bullets={it.bullets}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
