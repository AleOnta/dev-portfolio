import { Link } from "react-router-dom";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

export const AboutLeft = () => {
  return (
    <div className="about-me-left col-span-4 md:col-span-5 2xl:col-span-4 p-6 pb-0 md:p-0 md:ps-8 flex flex-col justify-between items-center">
      <div>
        <h1 className="font-titles font-bold text-4xl xs:text-5xl md:text-4xl text-white mb-2 tracking-tight ps-3 drop-shadow-xl">
          Alessandro Ontani
        </h1>
        <h5 className="font-titles font-semibold text-sm xs:text-lg md:text-base text-gray-300 mb-5 md:mb-2 ps-3 drop-shadow-xl">
          Junior Full-Stack Web Developer
        </h5>
        <p className="text-snow-white text-sm xs:text-base md:text-sm xl:text-base bg-gun-metal bg-opacity-50 px-4 py-3 rounded-lg shadow-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          accusantium architecto exercitationem asperiores ut nesciunt
          dignissimos quam ab corrupti incidunt eum quo non earum corporis
          consequuntur voluptate eveniet, nostrum facere.
        </p>
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
