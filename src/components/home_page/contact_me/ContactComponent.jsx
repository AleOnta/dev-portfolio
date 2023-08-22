import React from "react";
import { motion } from "framer-motion";
import MyContactsComponent from "./MyContactsComponent";
import ContactFormComponent from "./ContactFormComponent";

export default function ContactComponent() {
  return (
    <motion.div className="container p-6 pb-0 md:p-0 md:px-8">
      <motion.div className="w-full h-[200px] flex justify-center items-center mt-56 mb-20 bg-black bg-opacity-25 rounded-xl shadow-md">
        <motion.h2 className="text-white text-5xl font-bold font-titles uppercase">
          CONTACT ME
        </motion.h2>
      </motion.div>
      <motion.div className="contacts-container flex flex-col lg:flex-row justify-around">
        <MyContactsComponent />
        <ContactFormComponent />
      </motion.div>
    </motion.div>
  );
}
