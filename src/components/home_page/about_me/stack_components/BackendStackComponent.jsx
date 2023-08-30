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
}) {
  const iconsArray = [
    {
      icon: <NodejsOriginal size={50} />,
      text: "Node JS",
    },
    {
      icon: <JavaOriginal size={50} />,
      text: "Java",
    },
    {
      icon: <SpringOriginal size={50} />,
      text: "Spring",
    },
    {
      icon: <PostgresqlOriginal size={50} />,
      text: "PostgreSQL",
    },
    {
      icon: (
        <img
          src={HibernateOriginal}
          alt="Hibernate Logo"
          width={50}
          height={50}
        />
      ),
      text: "Hibernate ORM",
    },
  ];

  return (
    <>
      <motion.div
        className="flex justify-center items-center flex-wrap w-full h-[360px]"
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
            <motion.span className="w-4/6 py-2 text-center text-snow-white text-xs font-semibold bg-slate-300 bg-opacity-10 rounded-md shadow-md">
              {el.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
