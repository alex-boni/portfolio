import React from 'react'
import softSkills from '../data/soft-skills.json';

function SoftSkills() {
  return (
    <section id="soft-skills" className="py-4 px-4 lg:px-24 md:px-16 border-b-1 lg:border-b-0 lg:border-r-1 border-gray-700">
        <h2 className="pb-8 text-3xl font-bold">Soft-Skills</h2>
        <ul className='mt-3 space-y-2'>
            {softSkills.map((skill, index) =>(
                <li className='mt-4 text-sm flex text-start gap-2' key={index}>
                    <span className='mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/80' ></span>
                    <span><strong>{skill.skill} - </strong> <em>{skill.impacto} {skill.accion}</em></span>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default SoftSkills