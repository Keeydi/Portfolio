import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Highlights from './components/Highlights';
import DevToolsDetector from './components/DevToolsDetector';

function App() {
  // Dark/Light mode state
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={"min-h-screen " + (darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900') }>
      <DevToolsDetector />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
      <Resume />
      <Highlights />
      <Contact />
      {/* Extra Features Placeholders */}
      {/* Dark/Light Mode Toggle, Project Modal, Blog, Testimonials, Resume, Stats, Timeline, etc. */}
    </div>
  );
}

export default App;
