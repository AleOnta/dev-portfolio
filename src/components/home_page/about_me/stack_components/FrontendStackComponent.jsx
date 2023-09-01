import React from "react";
import { motion } from "framer-motion";
import {
  BootstrapOriginal,
  Css3Original,
  Html5Original,
  JavascriptOriginal,
  ReactOriginal,
  ReduxOriginal,
  SassOriginal,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react";

export default function FrontendStackComponent({
  containerVariants,
  iconsVariants,
  sizeCalculator,
}) {
  const iconsArray = [
    { icon: <Html5Original size={sizeCalculator()} />, text: "HTML 5" },
    { icon: <Css3Original size={sizeCalculator()} />, text: "CSS 3" },
    { icon: <BootstrapOriginal size={sizeCalculator()} />, text: "Bootstrap" },
    {
      icon: <TailwindcssPlain size={sizeCalculator()} />,
      text: "Tailwind CSS",
    },
    { icon: <SassOriginal size={sizeCalculator()} />, text: "Sass - Scss" },
    {
      icon: <JavascriptOriginal size={sizeCalculator()} />,
      text: "JavaScript",
    },
    {
      icon: <TypescriptOriginal size={sizeCalculator()} />,
      text: "TypeScript",
    },
    { icon: <ReactOriginal size={sizeCalculator()} />, text: "React JS" },
    { icon: <ReduxOriginal size={sizeCalculator()} />, text: "Redux Toolkit" },
  ];

  return (
    <>
      <motion.div
        className="flex justify-center items-center flex-wrap w-full h-[360px] xs:h-[400px] sm:h-[450px] md:h-[290px] lg:h-[340px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {iconsArray.map((el, i) => (
          <motion.div
            key={"front-end-" + i}
            className="w-1/3 flex flex-col justify-center items-center px-2"
            variants={iconsVariants}
            whileHover={{
              cursor: "pointer",
            }}
          >
            <motion.span className="p-4">{el.icon}</motion.span>
            <motion.span className="w-11/12 sm:w-9/12 lg:w-11/12 2xl:w-2/3 py-1 px-2 lg:px-0 lg:py-[6px] text-center text-xs sm:text-sm md:text-xs text-snow-white font-semibold bg-slate-300 bg-opacity-10 rounded-md shadow-md line-clamp-1">
              {el.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
