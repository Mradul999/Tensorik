import React from "react";
import logo from "../assets/images/Tensorik logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-[#f1f5f9] font-[Inter] px-5 py-10">
      {/* Logo */}
      <div className="text-center mb-8">
        <img src={logo} alt="Tensorik Logo" className="h-16 mx-auto" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-[#38bdf8] mb-4">
          Privacy Policy
        </h1>
        <p className="mb-6">
          <strong>Last updated:</strong> June 12, 2025
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          1. Information We Collect
        </h3>
        <p className="mb-2">
          We may collect the following personal information when you fill out
          forms on our website:
        </p>
        <ul className="list-disc ml-6 mb-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>College or University name</li>
          <li>Occupation or academic background</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          2. How We Use Your Information
        </h3>
        <p className="mb-2">Your information may be used to:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Send updates about workshops, internships, and events</li>
          <li>Respond to inquiries or support requests</li>
          <li>Manage registration and participation</li>
          <li>Improve user experience and offerings</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          3. Data Protection
        </h3>
        <p className="mb-6">
          Your personal data is securely stored. We do not sell, rent, or trade
          your information. Access is restricted to authorized personnel only.
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          4. Third-Party Tools
        </h3>
        <p className="mb-2">Tensorik may use tools such as:</p>
        <ul className="list-disc ml-6 mb-6">
          <li>Google Forms (for collecting data)</li>
          <li>Razorpay (for workshop payments)</li>
          <li>Analytics tools like Google Analytics</li>
        </ul>
        <p className="mb-6">
          These platforms follow their own privacy policies.
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          5. Your Rights
        </h3>
        <p className="mb-6">
          You can access, update, or delete your data by contacting us at{" "}
          <a
            href="mailto:officialtensorik@gmail.com"
            className="text-[#38bdf8] underline"
          >
            officialtensorik@gmail.com
          </a>
          .
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          6. Changes to This Policy
        </h3>
        <p className="mb-6">
          We may revise this policy occasionally. Updates will be posted here
          with a new revision date.
        </p>

        <p className="mb-2">
          <strong>Contact:</strong>{" "}
          <a
            href="mailto:officialtensorik@gmail.com"
            className="text-[#38bdf8] underline"
          >
            officialtensorik@gmail.com
          </a>
        </p>
      </div>

      {/* Footer */}
      <footer className="text-center mt-10 text-sm text-[#94a3b8]">
        &copy; 2025 Tensorik. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
