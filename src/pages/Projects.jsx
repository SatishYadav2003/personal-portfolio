import React from "react";
import authentication from "/public/advancedAuthenticationSystem.jpg";
import book from "/public/bookStore.jpg";
import dr from "/public/drTime.jpg";
import netflix from "/public/netflixClone.jpg";
import personalPortfolio from "/public/personalPortfolio.jpg";

import { motion } from "framer-motion";

const projectData = [
  {
    image: authentication,
    title: "Advanced Authentication System",
    description:
      "Built a Node.js, Express.js, and MongoDB application for secure user authentication and authorization, utilizing React for the frontend, JWT for secure token-based authentication, cookies for session management, CRUD operations for data handling, and Framer Motion for smooth animations.",
    technologies: [
      "HTMl",
      "Tailwind",
      "React.js",
      "Node.js",
      "Express.js",
      "jwt",
    ],
  },
  {
    image: book,
    title: "Book Store",
    description:
      "Developed a Book Store application using React for the frontend, Tailwind CSS for styling, DaisyUI for components, Node.js and Express for the backend, and Vite for fast development setup. The app allows users to browse, add, and purchase books, providing a smooth and responsive user experience.",
    technologies: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Node.js",
      "Express",
      "Vite",
      "MongoDB",
    ],
  },
  {
    image: netflix,
    title: "Netflix Clone",
    description:
      "Built a basic Netflix clone using HTML and CSS, replicating the UI design and basic features like movie listing and navigation for a static web application.",
    technologies: ["HTML", "CSS"],
  },
  {
    image: dr,
    title: "Dr. Time",
    description:
      "Built a Doctor Scheduling application using React for the frontend, Tailwind CSS for styling, Flowbite for components, Node.js and Express for the backend, and Vite for fast development setup. JWT is used for secure user authentication, allowing patients to book appointments with doctors seamlessly.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Flowbite",
      "Node.js",
      "Express",
      "Vite",
      "JWT",
      "MongoDB",
    ],
  },
  {
    image: personalPortfolio,
    title: "Personal Portfolio",
    description:
      "Created a personal portfolio website to showcase my skills, projects, and experiences. The website includes smooth animations, a responsive design, and interactive elements to engage visitors. It features a sleek, modern interface with sections for my background, projects, and contact information.",
    technologies: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Vite",
      "JWT",
      "Node.js",
      "Express",
      "MongoDB",
      "Render",
    ],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <ScrollerAnimation>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>

            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollerAnimation>
  );
};

const ScrollerAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

function Projects() {
  const technologyVarient = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <div
        id="project"
        className="flex min-h-screen flex-col items-center justify-center gap-28 px-4  py-32 md:px-14 md:py-24"
      >
        <motion.h1
          variants={technologyVarient}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-light text-white md:text-6xl "
        >
          My Projects
        </motion.h1>

        <div className="flex flex-col w-full max-w-[1000px] gap-16 text-white">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
