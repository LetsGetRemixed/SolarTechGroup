
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 font-rajdhani flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/images/logo1.png"
            alt="STG Logo"
            className="h-12 w-auto"
          />
          <span className="text-xl font-bold font-rajdhani tracking-wide">Southern Technologist Group</span>
        </Link>

        {/* Nav Links */}
        <div className="space-x-6 hidden md:flex">
          <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>

        {/* Mobile Menu Placeholder (optional for later enhancement) */}
        {/* You can implement a hamburger menu here if needed */}
      </div>
    </nav>
  );
};

export default Navbar;


