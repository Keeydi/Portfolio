import React from 'react';

function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-2 text-green-600">{project.title}</h3>
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded mb-4" />
        <p className="mb-4 text-gray-800 dark:text-gray-200">{project.description}</p>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">View Project</a>
        )}
      </div>
    </div>
  );
}

export default ProjectModal; 