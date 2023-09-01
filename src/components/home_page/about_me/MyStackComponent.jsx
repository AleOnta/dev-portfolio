import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import StackLayerComponent from "./StackLayerComponent";
import { useState, useEffect } from "react";
import FrontendStackComponent from "./stack_components/FrontendStackComponent";
import BackendStackComponent from "./stack_components/BackendStackComponent";
import ToolsStackComponent from "./stack_components/ToolsStackComponent";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function MyStackComponent() {
  let counter = 0;
  const [selectedLayer, setSelectedLayer] = useState(counter);
  const [intervalId, setIntervalId] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();

  const containerVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    leave: {
      y: 100,
      opacity: 0,
    },
  };

  const iconsVariants = {
    hidden: {
      y: -20,
      x: -20,
      opacity: 0,
      scale: 0.25,
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
    },
  };

  function defineIconSize() {
    if (width < 436) {
      return 30;
    } else if (width >= 436 && width < 536) {
      return 35;
    } else if (width >= 536 && width < 640) {
      return 40;
    } else if (width >= 640 && width < 768) {
      return 45;
    } else if (width >= 768 && width < 886) {
      return 30;
    } else if (width >= 886 && width < 1024) {
      return 32;
    } else if (width >= 1024 && width < 1536) {
      return 35;
    } else {
      return 45;
    }
  }

  function handleAutomaticSelection() {
    switch (counter) {
      case 0: {
        counter++;
        setSelectedLayer(1);
        break;
      }
      case 1: {
        counter++;
        setSelectedLayer(2);
        break;
      }
      default: {
        counter = 0;
        setSelectedLayer(0);
        break;
      }
    }
  }

  function handleInterval() {
    let selectionInterval = setInterval(handleAutomaticSelection, 15000);
    setIntervalId(selectionInterval);
    return selectionInterval;
  }

  function handleIntervalReset() {
    clearInterval(intervalId);
    handleInterval();
  }

  function handleManualSelection(layerId) {
    handleIntervalReset();
    setSelectedLayer(layerId);
  }

  useEffect(() => {
    let initialInterval = handleInterval();

    return () => {
      clearInterval(initialInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full md:h-[475px] flex flex-col lg:flex-row items-center lg:items-end justify-between relative mt-7">
      <h5 className="font-titles font-bold text-2xl xs:text-3xl md:text-3xl absolute -top-3 md:top-1 lg:top-24 left-0 text-white tracking-tight drop-shadow-xl">
        My Stack
      </h5>
      <div className="stack-vector-container w-full sm:w-9/12 md:w-full lg:w-2/6 mt-16 mb-14 xs:mt-20 xs:mb-16 md:mt-20 md:mb-0 lg:ms-8 lg:mt-0 lg:mb-8 flex justify-between lg:block">
        <motion.div
          id="frontend_layer"
          className="relative z-30"
          animate={{
            translateX:
              selectedLayer === 0 && width >= 1024
                ? width < 1280
                  ? 10
                  : width >= 1280 && width < 1536
                  ? 10
                  : 20
                : 0,
            translateY:
              selectedLayer === 0
                ? width < 1024
                  ? -15
                  : 0
                : width < 1024
                ? 0
                : 50,
            scale: selectedLayer === 0 ? 1.4 : 1,
            opacity: selectedLayer === 0 ? 1 : 0.3,
          }}
          whileHover={{
            translateX:
              width >= 1024 && width < 1280
                ? 10
                : width >= 1280 && width < 1536
                ? 10
                : width < 1024
                ? 0
                : 20,
            translateY:
              selectedLayer === 0
                ? width < 1024
                  ? -15
                  : 0
                : width < 1024
                ? 0
                : 50,
            opacity: 1,
            scale: 1.4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => handleManualSelection(0)}
        >
          <StackLayerComponent
            type="frontend"
            selected={selectedLayer}
            width={width}
          />
        </motion.div>
        <motion.div
          id="backend_layer"
          className="relative z-20"
          animate={{
            translateX:
              selectedLayer === 1 && width >= 1024
                ? width < 1280
                  ? 10
                  : width >= 1280 && width < 1536
                  ? 10
                  : 20
                : 0,
            translateY: width < 1024 ? (selectedLayer === 1 ? -15 : 0) : 0,
            marginTop:
              selectedLayer === 1
                ? width < 1024
                  ? 0
                  : 50
                : width < 1024
                ? 0
                : 10,
            marginBottom:
              selectedLayer === 1
                ? width < 1024
                  ? 0
                  : 50
                : width < 1024
                ? 0
                : 10,
            scale: selectedLayer === 1 ? 1.4 : 1,
            opacity: selectedLayer === 1 ? 1 : 0.3,
          }}
          whileHover={{
            translateX:
              width >= 1024 && width < 1280
                ? 10
                : width >= 1280 && width < 1536
                ? 10
                : width < 1024
                ? 0
                : 20,
            translateY: width < 1024 ? -15 : 0,
            marginTop: width < 1024 ? 0 : selectedLayer !== 1 ? 25 : 50,
            marginBottom: width < 1024 ? 0 : selectedLayer !== 1 ? 25 : 50,
            opacity: 1,
            scale: 1.4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => handleManualSelection(1)}
        >
          <StackLayerComponent
            type="backend"
            selected={selectedLayer}
            width={width}
          />
        </motion.div>
        <motion.div
          id="tools_layer"
          className="relative z-10"
          animate={{
            translateX:
              selectedLayer === 2 && width >= 1024
                ? width < 1280
                  ? 10
                  : width >= 1280 && width < 1536
                  ? 10
                  : 20
                : 0,
            translateY:
              selectedLayer === 2
                ? width < 1024
                  ? -15
                  : 0
                : width < 1024
                ? 0
                : -50,
            scale: selectedLayer === 2 ? 1.4 : 1,
            opacity: selectedLayer === 2 ? 1 : 0.3,
          }}
          whileHover={{
            translateX:
              width >= 1024 && width < 1280
                ? 10
                : width >= 1280 && width < 1536
                ? 10
                : width < 1024
                ? 0
                : 20,
            translateY:
              selectedLayer === 2
                ? width < 1024
                  ? -15
                  : 0
                : width < 1024
                ? 0
                : -50,
            opacity: 1,
            scale: 1.4,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => handleManualSelection(2)}
        >
          <StackLayerComponent selected={selectedLayer} width={width} />
        </motion.div>
      </div>
      <motion.div
        className="stack-description w-full lg:w-4/6 h-full md:h-[300px] lg:h-[350px] bg-gun-metal bg-opacity-50 rounded-lg relative"
        animate={{
          border: "2px solid gray",
          borderColor:
            selectedLayer === 0
              ? "#9747ffcc"
              : selectedLayer === 1
              ? "#0d99ffcc"
              : "#ff7c70cc",
          boxShadow: `inset 0px 0px 80px -65px ${
            selectedLayer === 0
              ? "#9747FF"
              : selectedLayer === 1
              ? "#0d99ff"
              : "#ff7c70"
          }`,
        }}
      >
        <AnimatePresence>
          {selectedLayer === 0 ? (
            <>
              <motion.h5
                key="frontend"
                className="absolute w-fit px-2 py-1 -top-8 left-0 right-0 mx-auto text-3xl text-snow-white font-rubik font-bold bg-[#9747FF] rounded-md drop-shadow-2xl uppercase text-center"
                initial={{
                  y: -30,
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
              >
                Frontend
              </motion.h5>
              <FrontendStackComponent
                containerVariants={containerVariants}
                iconsVariants={iconsVariants}
                sizeCalculator={defineIconSize}
              />
            </>
          ) : selectedLayer === 1 ? (
            <>
              <motion.h5
                key="backend"
                className="absolute w-fit px-2 py-1 -top-8 left-0 right-0 mx-auto text-3xl text-snow-white font-rubik font-bold bg-[#0d99ff] rounded-md drop-shadow-2xl uppercase text-center"
                initial={{
                  y: -30,
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
              >
                Backend
              </motion.h5>
              <BackendStackComponent
                containerVariants={containerVariants}
                iconsVariants={iconsVariants}
                sizeCalculator={defineIconSize}
              />
            </>
          ) : (
            <>
              <motion.h5
                key="tools"
                className="absolute w-fit px-2 py-1 -top-8 left-0 right-0 mx-auto text-3xl text-snow-white font-rubik font-bold bg-[#ff7c70] rounded-md drop-shadow-2xl uppercase text-center"
                initial={{
                  y: -30,
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
              >
                TOOLS
              </motion.h5>
              <ToolsStackComponent
                width={width}
                containerVariants={containerVariants}
                iconsVariants={iconsVariants}
                sizeCalculator={defineIconSize}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
