// src/pages/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  // Para accesibilidad y feedback en cliente
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    role: "", // reclutador, dev, HR, otro
    company: "",
    _gotcha: "", // honeypot para bots y spam
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  // Crear y usar Formspree: reemplaza con TU endpoint (Settings → Forms → Endpoint)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx"; // <— mi endpoint para Formspree, es un template del formato

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData._gotcha) return; // bot atrapado

    setStatus("sending");
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          role: "",
          company: "",
          _gotcha: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const copiarAlPortapapeles = () => {
    try{
      navigator.clipboard.writeText("alexboni.dev@gmail.com");
      const mensajeExito = document.createElement("div");
      mensajeExito.innerText = "🔗​ Correo copiado al portapapeles";
      mensajeExito.className = "fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600/80 rounded-full px-3 py-1 text-xs font-medium text-white ring-1 ring-green-800/20";
      document.body.appendChild(mensajeExito);
      setTimeout(() => {
        mensajeExito.remove();
      }, 2000);
    } catch (error) {
      console.error("Error al copiar al portapapeles:", error);
    }
  };

  return (
    <section className="py-16 px-4 md:px-16 lg:px-24">
      <div className="mx-auto max-w-5xl">
        {/* Encabezado */}
        <header className="text-center">
          <h1 className="text-4xl font-bold">Contactamos? 👋</h1>
          <p className="mt-2 text-white/70 max-w-2xl mx-auto">
            ¿Eres <span className="text-cyan-500">reclutador</span>,{" "}
            <span className="text-cyan-500">dev</span> o tienes una idea
            interesante? Me encantará leer tu mensaje.
          </p>
        </header>

        {/* Formulario de contacto */}
        <div className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 shadow-2xl mt-4 p-6 md:p-8">
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-start"
          >
            {/* Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm mb-2 pl-1 text-white/80"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={onChange}
                placeholder="Tu nombre"
                className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none px-4 py-3"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 pl-1 text-white/80"
              >
                Correo
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={onChange}
                placeholder="tu@email.com"
                className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none px-4 py-3"
              />
            </div>

            {/* Rol */}
            <div>
              <label
                htmlFor="role"
                className="block text-sm mb-2 pl-1 text-white/80"
              >
                Soy…
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={onChange}
                className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none px-4 py-3"
              >
                <option value="">Selecciona una opción</option>
                <option value="recruiter">Reclutador/a</option>
                <option value="developer">Desarrollador/a</option>
                <option value="hr">HR / People</option>
                <option value="client">Cliente</option>
                <option value="other">Otro</option>
              </select>
            </div>

            {/* Empresa (opcional) */}
            <div>
              <label
                htmlFor="company"
                className="block text-sm mb-2 pl-1 text-white/80"
              >
                Empresa (opcional)
              </label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={onChange}
                placeholder="Nombre de la empresa"
                className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none px-4 py-3"
              />
            </div>

            {/* Asunto */}
            <div className="md:col-span-2">
              <label
                htmlFor="subject"
                className="block text-sm mb-2 pl-1 text-white/80"
              >
                Asunto
              </label>
              <input
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={onChange}
                placeholder="Motivo del contacto"
                className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none px-4 py-3"
              />
            </div>

            {/* Mensaje */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm mb-2 pl-1 text-white/80"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={onChange}
                placeholder="Cuéntame brevemente en qué puedo ayudarte…"
                className="w-full rounded-lg bg-white/5 ring-1 ring-white/10 focus:ring-2 focus:ring-cyan-400 outline-none px-4 py-3 resize-y"
              />
            </div>

            {/* Honeypot anti-spam (oculto a humanos) */}
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={onChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Botón y estado */}
            <div className="md:col-span-2 flex flex-col items-center justify-center gap-4">
              <button
                type="submit"
                disabled={status === "idle"}
                // disabled={status === "sending"} // Descomentar para habilitar el estado de envío
                className="inline-flex items-center justify-center rounded-full px-6 py-3 font-medium
                  bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-400 hover:to-blue-600
                  ring-1 ring-white/10 shadow-lg hover:shadow-2xl transition disabled:opacity-50"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>

              {status === "idle" && (
                <span className="text-sm text-white/70">
                  Proximamente disponible... Puedes contactarme mientras por{" "}
                  <a
                    className="text-cyan-300 hover:text-cyan-200"
                    href="https://www.linkedin.com/in/alex-boni/"
                  >
                    LinkedIn
                  </a>{" "}
                  o enviarme un <button onClick={copiarAlPortapapeles} className="text-green-400 hover:text-gray-100">email😊</button>
                </span>
                
              )}
              {status === "ok" && (
                <span className="text-sm text-emerald-500">
                  ¡Gracias! He recibido tu mensaje y te responderé muy pronto.
                </span>
              )}
              {status === "error" && (
                <span className="font-bold text-rose-500">
                  Ups, algo falló. Puedes contactarme también por{" "}
                  <a
                    className="text-cyan-300 hover:text-cyan-200"
                    href="https://www.linkedin.com/in/alex-boni/"
                  >
                    LinkedIn
                  </a>{" "}
                  o enviarme un <button onClick={copiarAlPortapapeles} className="text-cyan-300 hover:text-cyan-200">email😊</button>
                </span>
              )}
            </div>
          </form>
        </div>

        {/*Contactarme a traves de mailto */}
        <p className="mt-6 text-center text-white/50 text-sm">
          ¿O si prefieres escribirme desde tu gestor de correo?{" "}
          <a
            href="mailto:alexboni.dev@gmail.com?subject=Contacto%20desde%20el%20portfolio"
            className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
          >
            Envíame un email directo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
