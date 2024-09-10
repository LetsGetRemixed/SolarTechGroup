
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navToggleRef = useRef(null);
    const navMenuRef = useRef(null);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const navMenu = navMenuRef.current;

        if (menuOpen) {
            navMenu.classList.remove('hidden');
        } else {
            navMenu.classList.add('hidden');
        }
    }, [menuOpen]);

    return (
        <nav className="bg-dark py-4 md:py-6">
            <div className="container mx-auto flex items-center px-6 justify-between">
                {/* Logo */}
             <Link to="/" className="flex items-center">
                 <img 
                     src="/STGLogo.png" 
                     alt="Southern Technologist Group" 
                      className="w-10 h-10 md:w-10 md:h-10" 
                 />
                     {/* Hide the name on smaller screens, show it on medium screens and up */}
                     <span className="text-2xl font-bold text-white ml-4 hidden md:block">Southern Technologist Group</span>
            </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex md:items-center space-x-6">
                    <Link className="text-white hover:text-highlight transition duration-300" to="/products">Products</Link>
                    <Link className="text-white hover:text-highlight transition duration-300" to="/contact">Contact</Link>
                    <Link className="text-white hover:text-highlight transition duration-300" to="/about">About Us</Link>
                    
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center w-8 h-8"
                    onClick={handleMenuToggle}
                    ref={navToggleRef}
                >
                    <span className={`block w-full h-1 bg-white  mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-full h-1 bg-white mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-full h-1 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    menuOpen ? 'block' : 'hidden'
                } md:hidden bg-[#212529] py-4`}
                ref={navMenuRef}
            >
                <ul className="flex flex-col items-center space-y-4">
                    <li><Link className="text-white hover:text-highlight transition duration-300" to="/products">Products</Link></li>
                    <li><Link className="text-white hover:text-highlight transition duration-300" to="/contact">Contact</Link></li>
                    <li><Link className="text-white hover:text-highlight transition duration-300" to="/about">About Us</Link></li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

