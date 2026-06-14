import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapUrl = 'https://www.google.com/maps/place/540+S+Mendenhall+Rd+%238,+Memphis,+TN+38117,+USA';

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Visit Us",
      details: ["540 SOUTH MENDENHALL RD, #8", "MEMPHIS, TN, 38117"],
      action: { type: "link", url: mapUrl, text: "Get Directions" }
    },
    {
      icon: PhoneIcon,
      title: "Call Us",
      details: ["+1 (901) 236-7708"],
      action: { type: "link", url: "tel:+1 (901) 236-7708", text: "Call Now" }
    },
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      details: ["ambiencesalon901@gmail.com"],
      action: { type: "link", url: "mailto:ambiencesalon901@gmail.com", text: "Send Email" }
    },
    {
      icon: ClockIcon,
      title: "Opening Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: 12:00 PM - 6:00 PM"],
      action: null
    }
  ];

  const handleBookNow = () => {
    navigate('/book');
  };

  return (
    <div className="pt-[136px] bg-gradient-to-b from-beige-light via-white to-beige-light/30 min-h-screen">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-16 px-4"
      >
        <h1 className="text-4xl md:text-6xl font-serif text-custom-black mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-beige-dark max-w-2xl mx-auto">
          We'd love to hear from you. Reach out to us for bookings, inquiries, or just to say hello.
        </p>
        <div className="w-24 h-0.5 bg-beige-DEFAULT mx-auto mt-6"></div>
      </motion.div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-beige-DEFAULT/10"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-beige-DEFAULT/10 rounded-full mb-4">
                  <info.icon className="h-6 w-6 text-beige-DEFAULT" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-custom-black mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-beige-dark text-sm break-words">
                      {detail}
                    </p>
                  ))}
                </div>
                {info.action && (
                  <a
                    href={info.action.url}
                    target={info.action.url.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center text-beige-DEFAULT hover:text-custom-red transition-colors duration-300 font-medium text-sm"
                  >
                    {info.action.text}
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-serif text-custom-black mb-3">Find Us</h2>
            <p className="text-beige-dark text-base mb-6">
              Located in the heart of Memphis, we're easily accessible and ready to serve you.
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9 h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.8747775!2d-89.8736725!3d35.0937775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887f9d1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2s540%20S%20Mendenhall%20Rd%20%238%2C%20Memphis%2C%20TN%2038117!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-b-lg"
            ></iframe>
          </div>
        </div>
      </motion.div>

      {/* Book Now Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center py-16 px-4 bg-gradient-to-r from-beige-light to-white"
      >
        <div className="max-w-4xl mx-auto">
          <CalendarDaysIcon className="h-12 w-12 text-beige-DEFAULT mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-serif text-custom-black mb-4">
            Ready to Book?
          </h2>
          <p className="text-lg text-beige-dark mb-8 max-w-2xl mx-auto">
            Transform your look with our expert services. Book your appointment today and experience luxury beauty care.
          </p>
          <motion.button
            onClick={handleBookNow}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-10 py-3 bg-beige text-custom-black hover:bg-beige-dark hover:text-beige-light transition-all duration-300 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl hover:shadow-beige-dark/30 group"
          >
            <CalendarDaysIcon className="h-5 w-5 mr-2 group-hover:animate-pulse" />
            Book Your Appointment
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              className="ml-2"
            >
              →
            </motion.span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;