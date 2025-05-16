import authentication from "/public/advancedAuthenticationSystem.jpg";
import book from "/public/bookStore.jpg";
import MovieStore from "/public/MovieStore.png";
import Compiler from "/public/Compiler.png";
import personalPortfolio from "/public/personalPortfolio.jpg";

import { motion } from "framer-motion";

const projectData = [
  {
    image: MovieStore,
    title: "Movie Store",
    github: "https://github.com/SatishYadav2003/movie-store.git",
    description:
      "Developed a movie store web application where users can browse and download movies based on quality. The site includes a download system with ad-based redirection, modal-based resolution selection, and secure download handling using dynamic headers. The frontend is responsive and user-friendly, and the backend uses Puppeteer for scraping and Express for handling secure downloads.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express",
      "NodeJs",
      "Puppeteer",
      "Selenium",
      "Python",
      "Nodemailer",
      "Firebase",
    ],
  },
  {
    image: Compiler,
    title: "Mini Compiler",
    github: "https://github.com/SatishYadav2003/Mini-Compiler.git",
    description:
      "A simple yet powerful compiler that translates Satish language to C. Features lexical analysis with Flex, parsing with Bison, semantic analysis, Three-Address Code (TAC) generation, and C code output. Supports integer variables, arithmetic operations, input/output capabilities, and string handling. Perfect for learning compiler construction fundamentals.",
    technologies: ["C Language", "Flex", "Bison"],
  },

  {
    image: authentication,
    title: "Advanced Authentication System",
    github:
      "https://github.com/SatishYadav2003/Advanced_Authentication_System.git",
    description:
      "Built a Node.js, Express.js, and MongoDB application for secure user authentication and authorization, utilizing React for the frontend, JWT for secure token-based authentication, cookies for session management, CRUD operations for data handling, and Framer Motion for smooth animations.",
    technologies: ["React", "Tailwind", "NodeJs", "ExpressJs", "JWT"],
  },
  {
    image: book,
    title: "Book Store",
    github: "https://github.com/SatishYadav2003/BookStore.git",
    description:
      "Developed a Book Store application using React for the frontend, Tailwind CSS for styling, DaisyUI for components, Node.js and Express for the backend, and Vite for fast development setup. The app allows users to browse, add, and purchase books, providing a smooth and responsive user experience.",
    technologies: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "NodeJS",
      "Express",
      "Vite",
      "MongoDB",
    ],
  },
  {
    image: personalPortfolio,
    title: "Personal Portfolio",
    github: "https://github.com/SatishYadav2003/personal-portfolio.git",
    description:
      "Created a personal portfolio website to showcase my skills, projects, and experiences. The website includes smooth animations, a responsive design, and interactive elements to engage visitors. It features a sleek, modern interface with sections for my background, projects, and contact information.",
    technologies: [
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Vite",
      "Express",
      "EmailJs",
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
            <div className="flex items-center gap-4">
              <div className="text-xl font-bold">{project.title}</div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm  bg-white text-black px-3 py-1 rounded-lg hover:bg-gray-200 transition"
              >
                GitHub Link
              </a>
            </div>

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
