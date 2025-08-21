import React from "react";
import certificates from "../data/certificates.json";
import { useState } from "react";

function renderImage(cert) {
  return (
    <img
      src={cert.image}
      alt={cert.title}
      className="mt-2 w-full h-auto rounded-lg"
    />
  );
}

function renderVerCertificado(cert) {
  if (!cert.url) return null;
  if (cert.url === "none") return null;
  return (
    <a href={cert.url} className="text-blue-500 hover:underline">
      Ver certificado
    </a>
  );
}

function Certificates() {
    const [expanded, setExpanded] = useState({});
    const LIMIT = 120;
    const toggleExpand = (id) => {
      setExpanded((prev) => ({...prev, [id]: !prev[id] }));
    };

  return (
    <section id="certificates" className="py-14 px-4 lg:px-24 md:px-16">
      <h2 className="pb-8 text-3xl font-bold">Certificados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert) => {
          const isExpanded = !!expanded[cert.id];
          const hasLongDesc = (cert.description || "").length > LIMIT;
          const hasOpinion = !!cert.opinion && cert.opinion.trim().length > 0;
          const hasPuntos =
            Array.isArray(cert.puntos) && cert.puntos.length > 0;

          // Mostrar botón si hay contenido adicional en expansión
          const hasExtra = hasLongDesc || hasOpinion || hasPuntos;

        return (
          <div
            key={cert.id}
            className="h-fit p-4 rounded-xl bg-white/5 ring-1 ring-white/10 shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl hover:ring-white/20"
          >
            <h3 className="text-xl font-semibold text-cyan-500">
              {cert.title}
            </h3>
            <p className=" text-gray-400">{cert.issuer}</p>
            <p className="mt-2 text-justify">
                {isExpanded || !hasLongDesc
                  ? cert.description
                  : cert.description.slice(0, LIMIT) + "…"}
              </p>
            <ul className="mt-2 text-start justify-center flex flex-wrap gap-1 ">
              {cert.tags.map((aptitud, index) => (
                <li
                  className=" rounded-full bg-cyan-400/10 px-2 py-1 text-xs font-medium text-cyan-300 ring-1 ring-cyan-400/20"
                  key={index}
                >
                  {aptitud}
                </li>
              ))}
            </ul>
            {/* Render opinion */}
            {isExpanded && hasOpinion && (
                <p className="mt-2 text-justify">
                  {cert.opinion}
                </p>
              )}
            {/* Render puntos */}
            {isExpanded && hasPuntos && (
            <p className="mt-2 text-start">Conocimientos adquiridos:</p>
            )}
            {isExpanded && hasPuntos && (
            <ul className="mt-1 text-start pl-4  text-gray-200">
              {cert.puntos.map((punto, index) => (
                <li className="mt-1" key={index}>
                  {punto}
                </li>
              ))}
            </ul>
            )}
            {hasExtra && (
                <button
                  onClick={() => toggleExpand(cert.id)}
                  className="py-3 underline text-gray-400 hover:text-white text-bold text-start w-full"
                >
                  {isExpanded ? "Ver menos" : "Ver más"}
                </button>
              )}
            {renderImage(cert)}
            <p className="mt-2  text-gray-500">Fecha: {cert.date}</p>
            {renderVerCertificado(cert)}
          </div>
        );
      })}
      </div>
    </section>
  );
}
export default Certificates;
