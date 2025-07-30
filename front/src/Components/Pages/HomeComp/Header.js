import React, { useState, useEffect } from 'react';

const Header = () => {
  const images = [
    '/images/factory1.jpg',
    '/images/factory2.jpg',
    '/images/factory3.jpg',
    '/images/factory4.jpg',
    '/images/factory5.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="relative h-screen border-b-2 border-gray-200 overflow-hidden">
      {/* Background Images Layered */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay & Content */}
      <div className="relative z-20 flex items-center justify-center h-full bg-black/30 px-4">
        <div className="flex flex-col items-center justify-center px-8 py-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-[inset_0_0_1px_rgba(255,255,255,0.2)]">
          <img
            src="/images/logo1stg.png"
            alt="STG Logo"
            className="w-40 md:w-64 mb-6 drop-shadow-xl"
          />
          <h1 className="text-white text-2xl md:text-3xl text-center font-rajdhani font-semibold tracking-wide mb-2">
            Southern Technologist Group
          </h1>
          <p className="text-gray-200 text-sm md:text-lg font-rajdhani tracking-wider font-light italic">
            Moving Forward
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;





