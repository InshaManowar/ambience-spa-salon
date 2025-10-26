import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PhoneIcon, 
  EnvelopeIcon as MailIcon, 
  CalendarIcon, 
  UserIcon,
  ClockIcon,
  SparklesIcon,
  CheckCircleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { fetchCategories } from '../api/services';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [categories, setCategories] = useState([]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  useEffect(() => {
    const loadCategories = async () => {
      const data = await fetchCategories();
      setCategories(data);
    };
    loadCategories();

    emailjs.init("vUM1kTvr9a3d3fYbi");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const triggerConfetti = () => {
    const colors = ['#f5b3cd', '#c2024e', '#faf5f7', '#6e0436', '#1A1A1A'];
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
    }, 250);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    }, 400);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Debug: Log the form data being sent
    console.log('Form data being sent:', {
      to_name: "Sachi and Sandy",
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      service: formData.service,
      date: formData.date,
      time: formData.time,
      special_requests: formData.message
    });
    
    try {
      await emailjs.send(
        "service_5068iu8",
        "template_j4no50m",
        {
          to_name: "Sachi and Sandy",
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          special_requests: formData.message
        }
      );

      // Trigger confetti animation
      triggerConfetti();

      toast.success(
        'Thank you! Your booking request has been sent. Please note that your selected appointment time is tentative and subject to availability. We will contact you shortly via phone or email to confirm or reschedule if needed.',
        {
          duration: 6000,
        }
      );
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-beige-light via-white to-beige-light/30 relative overflow-hidden">
      <Toaster position="top-center" />
      
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-40 h-40 bg-beige-DEFAULT/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 bg-custom-red/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-beige-dark/20 rounded-full blur-2xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.003]" style={{
        backgroundImage: `radial-gradient(circle at 3px 3px, #D4AF37 1px, transparent 0)`,
        backgroundSize: '80px 80px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-beige-dark uppercase tracking-[0.2em] text-xs font-medium mb-6 relative"
          >
            <span className="bg-white/80 px-4 py-1 rounded-full border border-beige-DEFAULT/20">
              RESERVE YOUR SPOT
            </span>
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif text-custom-black mb-6 leading-tight"
          >
            Book Your 
            <span className="text-beige-dark block md:inline md:ml-4">
              Luxury Experience
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-beige-dark max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Transform your look with our expert services. Complete the form below and our team will contact you to confirm your appointment.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-beige-dark/70 max-w-2xl mx-auto mt-3 text-sm"
          >
            <span className="inline-flex items-center gap-1">
              <CheckCircleIcon className="h-4 w-4 text-beige-DEFAULT" />
              All appointment times are tentative and subject to availability
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto relative"
        >
          {/* Background card with enhanced styling */}
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-beige-dark/10 border border-beige-DEFAULT/10 p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-beige-DEFAULT/5 to-transparent rounded-bl-full"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-beige-light/30 to-transparent rounded-tr-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
              {/* Personal Information Section */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-beige-DEFAULT/10 rounded-lg flex items-center justify-center">
                    <UserIcon className="h-5 w-5 text-beige-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-custom-black">Personal Information</h3>
                    <p className="text-beige-dark/60 text-sm">Tell us about yourself</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative group">
                    <label className="block text-sm font-medium text-beige-dark mb-2">Full Name *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <UserIcon className="h-5 w-5 text-beige-DEFAULT/60 group-focus-within:text-beige-DEFAULT transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="pl-12 w-full px-4 py-4 bg-beige-light/10 border-2 border-beige-DEFAULT/20 rounded-xl focus:outline-none focus:border-beige-DEFAULT focus:bg-white transition-all duration-300 placeholder-beige-dark/40"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-beige-dark mb-2">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MailIcon className="h-5 w-5 text-beige-DEFAULT/60 group-focus-within:text-beige-DEFAULT transition-colors" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="pl-12 w-full px-4 py-4 bg-beige-light/10 border-2 border-beige-DEFAULT/20 rounded-xl focus:outline-none focus:border-beige-DEFAULT focus:bg-white transition-all duration-300 placeholder-beige-dark/40"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-beige-dark mb-2">Phone Number *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <PhoneIcon className="h-5 w-5 text-beige-DEFAULT/60 group-focus-within:text-beige-DEFAULT transition-colors" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                        className="pl-12 w-full px-4 py-4 bg-beige-light/10 border-2 border-beige-DEFAULT/20 rounded-xl focus:outline-none focus:border-beige-DEFAULT focus:bg-white transition-all duration-300 placeholder-beige-dark/40"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Service & Schedule Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-beige-DEFAULT/10 rounded-lg flex items-center justify-center">
                    <CalendarIcon className="h-5 w-5 text-beige-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-custom-black">Service & Schedule</h3>
                    <p className="text-beige-dark/60 text-sm">Choose your preferred service and time</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-beige-dark mb-2">Select Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-beige-light/10 border-2 border-beige-DEFAULT/20 rounded-xl focus:outline-none focus:border-beige-DEFAULT focus:bg-white transition-all duration-300 appearance-none"
                    >
                      <option value="">Choose your service</option>
                      {categories.map((category) => (
                        <optgroup key={category.id} label={category.name}>
                          {category.services.map((service, index) => (
                            <option key={`${category.id}-${index}`} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-beige-dark mb-2">Preferred Date *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <CalendarIcon className="h-5 w-5 text-beige-DEFAULT/60 group-focus-within:text-beige-DEFAULT transition-colors" />
                      </div>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="pl-12 w-full px-4 py-4 bg-beige-light/10 border-2 border-beige-DEFAULT/20 rounded-xl focus:outline-none focus:border-beige-DEFAULT focus:bg-white transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-sm font-medium text-beige-dark mb-2">Preferred Time *</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <ClockIcon className="h-5 w-5 text-beige-DEFAULT/60 group-focus-within:text-beige-DEFAULT transition-colors" />
                      </div>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="pl-12 w-full px-4 py-4 bg-beige-light/10 border-2 border-beige-DEFAULT/20 rounded-xl focus:outline-none focus:border-beige-DEFAULT focus:bg-white transition-all duration-300 appearance-none"
                      >
                        <option value="">Select time</option>
                        {Array.from({ length: 10 }, (_, i) => i + 10).map((hour) => (
                          <React.Fragment key={hour}>
                            {['00', '30'].map((min) => {
                              const displayHour = ((hour + 11) % 12) + 1; // convert 24h to 12h
                              const period = hour < 12 ? 'AM' : 'PM';
                              const label = `${displayHour}:${min} ${period}`;
                              return (
                                <option key={`${hour}-${min}`} value={label}>{label}</option>
                              );
                            })}
                          </React.Fragment>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Notes Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-beige-DEFAULT/10 rounded-lg flex items-center justify-center">
                    <DocumentTextIcon className="h-5 w-5 text-beige-DEFAULT" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-custom-black">Additional Notes</h3>
                    <p className="text-beige-dark/60 text-sm">Any special requests or preferences?</p>
                  </div>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about any special requests, allergies, or preferences..."
                  rows={4}
                  className="w-full px-4 py-4 bg-beige-light/10 border-2 border-beige-DEFAULT/20 rounded-xl focus:outline-none focus:border-beige-DEFAULT focus:bg-white transition-all duration-300 placeholder-beige-dark/40 resize-none"
                />
              </motion.div>

              {/* Enhanced Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="pt-8"
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-beige text-custom-black hover:bg-beige-dark hover:text-beige-light transition-all duration-500 text-lg font-semibold py-5 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-beige-dark/30 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <SparklesIcon className="h-5 w-5 group-hover:animate-spin" />
                    Complete Your Booking
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="transition-transform duration-300"
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
                
                <p className="text-center text-beige-dark/60 text-sm mt-4 flex items-center justify-center gap-2">
                  <CheckCircleIcon className="h-4 w-4 text-beige-DEFAULT" />
                  We'll contact you within 24 hours to confirm your appointment
                </p>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;