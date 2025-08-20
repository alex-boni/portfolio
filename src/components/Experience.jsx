import React from "react";
import Timeline from "../components/Timeline";
import experienceData from "../data/experience.json";

const MONTHS = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
const formatSpan = (start, end) => {
  const fmt = (v) => {
    if (!v || (typeof v === "string" && v.toLowerCase() === "present")) return "Presente";
    const [y, m = "01"] = v.split("-");
    return `${MONTHS[+m - 1]} ${y}`;
  };
  return `${fmt(start)} – ${fmt(end)}`;
};

export default function Experience() {
  // Normalización específica de Experiencia
  const items = experienceData.map((d, i) => ({
    key: d.id ?? `exp-${i}`,
    nodeLogo: d.logo ?? null, // añade logo de empresa si lo tienes
    metaTop: formatSpan(d.start, d.end),
    title: `${d.role} · ${d.company}`,
    subtitle: d.location,
    description: d.summary,
    bullets: d.achievements || [],
  }));

  return (
    <section id="experience" className="px-4 py-14 lg:px-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Experiencia</h2>
        <div className="mt-8">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
}
