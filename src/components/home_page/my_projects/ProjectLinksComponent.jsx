import React from "react";
import { motion } from "framer-motion";
import { TbWorldWww } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { Link } from "react-router-dom";

export default function ProjectLinksComponent({ selectedCard, project }) {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();

  return (
    <motion.div
      layout="position"
      className={`project-links-container ${
        selectedCard !== project.id
          ? `order-2 h-full flex flex-col sm:flex-row sm:items-end justify-between ${
              (project.id === 1 || project.id === 2) && "lg:flex-col"
            }`
          : width < 1024 && selectedCard === project.id
          ? "absolute top-[122px] md:top-[105px] right-1"
          : "flex flex-row item-center absolute top-[18px] xl:top-[22px] 2xl:top-[25px] right-4 "
      }`}
    >
      <motion.p
        layout="position"
        className={`project-date bg-slate-600 rounded-md font-custom uppercase leading-6 h-[32px] lg:w-[62px] 2xl:w-[72px]
                      ${
                        selectedCard !== project.id
                          ? `text-xs text-[0.9rem] 2xl:text-base font-semibold px-2 py-1 hidden lg:block  ${
                              project.id === 1 || project.id === 2
                                ? "lg:me-0"
                                : "lg:me-1 xl:me-3"
                            }`
                          : width < 1024 && selectedCard === project.id
                          ? "text-sm p-1 font-semibold mb-2 leading-relaxed"
                          : "flex justify-center items-center me-2 "
                      }
                      `}
      >
        Dec-22
      </motion.p>
      <motion.button
        layout="position"
        disabled={project.id === 2}
        className={`project-link-btn flex justify-center items-center bg-slate-600  rounded-md uppercase h-[32px] lg:w-[62px] 2xl:w-[72px]
                        ${
                          selectedCard !== project.id
                            ? `sm:me-3 ${
                                project.id === 1 || project.id === 2
                                  ? "lg:me-0"
                                  : "lg:me-1 xl:me-3"
                              } `
                            : width < 1024 && selectedCard === project.id
                            ? "w-full mb-2"
                            : "me-2"
                        } ${project.id === 2 && "bg-opacity-50 "}`}
        whileHover={{
          scale: project.id !== 2 ? 1.1 : 1,
        }}
        whileTap={{
          scale: project.id !== 2 ? 0.9 : 1,
        }}
      >
        <Link
          to={project.url_deploy}
          disabled={project.id === 2}
          target={project.id === 2 ? "" : "_blank"}
          className={`flex justify-center w-full h-full px-2 py-1 ${
            selectedCard !== project.id ? "px-5" : ""
          }`}
        >
          <TbWorldWww
            size={24}
            layout="position"
            className="btn-icon"
            style={{ opacity: project.id === 2 && 0.5 }}
          />
        </Link>
      </motion.button>
      <motion.button
        layout="position"
        className={`project-link-btn flex justify-center items-center bg-slate-600 text-white rounded-md uppercase h-[32px] lg:w-[62px] 2xl:w-[72px]
                        ${
                          selectedCard !== project.id
                            ? ""
                            : width < 1024 && selectedCard === project.id
                            ? "w-full"
                            : ""
                        }`}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <Link
          to={project.url_repo}
          target="_blank"
          className={`flex justify-center w-full h-full px-2 py-1 ${
            selectedCard !== project.id ? "px-5" : ""
          }`}
        >
          <BsGithub size={22} layout="position" className="btn-icon" />
        </Link>
      </motion.button>
    </motion.div>
  );
}
