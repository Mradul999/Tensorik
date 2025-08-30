import React, { useEffect, useState } from "react";
import { FaCode, FaPaintBrush, FaVideo } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <FaCode />,
    title: "Website Development",
    description:
      "Transform your vision into a stunning, high‑performance website that captivates your audience and drives conversions.",
    features: [
      "Responsive & Mobile‑First Design",
      "E‑commerce Solutions",
      "SEO‑Optimized Structure",
      "CMS Integration",
      "Performance Optimization",
    ],
    cta: "Explore Web Services",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Design",
    description:
      "Elevate your brand with compelling visual identities that communicate your message and resonate with your audience.",
    features: [
      "Logo & Brand Identity",
      "Marketing Materials",
      "Social Media Graphics",
      "Infographics & Presentations",
      "Print & Packaging Design",
    ],
    cta: "Discover Design Solutions",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    description:
      "Create impactful video content that tells your story, engages viewers, and amplifies your marketing efforts.",
    features: [
      "Commercial & Promotional Videos",
      "Social Media Content",
      "Motion Graphics & Animation",
      "Color Correction & Grading",
      "Sound Design & Audio Enhancement",
    ],
    cta: "View Video Portfolio",
  },
];

const GlobalStyles = () => (
  <style>
    {`
      @keyframes pulse-glow {
        0% { box-shadow: 0 0 0px rgba(88, 166, 255, 0.5); }
        50% { box-shadow: 0 0 25px rgba(88, 166, 255, 0.9); }
        100% { box-shadow: 0 0 0px rgba(88, 166, 255, 0.5); }
      }

      .service-card {
        transition: all 0.4s ease;
        cursor: pointer;
      }

      .service-card.clicked {
        animation: pulse-glow 0.8s ease;
      }

      .service-card:hover {
        transform: translateY(-10px);
        background: #1c222b;
        box-shadow:
          0 0 15px rgba(88, 166, 255, 0.4),
          10px 0 20px rgba(88, 166, 255, 0.2),
          -10px 0 20px rgba(88, 166, 255, 0.2);
      }

      .cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(88, 166, 255, 0.3);
      }

      @media (max-width: 768px) {
        .title { font-size: 32px !important; }
        .desc { font-size: 16px !important; }
        .grid { grid-template-columns: 1fr !important; }
      }
    `}
  </style>
);

export default function Services() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // animate every scroll
    });

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (e) => {
    const card = e.currentTarget;
    card.classList.add("clicked");
    setTimeout(() => card.classList.remove("clicked"), 800);
  };

  const styles = {
    section: {
      padding: "80px 20px",
      backgroundColor: "#0d1117",
      color: "#f0f6fc",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: isMobile ? "32px" : "42px",
      fontWeight: 700,
      marginBottom: "20px",
      background: "linear-gradient(to right, #58a6ff, #388bfd)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 0 15px #58a6ff, 0 0 30px #388bfd",
    },
    description: {
      maxWidth: "700px",
      margin: "0 auto",
      color: "#8b949e",
      fontSize: isMobile ? "16px" : "18px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "30px",
      marginTop: "40px",
      width: "100%",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto",
    },
    card: {
      background: "#161b22",
      borderRadius: "16px",
      padding: "35px 30px",
      overflow: "hidden",
      transition: "all 0.4s ease",
    },
    icon: {
      width: "80px",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(88,166,255,0.1)",
      borderRadius: "50%",
      marginBottom: "25px",
      fontSize: "32px",
      color: "#58a6ff",
    },
    serviceTitle: {
      fontSize: "24px",
      fontWeight: 600,
      marginBottom: "15px",
    },
    serviceDesc: {
      color: "#8b949e",
      marginBottom: "25px",
      fontSize: "16px",
    },
    featureList: {
      listStyleType: "none",
      paddingLeft: 0,
      marginBottom: "30px",
    },
    featureItem: {
      position: "relative",
      padding: "8px 0 8px 28px",
      color: "#8b949e",
    },
    featureCheck: {
      position: "absolute",
      left: 0,
      color: "#2ea043",
    },
    cta: {
      display: "inline-block",
      padding: "12px 28px",
      background: "linear-gradient(to right, #58a6ff, #388bfd)",
      color: "white",
      textDecoration: "none",
      borderRadius: "6px",
      fontWeight: 600,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
  };

  return (
    <section style={styles.section}>
      <GlobalStyles />
      <div style={styles.header}>
        <h2
          className="title"
          style={styles.title}
          data-aos="fade-up"
        >
          Our Premium Services
        </h2>
        <p
          className="desc"
          style={styles.description}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We provide cutting‑edge digital solutions to elevate your brand and
          online presence. Our team of experts delivers exceptional results
          tailored to your unique business needs.
        </p>
      </div>

      <div className="grid" style={styles.grid}>
        {services.map((srv, i) => (
          <div
            key={i}
            className="service-card"
            style={styles.card}
            data-aos="fade-up"
            data-aos-delay={i * 300}
            onClick={handleCardClick}
          >
            <div style={styles.icon}>{srv.icon}</div>
            <h3 style={styles.serviceTitle}>{srv.title}</h3>
            <p style={styles.serviceDesc}>{srv.description}</p>
            <ul style={styles.featureList}>
              {srv.features.map((feat, j) => (
                <li key={j} style={styles.featureItem}>
                  <span style={styles.featureCheck}>✓</span> {feat}
                </li>
              ))}
            </ul>
            <a href="#" className="cta" style={styles.cta}>
              {srv.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
