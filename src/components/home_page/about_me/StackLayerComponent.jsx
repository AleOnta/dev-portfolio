import { motion } from "framer-motion";

export default function StackLayerComponent({ type }) {
  return (
    <>
      <motion.svg
        className="outline-none w-32 "
        viewBox="39.9614 99.7923 640.0801 397.9275"
        xmlns="http://www.w3.org/2000/svg"
      >
        <h5 className="uppercase absolute z-20">{type}</h5>
        <path
          fill={`${
            type === "frontend"
              ? "#E4CCFF"
              : type === "backend"
              ? "#bde3ff"
              : "#ffc7c2"
          }`}
          opacity="1.000000"
          stroke="none"
          d=" M40.204102,252.326797 C38.990089,246.317642 43.406040,244.651428 47.559025,242.740067 C72.619728,231.206207 97.673721,219.657806 122.729317,208.112869 C156.504929,192.549973 190.290649,177.008957 224.051071,161.413223 C243.516861,152.420944 262.923065,143.299744 282.389099,134.307983 C306.980713,122.948608 331.560303,111.559891 356.287842,100.503136 C358.736633,99.408173 362.577515,99.641518 365.095245,100.769539 C384.357910,109.399986 403.435181,118.443245 422.603302,127.286072 C460.477234,144.758423 498.377563,162.173508 536.256348,179.635254 C549.821960,185.888855 563.355835,192.211304 576.906189,198.497925 C609.472961,213.607056 642.021912,228.755081 674.633789,243.766281 C678.496765,245.544388 680.375793,248.064850 679.666870,252.767380 C676.434387,254.918457 673.667419,256.790192 670.675232,258.175537 C614.665894,284.107391 558.626282,309.973907 502.600311,335.870056 C456.693207,357.089111 410.781464,378.298248 364.922363,399.620575 C361.400940,401.257874 358.385529,401.241577 354.966888,399.582886 C348.384674,396.389313 341.666901,393.476135 335.024567,390.405060 C272.510284,361.501099 210.001450,332.585297 147.488098,303.679321 C116.985985,289.575195 86.444359,275.555756 56.002857,261.322113 C50.530914,258.763580 45.460114,255.347137 40.204102,252.326797 z"
          transform="matrix(1, 0, 0, 1, 3.552713678800501e-15, 0)"
        />
        <path
          fill={`${
            type === "frontend"
              ? "#9747FF"
              : type === "backend"
              ? "#0d99ff"
              : "#ff7c70"
          }`}
          opacity="1.000000"
          stroke="none"
          d=" M40.145477,252.766785 C45.460114,255.347137 50.530914,258.763580 56.002857,261.322113 C86.444359,275.555756 116.985985,289.575195 147.488098,303.679321 C210.001450,332.585297 272.510284,361.501099 335.024567,390.405060 C341.666901,393.476135 348.384674,396.389313 354.966888,399.582886 C358.385529,401.241577 361.400940,401.257874 364.922363,399.620575 C410.781464,378.298248 456.693207,357.089111 502.600311,335.870056 C558.626282,309.973907 614.665894,284.107391 670.675232,258.175537 C673.667419,256.790192 676.434387,254.918457 679.630676,253.175934 C679.959900,283.733765 679.904785,314.389038 680.041260,345.043488 C680.059326,349.107361 678.692444,351.378693 674.958862,353.077881 C653.252258,362.956573 631.632629,373.026611 610.000916,383.069458 C589.757080,392.468018 569.560120,401.967865 549.296631,411.323761 C525.530823,422.296722 501.690460,433.108398 477.929077,444.090942 C457.495605,453.535370 437.141205,463.150696 416.726776,472.636475 C399.003815,480.871613 381.287018,489.123535 363.445953,497.096039 C361.435577,497.994385 358.281921,497.897308 356.253815,496.965729 C297.791138,470.111389 239.405273,443.089844 181.005402,416.098755 C141.244186,397.722046 101.484962,379.341034 61.712910,360.987823 C56.304813,358.492157 50.797409,356.211487 45.392529,353.709137 C42.034050,352.154205 39.939140,349.930328 39.961536,345.668121 C40.123497,314.848328 40.071255,284.027344 40.145477,252.766785 z"
          transform="matrix(1, 0, 0, 1, 3.552713678800501e-15, 0)"
        />
        <motion.text
          fill={
            type === "frontend"
              ? "#4d00b3"
              : type === "backend"
              ? "#0077cc"
              : "#ff4433"
          }
          style={{
            userSelect: "none",
            fontFamily: "Inter",
            fontSize: "14.974px",
            fontWeight: 700,
            textAnchor: "middle",
            whiteSpace: "pre",
            transformOrigin: "473.314px 310.215px",
          }}
          transform="matrix(4.218080997467, -1.879002094269, 5.279533863068, 2.363672018051, -135.347673085847, -70.495027028833)"
        >
          <tspan x="476.025" y="310.427">
            {type === "frontend"
              ? "FRONT"
              : type === "backend"
              ? "BACK"
              : "OTHER"}
          </tspan>
          <tspan x="476.025" dy="1em">
            ​
          </tspan>
          <tspan>
            {type === "frontend" ? "END" : type === "backend" ? "END" : "TOOLS"}
          </tspan>
        </motion.text>
      </motion.svg>
    </>
  );
}