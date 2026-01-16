// components/Experience.jsx
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Assistant Director/ Public Awareness and Empowerment",
      company: "Communications Authority of Kenya",
      period: "05/2025 - Present",
      achievements: [
        "Head of Public Awareness and Empowerment Function",
        "Served as Vice-Rapporteur, ITU-D Study Group 1",
        "Co-chaired Kenya's Technical Working Group on Child Online Protection",
        "Designed consumer empowerment programme for Persons with Disabilities"
      ]
    },
    {
      role: "Ag. Deputy Director, Public Education and Awareness",
      company: "Communications Authority of Kenya",
      period: "02/2025 - 05/2025",
      achievements: [
        "Head of Public Education and Awareness",
        "Oversaw adaptive regulatory policy and frameworks",
        "Led implementation of robust performance management system"
      ]
    },
    {
      role: "Principal Officer, Consumer Education and Outreach",
      company: "Communications Authority of Kenya",
      period: "01/2024 - 12/2024",
      achievements: [
        "Acting Head of Public Education and Awareness",
        "Led data-driven policymaking and program refinement",
        "Project lead for Consumer Education and Empowerment Programmes"
      ]
    }
  ];

  return (
    <section id="experience" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                <p className="text-blue-600 font-semibold">{exp.company}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-700 font-semibold">
          View Full Experience Timeline →
        </button>
      </div>
    </section>
  );
};

export default Experience;