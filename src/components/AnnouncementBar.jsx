import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnnouncementBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate('/book');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Limited time offer — up to 30% off, ends July 4th. Book now."
      className="fixed top-0 left-0 w-full h-10 z-[60] flex items-center overflow-hidden bg-[#e10a7f] text-white text-sm sm:text-base"
    >
      <div className="flex shrink-0 animate-marquee sm:hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <span
            key={copy}
            aria-hidden={copy === 1}
            className="flex w-screen shrink-0 items-center justify-center whitespace-nowrap px-4"
          >
            {/* Mobile */}
            <span className="sm:hidden text-xs">
              Limited Time Offer · Up to <strong className="font-bold">30% Off</strong> till 4th July · <span className="font-semibold underline">Book Now →</span>
            </span>
            {/* Desktop/tablet */}
            <span className="hidden sm:inline">
              Limited Time Offer — Up to <strong className="font-bold">30% Off</strong> Select Services · Ends July 4th <span className="ml-3 font-semibold underline">Book Now →</span>
            </span>
          </span>
        ))}
      </div>
    </button>
  );
};

export default AnnouncementBar;
