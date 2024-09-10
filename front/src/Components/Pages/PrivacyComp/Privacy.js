import React from 'react';
import Navbar from '../UniversalComp/Navbar';
import Footer from '../UniversalComp/Footer';

const Privacy = () => {
    return (
        <div>
            <Navbar />
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
            
            <p><strong>Effective Date:</strong> [09/10/2024]</p>
            
            <p>Southern Technologist Group (“we,” “us,” or “our”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website and make purchases or reach out via our contact forms. By using our website, you agree to the terms of this Privacy Policy.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p>We may collect the following personal information from users through forms on our website:</p>
            <ul className="list-disc ml-6 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Address</li>
                <li>Payment details (collected only for purchases)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Purpose of Data Collection</h2>
            <p>We collect personal data for the following purposes:</p>
            <ul className="list-disc ml-6 mb-4">
                <li>To process and fulfill purchases of products on our website.</li>
                <li>To communicate with users who reach out through our contact forms (Note: Contacting us does not involve the collection of payment information).</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Sharing</h2>
            <p>We do not share your personal data with any third parties. All information collected is solely used for the purposes outlined above.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies and Tracking Technologies</h2>
            <p>We do not use cookies, web beacons, or other tracking technologies on our website.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. User Rights</h2>
            <p>Users have the option to provide or withhold their personal data. If you choose not to provide certain information, you may not be able to complete purchases or receive responses to your inquiries.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Data Security</h2>
            <p>We take the security of your personal information seriously. Sensitive data, such as payment details, is encrypted to protect your information. Non-sensitive data is securely stored by Southern Technologist Group.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Third-Party Links</h2>
            <p>Our website does not contain links to third-party websites or services. We are solely responsible for data collected on our own site.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. Age Restrictions</h2>
            <p>There are no age restrictions for using our website.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">9. Changes to This Privacy Policy</h2>
            <p>We reserve the right to make changes to this Privacy Policy at any time. No notifications will be provided regarding changes to the Privacy Policy. It is your responsibility to review the policy periodically.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy or how your information is handled, please reach out to us via our contact page.</p>
        </div>
        <Footer />
        </div>
    );
};

export default Privacy;