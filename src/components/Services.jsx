import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCategories } from '../api/services';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [categories, setCategories] = useState([]);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        // Check if scrolled from start
        setShowLeftArrow(container.scrollLeft > 0);
        
        // Check if scrolled to end
        const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
        setShowRightArrow(!isAtEnd);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
      
      // Add this check after categories are loaded
      setTimeout(() => {
        const container = scrollContainerRef.current;
        if (container) {
          setShowRightArrow(container.scrollWidth > container.clientWidth);
        }
      }, 0);
    };
    getCategories();
  }, []);
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleBookNowClick = () => {
    window.scrollTo(0, 0);
    navigate('/book');
  };

  return (
    <section id="services" className="py-24 bg-custom-red relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-32 h-32 bg-beige-DEFAULT/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-beige-light/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-beige-light uppercase tracking-[0.2em] text-xs font-medium mb-4 relative"
          >
            <span className="bg-beige-DEFAULT/90 px-4 py-1 rounded-full border border-beige-light/30 text-beige-light">
              PREMIUM EXPERIENCES
            </span>
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-beige-light mb-6 leading-tight"
          >
            Our Services
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-beige-DEFAULT to-transparent mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-beige-light/80 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Discover our curated collection of luxurious treatments designed to enhance your natural beauty and restore your inner glow
          </motion.p>
        </motion.div>
        
        <div className="relative px-4 lg:px-12">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar"
          >
            <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="w-[85vw] md:w-[350px] flex-none"
                >
                  <Link to={`/services#${category.name.toLowerCase()}`}>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 h-full transition-all duration-300 border border-beige-light/30 group relative overflow-hidden">
                      
                      <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl shadow-lg">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover transform transition-transform duration-700"
                        />
                      </div>
                      
                      <div className="relative">
                        <h3 className="text-3xl md:text-4xl font-serif text-custom-black mb-3 transition-colors duration-300 leading-tight">
                          {category.name}
                        </h3>
                        
                        <p className="text-custom-black/70 text-sm mb-6 line-clamp-3 leading-relaxed">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-beige-dark transition-colors duration-300 font-medium text-sm">
                              Explore Services
                            </span>
                            <motion.div
                              initial={{ x: 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-beige-dark transition-colors duration-300"
                            >
                              →
                            </motion.div>
                          </div>
                          
                          {/* Service count indicator */}
                          <div className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 bg-beige-DEFAULT/40 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-beige-DEFAULT/40 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-beige-DEFAULT/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {showLeftArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-beige-light hover:bg-white/20 transition-all duration-300 hidden md:flex"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </motion.button>
          )}
          {showRightArrow && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-beige-light hover:bg-white/20 transition-all duration-300 hidden md:flex"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </motion.button>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={handleBookNowClick}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-12 py-4 bg-beige text-custom-black hover:bg-beige-dark hover:text-beige-light transition-all duration-300 text-lg tracking-wider font-medium rounded-xl shadow-lg hover:shadow-2xl hover:shadow-beige-dark/30 group"
          >
            <span>Book Your Experience</span>
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="ml-2 group-hover:text-beige-light transition-colors duration-300"
            >
              →
            </motion.span>
          </motion.button>
          
          <p className="text-beige-light/60 text-sm mt-4">
            Ready to transform? Let's create your perfect beauty experience
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;