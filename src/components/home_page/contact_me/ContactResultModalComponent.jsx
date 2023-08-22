import { motion } from "framer-motion";
import {
  IoCloseOutline,
  IoWarningOutline,
  IoCheckboxOutline,
} from "react-icons/io5";

export default function ContactResultModalComponent({
  show,
  setShow,
  result,
  setResult,
  setValidated,
  setValidatedErrors,
  setUserMessage,
}) {
  const closeModal = () => {
    setUserMessage({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
    setShow(false);
    setResult(false);
    setValidated(false);
    setValidatedErrors({});
  };

  return (
    <motion.div
      className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed bg-smooth-black inset-0 z-50 outline-none focus:outline-none"
      exit={{
        opacity: 0,
      }}
    >
      <motion.div
        className="relative w-auto my-6 mx-auto max-w-sm xl:max-w-md 2xl:max-w-lg shadow-md shadow-gray-700 rounded-md"
        initial={{
          y: "-20vh",
          opacity: 0,
          scale: 0.65,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        exit={{
          y: "-20vh",
          opacity: 0,
          scale: 0.65,
        }}
      >
        <motion.div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-blueish-charcoal outline-none focus:outline-none">
          <motion.div className="flex items-center justify-between p-5 border-b border-solid border-li-gray rounded-t bg-gun-metal bg-opacity-70">
            <motion.h3 className="text-2xl font-titles font=semibold text-snow-white">
              {result ? "Thank You!" : "Oops! Let's see..."}
            </motion.h3>
            <motion.button
              onClick={closeModal}
              className="p-2 bg-slate-300 rounded-full ms-5 shadow-sm"
              whileHover={{
                scale: 1.045,
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgb(148 163 184)",
              }}
            >
              <IoCloseOutline />
            </motion.button>
          </motion.div>
          <motion.div className="p-6 flex flex-col justify-between items-center bg-gun-metal bg-opacity-25">
            <motion.span
              className={`bg-opacity-50 p-2 flex items-center justify-center rounded-md shadow-md ${
                result ? "bg-emerald-500" : "bg-rose-500"
              }`}
            >
              {result ? (
                <IoCheckboxOutline className="text-7xl text-snow-white" />
              ) : (
                <IoWarningOutline className="text-7xl text-snow-white" />
              )}
            </motion.span>

            <motion.div className="w-6/6 xl: w-5/6 mt-4 bg-smooth-gray p-3 rounded-md text-snow-white shadow-md">
              <p className="text-sm">
                {result
                  ? "Your message has been received!"
                  : "An error has occurred while sending your message, this is due to some malfunctions of the third parties service i am using."}
              </p>
              <p className="text-sm">
                {result
                  ? "I really appreciate your interest and i will give you a feedback as soon i will read your message."
                  : "I am afraid you're gonna have to try again later or contact me through some others platforms."}
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="flex items-center justify-end p-6 border-t border-solid border-li-gray rounded-b bg-gun-metal bg-opacity-70">
            <motion.button
              className="text-gun-metal shadow-md bg-slate-300 rounded-md font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
              type="motion.button"
              onClick={closeModal}
              whileHover={{
                scale: 1.045,
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgb(148 163 184)",
              }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
