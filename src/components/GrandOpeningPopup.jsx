import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

function launchConfetti() {
  // Website colors
  const colors = ['#faf5f7', '#f5b3cd', '#c2024e', '#6e0436', '#D4AF37'];
  
  confetti({
    particleCount: 150,
    spread: 70,
    startVelocity: 30,
    angle: 90,
    origin: { x: 0.5, y: 0.5 }, // Center of screen
    colors: colors,
    disableForReducedMotion: true,
    gravity: 0.8,
    ticks: 200,
    shapes: ['circle', 'square'],
    scalar: 1.2
  });
}

function GrandOpeningPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('grandOpeningPopupShown');
    
    if (popupShown) {
      return;
    }

    // Check if current date is August 3rd, 2024 or later
    const currentDate = new Date();
    const startDate = new Date('2024-08-03');
    
    if (currentDate >= startDate) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        launchConfetti();
        sessionStorage.setItem('grandOpeningPopupShown', 'true');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenShown(true);
  };

  if (!isVisible || hasBeenShown) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md md:max-w-lg mx-4 relative transform transition-all duration-500 scale-100 shadow-2xl border border-beige-DEFAULT/20">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-custom-black/60 hover:text-custom-black text-2xl font-light transition-colors duration-300"
          >
            ×
          </button>
          
          {/* Content */}
          <div className="text-center">
            <div className="mb-6">
              <div className="mb-4">
                              <span className="bg-beige-dark/10 text-beige-dark uppercase tracking-[0.1em] sm:tracking-[0.2em] text-xs font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-beige-DEFAULT/20">
                GRAND OPENING
              </span>
              </div>
              
                          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-custom-black mb-4 leading-tight">
              Opening on 3rd August 2025
            </h2>
            
            <div className="w-12 sm:w-16 h-0.5 bg-beige-DEFAULT mx-auto mb-4 sm:mb-6"></div>
            
            <p className="text-base sm:text-lg text-custom-black/75 mb-4 sm:mb-6 leading-relaxed">
              Welcome to Ambience Brow Lash and Hair Spa
            </p>
            </div>
            
            <div className="bg-gradient-to-br from-beige-light/30 to-white/50 p-4 sm:p-6 rounded-xl mb-6 sm:mb-8 border border-beige-DEFAULT/10">
              <p className="text-sm sm:text-base text-custom-black/80 font-medium leading-relaxed">
                Experience luxury and relaxation at our newly opened spa and salon. 
                Discover the pinnacle of beauty and wellness in our luxurious setting.
              </p>
            </div>
            
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="bg-custom-red p-4 sm:p-6 rounded-full">
                <img
                  src="https://i.ibb.co/5hV7nS6/1-4.png"
                  alt="Ambience Logo"
                  className="w-20 sm:w-24 md:w-32 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrandOpeningPopup; 