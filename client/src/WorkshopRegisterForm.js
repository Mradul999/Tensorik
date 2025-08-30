import React, { useState, useEffect } from 'react';

const WorkshopRegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    occupation: '',
    university: ''
  });
  const [message, setMessage] = useState(false);

  useEffect(() => {
    document.body.style.margin = '0';
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone.replace(/\D/g, ''));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.occupation || !formData.university) {
      alert('All fields are required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    console.log(formData);
    setMessage(true);
    setFormData({ name: '', email: '', phone: '', occupation: '', university: '' });
    setTimeout(() => setMessage(false), 5000);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '40px 16px',
        backgroundColor: '#1A1D20',
        color: '#F9FAFB',
        fontFamily: "'Inter', sans-serif",
        width: '100%'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '64rem',
          marginBottom: '32px'
        }}
      >
        <img
          src="./images/workshop-banner.jpg"
          alt="Workshop Banner"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        />
      </div>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}
      >
        <h1
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '8px',
            color: '#FFFFFF'
          }}
        >
          AI Fundamentals Workshop
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#A0AEC0'
          }}
        >
          Fill in the details below to secure your seat.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '25em',
          backgroundColor: '#25292e',
          padding: '32px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <label
            htmlFor="name"
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '4px'
            }}
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            style={{
              width: '90%',
              padding: '12px 16px',
              borderRadius: '6px',
              backgroundColor: '#1A1D20',
              color: '#F9FAFB',
              border: '1px solid #4B5563',
              outline: 'none',
              transition: 'border-color 0.3s, box-shadow 0.3s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#42A5F5';
              e.target.style.boxShadow = '0 0 0 2px rgba(66, 165, 245, 0.5)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#4B5563';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <label
            htmlFor="email"
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '4px'
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            style={{
              width: '90%',
              padding: '12px 16px',
              borderRadius: '6px',
              backgroundColor: '#1A1D20',
              color: '#F9FAFB',
              border: '1px solid #4B5563',
              outline: 'none',
              transition: 'border-color 0.3s, box-shadow 0.3s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#42A5F5';
              e.target.style.boxShadow = '0 0 0 2px rgba(66, 165, 245, 0.5)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#4B5563';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <label
            htmlFor="phone"
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '4px'
            }}
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            style={{
              width: '90%',
              padding: '12px 16px',
              borderRadius: '6px',
              backgroundColor: '#1A1D20',
              color: '#F9FAFB',
              border: '1px solid #4B5563',
              outline: 'none',
              transition: 'border-color 0.3s, box-shadow 0.3s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#42A5F5';
              e.target.style.boxShadow = '0 0 0 2px rgba(66, 165, 245, 0.5)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#4B5563';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <label
            htmlFor="occupation"
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '4px'
            }}
          >
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
            placeholder="e.g. Student, Working Professional"
            style={{
              width: '90%',
              padding: '12px 16px',
              borderRadius: '6px',
              backgroundColor: '#1A1D20',
              color: '#F9FAFB',
              border: '1px solid #4B5563',
              outline: 'none',
              transition: 'border-color 0.3s, box-shadow 0.3s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#42A5F5';
              e.target.style.boxShadow = '0 0 0 2px rgba(66, 165, 245, 0.5)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#4B5563';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <label
            htmlFor="university"
            style={{
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '4px'
            }}
          >
            University / College Name
          </label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
            placeholder="Enter institution name"
            style={{
              width: '90%',
              padding: '12px 16px',
              borderRadius: '6px',
              backgroundColor: '#1A1D20',
              color: '#F9FAFB',
              border: '1px solid #4B5563',
              outline: 'none',
              transition: 'border-color 0.3s, box-shadow 0.3s'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#42A5F5';
              e.target.style.boxShadow = '0 0 0 2px rgba(66, 165, 245, 0.5)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#4B5563';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
        <div
          style={{
            textAlign: 'center',
            paddingTop: '16px'
          }}
        >
          <button
            type="submit"
            style={{
              width: '90%',
              backgroundColor: '#42A5F5',
              color: '#FFFFFF',
              fontWeight: '600',
              padding: '12px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => { e.target.style.backgroundColor = '#2196F3'; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = '#42A5F5'; }}
          >
            Submit Registration
          </button>
        </div>
      </form>
      <p
        style={{
          marginTop: '24px',
          color: '#42A5F5',
          fontWeight: '600',
          display: message ? 'block' : 'none'
        }}
      >
        ✅ Thank you for registering! We'll be in touch soon.
      </p>
    </div>
  );
};

export default WorkshopRegisterForm;