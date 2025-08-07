import darkWelcome from '../assets/welcome.png'
function Navbar() {
    return(
        <>
        <nav className='flex flex-row gap-x-4 items-center justify-center mt-4'>
            <a href="/#start"><img src={darkWelcome} alt="Welcome" width={150}/></a>
            <a href="/#about">Sobre mí</a>
            <a href="/#projects">Proyectos</a>
            <a  href="/#education">Educación</a>
            <a href="/#certificates">Certificaciones</a>
            <a href="/#experience">Experiencia</a>
        </nav>
        </>
    );
}
export default Navbar;