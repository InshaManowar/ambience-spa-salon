import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/3151296/pexels-photo-3151296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Luxury Hair Styling"
    },
    {
      src: "https://images.pexels.com/photos/3419693/pexels-photo-3419693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Salon Interior"
    },
    {
      src: "https://images.pexels.com/photos/8467976/pexels-photo-8467976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Salon Interior"
    },
    {
      src: "https://images.pexels.com/photos/1845160/pexels-photo-1845160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Salon Interior"
    },
    {
      src: "https://images.pexels.com/photos/29627558/pexels-photo-29627558/free-photo-of-stylish-man-with-sunglasses-indoors-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "men hair"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          exit={{ opacity: 0 }}
          transition={{
            scale: {
              duration: 10,
              ease: "linear"
            },
            opacity: { duration: 1 }
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentImageIndex].src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-beige-light mb-4 tracking-wider">
          AMBIENCE
        </h1>
        <h2 className="text-3xl md:text-5xl font-serif text-beige-light mb-8">
          SALON • SPA
        </h2>
        <p className="text-xl text-beige-light/80 font-light tracking-widest">
          Premium Beauty Services
        </p>
      </div>
    </div>
  );
};

export default Hero;