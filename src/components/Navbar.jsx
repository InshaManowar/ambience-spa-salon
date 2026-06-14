import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { fetchCategories } from '../api/services';
import { CalendarDaysIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (hash) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);

    if (location.pathname === '/services') {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/services${hash}`);
    }
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      // If on landing page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on other pages, navigate to home
      navigate('/');
    }
  };

  const handleContactClick = () => {
    // Navigate to the contact page
    navigate('/contact');
  };

  const handleBookNowClick = () => {
    // Scroll to top and navigate to the booking page
    window.scrollTo(0, 0);
    navigate('/book');
  };

  // Handle scrolling to footer when navigating from other pages
  useEffect(() => {
    if (location.state?.scrollToFooter && location.pathname === '/') {
      const timer = setTimeout(() => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-10 w-full z-50 transition-all duration-500 ${
          isScrolled || location.pathname !== '/' ? 'bg-beige-light/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <button onClick={handleHomeClick} className="text-3xl font-serif font-bold">
              <span className={`${isScrolled || location.pathname !== '/' ? 'text-beige-dark' : 'text-beige-light'} transition-colors duration-300`}>
                AMBIENCE
              </span>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={handleHomeClick}
                className={`font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled || location.pathname !== '/' ? 'text-custom-black hover:text-beige-dark' : 'text-beige-light hover:text-beige-DEFAULT'
                }`}
              >
                Home
              </button>
              
              <div className="relative group">
                <button
                  className={`font-medium tracking-wide transition-colors duration-300 flex items-center ${
                    isScrolled || location.pathname !== '/' ? 'text-custom-black hover:text-beige-dark' : 'text-beige-light hover:text-beige-DEFAULT'
                  }`}
                >
                  Services
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>

                <div
                  className="absolute left-0 mt-2 w-48 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                >
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleNavigation(`#${category.name.toLowerCase()}`)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-beige-light transition-colors duration-200"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={handleContactClick}
                className={`font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled || location.pathname !== '/' ? 'text-custom-black hover:text-beige-dark' : 'text-beige-light hover:text-beige-DEFAULT'
                }`}
              >
                Contact
              </button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBookNowClick}
                className="px-6 py-2 bg-beige text-custom-black hover:bg-beige-dark hover:text-beige-light transition-colors duration-300 rounded-lg"
              >
                Book Now
              </motion.button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${
                  isScrolled || location.pathname !== '/' ? 'text-custom-black' : 'text-beige-light'
                }`}
              >
                {isMobileMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-[136px] bottom-0 w-72 bg-gradient-to-b from-beige-light to-white shadow-xl overflow-y-auto"
            >
              <div className="flex flex-col p-6">
                <div className="border-b border-beige-DEFAULT/20 pb-6 mb-6">
                  <h3 className="font-serif text-2xl text-custom-black mb-2">Menu</h3>
                  <p className="text-sm text-beige-dark">Experience luxury beauty care</p>
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleHomeClick();
                    }}
                    className="flex items-center text-custom-black hover:text-beige-dark py-3 text-lg font-medium text-left group transition-colors duration-300"
                  >
                    <span className="relative">
                      Home
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-beige-DEFAULT group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>
                  
                  <div className="py-2">
                    <h4 className="text-sm font-medium text-beige-dark mb-3 pl-2">Our Services</h4>
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleNavigation(`#${category.name.toLowerCase()}`)}
                          className="w-full text-left pl-2 py-2 text-custom-black hover:text-beige-dark hover:bg-beige-DEFAULT/5 rounded-lg transition-colors duration-200"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleContactClick();
                    }}
                    className="flex items-center text-custom-black hover:text-beige-dark py-3 text-lg font-medium text-left group transition-colors duration-300"
                  >
                    <span className="relative">
                      Contact
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-beige-DEFAULT group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </button>

                  <div className="pt-6">
                    <button 
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleBookNowClick();
                      }}
                      className="w-full py-4 bg-beige text-custom-black hover:bg-beige-dark hover:text-beige-light transition-all duration-300 rounded-lg shadow-md hover:shadow-lg group relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center font-medium">
                        <CalendarDaysIcon className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                        Book Now
                      </span>
                      <motion.div
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 100 }}
                        className="absolute inset-0 bg-beige-dark/20"
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-beige-DEFAULT/20">
                  <div className="space-y-4">
                    <div className="flex items-center text-beige-dark">
                      <ClockIcon className="h-5 w-5 mr-3" />
                      <div className="text-sm">
                        <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                        <p>Sunday: 12:00 PM - 6:00 PM</p>
                      </div>
                    </div>
                    <a 
                      href="tel:+1 (901) 236-7708"
                      className="flex items-center text-beige-dark hover:text-beige-DEFAULT transition-colors duration-300"
                    >
                      <PhoneIcon className="h-5 w-5 mr-3" />
                      <span className="text-sm">+1 (901) 236-7708</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;