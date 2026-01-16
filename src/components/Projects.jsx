// components/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Child Online Protection Programme",
      description: "Gamified safety education reaching 3M+ children annually",
      impact: "National recognition as Most Promising Innovation 2022",
      tags: ["Child Safety", "Gamification", "Digital Literacy"]
    },
    {
      title: "Consumer Complaints Digital Transformation",
      description: "100% migration to Integrated Management Information System",
      impact: "Reduced resolution time to 21 days from industry average of 60+",
      tags: ["Digital Transformation", "Process Automation", "Consumer Rights"]
    },
    {
      title: "County ICT Consumer Forums",
      description: "National outreach programme across 19 counties",
      impact: "6M+ adult participants annually, 50+ strategic partners",
      tags: ["Stakeholder Engagement", "Public Awareness", "Digital Inclusion"]
    },
    {
      title: "ICT Accessibility Programme for PWDs",
      description: "Specialized consumer education targeting persons with disabilities",
      impact: "Enhanced digital inclusion and accessibility standards",
      tags: ["Accessibility", "Inclusion", "Special Needs"]
    }
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Projects & Initiatives</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                  {index + 1}/4
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center text-green-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Impact: {project.impact}
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-1"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;