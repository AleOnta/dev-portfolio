import React from "react";
import { motion } from "framer-motion";
import Resume from "../../../assets/pdf/CVEN.pdf";

export default function AboutLeftButtonComponent({ value, goTo }) {
  const navigateTo = (purpose) => {
    if (purpose === "resume") {
      window.open(Resume, "_blank");
    } else if (purpose === "projects") {
      const element = document.getElementById("project-top-description");
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById("contact-container");
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.button
      className="button-arounder text-sm xxs:text-base md:text-xs font-rubik font-medium px-2 py-1 xxs:px-3 xxs:py-2 xs:px-5 xs:py-2 md:px-4  lg:px-5 lg:py-2 mt-3 uppercase"
      onClick={() => navigateTo(goTo)}
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
  );
}
