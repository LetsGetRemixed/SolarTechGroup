import React, { useState, useEffect } from 'react';

const Header = () => {
  const images = [
    'url("/images/factory1.jpg")',
    'url("/images/factory2.jpg")',
    'url("/images/factory3.jpg")',
    'url("/images/factory4.jpg")',
    'url("/images/factory5.jpg")',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header
      className="h-screen bg-cover bg-center bg-no-repeat transition-all duration-700 border-b-2 border-gray-200"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div className="flex items-center justify-center h-full bg-black/30 px-4">
        <div className="flex flex-col items-center justify-center px-8 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-[inset_0_0_1px_rgba(255,255,255,0.2)]">
          
          {/* Logo */}
          <img
            src="/images/logo1stg.png"
            alt="STG Logo"
            className="w-40 md:w-64 mb-6 drop-shadow-xl"
          />

          {/* Company Name */}
          <h1 className="text-white text-2xl md:text-3xl font-rajdhani font-semibold tracking-wide mb-2">
            Southern Technologist Group
          </h1>

          {/* Slogan */}
          <p className="text-gray-200 text-sm md:text-lg font-rajdhani tracking-wider font-light italic">
            Moving Forward
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;




