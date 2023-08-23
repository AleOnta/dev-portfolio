import React from "react";
import Logo from "../../../assets/images/projects_previews/showcase_logo.svg";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  const handleProjects = () => {
    const element = document.getElementById("project-top-description");
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-custom-charcoal rounded-lg shadow">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={Logo} className="h-8 mr-3" alt="Alessandro Ontai Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-snow-white">
              AleOnta
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li
              className="mr-4 hover:underline md:mr-6"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              About
            </li>
            <li
              className="mr-4 hover:underline md:mr-6"
              onClick={handleProjects}
            >
              Projects
            </li>
            <li className="mr-4 hover:underline md:mr-6">Contacts</li>
            <li>
              <Link
                to="https://github.com/AleOnta"
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
              >
                GitHub
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 <span className="hover:underline">AleOnta™</span>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
}
