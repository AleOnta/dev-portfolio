import React from "react";
import { motion } from "framer-motion";
import MyContactsComponent from "./MyContactsComponent";
import ContactFormComponent from "./ContactFormComponent";

export default function ContactComponent() {
  return (
    <motion.div className="container px-6 mt-10 mb-28 md:mt-32 pb-0 md:p-0 md:px-8">
      <motion.div>
        <motion.h2 className="font-titles font-bold text-4xl md:text-5xl text-white tracking-tight md:px-12 md:py-8 mb-6 drop-shadow-xl">
          My Contacts
        </motion.h2>
      </motion.div>
      <motion.div className="contacts-container flex flex-col lg:flex-row justify-around">
        <MyContactsComponent />
        <ContactFormComponent />
      </motion.div>
    </motion.div>
  );
}
