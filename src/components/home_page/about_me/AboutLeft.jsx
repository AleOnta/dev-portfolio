import { Link } from "react-router-dom";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

export const AboutLeft = () => {
  return (
    <div className="about-me-left col-span-4 md:col-span-5 2xl:col-span-4 p-6 pb-0 md:p-0 md:ps-8 flex flex-col justify-between items-center">
      <div>
        <h1 className="font-titles font-bold text-4xl sm:text-5xl md:text-4xl text-white mb-2 tracking-tight ps-3">
          Alessandro Ontani
        </h1>
        <h5 className="font-titles font-semibold text-sm sm:text-lg md:text-base text-gray-300 mb-2 ps-3">
          Junior Full-Stack Web Developer
        </h5>
        <p className="text-slate-300 text-sm bg-smooth-gray p-3 rounded-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
          accusantium architecto exercitationem asperiores ut nesciunt
          dignissimos quam ab corrupti incidunt eum quo non earum corporis
          consequuntur voluptate eveniet, nostrum facere.
        </p>
      </div>
      <div className="hidden md:flex justify-around items-center w-full mt-14">
        <Link to="/">
          <BsDiscord className="text-3xl social-icons text-slate-400 transition-colors hover:text-white" />
        </Link>
        <Link to="/">
          <BsGithub className="text-3xl social-icons text-slate-400 transition-colors hover:text-white" />
        </Link>
        <Link to="/">
          <BsLinkedin className="text-3xl social-icons text-slate-400 transition-colors hover:text-white" />
        </Link>
      </div>
    </div>
  );
};
