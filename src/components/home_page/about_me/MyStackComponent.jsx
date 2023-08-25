import React from "react";
import { motion } from "framer-motion";
import StackLayerComponent from "./StackLayerComponent";
import { useState, useEffect } from "react";

export default function MyStackComponent() {
  const [selectedLayer, setSelectedLayer] = useState(0);

  return (
    <div>
      <div className="stack-vector-container">
        <motion.div
          className="relative z-30"
          animate={{
            translateY: 50,
          }}
          whileHover={{
            translateY: 0,
            opacity: 1,
            scale: 1.4,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <StackLayerComponent type="frontend" />
        </motion.div>
        <motion.div
          className="relative z-20"
          animate={{
            translateY: 0,
          }}
          whileHover={{
            translateY: 0,
            opacity: 1,
            marginTop: 50,
            marginBottom: 50,
            scale: 1.4,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <StackLayerComponent type="backend" />
        </motion.div>
        <motion.div
          className="relative z-10"
          animate={{
            translateY: -50,
          }}
          whileHover={{
            translateY: 0,
            opacity: 1,
            scale: 1.4,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <StackLayerComponent />
        </motion.div>
      </div>
      <motion.div className="stack-description"></motion.div>
    </div>
  );
}
