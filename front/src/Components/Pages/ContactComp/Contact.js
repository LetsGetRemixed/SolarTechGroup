import React from 'react';
import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';
import HeaderRoute from '../UniversalComp/HeaderRoute';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeaderRoute imageUrl="/images/factory9.jpg" title="Contact Us" />

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 font-rajdhani mb-8">Get in Touch</h1>

          <p className="text-gray-600 font-exo text-lg mb-8 max-w-2xl mx-auto">
            We’re here to help with any questions about our services, capabilities, or partnerships. 
            Feel free to reach out to us through the following contact methods or during our business hours.
          </p>

          {/* Contact Information */}
          <div className="space-y-6 font-exo text-lg text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-800">📧 Email</h3>
              <a href="mailto:Contact@southerntechnologistgroup.com" className="text-blue-600 hover:underline">
                Contact@southerntechnologistgroup.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">📞 Phone</h3>
              <a href="tel:+6575809511" className="text-blue-600 hover:underline">
                (657) 580-9511
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">🕒 Business Hours</h3>
              <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>

          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
