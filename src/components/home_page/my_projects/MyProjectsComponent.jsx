import { useEffect, useState } from "react";
import projects from "../../../assets/content/JsonProjects.json";
import { motion } from "framer-motion";
import CloseBtnComponent from "./CloseBtnComponent";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import ProjectStackComponent from "./ProjectStackComponent";
import ProjectDescriptionComponent from "./ProjectDescriptionComponent";
import ProjectLinksComponent from "./ProjectLinksComponent";
import ProjectTopDescription from "./ProjectTopDescription";

export const MyProjectsComponent = () => {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();
  const [selectedCard, setSelectedCard] = useState(null);
  const [unclickable, setUnclickable] = useState(false);

  const defineSpacing = () => {
    if (height < 700) {
      return 250;
    } else if (height >= 700 && height < 800) {
      return 200;
    } else {
      return 150;
    }
  };

  const handleSelectedCard = (e, projectId) => {
    let classes = Array.from(e.target.classList);
    // creating conditions to avoid card selection while clicking on buttons
    const btn = classes.indexOf("project-link-btn") !== -1;
    const svg = classes.indexOf("btn-icon") !== -1;
    const alternativeSvg = classes.length <= 0;

    if (!btn && !svg && !alternativeSvg) {
      if (selectedCard !== projectId) {
        if (height < 1024) {
          let container = document.getElementById("project-top-description");
          window.scrollTo({
            top: container.offsetTop + defineSpacing(),
            behavior: "smooth",
          });
        }
        setSelectedCard(projectId);
      }
    }
  };

  const handleZindex = (projectId) => {
    // handling z-index while closing the selected card and avoiding going behind others cards
    if (selectedCard === projectId) {
      return "controlled-z-index";
    } else {
      return "not-controlled-z-index";
    }
  };

  useEffect(() => {
    // while a card is selected, card selection isn't available for others cards.
    if (selectedCard || selectedCard === 0) {
      setUnclickable(true);
    } else {
      setUnclickable(false);
    }
  }, [selectedCard]);

  return (
    <div className="container p-6 pb-0 md:p-0 md:px-8 md:mb-56 lg:mb-96">
      <ProjectTopDescription />

      <div className="my-projects-container lg:flex justify-around items-center flex-wrap">
        {projects.map((project, i) => {
          return (
            <motion.div
              tabIndex={i}
              key={project.id}
              className={`card-project mb-5 ${
                selectedCard === project.id ? "opened-card" : ""
              } ${handleZindex(project.id)} ${
                (selectedCard && selectedCard !== project.id) || unclickable
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              }`}
              style={{
                borderRadius: selectedCard === project.id ? "15px" : "10px",
              }}
              layout
              whileHover={{
                scale: selectedCard !== project.id ? 1.025 : 1,
              }}
              whileTap={{
                scale: selectedCard !== project.id ? 1 : 1,
              }}
              onClick={(e) => {
                handleSelectedCard(e, project.id);
              }}
            >
              <motion.div
                layout="position"
                className={`card-wrapper w-full h-full relative flex ${
                  selectedCard !== project.id
                    ? "items-stretch"
                    : width < 1024 && selectedCard === project.id
                    ? "items-stretch"
                    : ""
                }`}
              >
                {width >= 1024 && (
                  <motion.div
                    layout
                    className={`project-preview ${
                      selectedCard === project.id
                        ? "w-4/12 h-full order-2"
                        : "w-full h-full absolute top-0 left-0 right-0 bottom-0"
                    }`}
                  />
                )}
                <motion.div
                  layout
                  className={`project-content p-4 text-white flex ${
                    selectedCard !== project.id
                      ? "w-full h-full flex-col justify-between relative"
                      : width < 1024 && selectedCard === project.id
                      ? "w-full h-full flex-col justify-between"
                      : "w-8/12 flex-col justify-between relative"
                  }`}

                  /*whileHover={{
                    backgroundColor: !selectedCard && "rgba(60, 60, 74, 0.95)",
                  }}*/
                >
                  {width < 1024 && (
                    <>
                      <motion.div
                        layout
                        className={`project-preview ${
                          selectedCard === project.id
                            ? "w-full h-1/4 xs:h-1/3 sm:mb-3 md:w-3/4 self-center"
                            : "w-full h-full absolute top-0 left-0 right-0 bottom-0"
                        } ${width < 1024 && "order-2"}`}
                        style={{
                          zIndex: selectedCard === project.id ? 9 : 8,
                        }}
                      />
                      <motion.div
                        className="h-full w-full absolute left-0 right-0 bottom-0 top-0 bg-gun-metal"
                        layout
                        style={{
                          backgroundColor:
                            selectedCard === project.id
                              ? "rgba(40, 45, 51, 1)"
                              : "rgb(40, 45, 51, 0.9)",
                          zIndex: selectedCard === project.id ? 8 : 9,
                        }}
                      />
                    </>
                  )}

                  <motion.div
                    layout
                    className={`project-actual-content flex justify-between items-center z-10 ${
                      selectedCard !== project.id
                        ? ""
                        : width < 1024 && selectedCard === project.id
                        ? "order-1 sm:mb-3"
                        : ""
                    }`}
                  >
                    <motion.h5
                      layout="position"
                      className={`project-title text-xl sm:text-3xl lg:text-xl font-semibold font-titles px-2 pb-1 pt-1
                      ${
                        selectedCard === project.id
                          ? "xl:text-3xl 2xl:text-4xl"
                          : "xl:text-2xl 2xl:text-3xl"
                      }
                      `}
                    >
                      {project.title}
                    </motion.h5>
                    {selectedCard === project.id && (
                      <CloseBtnComponent
                        projectId={project.id}
                        selected={selectedCard}
                        setSelected={(value) => setSelectedCard(value)}
                      />
                    )}
                  </motion.div>

                  <motion.div
                    className={`project-actual-content z-10 ${
                      selectedCard !== project.id
                        ? "flex items-end justify-between"
                        : width < 1024 && selectedCard === project.id
                        ? "order-3 self-end"
                        : "xl:flex flex-row"
                    }
                    `}
                  >
                    <ProjectLinksComponent
                      selectedCard={selectedCard}
                      project={project}
                    />
                    {selectedCard === project.id && (
                      <ProjectStackComponent projectId={project.id} />
                    )}
                    <ProjectDescriptionComponent
                      selectedCard={selectedCard}
                      project={project}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
        <motion.div
          className={`dim-layer sm:py-5 ${
            selectedCard || selectedCard === 0 ? "active" : "inactive"
          }`}
        />
      </div>
    </div>
  );
};
