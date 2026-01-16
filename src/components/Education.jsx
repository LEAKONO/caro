// components/Education.jsx
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Corporate Governance Training Course",
      institution: "Centre for Corporate Governance",
      period: "06/2023",
      location: "Mombasa, Kenya"
    },
    {
      degree: "Senior Management Course (SMC)",
      institution: "Kenya School of Government",
      period: "07/2021 - 09/2021",
      location: "Nairobi, Kenya"
    },
    {
      degree: "Master of Communications Management",
      institution: "Buckinghamshire New University",
      period: "01/2015 - 09/2016",
      location: "United Kingdom",
      thesis: "Modelling Regulatory Mechanisms to Increase Consumer Confidence in E-Commerce in Kenya"
    },
    {
      degree: "Master of Business Administration (MBA)",
      institution: "University of Nairobi",
      period: "01/2005 - 12/2008",
      location: "Nairobi, Kenya",
      thesis: "A Survey of Knowledge Management Structures among Internet Service Providers"
    }
  ];

  return (
    <section id="education" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Education & Certifications</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <div className={`bg-white p-6 rounded-xl shadow-lg max-w-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {edu.period}
                  </span>
                </div>
                <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                <p className="text-gray-600 mb-2">{edu.location}</p>
                {edu.thesis && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Research:</span> {edu.thesis}
                    </p>
                  </div>
                )}
              </div>
              <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;