import React from "react";
import { motion } from "framer-motion";
import { BsDiscord, BsGithub, BsLinkedin } from "react-icons/bs";

export default function MyContactsComponent() {
  return (
    <motion.ul
      className="list-none w-full 2xl:w-3/5 px-6 py-1 mb-10 md:flex md:flex-row md:items-center md:justify-around bg-gun-metal bg-opacity-50 rounded-lg shadow-md"
      whileHover={{
        scale: 1.015,
      }}
      transition={{
        type: "spring",
        duration: 0.5,
      }}
    >
      <motion.li className="my-6 md:my-10 mx-8">
        <motion.a
          href="https://www.linkedin.com/in/alessandro-ontani-76848a191/"
          target="_blank"
          className="flex items-end justify-start md:items-center text-gray-400"
          whileHover={{
            color: "rgb(239 239 239)",
            scale: 1.025,
          }}
          whileTap={{
            scale: 0.9,
          }}
          transition={{ type: "spring" }}
        >
          <BsLinkedin className="text-4xl" />
          <h6 className="ms-4 mb-0 md:ms-2 font-medium text-base ">
            Alessandro Ontani
          </h6>
        </motion.a>
      </motion.li>
      <motion.li className="my-6 md:my-10  mx-8">
        <motion.a
          href="https://github.com/AleOnta"
          target="_blank"
          className="flex items-end justify-start md:items-center text-gray-400"
          whileHover={{
            color: "rgb(239 239 239)",
            scale: 1.025,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <BsGithub className="text-4xl" />
          <h6 className="ms-4 mb-0 md:ms-2 font-medium text-base ">Ale Onta</h6>
        </motion.a>
      </motion.li>
      <motion.li
        className="my-6 md:my-10 flex items-end justify-start md:items-center text-gray-400 mx-8"
        whileHover={{
          color: "rgb(239 239 239)",
          scale: 1.025,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <BsDiscord className="text-4xl" />
        <h6 className="ms-4 mb-0 md:ms-2 font-medium text-base">aleonta</h6>
      </motion.li>
    </motion.ul>
  );
}
