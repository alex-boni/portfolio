import React from 'react'
import hardSkills from '../data/hard-skills.json';

function HardSkills() {
  return (
    <section id="hard-skills" className="py-4 px-4 lg:px-24 md:px-16">
        <h2 className="pb-8 text-3xl font-bold">Hard-Skills</h2>
        <ul className='mt-3 space-y-2'>
            {hardSkills.map((skill, index) =>(
                <li className='mt-4 text-sm flex text-start gap-2' key={index}>
                    <span className='mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80' ></span>
                    <span><strong>{skill.skill} - </strong> <em>{skill.impacto} {skill.accion}</em></span>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default HardSkills