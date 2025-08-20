import React from 'react';
import certificates from '../data/certificates.json';

function renderImage(cert) {
    return (
        <img src={cert.image} alt={cert.title} className="mt-2 w-full h-auto rounded-lg" />
    );
}

function renderVerCertificado(cert) {
    if (!cert.url) return null; 
    if (cert.url === 'none') return null; 
    return (
        <a href={cert.url} className="text-blue-500 hover:underline">Ver certificado</a>
    );
}

function Certificates() {
    return(
    <section id="certificates" className="py-14 px-4 lg:px-24 md:px-16">
        <h2 className="pb-8 text-3xl font-bold">Certificados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map(cert => (
                <div key={cert.id} className=" p-4 rounded-xl bg-white/5 ring-1 ring-white/10 shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl hover:ring-white/20">
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                    <p className="mt-2 text-justify">{cert.description}</p>
                    {/* Render opinion */}
                    <p className="mt-2 text-justify text-sm text-gray-500">{cert.opinion}</p>
                    {/* Render puntos */}
                    <ul className="mt-2 text-start pl-4 text-sm text-gray-500">
                        {cert.puntos.map((punto, index) => (
                            <li key={index}>{punto}</li>
                        ))}
                    </ul>

                    {renderImage(cert)}
                    <p className="mt-2 text-sm text-gray-500">Fecha: {cert.date}</p>
                    {renderVerCertificado(cert)}
                </div>
            ))}
        </div>
    </section>
    )
}
export default Certificates;