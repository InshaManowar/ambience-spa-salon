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
      className="fixed top-0 left-0 w-full h-10 z-[60] flex items-center justify-center bg-[#e10a7f] text-white text-sm sm:text-base px-4"
    >
      <span className="truncate">
        Limited Time Offer — Up to <strong className="font-bold">30% Off</strong> Select Services · Ends July 4th
      </span>
      <span className="ml-3 font-semibold underline whitespace-nowrap hidden sm:inline">
        Book Now →
      </span>
    </button>
  );
};

export default AnnouncementBar;
