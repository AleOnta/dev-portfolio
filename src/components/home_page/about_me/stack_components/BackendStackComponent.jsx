import React from "react";
import { motion } from "framer-motion";
import {
  JavaOriginal,
  PostgresqlOriginal,
  SpringOriginal,
  NodejsOriginal,
} from "devicons-react";
import HibernateOriginal from "../../../../assets/svg/hibernate.svg";

export default function BackendStackComponent({
  containerVariants,
  iconsVariants,
  sizeCalculator,
}) {
  const iconsArray = [
    {
      icon: <NodejsOriginal size={sizeCalculator()} />,
      text: "Node JS",
    },
    {
      icon: <JavaOriginal size={sizeCalculator()} />,
      text: "Java",
    },
    {
      icon: <SpringOriginal size={sizeCalculator()} />,
      text: "Spring",
    },
    {
      icon: <PostgresqlOriginal size={sizeCalculator()} />,
      text: "PostgreSQL",
    },
    {
      icon: (
        <img
          src={HibernateOriginal}
          alt="Hibernate Logo"
          width={sizeCalculator()}
          height={sizeCalculator()}
        />
      ),
      text: "Hibernate ORM",
    },
  ];

  return (
    <>
      <motion.div
        className="flex justify-center items-center flex-wrap w-full h-[360px]  xs:h-[400px] sm:h-[450px] md:h-[290px] lg:h-[340px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="leave"
      >
        {iconsArray.map((el, i) => (
          <motion.div
            key={"front-end-" + i}
            className="flex flex-col items-center justify-center w-1/2"
            variants={iconsVariants}
            whileHover={{
              cursor: "pointer",
            }}
          >
            <motion.span className="p-4">{el.icon}</motion.span>
            <motion.span className="w-4/6 sm:w-1/2 md:w-9/12 2xl:w-2/4 py-1 xs:py-2 md:py-1 lg:py-[6px] text-center text-xs xs:text-sm md:text-xs text-snow-white font-semibold bg-slate-300 bg-opacity-10 rounded-md shadow-md">
              {el.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
