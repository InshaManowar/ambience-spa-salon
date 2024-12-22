import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      mobile: {
        src: "https://i.ibb.co/Y7d3TZ2/7.png",
        alt: "Luxury Hair Styling"
      },
      desktop: {
        src: "https://i.ibb.co/RHbJFZY/1.png",
        alt: "Luxury Hair Styling"
      }
    },
    {
      mobile: {
        src: "https://i.ibb.co/chd538z/6.png",
        alt: "Salon Interior"
      },
      desktop: {
        src: "https://i.ibb.co/6NHm8v8/4-1.png",
        alt: "Salon Interior"
      }
    },
    {
      mobile: {
        src: "https://images.pexels.com/photos/8467976/pexels-photo-8467976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Salon Interior"
      },
      desktop: {
        src: "https://images.pexels.com/photos/8467976/pexels-photo-8467976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Salon Interior"
      }
    },
    {
      mobile: {
        src: "https://images.pexels.com/photos/1845160/pexels-photo-1845160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Salon Interior"
      },
      desktop: {
        src: "https://images.pexels.com/photos/1845160/pexels-photo-1845160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Salon Interior"
      }
    },
    {
      mobile: {
        src: "https://i.ibb.co/30LXFp3/2.png",
        alt: "men hair"
      },
      desktop: {
        src: "https://i.ibb.co/30LXFp3/2.png",
        alt: "men hair"
      }
    },
    {
      mobile: {
        src: "https://i.ibb.co/7X165XH/3-2.png",
        alt: "men hair"
      },
      desktop: {
        src: "https://i.ibb.co/7X165XH/3-2.png",
        alt: "men hair"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
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
        >
          {/* Mobile Image */}
          <img 
            src={images[currentImageIndex].mobile.src}
            alt={images[currentImageIndex].mobile.alt}
            className={`md:hidden w-full h-full object-cover`}
          />
          {/* Desktop Image */}
          <img 
            src={images[currentImageIndex].desktop.src}
            alt={images[currentImageIndex].desktop.alt}
            className="hidden md:block w-full h-full object-cover object-center"
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