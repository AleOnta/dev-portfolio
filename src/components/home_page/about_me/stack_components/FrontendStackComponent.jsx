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
}) {
  const iconsArray = [
    { icon: <Html5Original size={40} />, text: "HTML 5" },
    { icon: <Css3Original size={40} />, text: "CSS 3" },
    { icon: <BootstrapOriginal size={40} />, text: "Bootstrap" },
    { icon: <TailwindcssPlain size={40} />, text: "Tailwind CSS" },
    { icon: <SassOriginal size={40} />, text: "Sass - Scss" },
    { icon: <JavascriptOriginal size={40} />, text: "JavaScript" },
    { icon: <TypescriptOriginal size={40} />, text: "TypeScript" },
    { icon: <ReactOriginal size={40} />, text: "React JS" },
    { icon: <ReduxOriginal size={40} />, text: "Redux Toolkit" },
  ];

  return (
    <>
      <motion.div
        className="flex justify-center items-center flex-wrap w-full h-[360px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {iconsArray.map((el, i) => (
          <motion.div
            key={"front-end-" + i}
            className="w-1/3 flex flex-col justify-center items-center"
            variants={iconsVariants}
            whileHover={{
              cursor: "pointer",
            }}
          >
            <motion.span className="p-4">{el.icon}</motion.span>
            <motion.span className="w-4/6 py-2 text-center text-snow-white text-xs font-semibold bg-slate-300 bg-opacity-10 rounded-md shadow-md">
              {el.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
