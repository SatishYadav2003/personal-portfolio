import React from "react";
import satish from "/public/satishyadav.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

function Hero() {
  const [isAnimationStart, setIsAnimationStart] = useState(false);

  const handleAnimationTypewriter = () => {
    setTimeout(() => {
      setIsAnimationStart(true);
    }, 1000);
  };

  return (
    <div
      id="home"
      className="px-10 flex flex-col min-h-screen w-full items-center justify-center py-28 md:px-24 text-white gap-8"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src={satish}
          alt="logo"
          className="w-[300px] cursor-pointer rounded-full shadow-lg shadow-indigo-500 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-indigo-600 md:w-[350px]"
        />
      </motion.div>

      <div className="flex max-w-[600px] flex-col items-center justify-center gap-2 text-center">
        <motion.h1
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="bg-gradient-to-r from-pink-500  to-blue-500 text-transparent bg-clip-text text-4xl md:text-7xl font-light"
        >
          Satish Yadav
        </motion.h1>
        <motion.h3
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          onAnimationComplete={handleAnimationTypewriter}
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text text-2xl md:text-4xl"
        >
          <span>
            {!isAnimationStart && "Web Developer"}
            {isAnimationStart && (
              <Typewriter
                words={[
                  "Software Developer",
                  "Graphic Designer",
                  "Video Editor",
                  "Ethical Hacker",
                  "Web Developer",
                  "UI/UX Designer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={2000}
              />
            )}
          </span>
        </motion.h3>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="md:text-base text-pretty text-sm text-gray-300"
        >
          I am a web developer skilled in React.js, Next.js with experience in
          building clean, scalable applications. Proficient in integrating
          databases like PostgreSQL, and MongoDB, I focus on delivering
          efficient solutions for dynamic user experiences. Let's build
          something great together!
        </motion.p>
      </div>
    </div>
  );
}

export default Hero;
