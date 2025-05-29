import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTiktok, FaInstagram, FaLinkedin, FaViber } from 'react-icons/fa';
import heroImg from '../assets/hero.png';

const TypewriterText = ({ words, typingSpeed = 100, deletingSpeed = 50, delay = 1000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    if (isWaiting) {
      const timer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
      const timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timer);
    }

    if (text === currentWord) {
      setIsWaiting(true);
      return;
    }

    const timer = setTimeout(() => {
      setText(currentWord.substring(0, text.length + 1));
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, isWaiting, words, typingSpeed, deletingSpeed, delay]);

  return <span className="text-white">{text}<span className="animate-pulse">_</span></span>;
};

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
        <p className="text-3xl md:text-4xl font-semibold mb-4">
          <TypewriterText 
            words={[
              'Full-Stack Developer',
              'Game Developer',
              'Full-Stack & Game Developer'
            ]}
            typingSpeed={50}
            deletingSpeed={30}
            delay={1500}
          />
        </p>
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
