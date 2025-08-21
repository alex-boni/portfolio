import React from "react";
import HardSkills from "./HardSkills";
import SoftSkills from "./SoftSkills";

function Skills() {
  return (
    <section id="skills" className="py-14 px-4 lg:px-24 md:px-16">
      <h2 className="pb-8 hidden md:block text-3xl font-bold">Mis Habilidades</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-xl bg-white/5 ring-1 ring-white/10 shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl hover:ring-white/20">
        <SoftSkills />
        <HardSkills />
      </div>
    </section>
  );
}

export default Skills;
