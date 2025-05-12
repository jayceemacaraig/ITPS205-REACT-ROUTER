import React from "react";
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import NavBar from "./components/NavBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className='main'>
      <img
        src="https://raphaelenciso.com/heroIcons.svg"
        alt=""
        className="bg"
      ></img>
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>  
      </main>
      <Footer />
    </div>

  );
};

export default App;
