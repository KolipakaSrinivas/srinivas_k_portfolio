import React, { useState, useEffect } from "react";

import FadeInOnScroll from "./FadeInOnScroll";
import ToggleButton from "./ToggleButton";

function NavBar({ toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(
    () => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    },
    [lastScrollY]
  );

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav
      className={`w-full fixed z-50 left-0 top-0 transition-transform  duration-300 ${showNav
        ? "md:translate-y-0 "
        : "-translate-y-full"}   px-5 md:px-[6rem] lg:px-[10rem] py-5 overflow-hidden bg-slate-50  dark:bg-[#111827] font-SpaceMono`}
    >
      <div className="flex justify-between items-center w-full">
        <FadeInOnScroll direction="down" delay={0}>
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <svg
              height="15"
              className="h-[2.5rem] w-[2.5rem] text-green-500 fill-current"
              viewBox="0 0 24 24"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z" />
            </svg>
          </a>
        </FadeInOnScroll>
        <div className="md:hidden ml-auto mr-5">
          <FadeInOnScroll direction="down" delay={0.1}>
            <ToggleButton toggleDarkMode={toggleDarkMode} />
          </FadeInOnScroll>
        </div>
        <FadeInOnScroll direction="down" delay={0.2}>
          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden relative z-50  fill-current  dark text-gray-00 rounded-lg p-2 hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            {isMenuOpen
              ? <svg
                  // enable-background="new 0 0 48 48"
                  className="bg-slate-50 dark:bg-[#101828] fill-current dark:text-gray-100 "
                  width={25}
                  height={25}
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 48 48"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <g id="Layer_3">
                    <polygon points="47.998,4.247 43.758,0.002 24.001,19.758 4.245,0.002 0.004,4.247 19.758,24.001 0.004,43.755    4.25,47.995 24.001,28.244 43.752,47.995 47.998,43.755 28.244,24.001  " />{" "}
                  </g>
                </svg>
              : <svg
                  width={25}
                  height={25}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>}
          </button>
        </FadeInOnScroll>

        {/* Desktop Nav */}
        <ul className="hidden mt-5 md:flex gap-[2rem] text-black dark:text-white">
          <FadeInOnScroll direction="down" delay={0.1}>
            <li className="">
              <span className="text-green-600">01.</span>
              <a href="/">Home</a>
            </li>
          </FadeInOnScroll>
          <FadeInOnScroll direction="down" delay={0.2}>
            <li>
              <span className="text-green-600">02.</span>
              <a href="#about">About</a>
            </li>
          </FadeInOnScroll>
          <FadeInOnScroll direction="down" delay={0.3}>
            <li>
              <span className="text-green-600">04.</span>
              <a href="#work">Works</a>
            </li>
          </FadeInOnScroll>
          <FadeInOnScroll direction="down" delay={0.4}>
            <li>
              <span className="text-green-600">04.</span>
              <a href="#contact">Contact</a>
            </li>
          </FadeInOnScroll>
        </ul>
      </div>

      {/* Mobile Side Nav */}
      <div
        className={`fixed top-0 right-0 h-full w-2/4 bg-slate-100 dark:bg-[#111827] z-20 p-5 transition-transform duration-300 ease-in-out ${isMenuOpen
          ? "translate-x-0"
          : "translate-x-full"} md:hidden`}
      >
        <ul className="flex flex-col  pb-[10rem] items-center justify-center h-full gap-[2rem] text-black">
          <FadeInOnScroll direction="down" delay={0.1}>
            <li className="text-xl dark:text-slate-200">
              <span className="text-green-600">01.</span>
              <a href="#" onClick={toggleMenu}>
                Home
              </a>
            </li>
          </FadeInOnScroll>
          <FadeInOnScroll direction="down" delay={0.2}>
            <li className="text-xl dark:text-slate-200">
              <span className="text-green-600">02.</span>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
          </FadeInOnScroll>
          <FadeInOnScroll direction="down" delay={0.3}>
            <li className="text-xl dark:text-slate-200">
              <span className="text-green-600">03.</span>
              <a href="#work" onClick={toggleMenu}>
                Works
              </a>
            </li>
          </FadeInOnScroll>
          <FadeInOnScroll direction="down" delay={0.4}>
            <li className="text-xl dark:text-slate-200">
              <span className="text-green-600">04.</span>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </FadeInOnScroll>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
