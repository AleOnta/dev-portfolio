import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutLeftButtonComponent({ value, goTo }) {
  return (
    <Link to={goTo}>
      <motion.button
        className="button-arounder text-base font-rubik font-medium px-5 py-2 mt-3 uppercase"
        initial={{}}
        animate={{
          background: "rgb(40 45 51, 0.5)",
          color: "#fff",
          border: "2px solid black",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          boxShadow: "0 0px 0px #0b0e0f33",
          y: 0,
        }}
        whileHover={{
          background: "rgb(40 45 51)",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          boxShadow: "0 0px 0px #0b0e0f33",
          y: -4,
        }}
      >
        {value}
      </motion.button>
    </Link>
  );
}
