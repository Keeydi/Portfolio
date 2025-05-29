import React, { useState } from 'react';

const samplePosts = [
  {
    title: 'How I Built My Portfolio',
    date: '2024-05-29',
    excerpt: 'A step-by-step guide on building a modern developer portfolio using React and Tailwind CSS.',
    description: 'In this comprehensive guide, I walk through the process of creating a modern, responsive portfolio website. From setting up the development environment to deploying the final product, I cover all the essential steps and share valuable insights gained along the way.',
    languages: ['React', 'Tailwind CSS', 'JavaScript'],
    link: '#',
  },
  {
    title: 'Tips for Learning Full-Stack Development',
    date: '2024-05-20',
    excerpt: 'My favorite resources and strategies for mastering both frontend and backend development.',
    description: 'Discover the most effective strategies and resources for becoming a full-stack developer. This article shares my personal journey and the tools that helped me master both frontend and backend technologies.',
    languages: ['JavaScript', 'Node.js', 'React', 'Python', 'SQL'],
    link: '#',
  },
  {
    title: 'Why Dark Mode Matters',
    date: '2024-05-10',
    excerpt: 'Exploring the benefits of dark mode for user experience and accessibility.',
    description: 'A deep dive into the importance of dark mode in modern web applications. Learn about its impact on user experience, accessibility, and how to implement it effectively in your projects.',
    languages: ['CSS', 'JavaScript', 'Accessibility'],
    link: '#',
  },
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Blog &amp; <span className="text-green-400">Articles</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {samplePosts.map((post, idx) => (
          <div key={idx} className="bg-gray-900 rounded-lg shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-bold mb-2 text-green-400">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <button 
              onClick={() => openModal(post)}
              className="text-green-400 hover:text-green-300 underline"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-green-400">{selectedPost.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                <p className="text-gray-300">{selectedPost.description}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Languages & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.languages.map((lang, index) => (
                    <span 
                      key={index}
                      className="bg-green-400 bg-opacity-20 text-green-400 px-3 py-1 rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Published Date</h4>
                <p className="text-gray-300">{selectedPost.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog; 