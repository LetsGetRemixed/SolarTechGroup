import React from 'react';
import { Link } from 'react-router-dom';

const ContactBlock = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-100 via-gray-200 to-white overflow-hidden">

      {/* Decorative abstract background element */}
      <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-60px] right-[-60px] w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-exo mb-4 tracking-wide">
          Get in Touch!
        </h2>
        <p className="text-gray-600 text-md md:text-lg mb-8 font-exo leading-relaxed">
          Whether you're ready to start a project or just have questions, our team is here to assist you with tailored solutions. Let's move forward together.
        </p>
        <Link to="/contact">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            Contact Us Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactBlock;



