import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import AboutLeftButtonComponent from "./AboutLeftButtonComponent";
import CircuitComponent from "./CircuitComponent";

export const AboutLeft = () => {
  return (
    <div className="about-me-left col-span-4 md:col-span-5 2xl:col-span-4 p-6 pb-0 md:p-0 md:ps-8 flex flex-col justify-between items-center">
      <div>
        <h1 className="font-titles font-bold text-4xl xs:text-5xl md:text-4xl text-white mb-2 tracking-tight  drop-shadow-xl">
          Alessandro Ontani
        </h1>
        <h5 className="font-titles font-semibold text-sm xs:text-lg md:text-base text-gray-300 mb-5 md:mb-2  drop-shadow-xl">
          Junior Full-Stack Web Developer
        </h5>
        <p className="text-snow-white text-sm xs:text-base md:text-sm xl:text-base bg-gun-metal bg-opacity-50 px-4 py-3 rounded-lg shadow-md">
          After years of studying and working in hospitality, due to a lack of
          motivation, I decided to dedicate myself entirely to my passion for
          development and making it my job. In my spare time, I really enjoy
          broadening my knowledge, playing tennis, and obviously traveling.
        </p>
        <motion.div className="btn-left-container flex items-center justify-between">
          <AboutLeftButtonComponent value={"Check Résumé"} goTo={""} />
          <AboutLeftButtonComponent value={"My Projects"} goTo={""} />
          <AboutLeftButtonComponent value={"Contact Me"} goTo={""} />
        </motion.div>
        <CircuitComponent />
      </div>
      <div className="hidden md:flex justify-around items-center w-full mt-14">
        <Link to="/">
          <BsDiscord className="text-3xl social-icons text-slate-400 transition-colors hover:text-snow-white" />
        </Link>
        <Link to="https://github.com/AleOnta">
          <BsGithub className="text-3xl social-icons text-slate-400 transition-colors hover:text-snow-white" />
        </Link>
        <Link to="https://www.linkedin.com/in/alessandro-ontani-76848a191/">
          <BsLinkedin className="text-3xl social-icons text-slate-400 transition-colors hover:text-snow-white" />
        </Link>
      </div>
    </div>
  );
};
