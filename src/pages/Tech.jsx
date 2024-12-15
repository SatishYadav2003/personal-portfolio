import React from "react";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

import { motion } from "framer-motion";

function Tech() {
  const technologyVarient = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const leftMotionVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const rightMotionVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div
      id="tech"
      className="flex min-h-[88vh] w-full flex-col items-center justify-center gap-16 md:gap-32"
    >
      <motion.h1
        variants={technologyVarient}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Technologies
      </motion.h1>

      <div className="flex  flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={leftMotionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex"
        >
          <motion.div>
            <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 hover:rotate-[360deg] sm:text-[100px] md:text-[120px]" />
          </motion.div>
          <motion.div>
            <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 hover:-rotate-[360deg] sm:text-[100px] md:text-[120px]" />
          </motion.div>
          <motion.div>
            <BiLogoMongodb className="cursor-pointer text-[80px] text-green-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] hover:rotate-[360deg] md:text-[120px]" />
          </motion.div>
          <motion.div>
            <BiLogoTailwindCss className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] hover:-rotate-[360deg] md:text-[120px]" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={rightMotionVariant}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex"
        >
          <motion.div>
            <BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5  hover:rotate-[360deg] sm:text-[100px] md:text-[120px]" />
          </motion.div>
          <motion.div>
            <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px]  hover:-rotate-[360deg] md:text-[120px]" />
          </motion.div>
          <motion.div>
            <BiLogoPython className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px]  hover:rotate-[360deg] md:text-[120px]" />
          </motion.div>
          <motion.div>
            <BiLogoPostgresql className="cursor-pointer text-[80px] text-blue-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px]  hover:-rotate-[360deg] md:text-[120px]" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tech;
