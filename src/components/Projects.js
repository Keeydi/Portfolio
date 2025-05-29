import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ServersSlider.css';

const sampleProjects = [
  {
    title: 'Coffee Shop',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'A modern coffee shop website with menu and ordering features.',
    link: '#',
  },
  {
    title: 'Youtube Cloned',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'A Youtube clone with video streaming and search.',
    link: '#',
  },
  {
    title: 'Barangay Services',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'A web app for managing barangay services and requests.',
    link: '#',
  },
];

const serverList = [
  {
    title: 'RED CROWN CITY ROLEPLAY',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'A vibrant city roleplay server with unique features.'
  },
  {
    title: 'ECSTASY ROLEPLAY',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Experience immersive roleplay and engaging stories.'
  },
  {
    title: 'CLEVER MINDS ROLE PLAY',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'A creative community for clever minds and fun scenarios.'
  },
  {
    title: 'PANDORA CITY',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Explore the mysteries of Pandora City.'
  },
  {
    title: 'SCHOOL POV',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    description: 'Roleplay your school life in a fun environment.'
  },
  {
    title: 'CHROME CITY',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
    description: 'A futuristic city roleplay experience.'
  },
  {
    title: 'DOWNTOWN ROLEPLAY',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    description: 'Live your story in the heart of downtown.'
  },
];

const serverRowRef = React.createRef();

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-gray-800 min-h-screen flex flex-col items-center px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">My <span className="text-green-400">Projects</span></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {sampleProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
            onClick={() => openModal(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description.substring(0, 50)}...</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">SERVERS</h2>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-600 transition-colors"
            onClick={() => {
              serverRowRef.current.scrollBy({ left: -380, behavior: 'smooth' });
            }}
            aria-label="Scroll left"
            style={{ left: '-2.5rem' }}
          >
            &#8592;
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-600 transition-colors"
            onClick={() => {
              serverRowRef.current.scrollBy({ left: 380, behavior: 'smooth' });
            }}
            aria-label="Scroll right"
            style={{ right: '-2.5rem' }}
          >
            &#8594;
          </button>
          <div
            ref={serverRowRef}
            className="flex gap-8 overflow-x-auto hide-scrollbar scroll-smooth py-2"
            style={{ scrollBehavior: 'smooth' }}
          >
            {serverList.map((server, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer w-[350px] min-w-[350px] max-w-[350px]"
                onClick={() => openModal(server)}
              >
                <img src={server.image} alt={server.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{server.title}</h3>
                  <p className="text-gray-400">{server.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal open={modalOpen} onClose={closeModal} project={selectedProject} />
    </section>
  );
}

export default Projects; 