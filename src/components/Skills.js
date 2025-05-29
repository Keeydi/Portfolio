import { useState } from "react";
import { FaCode, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiMysql,
  SiLua,
  SiVuedotjs
} from "react-icons/si";

const languageDetails = {
  "C Language": {
    description: "C is a general-purpose programming language created in the 1970s. It's one of the most widely used programming languages and has influenced many other languages.",
    history: "Created by Dennis Ritchie at Bell Labs in 1972. It was developed to write the UNIX operating system and has since become one of the most influential programming languages.",
    keyFeatures: [
      "Low-level programming capabilities",
      "High performance and efficiency",
      "Portable across different platforms",
      "Strong influence on modern languages",
      "Extensive use in system programming"
    ]
  },
  "JavaScript": {
    description: "JavaScript is a high-level, interpreted programming language that is primarily known as the scripting language for Web pages.",
    history: "Created by Brendan Eich in 1995 while working at Netscape. Originally named Mocha, then LiveScript, before being renamed to JavaScript.",
    keyFeatures: [
      "Dynamic typing",
      "Object-oriented programming",
      "Functional programming capabilities",
      "Event-driven programming",
      "Extensive ecosystem (npm)"
    ]
  },
  "React": {
    description: "React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.",
    history: "Created by Jordan Walke at Facebook in 2011, first deployed on Facebook's News Feed in 2011, and later Instagram in 2012. Open-sourced in 2013.",
    keyFeatures: [
      "Component-based architecture",
      "Virtual DOM for efficient rendering",
      "One-way data flow",
      "JSX syntax",
      "Large ecosystem and community"
    ]
  },
  "Node.js": {
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server side.",
    history: "Created by Ryan Dahl in 2009. It was designed to build scalable network applications and has become a fundamental tool in modern web development.",
    keyFeatures: [
      "Event-driven architecture",
      "Non-blocking I/O",
      "NPM package ecosystem",
      "Cross-platform compatibility",
      "Fast execution speed"
    ]
  },
  "HTML5": {
    description: "HTML5 is the fifth and current major version of HTML, the standard markup language for creating web pages and web applications.",
    history: "First published in 2008, HTML5 is the result of cooperation between W3C and WHATWG. It introduced many new features and APIs.",
    keyFeatures: [
      "Semantic elements",
      "Audio and video support",
      "Canvas for graphics",
      "Local storage",
      "Responsive design support"
    ]
  },
  "CSS3": {
    description: "CSS3 is the latest version of CSS (Cascading Style Sheets), used for styling and layout of web pages.",
    history: "CSS3 was developed in the late 1990s and early 2000s, with modules being developed and released independently.",
    keyFeatures: [
      "Flexbox and Grid layouts",
      "Animations and transitions",
      "Media queries",
      "Custom properties (variables)",
      "Advanced selectors"
    ]
  },
  "Java": {
    description: "Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
    history: "Created by James Gosling at Sun Microsystems in 1995. The language was originally called Oak, then Green, before being renamed to Java.",
    keyFeatures: [
      "Platform independence",
      "Object-oriented programming",
      "Strong type system",
      "Automatic memory management",
      "Rich standard library"
    ]
  },
  "PHP": {
    description: "PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language.",
    history: "Created by Rasmus Lerdorf in 1994. Originally stood for 'Personal Home Page', now stands for 'PHP: Hypertext Preprocessor'.",
    keyFeatures: [
      "Server-side scripting",
      "Database integration",
      "Cross-platform compatibility",
      "Large community support",
      "Extensive library of functions"
    ]
  },
  "MySQL": {
    description: "MySQL is an open-source relational database management system that uses SQL (Structured Query Language).",
    history: "Created by Michael Widenius and David Axmark in 1995. It was named after Widenius's daughter, My.",
    keyFeatures: [
      "Relational database system",
      "ACID compliance",
      "High performance",
      "Scalability",
      "Cross-platform support"
    ]
  },
  "Lua": {
    description: "Lua is a lightweight, high-level, multi-paradigm programming language designed primarily for embedded use in applications.",
    history: "Created in 1993 at PUC-Rio (Pontifical Catholic University of Rio de Janeiro) by Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes.",
    keyFeatures: [
      "Lightweight and fast",
      "Embeddable",
      "Simple syntax",
      "Cross-platform",
      "Extensible"
    ]
  },
  "Vue.js": {
    description: "Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications.",
    history: "Created by Evan You in 2014. It was designed to be incrementally adoptable and to combine the best features of Angular and React.",
    keyFeatures: [
      "Progressive framework",
      "Component-based architecture",
      "Reactive data binding",
      "Virtual DOM",
      "Easy learning curve"
    ]
  }
};

const skills = [
  { name: "C Language", icon: <FaCode className="w-12 h-12" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-12 h-12 text-yellow-300" /> },
  { name: "React", icon: <SiReact className="w-12 h-12 text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12 text-green-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="w-12 h-12 text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="w-12 h-12 text-blue-400" /> },
  { name: "Java", icon: <FaJava className="w-12 h-12 text-red-500" /> },
  { name: "PHP", icon: <SiPhp className="w-12 h-12 text-indigo-400" /> },
  { name: "MySQL", icon: <SiMysql className="w-12 h-12 text-blue-600" /> },
  { name: "Lua", icon: <SiLua className="w-12 h-12 text-blue-300" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="w-12 h-12 text-green-400" /> },
];

export default function Skills() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const openModal = (language) => {
    setSelectedLanguage(language);
  };

  const closeModal = () => {
    setSelectedLanguage(null);
  };

  return (
    <section id="skills" className="py-24 px-8 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-8">
        &lt;/&gt; My <span className="text-green-400">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => openModal(skill.name)}
            className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 cursor-pointer transform hover:scale-105"
          >
            {skill.icon}
            <span className="mt-4 text-lg font-medium">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedLanguage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-bold text-green-400">{selectedLanguage}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Description</h4>
                <p className="text-gray-300">{languageDetails[selectedLanguage].description}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-2">History</h4>
                <p className="text-gray-300">{languageDetails[selectedLanguage].history}</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {languageDetails[selectedLanguage].keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 