// components/Achievements.jsx - Enhanced with animated cards
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const majorAchievements = [
    {
      title: "Policy Design & Regulation",
      description: "Built comprehensive consumer protection framework across 13 regulatory instruments",
      stats: "13 instruments",
      icon: "⚖️",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Child Online Protection",
      description: "Established national mandate for child safety as matter of policy",
      stats: "3M+ children reached",
      icon: "👶",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Digital Transformation",
      description: "Revolutionized complaint resolution with 100% digital migration",
      stats: "21 days resolution",
      icon: "⚡",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Industry Innovation",
      description: "Catalysed sector-wide shift from infrastructure to service innovation",
      stats: "80% cost reduction",
      icon: "🚀",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Stakeholder Engagement",
      description: "Built ecosystem of 50+ partners for consumer education initiatives",
      stats: "50+ partners",
      icon: "🤝",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "International Leadership",
      description: "Co-authored ITU publications contributing to global best practices",
      stats: "2 ITU publications",
      icon: "🌍",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const awards = [
    {
      title: "Most Promising Innovation 2022",
      issuer: "Africa Public Service Day",
      description: "Gamification of Child Online Protection Programme",
      icon: "🏆",
      color: "bg-yellow-100 border-yellow-200"
    },
    {
      title: "Letter of Commendation 2014",
      issuer: "Communications Authority",
      description: "Exceptional leadership in consumer affairs",
      icon: "📜",
      color: "bg-blue-100 border-blue-200"
    },
    {
      title: "Babaroa Trust Award 2002",
      issuer: "JKUAT",
      description: "Best overall third year student in Mathematics & CS",
      icon: "🎓",
      color: "bg-green-100 border-green-200"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, rotateX: 15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section id="achievements" ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Key Achievements & Awards
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized impact and transformational contributions to ICT consumer protection in Kenya and beyond
          </p>
        </motion.div>

        {/* Achievement Cards Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="pb-12"
          >
            {majorAchievements.map((achievement, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                  className={`bg-gradient-to-br ${achievement.color} p-8 rounded-2xl text-white h-full min-h-[350px] flex flex-col relative overflow-hidden group`}
                >
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-6">{achievement.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{achievement.title}</h3>
                    <p className="text-white/90 mb-6 flex-grow">{achievement.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-3xl font-bold">{achievement.stats}</div>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Awards Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Awards & Recognition</h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 10 }}
                  className={`${award.color} p-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">{award.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{award.title}</h4>
                      <p className="text-gray-600 mb-2">{award.description}</p>
                      <div className="inline-block bg-white/80 px-3 py-1 rounded-full text-sm font-medium">
                        {award.issuer}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">International Publications</h3>
            <div className="space-y-6">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-3xl text-white">📘</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">ITU Publications</h4>
                    <p className="text-gray-600">International Telecommunications Union</p>
                  </div>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>"Consumer awareness in the digital transformation age"</span>
                  </li>
                  <li className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>"Manual on a Harmonized Strategy to Address Risks in Digital Financial Services"</span>
                  </li>
                  <li className="flex items-center p-3 bg-pink-50 rounded-lg">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>"Consumer Information, Protection and Rights" best-practice guide</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;