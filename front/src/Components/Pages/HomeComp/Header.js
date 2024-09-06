import React from 'react';

const Header = () => {
  const images = [
    'url("/images/TESTLED-1.jpg")',
    'url("/images/TESTLED-2.jpg")',
    'url("/images/TESTLED-3.jpg")',
  ];

  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header
      className="h-[90vh] bg-cover bg-center bg-no-repeat transition-all duration-500"
      style={{ backgroundImage: images[currentImage] }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50 px-4">
        <h1 className="flex flex-col md:flex-row items-center text-center">
          <span className="text-primary font-montserrat text-3xl md:text-5xl font-bold">Solar</span>
          <span className="text-mainwhite font-montserrat text-3xl md:text-5xl font-bold mt-2 md:mt-0 md:ml-2">Tech LED.</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;