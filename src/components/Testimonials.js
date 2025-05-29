import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Project Manager',
    company: 'Tech Solutions Inc.',
    project: 'E-commerce Platform Development',
    quote: 'Karl is a dedicated developer who always delivers high-quality work on time. Highly recommended!',
    fullTestimonial: 'Working with Karl on our e-commerce platform was an absolute pleasure. His technical expertise and attention to detail were instrumental in delivering a robust and user-friendly solution. He consistently met deadlines and went above and beyond to ensure the project\'s success. His ability to communicate effectively and adapt to changing requirements made him an invaluable team member.',
    duration: '6 months',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
  },
  {
    name: 'Alex Rivera',
    role: 'Senior Developer',
    company: 'Innovate Labs',
    project: 'AI-Powered Analytics Dashboard',
    quote: 'His attention to detail and passion for learning new technologies make him a valuable team member.',
    fullTestimonial: 'Karl joined our team during a critical phase of our AI analytics project. His quick learning ability and innovative approach to problem-solving helped us overcome several technical challenges. He not only mastered our existing codebase quickly but also introduced new best practices that improved our development workflow. His collaborative nature and technical leadership were key to our project\'s success.',
    duration: '1 year',
    technologies: ['Python', 'TensorFlow', 'React', 'Docker']
  },
  {
    name: 'Prof. Liza Cruz',
    role: 'Instructor',
    company: 'Tech Academy',
    project: 'Web Development Bootcamp',
    quote: 'Karl stands out for his creativity and problem-solving skills in every project.',
    fullTestimonial: 'As an instructor, I\'ve had the pleasure of mentoring Karl through our advanced web development bootcamp. His dedication to learning and natural talent for programming were evident from day one. He consistently produced exceptional projects and was always willing to help his peers. His ability to break down complex concepts and implement them creatively sets him apart from other developers.',
    duration: '3 months',
    technologies: ['JavaScript', 'React', 'Node.js', 'SQL']
  },
];

function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <section id="testimonials" className="py-16 px-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
            onClick={() => openModal(t)}
          >
            <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4">
              {t.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="text-lg font-bold mb-1 text-green-400">{t.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{t.role}</p>
            <p className="italic mb-4">"{t.quote}"</p>
            <span className="text-green-400 text-sm">Click to read more</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                  {selectedTestimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400">{selectedTestimonial.name}</h3>
                  <p className="text-gray-400">{selectedTestimonial.role} at {selectedTestimonial.company}</p>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Project</h4>
                <p className="text-gray-300">{selectedTestimonial.project}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Full Testimonial</h4>
                <p className="text-gray-300 italic">"{selectedTestimonial.fullTestimonial}"</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTestimonial.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-green-400 bg-opacity-20 text-green-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Duration</h4>
                <p className="text-gray-300">{selectedTestimonial.duration}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Testimonials; 