import React from "react";
import { motion } from "framer-motion";
import { GitOriginal, TrelloPlain } from "devicons-react";
import { PostmanOriginal } from "@beta/devicons-react";

export default function ToolsStackComponent({
  containerVariants,
  iconsVariants,
}) {
  const iconsArray = [
    { icon: <GitOriginal size={40} />, text: "Git" },
    { icon: <PostmanOriginal size={40} />, text: "Postman" },
    { icon: <TrelloPlain size={40} />, text: "Trello" },
  ];

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center w-full h-[360px]"
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
            <motion.span className="w-3/12 py-2 text-center text-snow-white text-xs font-semibold bg-slate-300 bg-opacity-10 rounded-md shadow-md">
              {el.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
