import {
  Html5Original,
  Css3Original,
  BootstrapOriginal,
  TailwindcssPlain,
  SassOriginal,
  JavascriptOriginal,
  TypescriptOriginal,
  ReactOriginal,
  JavaOriginal,
  SpringOriginal,
  PostgresqlOriginal,
  GitOriginal,
} from "devicons-react";
import { BsDiscord, BsLinkedin, BsGithub } from "react-icons/bs";
import HibernateOriginal from "../../../assets/svg/hibernate.svg";

import { Link } from "react-router-dom";

export const AboutMeComponent = () => {
  return (
    <>
      <div className="md:grid grid-cols-12 about-me-container">
        <div className="about-me-left col-span-4 md:col-span-5 2xl:col-span-4 p-6 pb-0 md:p-0 md:ps-8 flex flex-col justify-between items-center">
          <div>
            <h1 className="font-titles font-bold text-4xl sm:text-5xl md:text-4xl text-white mb-2 tracking-tight">
              Alessandro Ontani
            </h1>
            <h5 className="font-titles font-semibold text-sm sm:text-lg md:text-base text-gray-300 mb-5">
              Junior Full-Stack Web Developer
            </h5>
            <p className="text-slate-400 text-sm ">
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
        <span className="md:col-span-1 2xl:col-span-2 "></span>
        <div className="about-me-right col-span-6 flex flex-col items-center justify-between p-6 md:p-0 md:pe-8">
          <div>
            <h5 className="font-titles font-bold text-2xl text-white mt-3 mb-2 tracking-tight">
              Who am I?
            </h5>
            <p className="text-slate-400 text-sm xl:text-base">
              I am a 24 years old{" "}
              <span className="text-slate-300 font-semibold">
                Junior Full-Stack Web Developer
              </span>{" "}
              based in Milan=[Italy], that had always been passionate about{" "}
              <span className="text-slate-300 font-semibold">technology </span>
              and everything that revolves around it.
            </p>
            <p className="text-slate-400 text-sm xl:text-base">
              In June 2023 I have successfully completed the{" "}
              <span className="text-slate-300 font-semibold">
                Epicode's Junior Web Developer bootcamp
              </span>
              , that is an intensive 6-months training course composed of over
              1000 hours of{" "}
              <span className="text-slate-300 font-semibold">live-coding</span>{" "}
              lessons, daily{" "}
              <span className="text-slate-300 font-semibold">exercises</span>{" "}
              and team's{" "}
              <span className="text-slate-300 font-semibold">projects</span>.
            </p>
            <p className="text-slate-400 text-sm xl:text-base">
              As a Jr. Full-Stack I really enjoy both sides of{" "}
              <span className="text-slate-300 font-semibold">
                web development
              </span>{" "}
              and I intend to continue forming me by deepening the technologies
              I already know and studying new ones.
            </p>
          </div>
          <div className="w-full flex flex-col justify-around pt-6">
            <h5 className="font-titles font-bold text-2xl text-white mt-3 mb-2 tracking-tight">
              let myStack = {"{"}
            </h5>
            <ul className="ps-5">
              <li>
                <h6 className="font-titles text-md text-slate-300 pt-3 pb-3 md:pt-6">
                  Frontend:
                </h6>
                <div className="flex justify-start items-center flex-wrap gap-5 overflow-hidden">
                  <Html5Original size={40} />
                  <Css3Original size={40} />
                  <SassOriginal size={40} />
                  <BootstrapOriginal size={40} />
                  <TailwindcssPlain size={40} />
                  <JavascriptOriginal size={40} />
                  <TypescriptOriginal size={40} />
                  <ReactOriginal size={40} />
                  <h5 className="font-titles font-bold text-2xl text-white">
                    ,
                  </h5>
                </div>
              </li>
              <li>
                <h6 className="font-titles text-md text-slate-300 pt-8 pb-3 ">
                  Backend:
                </h6>
                <div className="flex justify-start items-center gap-5">
                  <JavaOriginal size={40} />
                  <img
                    src={HibernateOriginal}
                    alt="hibernate framework logo"
                    style={{ width: 40 }}
                  />
                  <SpringOriginal size={40} />
                  <PostgresqlOriginal size={40} />
                  <h5 className="font-titles font-bold text-2xl text-white">
                    ,
                  </h5>
                </div>
              </li>
              <li>
                <h6 className="font-titles text-md text-slate-300 pt-8 pb-3 ">
                  Other Skills:
                </h6>
                <div className="flex justify-start items-center gap-5">
                  <GitOriginal size={40} />
                </div>
              </li>
            </ul>
            <h5 className="font-titles font-bold text-2xl text-white mt-3 md:mt-6 tracking-tight">
              {"}"}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};
