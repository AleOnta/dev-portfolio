import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import StackLayerComponent from "./StackLayerComponent";
import { useState, useEffect } from "react";
import FrontendStackComponent from "./stack_components/FrontendStackComponent";
import BackendStackComponent from "./stack_components/BackendStackComponent";
import ToolsStackComponent from "./stack_components/ToolsStackComponent";

export default function MyStackComponent() {
  let counter = 0;
  const [selectedLayer, setSelectedLayer] = useState(counter);
  const [intervalId, setIntervalId] = useState(0);

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
    <div className="w-full">
      <h5 className=" w-full font-titles font-bold text-2xl xs:mb-5 xs:text-3xl md:text-3xl text-white mb-2 md:mb-12  lg:mb-10 tracking-tight">
        What's my Stack?
      </h5>
      <div className="w-full flex items-center justify-between">
        <div className="stack-vector-container ms-8">
          <motion.div
            id="frontend_layer"
            className="relative z-30"
            animate={{
              translateY: selectedLayer === 0 ? 0 : 50,
              scale: selectedLayer === 0 ? 1.4 : 1,
              opacity: selectedLayer === 0 ? 1 : 0.3,
            }}
            whileHover={{
              translateY: 0,
              opacity: 1,
              scale: 1.4,
            }}
            whileTap={{
              scale: 1,
            }}
            onClick={() => handleManualSelection(0)}
          >
            <StackLayerComponent type="frontend" selected={selectedLayer} />
          </motion.div>
          <motion.div
            id="backend_layer"
            className="relative z-20"
            animate={{
              marginTop: selectedLayer === 1 ? 50 : 0,
              marginBottom: selectedLayer === 1 ? 50 : 0,
              scale: selectedLayer === 1 ? 1.4 : 1,
              opacity: selectedLayer === 1 ? 1 : 0.3,
            }}
            whileHover={{
              marginTop: 50,
              marginBottom: 50,
              opacity: 1,
              scale: 1.4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => handleManualSelection(1)}
          >
            <StackLayerComponent type="backend" selected={selectedLayer} />
          </motion.div>
          <motion.div
            id="tools_layer"
            className="relative z-10"
            animate={{
              translateY: selectedLayer === 2 ? 0 : -50,
              scale: selectedLayer === 2 ? 1.4 : 1,
              opacity: selectedLayer === 2 ? 1 : 0.3,
            }}
            whileHover={{
              translateY: 0,
              opacity: 1,
              scale: 1.4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => handleManualSelection(2)}
          >
            <StackLayerComponent selected={selectedLayer} />
          </motion.div>
        </div>
        <motion.div
          className="stack-description w-4/6 h-96 bg-gun-metal bg-opacity-50 rounded-lg relative"
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
                  containerVariants={containerVariants}
                  iconsVariants={iconsVariants}
                />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
