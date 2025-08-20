import React from "react";
import Timeline from "../components/Timeline";
import educationData from "../data/education.json";

const MONTHS = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
const formatSpan = (start, end) => {
  const fmt = (v) => {
    if (!v || (typeof v === "string" && v.toLowerCase() === "present")) return "Presente";
    const [y, m = "01"] = v.split("-");
    return `${MONTHS[+m - 1]} ${y}`;
  };
  return `${fmt(start)} – ${fmt(end)}`;
};

export default function Education() {
  // Normalización específica de Educación
  const items = educationData.map((d, i) => ({
    key: d.id ?? `edu-${i}`,
    nodeLogo: d.logo ?? null,
    metaTop: formatSpan(d.start, d.end),
    title: d.degree,
    subtitle: d.institution,
    description: null,
    bullets: [],
  }));

  return (
    <section id="education" className="pt-12 py-14 px-4 lg:px-24 md:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Educación</h2>
        <div className="mt-8">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
}
