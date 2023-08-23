import React from "react";
import { motion } from "framer-motion";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

export default function MyContactsComponent() {
  return (
    <motion.div className="lg:w-2/5 lg:flex lg:flex-col items-center ">
      <motion.h5 className="font-titles text-white text-2xl uppercase font-semibold mb-10">
        My contacts
      </motion.h5>
      <motion.ul className="list-none px-10 lg:h-[496px] lg:flex lg:flex-col lg:items-start lg:justify-center bg-gun-metal bg-opacity-50 rounded-xl shadow-md">
        <motion.li className="my-10">
          <motion.a
            href="https://www.linkedin.com/in/alessandro-ontani-76848a191/"
            target="_blank"
            className="flex items-end justify-start text-slate-400"
            whileHover={{
              color: "rgb(100 116 139)",
            }}
          >
            <BsLinkedin className="text-4xl" />
            <h6 className="ms-4 mb-0 font-medium text-base ">
              Alessandro Ontani
            </h6>
          </motion.a>
        </motion.li>
        <motion.li className="my-10 lg:my-14">
          <motion.a
            href="https://github.com/AleOnta"
            target="_blank"
            className="flex items-end justify-start text-slate-400"
            whileHover={{
              color: "rgb(100 116 139)",
            }}
          >
            <BsGithub className="text-4xl" />
            <h6 className="ms-4 mb-0 font-medium text-base ">Ale Onta</h6>
          </motion.a>
        </motion.li>
        <motion.li
          className="my-10 flex items-end justify-start text-slate-400"
          whileHover={{
            color: "rgb(100 116 139)",
          }}
        >
          <BsDiscord className="text-4xl" />
          <h6 className="ms-4 mb-0 font-medium text-base">aleonta</h6>
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
