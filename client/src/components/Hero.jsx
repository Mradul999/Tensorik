import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMedal,
  FaRobot,
  FaCheckCircle,
  FaTrophy,
} from "react-icons/fa";

const Hero = () => {
  useEffect(() => {
    const container = document.getElementById("neural-network");
    if (container && container.children.length === 0) {
      for (let i = 0; i < 25; i++) {
        const neuron = document.createElement("div");
        neuron.className = "neuron";
        neuron.style.left = `${Math.random() * 100}%`;
        neuron.style.top = `${Math.random() * 100}%`;
        neuron.style.width = neuron.style.height = `${
          5 + Math.random() * 15
        }px`;
        neuron.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(neuron);
      }
    }
  }, []);

  return (
    <section className="relative py-14 md:py-32 overflow-hidden bg-[#0d1117] text-white">
      {/* === Embedded CSS === */}
      <style>{`
        .neural-network {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          z-index: 0;
        }
        .neuron {
          position: absolute;
          background: rgba(88, 166, 255, 0.25);
          border-radius: 50%;
          animation: pulse 4s infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3 }
          50% { transform: scale(1.3); opacity: 0.6 }
        }
        .ai-element {
          position: absolute;
          opacity: 0.1;
          filter: blur(25px);
          z-index: 0;
        }
        .ai-element-1 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, #58a6ff, transparent 70%);
          top: 10%; left: 5%;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        .ai-element-2 {
          width: 200px; height: 200px;
          background: linear-gradient(45deg, #388bfd, transparent);
          bottom: 20%; right: 10%;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        .ai-element-3 {
          width: 150px; height: 150px;
          background: linear-gradient(135deg, #58a6ff, transparent);
          top: 40%; right: 20%;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg) }
          100% { transform: rotate(360deg) }
        }
        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0;
          border-right: 2px solid #58a6ff;
          font-family: inherit;
          animation: typing 2s steps(11, end) forwards, blink 0.7s step-end 2.1s 3, hideCursor 0.1s 4.2s forwards;
        }
        @keyframes typing {
          from { width: 0; }
          to   { width: 11ch; }
        }
        @keyframes blink {
          0%, 100% { border-color: transparent; }
          50%      { border-color: #58a6ff; }
        }
        @keyframes hideCursor {
          to {
          border-right: none;
          }
        }
        .glow-click {
        transition: box-shadow 0.3s ease, border-color 0.3s ease;
        cursor: pointer;
        }
        .glow-click:active,
        .glow-click:hover {
        box-shadow: 0 0 12px #58a6ff, 0 0 20px #58a6ff;
        border-color: #58a6ff;
        }
      `}</style>

      {/* === Matrix Background === */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-5 animate-spin-slow">
          <defs>
            <pattern
              id="matrix"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <text
                x="0"
                y="20"
                fill="#58a6ff"
                fontSize="20"
                fontFamily="monospace"
              >
                01
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#matrix)" />
        </svg>
      </div>

      {/* === Neural Nodes & AI Blobs === */}
      <div id="neural-network" className="neural-network"></div>
      <div className="ai-element ai-element-1"></div>
      <div className="ai-element ai-element-2"></div>
      <div className="ai-element ai-element-3"></div>

      {/* === Main Content === */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">
        {/* LEFT TEXT */}
        <div className="text-center md:text-left md:w-1/2 mb-16 md:mb-0">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              AI
            </span>
            <br />
            <span className="typewriter text-blue-400 font-extrabold text-5xl">
              Practically
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-lg mx-auto md:mx-0">
            Tensorik offers hands-on courses, real-world projects, and a vibrant
            community to help you excel in Artificial Intelligence and land your
            dream job.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md flex items-center justify-center space-x-2 transition"
            >
              <span>Explore Courses</span>
              <FaArrowRight />
            </Link>
            <a
              href="#workshop"
              className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-full shadow-md flex items-center justify-center space-x-2 transition"
            >
              <span>Join Workshop</span>
              <FaCalendarAlt />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold">
                  PS
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold">
                  RP
                </div>
              </div>
              <div className="ml-4 text-left">
                <p className="text-lg font-semibold">1.5K+ Students</p>
                <p className="text-sm text-gray-400">Joined Our Community</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#21262d] flex items-center justify-center text-blue-400">
                <FaMedal className="text-2xl" />
              </div>
              <div className="ml-4 text-left">
                <p className="text-lg font-semibold">97% Success</p>
                <p className="text-sm text-gray-400">Productive Learning</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 blur-3xl absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            <div className="glow-click bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden p-6 shadow-lg relative z-10">
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mx-auto mb-6">
                  <FaRobot className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Tensorik AI Platform
                </h3>
                <p className="text-gray-400">
                  Interactive learning environment
                </p>
              </div>
              <div className="p-6 border-t border-gray-700">
                <div className="flex justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Current Project</p>
                    <p className="font-semibold">Image Recognition System</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Progress</p>
                    <p className="font-semibold text-blue-400">78%</p>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Project Completed */}
            <div className="absolute -bottom-12 -right-8 z-20">
              <div className="glow-click bg-[#161b22] border border-gray-700 p-4 w-48 rounded-xl shadow-lg flex items-center z-20">
                <div className="w-12 h-12 bg-[#21262d] rounded-lg flex items-center justify-center text-green-400">
                  <FaCheckCircle className="text-2xl" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold">Project Completed</p>
                  <p className="text-xs text-gray-400">AI Chatbot</p>
                </div>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="absolute -top-10 -left-6 z-20">
              <div className="glow-click bg-[#161b22] border border-gray-700 p-4 w-48 rounded-xl shadow-lg flex items-center z-20">
                <div className="w-12 h-12 bg-[#21262d] rounded-lg flex items-center justify-center text-yellow-400">
                  <FaTrophy className="text-2xl" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold">Leaderboard</p>
                  <p className="text-xs text-gray-400">Top 10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
