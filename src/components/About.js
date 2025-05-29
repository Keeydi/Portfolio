import React from 'react';

function About() {
  return (
    <section id="about" className="bg-gray-800 py-24 px-8 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">[About Image]</div>
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-4xl font-bold mb-4 text-center md:text-left">About <span className="text-green-400">Me</span></h2>
        <div className="space-y-4">
          <p className="text-lg md:text-xl leading-relaxed">
            I'm Karl L. Darnayla, a third-year BSIT student driven by a passion for technology, gaming, and innovation. As a Full-Stack & Game Developer, I specialize in FiveM/RedM development, where I build immersive multiplayer experiences, optimized systems, and custom game mechanics.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I have a strong focus on user interface design, crafting clean, responsive, and user-friendly layouts that elevate the gameplay experience. Whether it's developing full-featured web apps or designing intuitive game menus, I take pride in delivering high-quality, functional solutions.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            With experience in both backend logic and frontend polish, I enjoy bridging the gap between design and development to bring ideas to life—turning concepts into reality with code and creativity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
