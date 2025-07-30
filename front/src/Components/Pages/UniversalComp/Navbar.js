import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white font-exo shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 font-rajdhani flex items-center justify-between">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/logo1.png"
            alt="STG Logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold tracking-wide hidden md:inline-block">
            Southern Technologist Group
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4 space-y-3">
          <Link to="/about" onClick={toggleMenu} className="block hover:text-blue-400">About Us</Link>
          <Link to="/contact" onClick={toggleMenu} className="block hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



