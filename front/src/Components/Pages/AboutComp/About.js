import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';
import HeaderRoute from '../UniversalComp/HeaderRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    offset: 300, // default is 120px; adjust to trigger earlier/later
  });
}, []);


  return (
    <div>
      <Navbar />
      <HeaderRoute imageUrl="/images/factory9.jpg" title="About Us" />

      <section className="bg-gray-100 py-16 px-6">
        {/* Introduction */}
        <div className="max-w-5xl mx-auto text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-bold font-rajdhani text-gray-800 mb-4">Southern Technologist Group (STG)</h1>
          <p className="text-gray-600 font-exo text-lg">
            Founded in 2022, STG delivers comprehensive solutions and structured project execution across the construction,
            engineering, and infrastructure industries. What began with a focus on electrical and LED installations has evolved into
            a robust offering of general contracting, electrical commissioning, HVAC analysis, civil consulting, and ready-mix
            quality inspections.
          </p>
        </div>

        {/* Company Growth + Image */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20" data-aos="fade-up">
          <div className="md:w-1/2">
            <img
              src="/images/factory8.jpg"
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 font-rajdhani mb-4">Our Evolution</h2>
            <p className="text-gray-600 font-exo text-lg">
              Over the years, STG has expanded its services to include general contracting, HVAC system analysis, and civil consulting.
              Our ability to blend technical expertise with disciplined project management ensures that every project is delivered on time,
              within scope, and to the highest safety and quality standards.
            </p>
          </div>
        </div>

        {/* Mission and Clients */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20" data-aos="fade-up">
          <div className="md:w-1/2 text-center md:text-left order-last md:order-first">
            <h2 className="text-3xl font-bold text-gray-800 font-rajdhani mb-4">Our Mission</h2>
            <p className="text-gray-600 font-exo text-lg">
              Our leadership team brings over 60 years of combined experience and has managed projects totaling over $72 million
              for clients such as Amazon, Walmart, and Waste Management. Our mission is to deliver excellence through innovation,
              precision, and a commitment to value-driven solutions that last.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/factory10.jpg"
              alt="Mission"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Highlighted Projects */}
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-5 mb-20" data-aos="zoom-in">
  {/* Left - Project List */}
  <div className="md:w-1/2">
    <h2 className="text-3xl font-bold text-gray-800 font-rajdhani text-center md:text-left mb-6">Highlighted Projects</h2>
    <ul className="text-gray-700 font-exo text-lg space-y-6 list-disc list-inside">
      <li><strong>Sam Adams Brewery – Cincinnati Facility Upgrade:</strong> $6M</li>
      <li><strong>Target Warehouse – New Facility:</strong> $10M</li>
      <li><strong>Amazon Europe – Czech Facility Testing:</strong> $5M</li>
      <li><strong>Ensign Energy – Rig Renovation & Upgrade:</strong> $13.5M</li>
      <li><strong>Waste Management – National Geosynthetics Inspection:</strong> $3.2M</li>
      <li><strong>Amazon – Colorado Springs – Electrical Scope:</strong> $128M</li>
      <li><strong>Amazon – San Bernardino – Electrical Scope:</strong> $26M</li>
      <li><strong>COGNEX – O’Hare International Airport – Scanner Systems:</strong> $54M</li>
    </ul>
  </div>

  {/* Right - Image */}
  <div className="md:w-1/2">
    <img
      src="/images/about2.jpg"  // Replace with your actual image
      alt="Project Showcase"
      className="w-full h-auto rounded-lg shadow-xl"
    />
  </div>
</div>


        {/* Feature Images */}
        <div className="max-w-6xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 text-center font-rajdhani mb-4">What We Do</h2>
          <p className="text-gray-600 text-center max-w-4xl mx-auto font-exo mb-8 text-lg">
            STG's capabilities range from high-precision installations to scalable construction solutions.
            Whether it's powering a massive warehouse or inspecting materials for public infrastructure, we bring the same level
            of care, engineering precision, and client satisfaction to every job.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/images/factory7.jpg" alt="Work 1" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/about1.jpg" alt="Work 2" className="w-full h-auto rounded-lg shadow-md" />
            <img src="/images/factory9.jpg" alt="Work 3" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>


         {/* CTA */}
        <div className="max-w-4xl mx-auto text-center mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 font-rajdhani mb-6">Ready to Learn More?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-exo mb-8">
            Our story is still being written. Discover how STG can help power your next project
            with smart, sustainable, and expertly executed solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Contact Us
          </Link>
        </div>


        {/* Leadership Bio */}
        <div className="max-w-5xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 font-rajdhani text-center mb-6">Leadership</h2>
          <div className="text-gray-600 font-exo text-lg leading-relaxed">
            <p className="mb-4"><strong>Bradley Williams – Co-Owner</strong></p>
            <p>
              Bradley Williams brings a powerful blend of leadership, technical skill, and operational oversight to STG.
              A Marine Corps veteran (2005–2009), Bradley served during Operation Iraqi Freedom and Operation Enduring Freedom.
              After his service, he rapidly rose in the private sector—starting as an Instrumentation Technician and progressing into
              senior roles with National Oilwell Varco, where he contributed to offshore innovation and drilling efficiency.
            </p>
            <p className="mt-4">
              Bradley later led major warehouse construction projects with Honeywell Intelligrated, including multi-million-dollar Amazon facilities.
              His experience in advanced systems integration, data automation, and project execution now drives STG’s ability to
              consistently deliver high-value outcomes—on time and on budget.
            </p>
          </div>
        </div>

        {/* Avetta Registered Partner */}
        <div className="max-w-4xl mx-auto text-center mb-20" data-aos="zoom-in" data-aos-delay="300">
          <h2 className="text-3xl font-bold text-gray-800 font-rajdhani mb-4">Registered Partner</h2>
          <p className="text-gray-600 text-lg font-exo mb-6">
            Southern Technologist Group is a proud registered partner with Avetta, reinforcing our
            commitment to compliance, safety, and operational integrity across all markets we serve.
          </p>
          <img src="/images/avetta.webp" alt="Avetta Logo" className="mx-auto h-20 md:h-48" />
        </div>

       
      </section>

      <Footer />
    </div>
  );
};

export default About;

