import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import taraLogo from '../assets/images/tara-logo.png'; // ✅ Adjust path if needed

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! I’m Tara 👩‍💻 — your AI assistant, powered by Tensorik ⚡. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messageEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/groq-chat', {
        message: input,
      });
      const botMsg = { role: 'assistant', content: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '❌ Sorry, I couldn’t get a response. Try again later.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  const styles = {
    botIcon: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
      zIndex: 9999,
      animation: isOpen ? 'none' : 'bounce 1s infinite',
      objectFit: 'cover',
    },
    chatBox: {
      position: 'fixed',
      bottom: '90px',
      right: '20px',
      width: '360px',
      maxHeight: '550px',
      background: '#0f172a',
      border: '1px solid #334155',
      borderRadius: '12px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
      zIndex: 9999,
      overflow: 'hidden',
      fontFamily: "'Inter', sans-serif",
    },
    header: {
      padding: '10px 16px',
      background: 'linear-gradient(to right, #2563eb, #1d4ed8)',
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      position: 'relative',
      fontSize: '16px',
    },
    closeBtn: {
      position: 'absolute',
      right: '10px',
      top: '8px',
      background: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '18px',
      cursor: 'pointer',
    },
    messagesContainer: {
      padding: '10px',
      overflowY: 'auto',
      flexGrow: 1,
      backgroundColor: '#0f172a',
    },
    message: {
      padding: '10px 14px',
      borderRadius: '16px',
      marginBottom: '10px',
      maxWidth: '80%',
      fontSize: '14px',
      lineHeight: '1.4',
      color: '#e2e8f0',
    },
    userMsg: {
      backgroundColor: '#2563eb',
      color: 'white',
      alignSelf: 'flex-end',
    },
    botMsg: {
      backgroundColor: '#1e293b',
      color: '#cbd5e1',
      alignSelf: 'flex-start',
    },
    inputArea: {
      display: 'flex',
      padding: '10px',
      borderTop: '1px solid #334155',
      backgroundColor: '#1e293b',
    },
    input: {
      flexGrow: 1,
      padding: '8px 12px',
      borderRadius: '20px',
      border: '1px solid #334155',
      outline: 'none',
      backgroundColor: '#0f172a',
      color: '#e2e8f0',
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '8px 16px',
      borderRadius: '20px',
      cursor: 'pointer',
      marginLeft: '10px',
      transition: 'background-color 0.3s',
      fontWeight: 'bold',
    },
    typing: {
      fontStyle: 'italic',
      color: '#94a3b8',
      marginTop: '5px',
    },
    poweredBy: {
      fontSize: '12px',
      color: '#94a3b8',
      textAlign: 'center',
      margin: '4px 0',
    },
    link: {
      color: '#60a5fa',
      fontWeight: '500',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        button:hover {
          background-color: #1d4ed8 !important;
        }
        .powered-link:hover {
          color: #3b82f6;
        }
      `}</style>

      <img
        src={taraLogo}
        alt="Tara AI"
        style={styles.botIcon}
        onClick={() => setIsOpen(true)}
      />

      <div style={styles.chatBox}>
        <div style={styles.header}>
          Tara 👩‍💻
          <button style={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>
        </div>

        <div style={styles.messagesContainer}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              style={{
                ...styles.message,
                ...(msg.role === 'user' ? styles.userMsg : styles.botMsg),
              }}
            >
              {msg.content}
            </div>
          ))}
          {loading && <div style={styles.typing}>Tara is typing...</div>}
          <div ref={messageEndRef} />
        </div>

        <div style={styles.poweredBy}>
          Powered by{' '}
          <a
            href="https://tensorik.in"
            target="_blank"
            rel="noreferrer"
            style={styles.link}
            className="powered-link"
          >
            Tensorik
          </a>
        </div>

        <div style={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Tara anything..."
            style={styles.input}
          />
          <button onClick={sendMessage} style={styles.button} disabled={loading}>
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
