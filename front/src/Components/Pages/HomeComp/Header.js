import React, { useState, useEffect } from 'react';

const Header = () => {
  const images = [
    'url("/images/TESTLED-1.jpg")',
    'url("/images/TESTLED-2.jpg")',
    'url("/images/TESTLED-3.jpg")',
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  //const [isTyping, setIsTyping] = useState(true);

  const fullText = 'Southern Technologist Group';

  // Typewriter effect
  useEffect(() => {
    if (isTyping && index < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, 150); // Delay between each letter typing
      return () => clearTimeout(typingTimeout);
    }
  }, [index, isTyping, fullText]);

  // Background image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header
      className="h-[90vh] bg-cover bg-center bg-no-repeat transition-all duration-500 border-b-2 border-primary"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50 px-4">
        {/* Semi-Transparent Box with Glowing Effect */}
        <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg border border-orange-500 hover:shadow-2xl transition-all duration-500">
          <h1 className="flex flex-col items-center text-center animate-fade-in">
            {/* Southern in Orange */}
            <span className="font-montserrat text-3xl md:text-5xl font-bold text-orange-500">
              {typedText.startsWith("S") ? typedText.slice(0, 8) : "Southern"}
            </span>
            {/* Technologist Group in White */}
            <span className="text-mainwhite font-montserrat text-3xl md:text-5xl font-bold mt-2">
              {typedText.length > 8 ? typedText.slice(8) : ""}
            </span>
          </h1>

          {/* Centered Moto */}
          {typedText === fullText && (
            <div className="mt-6 flex flex-col items-center animate-fade-in">
              <span className="text-xl md:text-2xl font-semibold text-white text-center">Moving Forward</span>

            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

