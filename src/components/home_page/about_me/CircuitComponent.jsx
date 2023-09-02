import React from "react";
import { motion } from "framer-motion";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

export default function CircuitComponent() {
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();

  const defineViewBox = () => {
    if (width < 380) {
      return "0 0 900 800";
    } else if (width >= 380 && width < 436) {
      return "0 0 880 800";
    } else if (width >= 436 && width < 536) {
      return "0 0 840 800";
    } else if (width >= 536 && width < 640) {
      return "0 0 760 800";
    } else if (width >= 768 && width < 1024) {
      return "0 0 925 800";
    } else if (width >= 1024 && width < 1280) {
      return "0 0 835 800";
    } else if (width >= 1280 && width < 1536) {
      return "0 0 800 800";
    }
  };

  return (
    <motion.div
      className="w-full h-60 relative overflow-hidden mt-0 sm:mt-8 md:mt-12"
      animate={{
        x:
          width >= 640 && width < 768
            ? 75
            : width >= 768 && width < 1024
            ? 0
            : width >= 1280
            ? 25
            : 0,
      }}
    >
      <motion.svg
        className="circuit_svg"
        width="800px"
        height="800px"
        viewBox={defineViewBox()}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.text
          className="w-fit font-titles font-semibold text-xl mx-auto"
          transform="translate(598.000000, 488.000000)"
          animate={{
            fill: ["rgb(148 163 184)", "rgb(239 239 239)", "rgb(148 163 184)"],
          }}
          transition={{
            duration: 2,
            times: [0, 1, 2],
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 1.8,
          }}
        >
          AO
        </motion.text>
        <g
          id="paths"
          className="path"
          stroke="rgb(148 163 184)"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeDasharray="30,150"
          strokeDashoffset="2000"
        >
          <g id="left" transform="translate(461.000000, 416.000000)">
            <polyline points="18 0 27 0 55 28 95 28 115 48 127 48"></polyline>
            <polyline points="18 23 27 23 47 43 86 43 107 64 127 64"></polyline>
            <polyline points="-8.03677904e-06 10.9791757 26.9791757 10.9791757 51 35 90 35 111 56 127 56"></polyline>
            <polyline points="72 92 98 92 110 80 127 80"></polyline>
            <polyline points="84 80 99 80 107 72 127 72"></polyline>
          </g>
          <g id="bottom" transform="translate(596.000000, 504.000000)">
            <polyline points="4.02077033 67.0000542 4.02077033 63.0208243 12.0415946 55 12.0415946 40.0415946 0 28 0 -5.68434189e-14"></polyline>
            <polyline points="20 67 20 36 8 24 8 0"></polyline>
            <polyline points="27 59 27 31 16 20 16 0"></polyline>
            <polyline points="36 67 36 28 24 16 24 0"></polyline>
            <polyline points="48 56 48 48 44 44 44 23 32 11 32 0"></polyline>
          </g>
        </g>
        <g
          id="paths-2"
          className="path-2"
          stroke="rgb(148 163 184)"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeDasharray="50,150"
          strokeDashoffset="2000"
        >
          <g id="right" transform="translate(620.000000, 427.000000)">
            <polyline points="16 69 28 69 44 85 52 85 56 81 68 81"></polyline>
            <polyline points="16 61 100 61 104 65 111 65"></polyline>
            <polyline points="16 53 120 53 132.041595 65.0415946 132.041595 72.0001243"></polyline>
            <polyline points="16 45 124.00463 45 141.002315 61.9976854"></polyline>
            <polyline points="16 37 128 37 144 53 152 53"></polyline>
            <polyline points="8 28 8 21 17 12 44 12 60 28 131 28 140 37 152 37"></polyline>
            <polyline points="0 28 0 16 16 0 22 0"></polyline>
          </g>
        </g>
        <g
          id="paths-bg"
          stroke="rgb(148 163 184)"
          strokeWidth="1.5"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g id="left" transform="translate(461.000000, 416.000000)">
            <polyline points="18 0 27 0 55 28 95 28 115 48 127 48"></polyline>
            <polyline points="18 23 27 23 47 43 86 43 107 64 127 64"></polyline>
            <polyline points="-8.03677904e-06 10.9791757 26.9791757 10.9791757 51 35 90 35 111 56 127 56"></polyline>
            <polyline points="72 92 98 92 110 80 127 80"></polyline>
            <polyline points="84 80 99 80 107 72 127 72"></polyline>
          </g>
          <g id="bottom" transform="translate(596.000000, 504.000000)">
            <polyline points="4.02077033 67.0000542 4.02077033 63.0208243 12.0415946 55 12.0415946 40.0415946 0 28 0 -5.68434189e-14"></polyline>
            <polyline points="20 67 20 36 8 24 8 0"></polyline>
            <polyline points="27 59 27 31 16 20 16 0"></polyline>
            <polyline points="36 67 36 28 24 16 24 0"></polyline>
            <polyline points="48 56 48 48 44 44 44 23 32 11 32 0"></polyline>
          </g>
          <g id="right" transform="translate(620.000000, 427.000000)">
            <polyline points="16 69 28 69 44 85 52 85 56 81 68 81"></polyline>
            <polyline points="16 61 100 61 104 65 111 65"></polyline>
            <polyline points="16 53 120 53 132.041595 65.0415946 132.041595 72.0001243"></polyline>
            <polyline points="16 45 124.00463 45 141.002315 61.9976854"></polyline>
            <polyline points="16 37 128 37 144 53 152 53"></polyline>
            <polyline points="8 28 8 21 17 12 44 12 60 28 131 28 140 37 152 37"></polyline>
            <polyline points="0 28 0 16 16 0 22 0"></polyline>
          </g>
          <g
            id="elements"
            transform="translate(453.000000, 412.000000)"
            stroke="rgb(148 163 184)"
          >
            <rect x="135" y="44" width="48" height="48" rx="4"></rect>
            <circle cx="87" cy="84" r="4"></circle>
            <circle cx="75" cy="96" r="4"></circle>
            <circle cx="22" cy="4" r="4"></circle>
            <circle cx="22" cy="27" r="4"></circle>
            <circle cx="4" cy="15" r="4"></circle>
            <circle cx="193" cy="15" r="4"></circle>
            <circle cx="323" cy="52" r="4"></circle>
            <circle cx="323" cy="68" r="4"></circle>
            <circle cx="311" cy="80" r="4"></circle>
            <circle cx="282" cy="80" r="4"></circle>
            <circle cx="179" cy="163" r="4"></circle>
            <circle cx="191" cy="152" r="4"></circle>
            <circle cx="163" cy="163" r="4"></circle>
            <circle cx="147" cy="163" r="4"></circle>
            <circle cx="299" cy="91" r="4"></circle>
            <path d="M143,43 L143,31"></path>
            <path d="M159,43 L159,31"></path>
            <path d="M151,43 L151,31"></path>
          </g>
        </g>
      </motion.svg>
    </motion.div>
  );
}
