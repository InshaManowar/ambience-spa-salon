import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon, EnvelopeIcon as MailIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-beige-light to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-custom-black mb-6">Book Your Luxury Experience</h2>
          <p className="text-beige-dark max-w-2xl mx-auto">
            Transform your look with our expert services. Schedule your appointment below or reach out to us directly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-sm shadow-xl p-8">
              <h3 className="text-2xl font-serif text-custom-black mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="h-6 w-6 text-beige-DEFAULT" />
                  <div>
                    <p className="text-sm text-beige-dark">Call Us</p>
                    <a href="tel:+1234567890" className="text-custom-black hover:text-beige-DEFAULT transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MailIcon className="h-6 w-6 text-beige-DEFAULT" />
                  <div>
                    <p className="text-sm text-beige-dark">Email Us</p>
                    <a href="mailto:info@example.com" className="text-custom-black hover:text-beige-DEFAULT transition-colors">
                      info@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-sm shadow-xl p-8">
              <h3 className="text-2xl font-serif text-custom-black mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-beige-dark">Monday - Friday</span>
                  <span className="text-custom-black">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-beige-dark">Saturday</span>
                  <span className="text-custom-black">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-beige-dark">Sunday</span>
                  <span className="text-custom-black">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Calendly Integration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 bg-white/90 backdrop-blur-sm rounded-sm shadow-xl"
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/inshamanowar430/30min?primary_color=f50883"
              style={{ minWidth: '320px', height: '300px' }}
              data-resize="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;