// components/Education.jsx
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Corporate Governance Training Course for Directors",
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
      degree: "Master of Business Administration (MBA) - Strategic Management",
      institution: "The University of Nairobi",
      period: "01/2005 - 12/2008",
      location: "Nairobi, Kenya",
      thesis: "A Survey of Knowledge Management Structures among Internet Service Providers in Kenya (Score: A)"
    },
    {
      degree: "Bachelor of Science (B.Sc.) - Mathematics and Computer Science",
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      period: "04/1999 - 11/2002",
      location: "Kenya",
      thesis: "Frame Relay Signalling and Analysis of Congestion Using CNET Simulator (Score: A)"
    },
    {
      degree: "Diploma in Information Technology",
      institution: "Jomo Kenyatta University of Agriculture and Technology - Micro-Mini Systems Information Technology Centre",
      period: "01/1998 - 11/1998",
      location: "Kenya"
    }
  ];

  return (
    <section id="education" className="mb-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Education & Certifications</h2>
      <div className="space-y-6 md:space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg p-5 md:p-6 border-l-4 border-blue-500 hover:shadow-xl transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div className="mb-3 md:mb-0 md:pr-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{edu.degree}</h3>
                <p className="text-blue-600 font-semibold text-sm md:text-base mt-1">{edu.institution}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium self-start md:self-center">
                {edu.period}
              </span>
            </div>
            
            <div className="flex items-center text-gray-600 text-sm md:text-base mb-3">
              <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{edu.location}</span>
            </div>
            
            {edu.thesis && (
              <div className="mt-4 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-start">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm md:text-base">Research / Project:</p>
                    <p className="text-gray-600 text-sm md:text-base mt-1">{edu.thesis}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 md:p-6 border border-blue-100">
        <div className="flex items-center mb-3">
          <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.831z" clipRule="evenodd" />
          </svg>
          <h3 className="text-lg md:text-xl font-bold text-gray-800">Professional Memberships</h3>
        </div>
        <div className="space-y-2 pl-8">
          <p className="text-gray-700 text-sm md:text-base">
            <span className="font-semibold">Institute of Customer Experience</span> - Member No. ICX(I) 058-17
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            <span className="font-semibold">Institute of Internal Auditors</span> - Member No. 3115389
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;