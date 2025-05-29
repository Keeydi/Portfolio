import React, { useEffect, useState } from 'react';

const stats = [
  { label: 'Years Experience', value: 1 },
  { label: 'Projects Completed', value: 7 },
  { label: 'Happy Clients', value: 7 },
  { label: 'Certifications', value: 9 },
];

const skills = [
  { name: 'C Language', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'HTML/CSS', level: 95 },
  { name: 'Java', level: 75 },
  { name: 'PHP', level: 70 },
  { name: 'MySQL', level: 80 },
  { name: 'Lua', level: 85 },
  { name: 'Vue.js', level: 75 },
];

const timeline = [
  { year: '2023 - Present', title: 'BSIT Student', place: 'Our Lady of Fatima University' },
  { year: '2022', title: 'STEM Student', place: 'San Francisco High School' },
  { year: '2019 - 2020', title: 'Student', place: 'Coronados School of Quezon City' },
  { year: '2016 - 2018', title: 'Grade 7-9 Student', place: 'Judge Feliciano Belmonte Senior High School' },
];

function AnimatedStat({ value }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let incrementTime = 1500 / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}</span>;
}

function Highlights() {
  return (
    <section id="highlights" className="py-16 px-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Profile <span className="text-green-400">Highlights</span></h2>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
            <span className="text-4xl font-bold text-green-400 mb-2">
              <AnimatedStat value={stat.value} />
            </span>
            <span className="text-gray-200">{stat.label}</span>
          </div>
        ))}
      </div>
      
      {/* Two Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Tech Stack - Left Column */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-green-400">Tech Stack Proficiency</h3>
          {skills.map((skill, idx) => (
            <div key={idx} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-green-500 h-4 rounded-full transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline - Right Column */}
        <div className="pl-8 md:pl-52">
          <h3 className="text-2xl font-bold mb-4 text-green-400">Timeline</h3>
          <div className="border-l-4 border-green-400 pl-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="mb-8 relative">
                <div className="absolute -left-7 top-0 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900"></div>
                <div className="text-lg font-bold">{item.title}</div>
                <div className="text-gray-400 text-sm mb-1">{item.place}</div>
                <div className="text-gray-500 text-xs">{item.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights; 