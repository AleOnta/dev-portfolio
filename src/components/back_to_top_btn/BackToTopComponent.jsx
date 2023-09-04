import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CgArrowUp } from "react-icons/cg";
import { useState } from "react";

export default function BackToTopComponent() {
  const [show, setShow] = useState(false);

  function handleShow() {
    let scrolledTo = window.scrollY;
    if (scrolledTo >= 445) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const buttonVariants = {
    hidden: {
      y: 150,
      opacity: 0,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-20 left-0 right-0 mx-auto z-[100] w-fit"
      variants={buttonVariants}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
    >
      <motion.button
        className="flex flex-col items-center justify-center  w-14 h-14 rounded-full bg-gun-metal text-snow-white"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        animate={{
          y: [0, -25],
          scale: [0.8, 1],
          border: [
            "0.5px solid rgba(255,255,255,0)",
            "0.5px solid rgba(255,255,255,0.6)",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <CgArrowUp className="text-xl" />
        <motion.span className="font-rubik font-semibold text-sm">
          TOP
        </motion.span>
      </motion.button>
    </motion.div>
  );
}
