import React, { useEffect } from "react";
import * as THREE from "three";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/Tensorik logo.png";

const Signup = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let scene, camera, renderer, particles, particleMaterial;
    const particleCount = 1000;

    function initParticles() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      const container = document.getElementById("particle-container");
      if (container) container.appendChild(renderer.domElement);

      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 10;
        positions[i + 1] = (Math.random() - 0.5) * 10;
        positions[i + 2] = (Math.random() - 0.5) * 10;
      }
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      particleMaterial = new THREE.PointsMaterial({
        color: 0x3b82f6,
        size: 0.02,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      particles = new THREE.Points(geometry, particleMaterial);
      scene.add(particles);

      window.addEventListener("resize", onWindowResize);
      animateParticles();
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animateParticles() {
      requestAnimationFrame(animateParticles);
      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0007;
      renderer.render(scene, camera);
    }

    initParticles();

    // Floating label
    const inputs = document.querySelectorAll(".form-group input");
    inputs.forEach((input) => {
      if (input.value) input.classList.add("has-content");
      input.addEventListener("focus", () => {
        input.classList.add("has-content");
        input.style.transform = "scale(1.005)";
      });
      input.addEventListener("blur", () => {
        if (!input.value) input.classList.remove("has-content");
        input.style.transform = "scale(1)";
      });
    });

    // Password analyze
    const analyzeBtn = document.getElementById("analyze-password-btn");
    const passwordInput = document.getElementById("password");
    const passwordFeedback = document.getElementById("password-feedback");

    function showFeedback(message, type) {
      passwordFeedback.textContent = message;
      passwordFeedback.className = type;
      passwordFeedback.style.opacity = "1";
      if (type !== "loading") {
        setTimeout(() => {
          passwordFeedback.style.opacity = "0";
          setTimeout(() => {
            passwordFeedback.textContent = "";
            passwordFeedback.className = "";
          }, 300);
        }, 5000);
      }
    }

    function checkPasswordStrength(password) {
      let strength = 0;
      let feedback = [];

      const hasLower = /[a-z]/.test(password);
      const hasUpper = /[A-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(
        password
      );

      if (password.length >= 8) strength++;
      else feedback.push("Min 8 chars.");

      let met = [hasLower, hasUpper, hasNumber, hasSpecial].filter(
        Boolean
      ).length;
      if (met >= 3) strength++;
      else {
        if (!hasLower) feedback.push("Add lowercase.");
        if (!hasUpper) feedback.push("Add uppercase.");
        if (!hasNumber) feedback.push("Add number.");
        if (!hasSpecial) feedback.push("Add special.");
      }

      if (!password) return { text: "", type: "" };
      if (strength === 2 && met === 4 && password.length >= 12)
        return { text: "Strong!", type: "strong" };
      if (strength >= 1 && met >= 3 && password.length >= 8)
        return { text: "Medium.", type: "medium" };
      return { text: "Weak. " + feedback.join(" "), type: "weak" };
    }

    analyzeBtn.addEventListener("click", () => {
      const pwd = passwordInput.value;
      if (!pwd) {
        showFeedback("Enter password.", "text-muted");
        return;
      }
      showFeedback("Analyzing...", "loading");
      setTimeout(() => {
        const { text, type } = checkPasswordStrength(pwd);
        showFeedback(text, type);
      }, 500);
    });

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    try {
      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, confirmPassword }),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.msg);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("password", password);
        sessionStorage.setItem("name", name);
        navigate("/verify-otp");
      } else {
        alert(data.msg);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div id="particle-container"></div>

      <header>
        <img src={logo} alt="Tensorik Logo" />
      </header>

      <main>
        <div className="signup-card">
          <h2>Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" id="name" placeholder=" " required />
              <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-group">
              <input type="email" id="email" placeholder=" " required />
              <label htmlFor="email">Email Address</label>
            </div>
            <div className="form-group">
              <div className="password-group">
                <input type="password" id="password" placeholder=" " required />
                <label htmlFor="password">Password</label>
                <button type="button" id="analyze-password-btn">
                  ✨ Analyze
                </button>
              </div>
              <div id="password-feedback"></div>
            </div>
            <div className="form-group">
              <input
                type="password"
                id="confirm-password"
                placeholder=" "
                required
              />
              <label htmlFor="confirm-password">Confirm Password</label>
            </div>

            <button type="submit">Sign Up</button>
          </form>
          <div className="footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </main>

      {/* ✅ ✅ ✅ DON'T FORGET THIS: Styles */}
      <style>{`
        :root {
          --bg-dark: #0f172a;
          --card-bg: #1e293b;
          --text-light: #f1f5f9;
          --text-muted: #94a3b8;
          --primary: #3b82f6;
          --radius: 1rem;
        }
        * {
          margin: 0; padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
        }
        html, body, #root {
          background: var(--bg-dark);
          color: var(--text-light);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        #particle-container {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: -2;
        }
        header {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
        }
        header img {
          height: 40px;
          border-radius: 0.5rem;
        }
        main {
          flex: 1; display: flex;
          align-items: center; justify-content: center;
          padding: 2rem;
          z-index: 1;
        }
        .signup-card {
          background: var(--card-bg);
          padding: 2rem 2.5rem;
          border-radius: var(--radius);
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
          max-width: 400px; width: 100%;
          position: relative;
        }
        .signup-card h2 {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          text-align: center;
        }
        .form-group {
          margin-bottom: 1.5rem; position: relative;
        }
        label {
          position: absolute;
          left: 0.75rem; top: 0.75rem;
          color: var(--text-muted);
          font-size: 1rem; transition: all 0.3s ease;
          pointer-events: none;
        }
        input {
          width: 100%; padding: 0.75rem;
          border-radius: 0.5rem; border: 1px solid #334155;
          background: #0f172a; color: var(--text-light);
          font-size: 1rem;
        }
        input:focus + label,
        input:not(:placeholder-shown) + label {
          top: -0.75rem; left: 0.5rem; font-size: 0.75rem;
          color: var(--primary);
          transform: scale(0.9);
          background: var(--card-bg); padding: 0 0.25rem;
          border-radius: 0.25rem;
        }
        input:focus {
          outline: none; border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.3);
          transform: scale(1.005);
        }
        .password-group { display: flex; align-items: center; gap: 0.5rem; }
        .password-group input { flex-grow: 1; }
        .password-group button {
          margin-top: 0; width: auto; padding: 0.75rem 1rem;
          font-size: 0.9rem; flex-shrink: 0;
        }
        #password-feedback {
          margin-top: 0.5rem; font-size: 0.85rem;
          color: var(--text-muted); min-height: 1.5rem;
          transition: opacity 0.3s ease-out; opacity: 0;
        }
        #password-feedback.weak { color: #ef4444; }
        #password-feedback.medium { color: #f59e0b; }
        #password-feedback.strong { color: #22c55e; }
        #password-feedback.loading { color: var(--primary); font-style: italic; }
        button {
          margin-top: 1.5rem; width: 100%; padding: 0.75rem;
          border: none; border-radius: 0.5rem;
          background: linear-gradient(45deg,var(--primary),#2563eb);
          color: white; font-size: 1rem; cursor: pointer;
          box-shadow: 0 5px 15px rgba(59,130,246,0.3);
          position: relative; overflow: hidden; z-index: 0;
        }
        .footer {
          margin-top: 1.5rem; text-align: center;
          font-size: 0.9rem; color: var(--text-muted);
        }
        .footer a {
          color: var(--primary); text-decoration: none;
        }
        .footer a:hover {
          color: #2563eb; text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Signup;

// // src/Signup.jsx
// import React, { useEffect } from 'react';
// import * as THREE from 'three';
// import { Link } from 'react-router-dom';
// import logo from "../assets/images/Tensorik logo.png";

// const Signup = () => {
//   useEffect(() => {
//     let scene, camera, renderer, particles, particleMaterial;
//     const particleCount = 1000;

//     function initParticles() {
//       scene = new THREE.Scene();
//       camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//       );
//       camera.position.z = 5;

//       renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       const container = document.getElementById('particle-container');
//       if (container) container.appendChild(renderer.domElement);

//       const geometry = new THREE.BufferGeometry();
//       const positions = new Float32Array(particleCount * 3);
//       for (let i = 0; i < particleCount * 3; i += 3) {
//         positions[i] = (Math.random() - 0.5) * 10;
//         positions[i + 1] = (Math.random() - 0.5) * 10;
//         positions[i + 2] = (Math.random() - 0.5) * 10;
//       }
//       geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

//       particleMaterial = new THREE.PointsMaterial({
//         color: 0x3b82f6,
//         size: 0.02,
//         transparent: true,
//         opacity: 0.6,
//         blending: THREE.AdditiveBlending,
//       });

//       particles = new THREE.Points(geometry, particleMaterial);
//       scene.add(particles);

//       window.addEventListener('resize', onWindowResize);
//       animateParticles();
//     }

//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     function animateParticles() {
//       requestAnimationFrame(animateParticles);
//       particles.rotation.x += 0.0005;
//       particles.rotation.y += 0.0007;
//       renderer.render(scene, camera);
//     }

//     initParticles();

//     // Floating label
//     const inputs = document.querySelectorAll('.form-group input');
//     inputs.forEach(input => {
//       if (input.value) input.classList.add('has-content');
//       input.addEventListener('focus', () => {
//         input.classList.add('has-content');
//         input.style.transform = 'scale(1.005)';
//       });
//       input.addEventListener('blur', () => {
//         if (!input.value) input.classList.remove('has-content');
//         input.style.transform = 'scale(1)';
//       });
//     });

//     // Password analyze
//     const analyzeBtn = document.getElementById('analyze-password-btn');
//     const passwordInput = document.getElementById('password');
//     const passwordFeedback = document.getElementById('password-feedback');

//     function showFeedback(message, type) {
//       passwordFeedback.textContent = message;
//       passwordFeedback.className = type;
//       passwordFeedback.style.opacity = '1';
//       if (type !== 'loading') {
//         setTimeout(() => {
//           passwordFeedback.style.opacity = '0';
//           setTimeout(() => {
//             passwordFeedback.textContent = '';
//             passwordFeedback.className = '';
//           }, 300);
//         }, 5000);
//       }
//     }

//     function checkPasswordStrength(password) {
//       let strength = 0;
//       let feedback = [];

//       const hasLower = /[a-z]/.test(password);
//       const hasUpper = /[A-Z]/.test(password);
//       const hasNumber = /[0-9]/.test(password);
//       const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password);

//       if (password.length >= 8) strength++;
//       else feedback.push('Min 8 chars.');

//       let met = [hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;
//       if (met >= 3) strength++;
//       else {
//         if (!hasLower) feedback.push('Add lowercase.');
//         if (!hasUpper) feedback.push('Add uppercase.');
//         if (!hasNumber) feedback.push('Add number.');
//         if (!hasSpecial) feedback.push('Add special.');
//       }

//       if (!password) return { text: '', type: '' };
//       if (strength === 2 && met === 4 && password.length >= 12) return { text: 'Strong!', type: 'strong' };
//       if (strength >= 1 && met >= 3 && password.length >= 8) return { text: 'Medium.', type: 'medium' };
//       return { text: 'Weak. ' + feedback.join(' '), type: 'weak' };
//     }

//     analyzeBtn.addEventListener('click', () => {
//       const pwd = passwordInput.value;
//       if (!pwd) {
//         showFeedback('Enter password.', 'text-muted');
//         return;
//       }
//       showFeedback('Analyzing...', 'loading');
//       setTimeout(() => {
//         const { text, type } = checkPasswordStrength(pwd);
//         showFeedback(text, type);
//       }, 500);
//     });

//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//     };
//   }, []);

//   return (
//     <>
//       <div id="particle-container"></div>

//       <header>
//         <img src={logo} alt="Tensorik Logo" />
//       </header>

//       <main>
//         <div className="signup-card">
//           <h2>Create Your Account</h2>
//           <form>
//             <div className="form-group">
//               <input type="text" id="name" placeholder=" " required />
//               <label htmlFor="name">Full Name</label>
//             </div>
//             <div className="form-group">
//               <input type="email" id="email" placeholder=" " required />
//               <label htmlFor="email">Email Address</label>
//             </div>
//             <div className="form-group">
//               <div className="password-group">
//                 <input type="password" id="password" placeholder=" " required />
//                 <label htmlFor="password">Password</label>
//                 <button type="button" id="analyze-password-btn">✨ Analyze</button>
//               </div>
//               <div id="password-feedback"></div>
//             </div>
//             <div className="form-group">
//               <input type="password" id="confirm-password" placeholder=" " required />
//               <label htmlFor="confirm-password">Confirm Password</label>
//             </div>
//             <button type="submit">Sign Up</button>
//           </form>
//           <div className="footer">
//             Already have an account? <Link to="/login">Sign in</Link>
//           </div>
//         </div>
//       </main>

//       <style>{`
//         :root {
//           --bg-dark: #0f172a;
//           --card-bg: #1e293b;
//           --text-light: #f1f5f9;
//           --text-muted: #94a3b8;
//           --primary: #3b82f6;
//           --radius: 1rem;
//         }
//         * {
//           margin: 0; padding: 0;
//           box-sizing: border-box;
//           font-family: 'Inter', sans-serif;
//         }
//         html, body, #root {
//           background: var(--bg-dark);
//           color: var(--text-light);
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           position: relative;
//         }
//         #particle-container {
//           position: fixed;
//           top: 0; left: 0;
//           width: 100%; height: 100%;
//           z-index: -2;
//         }
//         header {
//           padding: 1.5rem 2rem;
//           display: flex;
//           align-items: center;
//         }
//         header img {
//           height: 40px;
//           border-radius: 0.5rem;
//         }
//         main {
//           flex: 1; display: flex;
//           align-items: center; justify-content: center;
//           padding: 2rem;
//           z-index: 1;
//         }
//         .signup-card {
//           background: var(--card-bg);
//           padding: 2rem 2.5rem;
//           border-radius: var(--radius);
//           box-shadow: 0 10px 25px rgba(0,0,0,0.4);
//           max-width: 400px; width: 100%;
//           position: relative;
//         }
//         .signup-card h2 {
//           margin-bottom: 1.5rem;
//           font-size: 1.5rem;
//           text-align: center;
//         }
//         .form-group {
//           margin-bottom: 1.5rem; position: relative;
//         }
//         label {
//           position: absolute;
//           left: 0.75rem; top: 0.75rem;
//           color: var(--text-muted);
//           font-size: 1rem; transition: all 0.3s ease;
//           pointer-events: none;
//         }
//         input {
//           width: 100%; padding: 0.75rem;
//           border-radius: 0.5rem; border: 1px solid #334155;
//           background: #0f172a; color: var(--text-light);
//           font-size: 1rem;
//         }
//         input:focus + label,
//         input:not(:placeholder-shown) + label {
//           top: -0.75rem; left: 0.5rem; font-size: 0.75rem;
//           color: var(--primary);
//           transform: scale(0.9);
//           background: var(--card-bg); padding: 0 0.25rem;
//           border-radius: 0.25rem;
//         }
//         input:focus {
//           outline: none; border-color: var(--primary);
//           box-shadow: 0 0 0 3px rgba(59,130,246,0.3);
//           transform: scale(1.005);
//         }
//         .password-group { display: flex; align-items: center; gap: 0.5rem; }
//         .password-group input { flex-grow: 1; }
//         .password-group button {
//           margin-top: 0; width: auto; padding: 0.75rem 1rem;
//           font-size: 0.9rem; flex-shrink: 0;
//         }
//         #password-feedback {
//           margin-top: 0.5rem; font-size: 0.85rem;
//           color: var(--text-muted); min-height: 1.5rem;
//           transition: opacity 0.3s ease-out; opacity: 0;
//         }
//         #password-feedback.weak { color: #ef4444; }
//         #password-feedback.medium { color: #f59e0b; }
//         #password-feedback.strong { color: #22c55e; }
//         #password-feedback.loading { color: var(--primary); font-style: italic; }
//         button {
//           margin-top: 1.5rem; width: 100%; padding: 0.75rem;
//           border: none; border-radius: 0.5rem;
//           background: linear-gradient(45deg,var(--primary),#2563eb);
//           color: white; font-size: 1rem; cursor: pointer;
//           box-shadow: 0 5px 15px rgba(59,130,246,0.3);
//           position: relative; overflow: hidden; z-index: 0;
//         }
//         .footer {
//           margin-top: 1.5rem; text-align: center;
//           font-size: 0.9rem; color: var(--text-muted);
//         }
//         .footer a {
//           color: var(--primary); text-decoration: none;
//         }
//         .footer a:hover {
//           color: #2563eb; text-decoration: underline;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Signup;
