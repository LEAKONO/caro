// components/Expertise.jsx - Enhanced with 3D effect
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Expertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const expertises = [
    { icon: '⚖️', title: 'ICT Policy & Regulation', color: 'from-blue-500 to-blue-600' },
    { icon: '🛡️', title: 'Consumer Protection', color: 'from-green-500 to-green-600' },
    { icon: '👶', title: 'Child Online Protection', color: 'from-pink-500 to-pink-600' },
    { icon: '🌐', title: 'Digital Inclusion', color: 'from-purple-500 to-purple-600' },
    { icon: '🤝', title: 'Stakeholder Management', color: 'from-indigo-500 to-indigo-600' },
    { icon: '🎯', title: 'Strategic Planning', color: 'from-orange-500 to-orange-600' },
    { icon: '📊', title: 'Public Policy Management', color: 'from-teal-500 to-teal-600' },
    { icon: '🚀', title: 'Project Management', color: 'from-red-500 to-red-600' },
  ];

  const softSkills = [
    'Strategic Leadership', 'Communication Excellence', 'Analytical Thinking',
    'Negotiation Mastery', 'Critical Problem Solving', 'Team Development',
    'Innovation Mindset', 'Results Orientation'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="expertise" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Areas of Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            18+ years of specialized experience in ICT regulation and consumer empowerment
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Professional Expertise Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-4">
              {expertises.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                  }}
                  className={`bg-gradient-to-br ${skill.color} p-6 rounded-2xl text-white transform-gpu transition-all duration-300 hover:z-10`}
                >
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h4 className="font-bold text-lg">{skill.title}</h4>
                  <div className="h-1 w-12 bg-white/30 rounded-full mt-3"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Professional Skills</h3>
            <motion.div className="space-y-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="group"
                >
                  <div className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-gray-700">{skill}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive Skills Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl shadow-inner"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Specialized Expertise Levels</h3>
          <div className="space-y-6">
            {[
              { skill: 'ICT Policy Design', level: 95, color: 'bg-blue-500' },
              { skill: 'Consumer Protection', level: 98, color: 'bg-green-500' },
              { skill: 'Stakeholder Engagement', level: 92, color: 'bg-purple-500' },
              { skill: 'Regulatory Compliance', level: 96, color: 'bg-indigo-500' },
              { skill: 'Digital Inclusion', level: 90, color: 'bg-pink-500' },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">{item.skill}</span>
                  <span className="font-bold text-gray-800">{item.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full ${item.color} shadow-lg`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;