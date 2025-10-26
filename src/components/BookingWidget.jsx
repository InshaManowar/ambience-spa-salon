import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, SparklesIcon } from '@heroicons/react/24/outline';

const BookingWidget = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const widgetRef = useRef(null);

  useEffect(() => {
    if (!inView || !widgetRef.current) return;

    const daysmartAcc = "a8799325-c533-44d0-8b5e-4e36b554a870";
    const width = 1600; // effectively full width within container
    let height = Math.max(window.innerHeight - 160, 600); // viewport minus navbar/top padding
    const websiteRoot = "https://ambiencebrowlashandhairspa.myonlineappointment.com";

    let bookThroughNewTab = 'false';
    let forcedMinHeight = 350;
    const ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
      if (/iPhone/i.test(ua)) {
        bookThroughNewTab = 'true';
        forcedMinHeight = 390;
      } else {
        const loadInIframe = 'false';
        bookThroughNewTab = loadInIframe === 'true' ? 'false' : 'true';
      }
    }

    if (forcedMinHeight && forcedMinHeight > height) {
      height = forcedMinHeight;
    }

    let src = `${websiteRoot}/External/BookingPlugin/?guid=${daysmartAcc}`;
    if (bookThroughNewTab === 'true') {
      src += `&bookThroughNewTab=${bookThroughNewTab}`;
    }

    const host = widgetRef.current;
    host.innerHTML = '';

    const container = document.createElement('div');
    container.id = 'externalBookingPluginContainer';
    container.style.position = 'relative';
    container.style.overflow = 'hidden';
    container.style.maxWidth = `${width}px`;
    container.style.width = '100%';
    if (height) container.style.minHeight = `${height}px`;
    container.className = 'rounded-xl ring-1 ring-beige-DEFAULT/20 shadow-xl bg-white';
    container.style.height = `${height}px`;

    const iframe = document.createElement('iframe');
    iframe.id = 'externalBookingPlugin';
    iframe.src = src;
    iframe.style.width = '100%';
    if (height) {
      iframe.style.minHeight = `${height}px`;
      iframe.style.height = `${height}px`;
    }
    iframe.setAttribute('frameBorder', '0');
    iframe.style.border = '0';

    container.appendChild(iframe);
    host.appendChild(container);

    const ensureResizer = () => new Promise((resolve) => {
      if (window.iFrameResize) return resolve();
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.11/iframeResizer.min.js';
      s.async = true;
      s.onload = () => resolve();
      document.body.appendChild(s);
    });

    ensureResizer().then(() => {
      if (window.iFrameResize) {
        const isOldIE = (navigator && navigator.userAgent && navigator.userAgent.indexOf('MSIE') !== -1);
        window.iFrameResize({ log: false, heightCalculationMethod: isOldIE ? 'max' : 'taggedElement', tolerance: 100, maxHeight: window.innerHeight, checkOrigin: false }, '#externalBookingPlugin');
      }
    });
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-8 bg-gradient-to-br from-beige-light to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-beige/20 px-6 py-3 rounded-full mb-6">
            <CalendarIcon className="h-6 w-6 text-beige-DEFAULT" />
            <span className="text-beige-DEFAULT font-semibold">Online Booking</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-custom-black mb-6">
            Book Your <span className="text-beige-DEFAULT">Perfect</span> Appointment
          </h2>
          
          <p className="text-xl text-beige-dark/70 max-w-3xl mx-auto leading-relaxed">
            Schedule your beauty treatment with ease. Choose your preferred date, time, and service 
            for a personalized spa experience.
          </p>
        </motion.div>

        {/* DaySmart Booking Widget Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl shadow-beige-DEFAULT/10 p-0"
        >

          {/* DaySmart Widget Container */}
          <div 
            ref={widgetRef}
            id="daysmart-booking-widget"
            className="flex items-stretch justify-stretch"
            style={{ width: '100%' }}
          >
            <div className="flex-1 flex items-center justify-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-beige-DEFAULT"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BookingWidget;
