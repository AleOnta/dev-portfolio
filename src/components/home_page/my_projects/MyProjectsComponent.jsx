import { useState } from "react";
import projects from "../../../assets/content/JsonProjects.json";
import { motion } from "framer-motion";
import CloseBtnComponent from "./CloseBtnComponent";

export const MyProjectsComponent = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectedCard = (projectId) => {
    if (selectedCard !== projectId) {
      setSelectedCard(projectId);
    }
  };
  return (
    <div className="container p-6 pb-0 md:p-0 md:px-8">
      <h3 className="text-white text-4xl font-bold font-titles mt-32 mb-20">
        My Projects
      </h3>
      <div className="my-projects-container flex justify-around items-center flex-wrap">
        {projects.map((project, i) => {
          return (
            <motion.div
              key={project.id}
              className={`card-project ${
                i === 0 || i === 3 ? "large" : "small"
              } ${selectedCard === project.id ? "opened-card" : ""}`}
              style={{ borderRadius: "15px" }}
              layout
              whileHover={{
                scale: selectedCard !== project.id ? 1.04 : 1,
              }}
              whileTap={{
                scale: selectedCard !== project.id ? 1 : 1,
              }}
              onClick={() => {
                handleSelectedCard(project.id);
              }}
            >
              <motion.div
                layout
                className="card-wrapper w-full h-full relative"
              >
                <motion.div
                  layout
                  className="project-preview w-full h-full absolute top-0 left-0 right-0 bottom-0"
                />
                <motion.div layout className="project-content p-4">
                  <motion.div
                    layout
                    className="flex justify-between items-center"
                  >
                    <motion.h5
                      layout="position"
                      className="project-title px-2 pb-1"
                    >
                      {project.title}
                    </motion.h5>
                    <CloseBtnComponent
                      projectId={project.id}
                      selected={selectedCard}
                      setSelected={(value) => setSelectedCard(value)}
                    />
                  </motion.div>
                  <motion.div className="flex items-end justify-between">
                    <motion.p
                      layout="position"
                      className="project-date order-2 px-2 py-1"
                    >
                      Dec-22
                    </motion.p>
                    <motion.p
                      layout="position"
                      className="project-description px-2 py-1 order-1"
                    >
                      {project.subtitle}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
        <div className="dim-layer "></div>
      </div>
    </div>
  );
};
