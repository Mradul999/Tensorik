import React from "react";
import logo from "../assets/images/Tensorik logo.png";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-[#f1f5f9] font-[Inter] px-5 py-10">
      {/* Logo */}
      <div className="text-center mb-8">
        <img src={logo} alt="Tensorik Logo" className="h-16 mx-auto" />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-[#38bdf8] mb-4">
          Terms of Service
        </h1>
        <p className="mb-6">
          <strong>Last updated:</strong> June 12, 2025
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          1. Use of the Website
        </h3>
        <p className="mb-4">
          By accessing or using the Tensorik website, you agree to follow these
          terms and any applicable laws or regulations.
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          2. Intellectual Property
        </h3>
        <p className="mb-4">
          All content on this site, including branding, design, and written
          material, is the property of Tensorik and may not be copied, reused,
          or modified without permission.
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          3. Registration & Submissions
        </h3>
        <p className="mb-4">
          By submitting your information through forms or applications, you
          confirm its accuracy. We may contact you to verify details before
          confirming your participation in any program or internship.
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          4. Payments
        </h3>
        <p className="mb-4">
          Payments made via third-party platforms such as Razorpay are governed
          by their own terms. Tensorik is not liable for transaction issues on
          those platforms.
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          5. Limitation of Liability
        </h3>
        <p className="mb-4">
          Tensorik is not responsible for technical errors, website downtime, or
          misuse of external platforms. Use of this site is at your own risk.
        </p>

        <h3 className="text-xl font-semibold text-[#38bdf8] mt-8 mb-2">
          6. Changes to Terms
        </h3>
        <p className="mb-6">
          We may revise these terms at any time without prior notice. Continued
          use of the website signifies your acceptance of the latest version.
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

export default TermsOfService;
