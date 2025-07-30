import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="relative bg-black py-24 px-4 overflow-hidden">
      {/* Abstract blurred shapes for background depth */}
      <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-blue-900 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-purple-800 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Image */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-xl border border-white/10">
            <img
              src="/images/about1.jpg"
              alt="About Our Company"
              className="w-full h-auto object-cover brightness-90 hover:brightness-100 transition duration-500"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-center md:text-left bg-white/5 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-md">
          <h2 className="text-3xl md:text-4xl font-rajdhani font-bold text-white mb-4 tracking-wide">
            About Our Company
          </h2>
          <p className="text-gray-300 text-md font-exo md:text-lg mb-6 leading-relaxed">
            At Southern Technologist Group, we blend innovation with precision.
            Our commitment to excellence drives our work in every industrial and
            technological solution we deliver. With a strong foundation in modern
            manufacturing, automation, and customer-focused engineering, we continue
            moving forward—together.
          </p>
          <Link
            to="/about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Image Grid */}
      <div className="relative z-10 max-w-7xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <img src="/images/factory7.jpg" alt="Factory 7" className="rounded-lg shadow-md hover:brightness-110 transition duration-300" />
          <img src="/images/factory8.jpg" alt="Factory 8" className="rounded-lg shadow-md hover:brightness-110 transition duration-300" />
          <img src="/images/factory9.jpg" alt="Factory 9" className="rounded-lg shadow-md hover:brightness-110 transition duration-300" />
          <img src="/images/factory10.jpg" alt="Factory 10" className="rounded-lg shadow-md hover:brightness-110 transition duration-300" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


