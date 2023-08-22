import { motion } from "framer-motion";
import React from "react";

export default function ValidationAlertComponent({ message }) {
  const errorVariants = {
    hidden: {
      y: -25,
      scale: 0,
      opacity: 0,
    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <motion.span
      className="ms-3 text-xs text-rose-600 font-titles"
      variants={errorVariants}
      initial="hidden"
      animate="visible"
      exit={{
        y: -25,
        scale: 0,
        opacity: 0,
      }}
    >
      {message}
    </motion.span>
  );
}
