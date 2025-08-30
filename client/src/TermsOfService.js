import React from 'react';

const TermsOfService = () => {
  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: '#f1f5f9',
      lineHeight: '1.7',
      width: '100%',
      padding: '40px',
      margin:'-8px',
      minHeight: '100vh',
    }}>
      <div className="logo" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src="./images/Tensorik logo.png" alt="Tensorik Logo" style={{ height: '60px' }} />
      </div>
      <div className="container" style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '40px ',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
      }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px', color: '#38bdf8' }}>Terms of Service</h1>
        <p><strong>Last updated:</strong> June 12, 2025</p>
        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>1. Use of the Website</h3>
        <p style={{ marginBottom: '15px' }}>By accessing or using the Tensorik website, you agree to follow these terms and any applicable laws or regulations.</p>
        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>2. Intellectual Property</h3>
        <p style={{ marginBottom: '15px' }}>All content on this site, including branding, design, and written material, is the property of Tensorik and may not be copied, reused, or modified without permission.</p>
        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>3. Registration & Submissions</h3>
        <p style={{ marginBottom: '15px' }}>By submitting your information through forms or applications, you confirm its accuracy. We may contact you to verify details before confirming your participation in any program or internship.</p>
        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>4. Payments</h3>
        <p style={{ marginBottom: '15px' }}>Payments made via third-party platforms such as Razorpay are governed by their own terms. Tensorik is not liable for transaction issues on those platforms.</p>
        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>5. Limitation of Liability</h3>
        <p style={{ marginBottom: '15px' }}>Tensorik is not responsible for technical errors, website downtime, or misuse of external platforms. Use of this site is at your own risk.</p>
        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>6. Changes to Terms</h3>
        <p style={{ marginBottom: '15px' }}>We may revise these terms at any time without prior notice. Continued use of the website signifies your acceptance of the latest version.</p>
        <p><strong>Contact:</strong> <a href="mailto:officialtensorik@gmail.com" style={{ color: '#38bdf8', textDecoration: 'underline' }}>officialtensorik@gmail.com</a></p>
      </div>
      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '14px', color: '#94a3b8' }}>
        © 2025 Tensorik. All rights reserved.
      </footer>
    </div>
  );
};

export default TermsOfService;