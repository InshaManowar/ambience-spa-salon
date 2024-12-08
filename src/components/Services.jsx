import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../api/services';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [categories, setCategories] = useState([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
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

  return (
    <section id="services" className="py-24 bg-custom-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 px-4"
        >
          <h2 className="text-6xl font-serif text-beige-light mb-6 tracking-wider">Our Services</h2>
          <div className="w-24 h-[1px] bg-beige-DEFAULT mx-auto"></div>
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[85vw] md:w-[350px] flex-none"
                >
                  <Link to={`/services#${category.name.toLowerCase()}`}>
                    <div className="bg-custom-gray/40 backdrop-blur-sm rounded-sm p-6 h-full hover:bg-custom-gray/60 transition-colors duration-300">
                      <div className="aspect-[4/3] mb-6 overflow-hidden rounded-sm">
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                      <h3 className="text-4xl font-serif text-beige-light mb-4 tracking-wide">{category.name}</h3>
                      <p className="text-beige-light/70 text-sm mb-6 line-clamp-3">{category.description}</p>
                      <span className="text-white hover:text-beige-light transition-colors duration-300">
                        See More →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:text-beige-light transition-colors hidden md:block"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-beige-light transition-colors hidden md:block"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block px-8 py-3 bg-beige text-custom-black hover:bg-beige-dark hover:text-beige-light transition-colors duration-300 text-lg tracking-wider"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;