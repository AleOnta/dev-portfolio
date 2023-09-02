import React from "react";
import { motion } from "framer-motion";
import { IoCloseOutline } from "react-icons/io5";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function CloseBtnComponent({
  selected,
  projectId,
  setSelected,
}) {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();

  const closeBtnVariants = {
    hidden: {
      opacity: 0,
      x:
        width >= 1024 && width < 1280
          ? 270
          : width >= 1280 && width < 1536
          ? 370
          : width >= 1536
          ? 440
          : 100,
    },
    visible: {
      opacity: 1,
      x:
        width >= 1024 && width < 1280
          ? 220
          : width >= 1280 && width < 1536
          ? 320
          : width >= 1536
          ? 390
          : 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 1,
      },
    },
  };

  const handleSelected = () => {
    setSelected(null);
  };

  return (
    <motion.button
      layout="position"
      className={`rounded-full flex justify-center items-center ${
        selected !== projectId
          ? "btn-off"
          : width < 1024 && selected === projectId
          ? "btn-on p-1 xs:p-2"
          : "btn-on p-2 2xl:p-3"
      }`}
      variants={closeBtnVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.06,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => {
        handleSelected();
      }}
    >
      <IoCloseOutline className="text-black text-2xl xl:text-3xl" />
    </motion.button>
  );
}
