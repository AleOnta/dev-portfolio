import React from "react";
import { motion } from "framer-motion";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MyContactsComponent() {
  return (
    <motion.div className="lg:w-2/5 lg:flex lg:flex-col items-center ">
      <motion.h5 className="font-titles text-white text-2xl uppercase font-semibold">
        My contacts
      </motion.h5>
      <motion.ul className="list-none lg:h-full lg:flex lg:flex-col lg:items-start lg:justify-center">
        <motion.li className="my-10">
          <Link
            to="https://www.linkedin.com/in/alessandro-ontani-76848a191/"
            target="_blank"
            className="flex items-end justify-start"
          >
            <BsLinkedin className="text-4xl text-slate-400" />
            <h6 className="ms-4 mb-0 text-slate-300 font-medium text-base ">
              Alessandro Ontani
            </h6>
          </Link>
        </motion.li>
        <motion.li className="my-10">
          <Link to="" target="_blank" className="flex items-end justify-start">
            <BsGithub className="text-4xl text-slate-400" />
            <h6 className="ms-4 mb-0 text-slate-300 font-medium text-base ">
              Ale Onta
            </h6>
          </Link>
        </motion.li>
        <motion.li className="my-10">
          <Link to="" target="_blank" className="flex items-end justify-start">
            <BsDiscord className="text-4xl text-slate-400" />
            <h6 className="ms-4 mb-0 text-slate-300 font-medium text-base ">
              aleonta
            </h6>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
