// components/Contact.jsx
import React from 'react';

const Contact = () => {
  const references = [
    {
      name: "Rachel Alwala",
      position: "Co-ordination Officer, Telecommunications Development Bureau",
      organization: "International Telecommunication Union (ITU)",
      contact: "rachel.alwala@itu.int"
    },
    {
      name: "Rosheen Awotar-Mauree",
      position: "Study Group Advisor, Telecommunications Development Bureau",
      organization: "International Telecommunication Union",
      contact: "rosheen.awotar@itu.int"
    },
    {
      name: "Dorine Nalo",
      position: "Head of Programs",
      organization: "Stanbic Foundation",
      contact: "nalod@stanbic.com"
    }
  ];

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact & References</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:ckathu@gmail.com" className="text-blue-600 font-semibold hover:underline">
                  ckathu@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+254721276045" className="text-blue-600 font-semibold hover:underline">
                  +254 721 276 045
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800 font-semibold">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a 
              href="https://linkedin.com/in/caroline-kathure-murianki-51666716"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional References</h3>
          <div className="space-y-6">
            {references.map((ref, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-800 mb-1">{ref.name}</h4>
                <p className="text-blue-600 text-sm mb-1">{ref.position}</p>
                <p className="text-gray-600 text-sm mb-2">{ref.organization}</p>
                <a 
                  href={`mailto:${ref.contact}`}
                  className="text-sm text-gray-500 hover:text-blue-600"
                >
                  {ref.contact}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;