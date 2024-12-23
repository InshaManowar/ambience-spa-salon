import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroImages } from '../utils/imageData';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  const currentImage = isMobile 
    ? heroImages[currentImageIndex].mobile 
    : heroImages[currentImageIndex].desktop;

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{
            scale: {
              duration: 9,
              ease: "linear"
            },
            opacity: { duration: 1 }
          }}
          className="absolute inset-0"
        >
          <img 
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 text-center">
        <h1 className="text-4xl md:text-7xl font-serif text-beige-light mb-2 md:mb-4 tracking-wider">
          AMBIENCE
        </h1>
        <h2 className="text-2xl md:text-5xl font-serif text-beige-light mb-4 md:mb-8">
          SALON • SPA
        </h2>
        <p className="text-lg md:text-xl text-beige-light/80 font-light tracking-widest">
          Premium Beauty Services
        </p>
      </div>
    </div>
  );
};

export default Hero;