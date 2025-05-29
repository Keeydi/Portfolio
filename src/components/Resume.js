import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-16 px-8 flex flex-col items-center bg-gray-800">
      <h2 className="text-3xl font-bold mb-4">Download <span className="text-green-400">Resume</span></h2>
      <p className="mb-6 text-center">Click the button below to download my resume as a PDF.</p>
      <a
        href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        download="KarlDarnayla-Resume.pdf"
        className="bg-green-600 text-white font-bold py-3 px-8 rounded hover:bg-green-700 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </section>
  );
}

export default Resume; 