import SocialNetworks from "./SocialNetworks";

function Footer() {
  return (
    <>
      <footer className="bg-gray-900 p-8 ">
        <p className=" text-white/70">
          &copy; 2025 Alex Guillermo Bonilla Taco
        </p>
        <p className="mb-6 text-white/70">
          Este portfolio está desarrollado con React + Tailwind CSS.{" "}
          <a href="https://github.com/alex-boni/portfolio">Ver en GitHub</a>
        </p>
        <SocialNetworks />
      </footer>
    </>
  );
}

export default Footer;
