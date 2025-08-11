import imgProject from '../assets/proyecto.jpg'

function Projects() {
    return(
        <section id="projects" className=' py-14'>
            <h2 className='pb-8 text-3xl font-bold'>Proyectos</h2>
            <div className='grid lg:grid-cols-2 gap-12 place-items-center'>
                <a href="#" className='flex flex-col w-110 md:w-150 lg:w-150 border rounded-lg shadow-sm md:flex-row md:max-w-xl border-gray-800 hover:bg-gray-700 '>
                                <img className='object-cover w-full rounded-t-lg h-auto md:w-76 md:rounded-none md:rounded-s-lg' src={imgProject} alt="nombreProyecto" />
                    <div className='flex flex-col justify-between p-4 leading-normal'>
                        <h3 className='mb-2 text-2xl font-bold tracking-tight text-white'>Nombre Proyecto</h3>
                        <p className='mb-3 font-normal text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi qui impedit rem ex facilis illo debitis facere vel, vero dolor dolorum nulla dolorem? Corrupti possimus suscipit nobis beatae obcaecati!</p>
                    </div>
                </a>
                <a href="#" className='flex flex-col w-110 md:w-150 lg:w-150 border rounded-lg shadow-sm md:flex-row md:max-w-xl border-gray-800 hover:bg-gray-700 '>
                                <img className='object-cover w-full rounded-t-lg h-auto md:w-76 md:rounded-none md:rounded-s-lg' src={imgProject} alt="nombreProyecto" />
                    <div className='flex flex-col justify-between p-4 leading-normal'>
                        <h3 className='mb-2 text-2xl font-bold tracking-tight text-white'>Nombre Proyecto</h3>
                        <p className='mb-3 font-normal text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi qui impedit rem ex facilis illo debitis facere vel, vero dolor dolorum nulla dolorem? Corrupti possimus suscipit nobis beatae obcaecati!</p>
                    </div>
                </a>
                <a href="#" className='flex flex-col w-110 md:w-150 lg:w-150 border rounded-lg shadow-sm md:flex-row md:max-w-xl border-gray-800 hover:bg-gray-700 '>
                                <img className='object-cover w-full rounded-t-lg h-auto md:w-76 md:rounded-none md:rounded-s-lg' src={imgProject} alt="nombreProyecto" />
                    <div className='flex flex-col justify-between p-4 leading-normal'>
                        <h3 className='mb-2 text-2xl font-bold tracking-tight text-white'>Nombre Proyecto</h3>
                        <p className='mb-3 font-normal text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi qui impedit rem ex facilis illo debitis facere vel, vero dolor dolorum nulla dolorem? Corrupti possimus suscipit nobis beatae obcaecati!</p>
                    </div>
                </a>
               
            </div>
        </section>
    )
}
export default Projects;