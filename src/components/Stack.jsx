import React from 'react'
import java from '../assets/java.jpg'
import c from '../assets/c.jpg'
import sql from '../assets/sql.jpg'
import javascript from '../assets/javascript.jpg'
import react from '../assets/react.jpg'
import node from '../assets/node.jpg'
import springBoot from '../assets/spring-boot.jpg'
import thymeleaf from '../assets/thymeleaf.jpg'
import tailwind from '../assets/tailwind.jpg'
import jpa from '../assets/jpa.jpg'
import vite from '../assets/vite.jpg'
import html5 from '../assets/html.jpg'
import css from '../assets/css.jpg'
import bootstrap from '../assets/bootstrap.jpg'
import express from '../assets/express.jpg'
import aws from '../assets/aws.jpg'
import devOps from '../assets/devOps.jpg'


function Stack() {
  return (
    <section className=' px-4 py-8 lg:py-0 lg:px-0 items-center '>
        <h3 className='text-2xl font-bold text-center'>Stack</h3>
        <div className='flex flex-wrap gap-1 justify-center'>
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={javascript} alt="JavaScript" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={node} alt="Node.js" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={express} alt="Express.js" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={springBoot} alt="Spring Boot" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={thymeleaf} alt="Thymeleaf" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={html5} alt="HTML5" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={css} alt="CSS" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={bootstrap} alt="Bootstrap" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={c} alt="C" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={java} alt="Java" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={jpa} alt="JPA" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={sql} alt="SQL" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={react} alt="React" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={tailwind} alt="Tailwind CSS" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={vite} alt="Vite" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={aws} alt="AWS" />
            <img className='object-cover w-20 rounded-2xl mask-x-from-70% mask-y-from-70%' src={devOps} alt="DevOps" />
        </div>
    </section>
  )
}

export default Stack