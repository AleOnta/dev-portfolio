import React from "react";
import { motion } from "framer-motion";

export default function ProjectTopDescription() {
  return (
    <motion.div className="mt-10 md:mt-32" id="project-top-description">
      <h2 className="font-titles text-4xl md:text-5xl lg:text-6xl text-white md:px-12 md:py-8 mb-6 drop-shadow-xl text-center font-normal uppercase tracking-widest">
        My Projects
      </h2>
      <motion.div className="p-4 md:mx-12 mb-5 md:mb-12 text-center">
        <motion.p className="text-xs md:text-sm font-thin text-snow-white">
          In this section, there are only some of my projects, as listing them
          would be too long and meaningless. If you are interested in seeing
          someone more, visit my GitHub profile.
        </motion.p>
        <motion.p className="text-xs md:text-sm font-thin text-snow-white">
          (Please note that a good number of repositories, especially the least
          recent, represent the daily exercises carried out during the Epicode
          Bootcamp, and are therefore not real projects)
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
