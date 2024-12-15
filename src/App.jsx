import React from "react";
import Navbar from "./pages/Navbar.jsx";
import Hero from "./pages/Hero.jsx";
import Tech from "./pages/Tech.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="fixed inset-0 -z-10 w-full min-h-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 overflow-x-hidden">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
      <Toaster />
    </>
  );
}

export default App;
