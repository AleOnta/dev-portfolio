import React from "react";
import { motion } from "framer-motion";

export default function ProjectTopDescription() {
  return (
    <motion.div className="project-top-description mt-10 md:mt-32">
      <h2 className="font-titles font-bold text-4xl md:text-5xl text-white tracking-tight md:x-12 md:py-8 mb-6 drop-shadow-xl">
        My Projects
      </h2>
      <motion.div className="p-4 bg-gun-metal bg-opacity-50 md:mx-12 mb-5 md:mb-12 rounded-lg shadow-lg">
        <motion.p className="text-sm md:text-xl font-thin text-snow-white">
          In this section, there are only some of my projects, as listing them
          would be too long and meaningless. If you are interested in seeing
          someone more, visit my GitHub profile.
        </motion.p>
        <motion.p className="text-sm md:text-xl font-thin text-snow-white">
          (Please note that a good number of repositories, especially the least
          recent, represent the daily exercises carried out during the Epicode
          Bootcamp, and are therefore not real projects)
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
