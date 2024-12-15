import React, { useState } from "react";
import { BsYoutube, BsGithub, BsInstagram, BsFacebook } from "react-icons/bs";
import { BiX, BiMenu } from "react-icons/bi";
import { motion } from "framer-motion";

function Navbar() {
  const spanClasses = [
    "absolute",
    "-bottom-3",
    "left-0",
    "w-0",
    "h-[3px]",
    "bg-indigo-600",
    "group-hover:w-full",
    "transition-all",
    "duration-500",
    "rounded-full",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuReaction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text opacity-80 text-3xl font-semibold transition-all  duration-300 hover:opacity-100"
      >
        Satish
      </a>

      <ul className="hidden md:flex gap-8 ">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative group "
        >
          <li>Home</li>
          <span className={spanClasses.join(" ")}></span>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative group"
        >
          <li>Tech</li>
          <span className={spanClasses.join(" ")}></span>
        </a>
        <a
          href="#project"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative group"
        >
          <li>Projects</li>
          <span className={spanClasses.join(" ")}></span>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 relative group"
        >
          <li>Contact</li>
          <span className={spanClasses.join(" ")}></span>
        </a>
      </ul>

      <ul className="hidden md:flex gap-6">
        <a
          href="https://www.youtube.com/@awesomeyadavji1032"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-red-600 hover:scale-125">
            <BsYoutube />
          </li>
        </a>

        <a
          href="https://www.instagram.com/satish521999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-orange-700 hover:scale-125">
            <BsInstagram />
          </li>
        </a>

        <a
          href="https://github.com/SatishYadav2003"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-orange-500 hover:scale-125">
            <BsGithub />
          </li>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100062336089915&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-blue-700 hover:scale-125">
            <BsFacebook />
          </li>
        </a>
      </ul>

      {
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.5 }}
          className="cursor-pointer text-3xl md:hidden block"
          onClick={handleMenuReaction}
        >
          {isOpen ? <BiX /> : <BiMenu />}
        </motion.div>
      }

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 50, damping: 17 }}
        className={`fixed right-0 top-[84px] flex flex-col h-screen w-2/3 items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 
          }`}
      >
        <ul className="flex flex-col gap-8">
          <a
            href="#home"
            onClick={handleMenuReaction}
            className="cursor-pointer opacity-70 transition-all  hover:opacity-100"
          >
            <li>Home</li>
          </a>

          <a
            href="#tech"
            onClick={handleMenuReaction}
            className="cursor-pointer opacity-70 transition-all  hover:opacity-100"
          >
            <li>Tech</li>
          </a>

          <a
            href="#project"
            onClick={handleMenuReaction}
            className="cursor-pointer opacity-70 transition-all  hover:opacity-100"
          >
            <li>Projects</li>
          </a>

          <a
            href="#contact"
            onClick={handleMenuReaction}
            className="cursor-pointer opacity-70 transition-all  hover:opacity-100"
          >
            <li>Contact</li>
          </a>
        </ul>

        <ul className="flex flex-wrap gap-5">
          <a
            href="https://www.youtube.com/@awesomeyadavji1032"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-red-600 hover:scale-125">
              <BsYoutube />
            </li>
          </a>

          <a
            href="https://www.instagram.com/satish521999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-orange-600 hover:scale-125">
              <BsInstagram />
            </li>
          </a>

          <a
            href="https://github.com/SatishYadav2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-orange-500 hover:scale-125">
              <BsGithub />
            </li>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100062336089915&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 text-xl hover:text-blue-700 hover:scale-125">
              <BsFacebook />
            </li>
          </a>
        </ul>
      </motion.div>
    </div>
  );
}

export default Navbar;
