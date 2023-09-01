import React from "react";
import { motion } from "framer-motion";
import { GitOriginal, TrelloPlain } from "devicons-react";
import { PostmanOriginal } from "@beta/devicons-react";

export default function ToolsStackComponent({
  width,
  containerVariants,
  iconsVariants,
  sizeCalculator,
}) {
  function enlargeIcons() {
    let size = sizeCalculator();
    if (width < 768 || width >= 1024) {
      return size + 5;
    } else {
      return size;
    }
  }

  const iconsArray = [
    {
      icon: <GitOriginal size={enlargeIcons()} />,
      text: "Git",
    },
    {
      icon: <PostmanOriginal size={enlargeIcons()} />,
      text: "Postman",
    },
    {
      icon: <TrelloPlain size={enlargeIcons()} />,
      text: "Trello",
    },
  ];

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center w-full h-[360px] xs:h-[400px] sm:h-[450px] md:h-[300px] lg:h-[340px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {iconsArray.map((el, i) => (
          <motion.div
            key={"front-end-" + i}
            className="w-full flex flex-col justify-center items-center"
            variants={iconsVariants}
            whileHover={{
              cursor: "pointer",
            }}
          >
            <motion.span className="p-4">{el.icon}</motion.span>
            <motion.span className="w-2/5 py-2 md:py-1 2xl:w-3/12 text-center lg:py-[6px] text-snow-white text-xs xs:text-sm md:text-xs font-semibold bg-slate-300 bg-opacity-10 rounded-md shadow-md">
              {el.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
