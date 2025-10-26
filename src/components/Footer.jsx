import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  StarIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const mapUrl = 'https://www.google.com/maps/place/540+S+Mendenhall+Rd+%238,+Memphis,+TN+38117,+USA';
  const privacyPolicyUrl = 'https://www.freeprivacypolicy.com/live/f7ad288c-19c2-4f14-80fa-a92643b5ada7';

  const socialLinks = [
    {
      name: 'Facebook',
      href: '#',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Contact', to: '/contact' },
    { name: 'Book Appointment', to: '/book' },
    { name: 'Privacy Policy', href: privacyPolicyUrl, external: true }
  ];

  return (
    <footer id="footer" className="bg-custom-red text-beige-light relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-10 left-20 w-40 h-40 bg-beige-DEFAULT/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-beige-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-beige-DEFAULT/5 rounded-full blur-3xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.008]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Enhanced Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-4xl font-serif mb-4 relative">
                AMBIENCE
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60px' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="h-0.5 bg-beige-DEFAULT mt-2"
                />
              </h3>
              <p className="text-beige-light/80 mb-4 leading-relaxed">
                Where luxury meets exceptional service. Experience the pinnacle of
                beauty and wellness in Memphis.
              </p>
              
              {/* Rating display */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-beige-DEFAULT fill-current" />
                  ))}
                </div>
                <span className="text-beige-light/70 text-sm">5.0 • Trusted by 1000+ clients</span>
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div>
              <h5 className="text-sm font-medium text-beige-light mb-3 uppercase tracking-wider">
                Follow Our Journey
              </h5>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-beige-DEFAULT/10 border border-beige-DEFAULT/20 rounded-lg flex items-center justify-center text-beige-light/60 hover:text-beige-light hover:bg-beige-DEFAULT/20 hover:border-beige-DEFAULT/40 transition-all duration-300"
                  >
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-serif mb-6 flex items-center">
              <span>Contact Info</span>
            </h4>
            <address className="not-italic space-y-4">
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-beige-DEFAULT/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-beige-DEFAULT/20 transition-colors duration-300">
                  <MapPinIcon className="h-5 w-5 text-beige-DEFAULT" />
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beige-light/80 hover:text-beige-light transition-colors duration-300 group-hover:text-beige-DEFAULT"
                >
                  <span className="font-medium">Visit Us</span><br />
                  540 South Mendenhall Rd, #8<br />
                  Memphis, TN, 38117
                </a>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-beige-DEFAULT/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-beige-DEFAULT/20 transition-colors duration-300">
                  <PhoneIcon className="h-5 w-5 text-beige-DEFAULT" />
                </div>
                <div>
                  <span className="text-beige-light/60 text-sm block">Call Us</span>
                  <a
                    href="tel:+1 (901) 236-7708"
                    className="text-beige-light/80 hover:text-beige-light transition-colors duration-300 group-hover:text-beige-DEFAULT font-medium"
                  >
                    +1 (901) 236-7708
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 bg-beige-DEFAULT/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-beige-DEFAULT/20 transition-colors duration-300">
                  <EnvelopeIcon className="h-5 w-5 text-beige-DEFAULT" />
                </div>
                <div>
                  <span className="text-beige-light/60 text-sm block">Email Us</span>
                  <a 
                    href="mailto:ambiencesalon901@gmail.com"
                    className="text-beige-light/80 hover:text-beige-light transition-colors duration-300 group-hover:text-beige-DEFAULT font-medium break-all"
                  >
                    ambiencesalon901@gmail.com
                  </a>
                </div>
              </motion.div>
            </address>
          </motion.div>

          {/* Enhanced Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-serif mb-6">Opening Hours</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-beige-DEFAULT/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <ClockIcon className="h-5 w-5 text-beige-DEFAULT" />
                </div>
                <div className="text-beige-light/80 w-full">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Monday - Saturday</span>
                      <span className="text-beige-DEFAULT">10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Sunday</span>
                      <span className="text-beige-DEFAULT">12:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-beige-DEFAULT/20">
                    <p className="text-beige-light/60 text-sm">
                      Walk-ins welcome • Appointments preferred
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Section moved here */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 p-4 bg-beige-DEFAULT/10 rounded-lg border border-beige-DEFAULT/20"
            >
              <p className="text-beige-light/80 text-sm mb-3">
                Ready for a transformation?
              </p>
              <Link
                to="/book"
                onClick={handleLinkClick}
                className="inline-flex items-center text-beige-DEFAULT hover:text-beige-light transition-colors duration-300 font-medium text-sm group"
              >
                Book Your Appointment
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-beige-DEFAULT/20 mt-12 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-beige-light/60 text-sm">
                &copy; {new Date().getFullYear()} Ambience Brow Lash and Hair Spa. All rights reserved.
              </p>
              <p className="text-beige-light/40 mt-1 text-xs">
                Licensed & Insured • Memphis, Tennessee
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-beige-light/40 text-xs">
                Designed and developed with{' '}
                <HeartIcon className="h-3 w-3 inline text-beige-DEFAULT" />{' '}
                by{' '}
                <a 
                  href="https://invue-digital.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-beige-DEFAULT hover:text-beige-light transition-colors duration-300 font-medium"
                >
                  @invue
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;