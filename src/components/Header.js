import React from 'react';

function Header({ darkMode, setDarkMode }) {
  return (
    <header className={(darkMode ? 'bg-gray-950' : 'bg-white') + " w-full flex justify-between items-center px-8 py-4 sticky top-0 z-50"}>
      <div className="text-4xl font-bold text-green-400 ml-12">Karl <span className="text-green-600">Darnayla</span></div>
      <nav className="space-x-6 flex items-center text-xl">
        <a href="#home" className="hover:text-green-400">Home</a>
        <a href="#about" className="hover:text-green-400">About</a>
        <a href="#skills" className="hover:text-green-400">Skills</a>
        <a href="#projects" className="hover:text-green-400">Projects</a>
        <a href="#contact" className="bg-green-600 px-5 py-2.5 rounded text-white hover:bg-green-700 text-xl">Contact</a>
        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="ml-4 px-4 py-1.5 rounded border border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition text-xl"
          aria-label="Toggle dark mode"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>
    </header>
  );
}

export default Header; 