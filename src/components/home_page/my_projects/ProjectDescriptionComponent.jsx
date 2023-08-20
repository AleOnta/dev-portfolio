import React from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function ProjectDescriptionComponent({ selectedCard, project }) {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();
  return (
    <>
      <motion.div
        className={`${
          selectedCard !== project.id
            ? "w-8/12 lg:w-7/12"
            : width < 1024 && selectedCard === project.id
            ? ""
            : "flex flex-col justify-between xl:w-5/6"
        }`}
      >
        {selectedCard === project.id && (
          <>
            <motion.h6
              layout="position"
              className="px-2 uppercase text-xs font-titles mb-2"
            >
              description:
            </motion.h6>
          </>
        )}
        <motion.div
          className={`project-description-wrapper overflow-x-hidden ${
            (project.id === 1 || project.id === 2) && "lg:ps-3 lg:pe-2 "
          }
    ${
      selectedCard !== project.id
        ? "px-2 py-2 sm:px-4 sm:py-3 order-1"
        : width < 1024 && selectedCard === project.id
        ? "p-2 max-h-80 overflow-y-auto"
        : width >= 1024 && width < 1280 && selectedCard === project.id
        ? "p-5 max-h-72 overflow-y-auto"
        : "p-3 xl:h-80 2xl:h-96 overflow-y-auto"
    }
    `}
          style={{ borderRadius: "10px" }}
        >
          {selectedCard === project.id &&
            project.description_test.map((string, i) => {
              return (
                <motion.p
                  key={"project-" + project.id + "-description-" + i}
                  layout="position"
                  className={`project-description mb-2 overflow-x-hidden
                  ${
                    width < 1024
                      ? "text-xs sm:text-sm  leading-normal"
                      : "2xl:text-base leading-relaxed"
                  } 
                  ${(project.id === 0 || project.id === 3) && "lg:text-sm"}`}
                >
                  {string}
                </motion.p>
              );
            })}
          <motion.p
            layout="position"
            className={`project-description text-xs md:text-sm xl:text-sm 2xl:text-base line-clamp-4 ${
              (project.id === 0 || project.id === 3) && "lg:text-sm"
            }`}
          >
            {project.subtitle}
          </motion.p>
        </motion.div>
      </motion.div>
    </>
  );
}
