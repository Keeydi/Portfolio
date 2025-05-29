import React from 'react';

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-8 py-16">
      <h2 className="text-3xl font-bold mb-4">Contact <span className="text-green-400">me</span></h2>
      <p className="mb-8">Feel free to contact me anytime</p>
      
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Left Column - Google Maps */}
        <div className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123545.6661234567!2d120.9634!3d14.6538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b8f1b8a02e8f%3A0x4c2cf4c6d359a682!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1647043087964!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map - Quezon City, Philippines"
          ></iframe>
        </div>

        {/* Right Column - Contact Form */}
        <div className="w-full md:w-1/2">
          <form className="w-full flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input 
                className="flex-1 p-2 rounded mb-2 md:mb-0 border border-gray-300 focus:border-green-500 focus:outline-none" 
                type="text" 
                placeholder="Full name" 
              />
              <input 
                className="flex-1 p-2 rounded border border-gray-300 focus:border-green-500 focus:outline-none" 
                type="email" 
                placeholder="Enter your e-mail" 
              />
            </div>
            <textarea 
              className="p-2 rounded min-h-[120px] border border-gray-300 focus:border-green-500 focus:outline-none" 
              placeholder="Enter your message"
            ></textarea>
            <button className="bg-green-600 text-white font-bold py-3 rounded hover:bg-green-700 transition-colors duration-300">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact; 