import React from "react";
import { motion } from "framer-motion";
import MyContactsComponent from "./MyContactsComponent";
import ContactFormComponent from "./ContactFormComponent";

export default function ContactComponent() {
  return (
    <motion.div
      className="container px-6 mt-10 mb-28 md:mt-32 pb-0 md:p-0 md:px-8 pt-6"
      id="contact-container"
    >
      <motion.div className="mb-16 md:mb-20 lg:mb-24">
        <motion.h2 className="font-titles text-4xl md:text-5xl lg:text-6xl text-white md:px-12 md:py-8 mb-6 drop-shadow-xl text-center font-normal uppercase tracking-widest">
          My Contacts
        </motion.h2>
      </motion.div>
      <motion.div className="contacts-container flex flex-col lg:flex-col items-center">
        <MyContactsComponent />
        <ContactFormComponent />
      </motion.div>
    </motion.div>
  );
}
