import React, { useState } from 'react';

const ComingSoon = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!name.trim()) {
      setMessage('Please enter your name.');
      return false;
    }
    if (!email.trim()) {
      setMessage('Please enter your email.');
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setMessage('Thanks for subscribing! We\'ll keep you updated.');
      setTimeout(() => {
        setMessage('');
        setName('');
        setEmail('');
        setIsSubmitting(false);
      }, 3000);
    }
  };

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#1A1D20',
      color: '#F9FAFB',
      minHeight: '100vh',
      display: 'flex',
      margin:'-8px',
      flexDirection: 'column',
    }}>
      <header style={{ padding: '1rem 1.5rem', backgroundColor: '#25292e', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
          <a href="index.html" style={{ display: 'block', width: '8rem' }}>
            <img src="./images/Tensorik logo.png" alt="Tensorik Logo - Learn AI Together" style={{ height: 'auto', width: '100%' }} />
          </a>
        </div>
      </header>

      <main style={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 1.5rem',
        background: 'linear-gradient(to right, #1A1D20, #25292e)',
      }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1.5rem',
            color: '#42A5F5',
            lineHeight: 1.2,
          }}>
            Courses <br className="sm:hidden" /> Are Coming Soon!
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#A0AEC0', marginBottom: '2rem' }}>
            We're actively curating the most comprehensive and hands-on AI courses just for you. Get ready to dive deep into <strong>Machine Learning, Deep Learning, NLP, Prompt Engineering</strong>, and more!
          </p>
          <p style={{ fontSize: '1.125rem', color: '#F9FAFB', marginBottom: '2.5rem' }}>
            Sign up for our newsletter to be the <strong>first to know</strong> when registration opens and get exclusive early bird access!
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '20rem', margin: '0 auto' }}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
              style={{
                padding: '0.75rem',
                border: '1px solid #4B5563',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                outline: 'none',
                backgroundColor: '#25292e',
                color: '#F9FAFB',
                width: '100%',
              }}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              required
              style={{
                padding: '0.75rem',
                border: '1px solid #4B5563',
                borderRadius: '0.375rem',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                outline: 'none',
                backgroundColor: '#25292e',
                color: '#F9FAFB',
                width: '100%',
              }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                backgroundColor: '#42A5F5',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '9999px',
                fontWeight: 600,
                transition: 'background-color 0.3s ease',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                width: '100%',
              }}
            >
              <span>{isSubmitting ? 'Subscribing...' : 'Notify Me!'}</span>
              {!isSubmitting && (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              )}
            </button>
          </form>
          {message && <p style={{ marginTop: '1rem', color: '#42A5F5', fontWeight: 600 }}>{message}</p>}

          <div style={{ marginTop: '3rem' }}>
            <a
              href="index.html"
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #42A5F5',
                color: '#42A5F5',
                padding: '0.75rem 2rem',
                borderRadius: '9999px',
                fontWeight: 500,
                transition: 'background-color 0.3s ease, color 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2196F3';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#42A5F5';
              }}
            >
              <span>Back to Home</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>

      <footer style={{ padding: '2.5rem 1rem', backgroundColor: '#25292e', textAlign: 'center', color: '#A0AEC0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <a href="#" target="_blank" style={{ color: '#A0AEC0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>
              <i className="fab fa-facebook-f" style={{ fontSize: '1.25rem' }}></i>
            </a>
            <a href="#" target="_blank" style={{ color: '#A0AEC0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>
              <i className="fab fa-twitter" style={{ fontSize: '1.25rem' }}></i>
            </a>
            <a href="#" target="_blank" style={{ color: '#A0AEC0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>
              <i className="fab fa-linkedin-in" style={{ fontSize: '1.25rem' }}></i>
            </a>
            <a href="#" target="_blank" style={{ color: '#A0AEC0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>
              <i className="fab fa-instagram" style={{ fontSize: '1.25rem' }}></i>
            </a>
          </div>
          <p style={{ marginBottom: '0.5rem' }}>
            Email: <a href="mailto:officialtensorik@gmail.com" style={{ color: '#A0AEC0', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#F9FAFB'} onMouseLeave={(e) => e.currentTarget.style.color = '#A0AEC0'}>officialtensorik@gmail.com</a>
          </p>
          <p>© 2025 Tensorik. Made with <i className="far fa-lightbulb" style={{ color: '#A0AEC0' }}></i> by Team Tensorik</p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;