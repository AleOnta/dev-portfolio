import {
  BsDiscord,
  BsGithub,
  BsLinkedin,
  BsFillXCircleFill,
} from "react-icons/bs";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BiMenu } from "react-icons/bi";
import Resume from "../../assets/pdf/CVEN.pdf";
import { AnimatePresence, motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Logo from "../../assets/images/logos/logo-portfolio-favicon.svg";

export default function ScrollNavbarComponent() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { width, height } = useWindowDimensions();

  const navbarVariants = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const mobileVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const listVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const socialVariants = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  function handleShow() {
    let scrolledTo = window.scrollY;
    if (scrolledTo >= 445) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  function handleScrollTo(to) {
    setTimeout(() => {
      switch (to) {
        case "projects": {
          const element = document.getElementById("project-top-description");
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: "smooth",
          });
          break;
        }
        case "contacts": {
          const element = document.getElementById("contact-container");
          window.scrollTo({
            top: element.offsetTop - 70,
            behavior: "smooth",
          });
          break;
        }
        default: {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }, 1000);
  }

  function handleScrollToDesktop(to) {
    switch (to) {
      case "projects": {
        const element = document.getElementById("project-top-description");
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: "smooth",
        });
        break;
      }
      case "contacts": {
        const element = document.getElementById("contact-container");
        window.scrollTo({
          top: element.offsetTop - 70,
          behavior: "smooth",
        });
        break;
      }
      default: {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }

  useEffect(() => {
    open
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [open]);

  useEffect(() => {
    window.addEventListener("scroll", handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <motion.div
      className="fixed flex justify-center top-1 left-0 right-0 h-16 mx-auto z-50 "
      variants={navbarVariants}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
    >
      {width < 1024 ? (
        <>
          <motion.div className="on-scroll-navbar w-[388px] xs:w-[488px] sm:w-[592px] md:w-[703px] px-4 bg-gun-metal rounded-lg shadow-2xl flex items-center justify-between ">
            <img
              src={Logo}
              alt="Alessandro Ontani Logo"
              width={width < 640 ? 35 : 40}
              height={width < 640 ? 35 : 40}
            />
            <motion.div
              className="flex items-center justify-center text-slate-500 text-2xl"
              onClick={() => setOpen(true)}
              whileHover={{
                color: "rgb(149 163 164)",
                scale: 1.1,
                cursor: "pointer",
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <BiMenu />
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {open && (
              <motion.div
                className="absolute h-screen w-screen bg-blueish-gray -top-1 left-0 right-0 mx-auto flex flex-col items-center justify-center text-2xl font-rubik font-medium"
                variants={mobileVariants}
                exit={{
                  y: "-100vh",
                  opacity: 0,
                  transition: { delay: 1, duration: 0.3 },
                }}
              >
                <motion.button
                  className="absolute top-3 right-3 text-li-gray"
                  onClick={() => setOpen(false)}
                  whileHover={{
                    color: "rgb(255, 255, 255)",
                    scale: 1.1,
                    cursor: "pointer",
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <BsFillXCircleFill />
                </motion.button>
                <motion.button
                  className="text-snow-white uppercase my-4 sm:my-6 drop-shadow-2xl"
                  onClick={() => window.open(Resume, "_blank")}
                  variants={itemVariants}
                  whileHover={{
                    color: "rgb(149 163 164)",
                  }}
                  exit={{ y: -25, opacity: 0, transition: { delay: 0.9 } }}
                >
                  Check Résumé
                </motion.button>
                <motion.button
                  className="text-snow-white uppercase my-4 sm:my-6 drop-shadow-2xl"
                  onClick={() => {
                    setOpen(false);
                    handleScrollTo("projects");
                  }}
                  variants={itemVariants}
                  whileHover={{
                    color: "rgb(149 163 164)",
                  }}
                  exit={{ y: -25, opacity: 0, transition: { delay: 0.7 } }}
                >
                  My Projects
                </motion.button>
                <motion.button
                  className="text-snow-white uppercase my-4 sm:my-6 drop-shadow-2xl"
                  onClick={() => {
                    setOpen(false);
                    handleScrollTo("contacts");
                  }}
                  variants={itemVariants}
                  whileHover={{
                    color: "rgb(149 163 164)",
                  }}
                  exit={{ y: -25, opacity: 0, transition: { delay: 0.5 } }}
                >
                  My Contacts
                </motion.button>
                <motion.button
                  className="text-snow-white uppercase my-4 sm:my-6 drop-shadow-2xl"
                  variants={itemVariants}
                  whileHover={{
                    color: "rgb(149 163 164)",
                  }}
                  exit={{ y: -25, opacity: 0, transition: { delay: 0.3 } }}
                  onClick={() => {
                    setOpen(false);
                    handleScrollTo("");
                  }}
                >
                  Scroll to top
                </motion.button>
                <motion.ul
                  className="flex items-center justify-around xs:justify-center w-2/3 mt-5 xs:mt-14 md:mt-20"
                  variants={listVariants}
                >
                  <motion.li
                    className="text-2xl text-li-gray xs:mx-8 sm:mx-10 md:mx-12"
                    variants={socialVariants}
                    exit={{ y: 25, opacity: 0, transition: { delay: 0.2 } }}
                    onClick={() =>
                      window.open("https://github.com/AleOnta", "_blank")
                    }
                    whileHover={{
                      color: "rgb(255, 255, 255)",
                      scale: 1.025,
                      cursor: "pointer",
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <BsGithub />
                  </motion.li>
                  <motion.li
                    className="text-2xl text-li-gray xs:mx-8 sm:mx-10 md:mx-12"
                    variants={socialVariants}
                    exit={{ y: 25, opacity: 0, transition: { delay: 0.1 } }}
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/alessandro-ontani-76848a191/",
                        "_blank"
                      )
                    }
                    whileHover={{
                      color: "rgb(255, 255, 255)",
                      scale: 1.025,
                      cursor: "pointer",
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <BsLinkedin />
                  </motion.li>
                  <motion.li
                    className="text-2xl text-li-gray xs:mx-8 sm:mx-10 md:mx-12"
                    variants={socialVariants}
                    exit={{ y: 25, opacity: 0 }}
                    whileHover={{
                      color: "rgb(255, 255, 255)",
                      scale: 1.025,
                      cursor: "pointer",
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    <BsDiscord />
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <motion.div className="on-scroll-navbar w-[952px] xl:w-[1216px] 2xl:w-[1472px] px-4 bg-gun-metal bg-opacity-75 rounded-lg shadow-2xl flex items-center justify-between">
          <motion.div className="flex items-center justify-start">
            <img
              src={Logo}
              alt="Alessandro Ontani Logo"
              className="me-6"
              width={width < 640 ? 35 : 40}
              height={width < 640 ? 35 : 40}
            />
            <motion.ul className="flex items-center justify-around xs:justify-center ">
              <motion.li
                className="text-xl text-li-gray mx-2 "
                exit={{ y: 25, opacity: 0, transition: { delay: 0.2 } }}
                onClick={() =>
                  window.open("https://github.com/AleOnta", "_blank")
                }
                whileHover={{
                  color: "rgba(255,255,255)",
                  scale: 1.025,
                  cursor: "pointer",
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <BsGithub />
              </motion.li>
              <motion.li
                className="text-xl text-li-gray mx-2 "
                exit={{ y: 25, opacity: 0, transition: { delay: 0.1 } }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/alessandro-ontani-76848a191/",
                    "_blank"
                  )
                }
                whileHover={{
                  color: "rgba(255,255,255)",
                  scale: 1.025,
                  cursor: "pointer",
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <BsLinkedin />
              </motion.li>
              <motion.li
                className="text-xl text-li-gray mx-2 "
                exit={{ y: 25, opacity: 0 }}
                whileHover={{
                  color: "rgba(255,255,255)",
                  scale: 1.025,
                  cursor: "pointer",
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <BsDiscord />
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div className="flex items-center justify-center gap-4">
            <motion.button
              className="relative inline-flex items-center justify-center w-[100px] py-2 overflow-hidden font-rubik uppercase font-medium text-sm text-white bg-custom-charcoal rounded-lg group"
              onClick={() => window.open(Resume, "_blank")}
            >
              <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blueish-charcoal"></span>
              <span className="relative">Résumé</span>
            </motion.button>
            <motion.button
              className="relative inline-flex items-center justify-center w-[100px] py-2 overflow-hidden font-rubik uppercase font-medium text-sm text-white bg-custom-charcoal rounded-lg group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blueish-charcoal"></span>
              <span className="relative">About me</span>
            </motion.button>
            <motion.button
              className="relative inline-flex items-center justify-center w-[100px] py-2 overflow-hidden font-rubik uppercase font-medium text-sm text-white bg-custom-charcoal rounded-lg group"
              onClick={() => {
                handleScrollToDesktop("projects");
              }}
            >
              <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blueish-charcoal"></span>
              <span className="relative">Projects</span>
            </motion.button>
            <motion.button
              className="relative inline-flex items-center justify-center w-[100px] py-2 overflow-hidden font-rubik uppercase font-medium text-sm text-white bg-custom-charcoal rounded-lg group"
              onClick={() => {
                handleScrollToDesktop("contacts");
              }}
            >
              <span className="absolute w-0 h-0 transition-all duration-700 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blueish-charcoal"></span>
              <span className="relative">Contacts</span>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
