import React from 'react'
import java from '../assets/java.jpg'
import c from '../assets/c.jpg'
import sql from '../assets/sql.jpg'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.jpg'
import springBoot from '../assets/spring-boot.png'
import tailwind from '../assets/tailwind.png'
import jpa from '../assets/jpa.jpg'
import aws from '../assets/aws.jpg'
import devOps from '../assets/devOps.png'
import typescript from '../assets/typescript.png'
import nestjs from '../assets/nest.png'
import vuejs from '../assets/vuejs.png'


function Stack() {
  return (
    <section id='stack' className=' px-0 py-8 lg:py-0 lg:px-0 items-center '>
        <h3 className='text-3xl pb-6 lg:pb-0 lg:text-2xl font-bold text-center'>Stack</h3>
        <div className='flex flex-wrap gap-1 justify-center'>
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={vuejs} alt="Vue.js" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={react} alt="React" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={tailwind} alt="Tailwind CSS" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={springBoot} alt="Spring Boot" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={nestjs} alt="NestJS" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={node} alt="Node.js" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={java} alt="Java" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={typescript} alt="TypeScript" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={javascript} alt="JavaScript" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={c} alt="C" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={jpa} alt="JPA" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={sql} alt="SQL" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={aws} alt="AWS" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-80% mask-y-from-70%' src={devOps} alt="DevOps" />
        </div>
    </section>
  )
}

export default Stack