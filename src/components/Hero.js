import React from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin, FaViber } from 'react-icons/fa';
import heroImg from '../assets/hero.png';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-16 gap-12"
    >
      <div className="flex-1 flex flex-col justify-center items-start max-w-xl md:pl-20">
        <h2 className="text-4xl md:text-5xl font-medium mb-4">Hi, my name is</h2>
        <h1 className="text-7xl md:text-8xl font-extrabold mb-4">
          Karl <span className="text-green-400">Darnayla</span>
        </h1>
        <p className="text-3xl md:text-4xl font-semibold mb-4">Full-Stack & Game Developer</p>
        <p className="text-lg md:text-2xl text-gray-400 mb-6">
          Specializing in FiveM/RedM development and crafting immersive gaming experiences
        </p>
        <div className="flex space-x-6 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="w-8 h-8 hover:text-green-400 transition" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="w-8 h-8 hover:text-green-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-8 h-8 hover:text-green-400 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-8 h-8 hover:text-green-400 transition" />
          </a>
          <a href="https://viber.com" target="_blank" rel="noopener noreferrer" aria-label="Viber">
            <FaViber className="w-8 h-8 hover:text-green-400 transition" />
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="w-[50rem] h-[50rem] bg-green-900 rounded-full flex items-center justify-center overflow-hidden shadow-lg md:ml-auto md:ml-42">
          <img src={heroImg} alt="Hero" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero; 