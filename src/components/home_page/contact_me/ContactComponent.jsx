import React from "react";
import { motion } from "framer-motion";
import MyContactsComponent from "./MyContactsComponent";
import ContactFormComponent from "./ContactFormComponent";

export default function ContactComponent() {
  return (
    <motion.div className="container p-6 pb-0 md:p-0 md:px-8">
      <motion.div className="contacts-container flex flex-col lg:flex-row justify-around">
        <MyContactsComponent />
        <ContactFormComponent />
      </motion.div>
    </motion.div>
  );
}
