import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Introduction = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "15+", label: "Services" },
    { number: "2", label: "Expert Artists" }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-beige-light via-beige-light/80 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[40vw] font-['Allura'] text-custom-black whitespace-nowrap transform -rotate-6">
          Ambience
        </h2>
      </div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #8B7355 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-beige-dark uppercase tracking-[0.2em] text-xs font-medium mb-6 relative"
          >
            <span className="bg-white/80 px-4 py-1 rounded-full border border-beige-DEFAULT/20">
              DISCOVER LUXURY
            </span>
          </motion.p>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-custom-black mb-8 leading-tight relative"
          >
            <span className="relative">
              The Art of Relaxation 
              <motion.span
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-2 left-0 h-3 bg-beige-DEFAULT/20 -z-10"
              ></motion.span>
            </span>
            <br />
            <span className="text-beige-DEFAULT">and Radiance</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: '100%' } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-beige-DEFAULT to-transparent max-w-[160px] mx-auto mb-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-custom-black/75 leading-relaxed mb-16 max-w-4xl mx-auto"
          >
            Ambience is a full-service salon located in Memphis, Tennessee. 
            It is here that we welcome you to familiarize yourself with our team 
            of artists and the extensive services we offer. Experience the pinnacle 
            of beauty and wellness in our luxurious setting.
          </motion.p>

          {/* Statistics Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-beige-DEFAULT/10 hover:bg-white/80 transition-all duration-300"
              >
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-beige-DEFAULT mb-2">
                  {stat.number}
                </h3>
                <p className="text-sm text-custom-black/70 uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            <div className="lg:order-1 order-2 text-left">
              <div className="max-w-lg lg:max-w-none mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mb-8"
                >
               
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-custom-black mb-6 leading-tight">
                    Our Expert Team
                  </h3>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: '120px' } : {}}
                    transition={{ delay: 1.4, duration: 0.6 }}
                    className="w-0 h-0.5 bg-beige-DEFAULT mb-8"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="space-y-6"
                >
                  <p className="text-custom-black/80 leading-relaxed text-base md:text-lg text-justify">
                    With over 10 years of experience, the Ambience team is passionate about enhancing the natural beauty of their clients. Together, they provide a comprehensive beauty experience, blending their unique skills to ensure every client leaves feeling pampered, confident, and beautiful from head to toe.
                  </p>
                  
                  <p className="text-custom-black/80 leading-relaxed text-base md:text-lg text-justify">
                    Whether you're in for a relaxing facial or a fresh new hairstyle, their commitment to excellence and personalized service shines through in everything they do.
                  </p>

                  {/* Skills/Specialties */}
                  <div className="pt-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.7, duration: 0.5 }}
                      className="mb-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-beige-DEFAULT/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-beige-DEFAULT" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-serif font-semibold text-custom-black">Our Specialties</h4>
                      </div>
                      <div className="w-16 h-0.5 bg-beige-DEFAULT/60 mb-1"></div>
                      <p className="text-sm text-custom-black/60 leading-relaxed">
                        Discover our range of expert services designed to enhance your natural beauty
                      </p>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { name: 'Hair Styling', icon: '✂️', desc: 'Cuts & Styling' },
                        { name: 'Color Treatment', icon: '🎨', desc: 'Professional Coloring' },
                        { name: 'Facial Care', icon: '✨', desc: 'Rejuvenating Treatments' },
                        { name: 'Eyebrow and Eyelashes', icon: '👁️', desc: 'Threading and Extension' },
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9, y: 20 }}
                          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                          transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
                          className="group relative bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-beige-DEFAULT/15 rounded-xl p-4 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-beige-DEFAULT/10 rounded-lg flex items-center justify-center text-lg transition-colors duration-300">
                              {skill.icon}
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium text-custom-black text-sm mb-1 transition-colors duration-300">
                                {skill.name}
                              </h5>
                              <p className="text-xs text-custom-black/60 transition-colors duration-300">
                                {skill.desc}
                              </p>
                            </div>
                            <div className="w-2 h-2 bg-beige-DEFAULT/40 rounded-full transition-all duration-300"></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="relative lg:order-2 order-1 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="relative max-w-md mx-auto lg:max-w-none"
              >
                {/* Background decorative element */}
                <div className="absolute inset-0 bg-gradient-to-br from-beige-DEFAULT/10 to-transparent rounded-lg transform rotate-3 scale-105"></div>
                
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-beige-DEFAULT/20 shadow-2xl bg-white/10 backdrop-blur-sm">
                  <img
                    src="https://i.ibb.co/Xpg1GFW/7.png"
                    alt="Sandy & Sachi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-custom-black/10 via-transparent to-transparent"></div>
                </div>
                
                {/* Enhanced decorative corner elements */}
                <div className="absolute -left-3 -top-3 w-20 h-20 border-t-2 border-l-2 border-beige-DEFAULT/30 rounded-tl-lg"></div>
                <div className="absolute -right-3 -bottom-3 w-20 h-20 border-b-2 border-r-2 border-beige-DEFAULT/30 rounded-br-lg"></div>
                
                {/* Floating accent elements */}
                <motion.div
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={inView ? { opacity: 1, rotate: 0 } : {}}
                  transition={{ delay: 2, duration: 1 }}
                  className="absolute top-8 -left-8 w-16 h-16 bg-beige-DEFAULT/20 rounded-full blur-xl"
                ></motion.div>
                
                <motion.div
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={inView ? { opacity: 1, rotate: 0 } : {}}
                  transition={{ delay: 2.2, duration: 1 }}
                  className="absolute bottom-8 -right-8 w-20 h-20 bg-beige-DEFAULT/15 rounded-full blur-xl"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;