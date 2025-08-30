import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      color: '#f1f5f9',
      lineHeight: '1.7',
      padding: '40px 20px',
      minHeight: '100vh',
      margin:'-8px',
    }}>
      <div className="logo" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <img src="./images/Tensorik logo.png" alt="Tensorik Logo" style={{ height: '60px' }} />
      </div>
      <div className="container" style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
      }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px', color: '#38bdf8' }}>Privacy Policy</h1>
        <p><strong>Last updated:</strong> June 12, 2025</p>

        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>1. Information We Collect</h3>
        <p style={{ marginBottom: '15px' }}>We may collect the following personal information when you fill out forms on our website:</p>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Name</li>
          <li style={{ marginBottom: '8px' }}>Email address</li>
          <li style={{ marginBottom: '8px' }}>Phone number</li>
          <li style={{ marginBottom: '8px' }}>College or University name</li>
          <li style={{ marginBottom: '8px' }}>Occupation or academic background</li>
        </ul>

        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>2. How We Use Your Information</h3>
        <p style={{ marginBottom: '15px' }}>Your information may be used to:</p>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Send updates about workshops, internships, and events</li>
          <li style={{ marginBottom: '8px' }}>Respond to inquiries or support requests</li>
          <li style={{ marginBottom: '8px' }}>Manage registration and participation</li>
          <li style={{ marginBottom: '8px' }}>Improve user experience and offerings</li>
        </ul>

        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>3. Data Protection</h3>
        <p style={{ marginBottom: '15px' }}>Your personal data is securely stored. We do not sell, rent, or trade your information. Access is restricted to authorized personnel only.</p>

        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>4. Third-Party Tools</h3>
        <p style={{ marginBottom: '15px' }}>Tensorik may use tools such as:</p>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li style={{ marginBottom: '8px' }}>Google Forms (for collecting data)</li>
          <li style={{ marginBottom: '8px' }}>Razorpay (for workshop payments)</li>
          <li style={{ marginBottom: '8px' }}>Analytics tools like Google Analytics</li>
        </ul>
        <p style={{ marginBottom: '15px' }}>These platforms follow their own privacy policies.</p>

        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>5. Your Rights</h3>
        <p style={{ marginBottom: '15px' }}>You can access, update, or delete your data by contacting us at <a href="mailto:officialtensorik@gmail.com" style={{ color: '#38bdf8', textDecoration: 'underline' }}>officialtensorik@gmail.com</a>.</p>

        <h3 style={{ marginTop: '30px', marginBottom: '10px', color: '#38bdf8', fontSize: '20px' }}>6. Changes to This Policy</h3>
        <p style={{ marginBottom: '15px' }}>We may revise this policy occasionally. Updates will be posted here with a new revision date.</p>

        <p><strong>Contact:</strong> <a href="mailto:officialtensorik@gmail.com" style={{ color: '#38bdf8', textDecoration: 'underline' }}>officialtensorik@gmail.com</a></p>
      </div>
      <footer style={{ textAlign: 'center', marginTop: '40px', fontSize: '14px', color: '#94a3b8' }}>
        © 2025 Tensorik. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicy;