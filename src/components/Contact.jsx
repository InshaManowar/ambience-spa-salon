import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PhoneIcon } from 'lucide-react';
import { Mail } from 'lucide-react';

const services = [
  {
    title: "Haircut",
    description: "Professional haircut service tailored to your style",
    duration: "45 minutes",
    price: "$60",
    calendlyUrl: "https://calendly.com/inshamanowar430/haircut-clone?hide_event_type_details=1&hide_gdpr_banner=1&text_color=f6f3f3&primary_color=ff008c"
  },
  {
    title: "Hair Coloring",
    description: "Expert color treatment and styling",
    duration: "120 minutes",
    price: "$150",
    calendlyUrl: "https://calendly.com/inshamanowar430/30min?text_color=f5f5f5&primary_color=ff009a"
  },
  {
    title: "Hair Treatment",
    description: "Rejuvenating hair treatment and care",
    duration: "60 minutes",
    price: "$80",
    calendlyUrl: "https://calendly.com/inshamanowar430/30min?text_color=f5f5f5&primary_color=ff009a"
  }
];

const ServiceCard = ({ service }) => {
  const openCalendly = () => {
    Calendly.initPopupWidget({ url: service.calendlyUrl });
    return false;
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 flex flex-col">
      <h3 className="text-xl font-serif text-custom-black mb-2">{service.title}</h3>
      <p className="text-beige-dark mb-4 flex-grow">{service.description}</p>
      <div className="mb-4">
        <p className="text-sm text-beige-dark">Duration: {service.duration}</p>
        <p className="text-lg font-semibold text-custom-black">{service.price}</p>
      </div>
      <button
        onClick={openCalendly}
        className="w-full bg-beige-DEFAULT text-white py-2 px-4 rounded-md hover:bg-beige-dark transition-colors"
      >
        Book Now
      </button>
    </div>
  );
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
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
            Transform your look with our expert services. Choose your desired service below to schedule an appointment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1 space-y-8"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
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
                  <Mail className="h-6 w-6 text-beige-DEFAULT" />
                  <div>
                    <p className="text-sm text-beige-dark">Email Us</p>
                    <a href="mailto:info@example.com" className="text-custom-black hover:text-beige-DEFAULT transition-colors">
                      info@example.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
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

          {/* Service Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3 grid md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;