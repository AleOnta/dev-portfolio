import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ValidationAlertComponent from "./ValidationAlertComponent";
import emailjs from "@emailjs/browser";
import ContactResultModalComponent from "./ContactResultModalComponent";

export default function ContactFormComponent() {
  const form = useRef();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [validated, setValidated] = useState(false);
  const [validatedErrors, setValidatedErrors] = useState({});
  const [userMessage, setUserMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  function validateMessage() {
    setValidatedErrors({});
    const validationErrors = {};

    // checks for validation
    // 1 => firstname:
    if (!userMessage.firstname.trim()) {
      validationErrors.firstname = "Firstname is required";
    } else if (userMessage.firstname.length < 3) {
      validationErrors.firstname = "Firstname must be over 2 characters";
    }

    // 2 => lastname:
    if (!userMessage.lastname.trim()) {
      validationErrors.lastname = "Lastname is required";
    } else if (userMessage.lastname.length < 2) {
      validationErrors.lastname = "Lastname must be over 1 characters";
    }

    // 3 => email:
    if (!userMessage.email.trim()) {
      validationErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(userMessage.email)) {
      validationErrors.email = "Email isn't valid";
    }

    // 4 => message:
    if (!userMessage.message.trim()) {
      validationErrors.message = "Message is required";
    } else if (userMessage.message.length < 10) {
      validationErrors.message = "Message must be over 10 characters";
    }

    console.log("validating");
    // Setting errors in useState, if presents
    setValidatedErrors(validationErrors);

    console.log("validated");
    // Setting validation result as boolean in useState
    if (Object.keys(validationErrors).length === 0) {
      setValidated(true);
    } else {
      setIsLoading(false);
      setValidated(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    validateMessage();
  };

  useEffect(() => {
    const handleEmail = () => {
      if (validated) {
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
            process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result);
              if (result.status === 200) {
                setResult(true);
              } else {
                setResult(false);
              }
            },
            (error) => {
              console.log(error);
            }
          )
          .finally(() => {
            setShow(true);
            setIsLoading(false);
          });
      }
    };

    handleEmail();
  }, [validated]);

  return (
    <motion.div className="w-full lg:w-2/5">
      <h5 className="font-titles text-white text-2xl uppercase font-semibold mb-10">
        SEND ME A MESSAGE
      </h5>
      <motion.form
        ref={form}
        onSubmit={handleSubmit}
        className="flex flex-col bg-smooth-black p-5 rounded-xl shadow-md"
      >
        <motion.div className="mb-1 flex items-center">
          <motion.label
            className="text-xs text-slate-300 font-body font-medium uppercase"
            htmlFor="contact_fname"
          >
            Firstname
          </motion.label>
          <AnimatePresence>
            {validatedErrors.firstname && (
              <ValidationAlertComponent message={validatedErrors.firstname} />
            )}
          </AnimatePresence>
        </motion.div>
        <input
          type="text"
          id="contact_fname"
          name="from_firstname"
          placeholder="Your firstname..."
          className="rounded-md bg-slate-100"
          value={userMessage.firstname}
          onChange={(e) =>
            setUserMessage({
              ...userMessage,
              firstname: e.target.value,
            })
          }
        />
        <motion.div className="mt-3 mb-1 flex items-center">
          <motion.label
            className="text-xs text-slate-300 font-body font-medium uppercase "
            htmlFor="contact_lname"
          >
            Lastname
          </motion.label>
          <AnimatePresence>
            {validatedErrors.lastname && (
              <ValidationAlertComponent message={validatedErrors.lastname} />
            )}
          </AnimatePresence>
        </motion.div>
        <input
          type="text"
          id="contact_lname"
          name="from_lastname"
          placeholder="Your lastname..."
          className="rounded-md bg-slate-100"
          value={userMessage.lastname}
          onChange={(e) =>
            setUserMessage({
              ...userMessage,
              lastname: e.target.value,
            })
          }
        />
        <motion.div className="mt-3 mb-1 flex items-center">
          <motion.label
            className="text-xs text-slate-300 font-body font-medium uppercase"
            htmlFor="contact_email"
          >
            Email
          </motion.label>
          <AnimatePresence>
            {validatedErrors.email && (
              <ValidationAlertComponent message={validatedErrors.email} />
            )}
          </AnimatePresence>
        </motion.div>
        <input
          type="text"
          id="contact_email"
          name="from_email"
          placeholder="Your email..."
          className="rounded-md bg-slate-100"
          value={userMessage.email}
          onChange={(e) =>
            setUserMessage({
              ...userMessage,
              email: e.target.value,
            })
          }
        />
        <motion.div className="mt-3 mb-1 flex items-center">
          <motion.label
            className="text-xs text-slate-300 font-body font-medium uppercase "
            htmlFor="contact_email"
          >
            Email
          </motion.label>
          <AnimatePresence>
            {validatedErrors.message && (
              <ValidationAlertComponent message={validatedErrors.message} />
            )}
          </AnimatePresence>
        </motion.div>
        <textarea
          id="contact_message"
          name="message"
          rows={6}
          placeholder="Write your message in here..."
          className="rounded-md bg-slate-100 max-h-80"
          value={userMessage.message}
          onChange={(e) =>
            setUserMessage({
              ...userMessage,
              message: e.target.value,
            })
          }
        />
        <motion.button
          type="submit"
          className={`w-full mt-3 bg-slate-600 text-white rounded-md font-titles ${
            isLoading
              ? "xs:w-[207px] h-[40px] flex items-center justify-center"
              : "xs:w-fit px-12 py-2"
          }`}
          whileHover={{
            backgroundColor: "rgb(100 116 139)",
          }}
        >
          {isLoading ? <span class="loader"></span> : "Send message"}
        </motion.button>
      </motion.form>
      <AnimatePresence>
        {show ? (
          <ContactResultModalComponent
            show={show}
            setShow={setShow}
            result={result}
            setResult={setResult}
            setValidated={setValidated}
            setValidatedErrors={setValidatedErrors}
            setUserMessage={setUserMessage}
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
