import React from "react";
import { motion } from "framer-motion";
import {
  BootstrapOriginal,
  JavaOriginal,
  JavascriptOriginal,
  PostgresqlOriginal,
  ReactOriginal,
  SassOriginal,
  SpringOriginal,
  TypescriptOriginal,
} from "devicons-react";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function ProjectStackComponent({ projectId }) {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();

  const listVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    hidden: {
      x: -10,
      opacity: 0,
      scale: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    whileHover: {
      scale: 1.05,
    },
  };

  return (
    <>
      <motion.div
        className={`${
          width < 1280 ? "" : "h-full w-1/6 flex flex-col justify-between me-5"
        }`}
      >
        <motion.h6 className="px-2 uppercase text-xs font-titles mb-1 xl:text-center">
          Tech stack:
        </motion.h6>
        <motion.ul
          className="project-stack-list list-none flex items-center justify-between xl:flex-col xl:h-80 2xl:h-96 xl:mb-0 p-2 mb-2 bg-smooth-gray rounded-lg "
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {projectId === 0 ? (
            <>
              <motion.li variants={listItemVariants}>
                <ReactOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <TypescriptOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <BootstrapOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <SassOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
            </>
          ) : projectId === 1 ? (
            <>
              <motion.li variants={listItemVariants}>
                <ReactOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <TypescriptOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <BootstrapOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <SassOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
            </>
          ) : projectId === 2 ? (
            <>
              <motion.li variants={listItemVariants}>
                <ReactOriginal size={width < 640 ? 20 : 30} />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <TypescriptOriginal size={width < 640 ? 20 : 30} />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <BootstrapOriginal size={width < 640 ? 20 : 30} />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <SassOriginal size={width < 640 ? 20 : 30} />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <JavaOriginal size={width < 640 ? 20 : 30} />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <SpringOriginal size={width < 640 ? 20 : 30} />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <PostgresqlOriginal size={width < 640 ? 20 : 30} />
              </motion.li>
            </>
          ) : (
            <>
              <motion.li variants={listItemVariants}>
                <ReactOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <JavascriptOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <BootstrapOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
              <motion.li variants={listItemVariants}>
                <SassOriginal
                  size={width < 640 ? 25 : width < 1280 ? 30 : 40}
                />
              </motion.li>
            </>
          )}
        </motion.ul>
      </motion.div>
    </>
  );
}
