// components/HeroWithFramer.jsx - Adjusted image size
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroWithFramer = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "/images/1.jpg",
      title: "Professional Leadership",
      description: "Leading consumer protection initiatives",
      color: "from-blue-500 to-blue-700"
    },
    {
      url: "/images/2.jpg",
      title: "Conference Speaker",
      description: "Sharing expertise at international forums",
      color: "from-purple-500 to-purple-700"
    },
    {
      url: "/images/3.jpg",
      title: "Stakeholder Engagement",
      description: "Building partnerships for consumer protection",
      color: "from-green-500 to-green-700"
    },
    {
      url: "/images/4.jpg",
      title: "Award Recognition",
      description: "Celebrating achievements and innovations",
      color: "from-pink-500 to-pink-700"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white relative overflow-hidden w-full min-h-screen flex items-center pt-16 md:pt-0">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-14 xl:gap-16 items-start justify-center">
          
          {/* Text Content - Left on desktop, below image on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-2 lg:order-1 mt-8 lg:mt-12 xl:mt-16"
          >
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              >
                Caroline Kathure
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200 mt-2">
                  Murianki
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed mb-6 sm:mb-8 md:mb-10"
              >
                21+ years transforming digital consumer experiences across Kenya and Africa through innovative policy design, regulatory excellence, and empowering education initiatives.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <button className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto">
                  ✉️ Contact Me
                </button>
                <button className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto">
                  📄 Download CV
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section - Right on desktop, top on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col items-center pt-8 lg:pt-0" /* Removed extra padding */
          >
            {/* Main Image Container - REDUCED SIZE */}
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md mx-auto lg:max-w-lg xl:max-w-xl">
              <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[440px] mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                  >
                    {/* ACTUAL IMAGE WITH FALLBACK */}
                    <div className="relative w-full h-full">
                      {/* Actual Image */}
                      <img
                        src={images[currentImageIndex].url}
                        alt={images[currentImageIndex].title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          console.error('Image failed to load:', images[currentImageIndex].url);
                          e.target.style.display = 'none';
                        }}
                      />
                      
                      {/* Fallback gradient background - shown if image fails to load */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${images[currentImageIndex].color} flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 text-center ${images[currentImageIndex].url ? 'hidden' : ''}`}
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
                        >
                          {/* Emoji based on image index */}
                          {currentImageIndex === 0 && "💼"}
                          {currentImageIndex === 1 && "🎤"}
                          {currentImageIndex === 2 && "🤝"}
                          {currentImageIndex === 3 && "🏆"}
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                        >
                          {images[currentImageIndex].title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-white/80 text-sm sm:text-base"
                        >
                          {images[currentImageIndex].description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative frame - REDUCED SIZE */}
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border-2 border-white/30 rounded-2xl sm:rounded-3xl -z-10"></div>
              </div>

              {/* ICT Consumer Protection Expert Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center mt-6 sm:mt-8"
              >
                <span className="bg-white/10 backdrop-blur-sm px-5 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium border border-white/20 text-center">
                  ICT Consumer Protection Expert
                </span>
              </motion.div>

              {/* Image Navigation - Just Dots */}
              <div className="flex justify-center mt-4 sm:mt-6">
                <div className="flex gap-3">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className="relative focus:outline-none"
                      aria-label={`Go to image ${index + 1}`}
                    >
                      <div
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          currentImageIndex === index
                            ? "bg-white scale-125"
                            : "bg-white/40 hover:bg-white/60"
                        }`}
                      />
                      {currentImageIndex === index && (
                        <motion.div
                          layoutId="activeDot"
                          className="absolute inset-0 w-2 h-2 sm:w-3 sm:h-3 rounded-full border-2 border-white"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default HeroWithFramer;