import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";

const ComingSoon = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coming Soon Newsletter Subscription:", formData);

    setSubmitting(true);
    setTimeout(() => {
      setMessageVisible(true);
      setFormData({ name: "", email: "" });
      setSubmitting(false);

      setTimeout(() => {
        setMessageVisible(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="font-[Inter] bg-[#1A1D20] text-[#F9FAFB] min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center text-center py-16 md:py-24 px-6 bg-gradient-to-r from-[#1A1D20] to-[#25292e]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-[#42A5F5]">
            Courses <br className="sm:hidden" /> Are Coming Soon!
          </h1>
          <p className="text-lg md:text-xl text-[#A0AEC0] mb-8">
            We're actively curating the most comprehensive and hands-on AI
            courses just for you. Get ready to dive deep into{" "}
            <strong>
              Machine Learning, Deep Learning, NLP, Prompt Engineering
            </strong>{" "}
            and more!
          </p>
          <p className="text-lg md:text-xl text-[#F9FAFB] mb-10">
            Sign up for our newsletter to be the <strong>first to know</strong>{" "}
            when registration opens and get exclusive early bird access!
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="p-3 border border-gray-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#42A5F5] flex-grow sm:max-w-xs bg-[#25292e] text-[#F9FAFB]"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="p-3 border border-gray-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#42A5F5] flex-grow sm:max-w-xs bg-[#25292e] text-[#F9FAFB]"
            />
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#42A5F5] hover:bg-[#2196F3] text-white font-semibold py-3 px-10 rounded-full flex items-center justify-center space-x-2 transition"
            >
              <span>{submitting ? "Subscribing..." : "Notify Me!"}</span>
              {!submitting && (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              )}
            </button>
          </form>

          {messageVisible && (
            <p className="mt-4 text-[#42A5F5] font-semibold">
              Thanks for subscribing! We'll keep you updated.
            </p>
          )}

          {/* ✅ Back to Home button using Link */}
          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 border-2 border-[#42A5F5] text-[#42A5F5] hover:bg-[#42A5F5] hover:text-white font-medium py-2 px-6 rounded-full transition"
            >
              <span>Back to Home</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <footer className="py-10 px-4 bg-gray-800 text-gray-400 text-center">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-6 mb-6">
            {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
              (icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  <i className={`fab fa-${icon} text-xl`}></i>
                </a>
              )
            )}
          </div>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:officialtensorik@gmail.com"
              className="hover:text-white transition duration-300"
            >
              officialtensorik@gmail.com
            </a>
          </p>
          <p>
            &copy; 2025 Tensorik. Made with <i className="far fa-lightbulb"></i>{" "}
            by Team Tensorik
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
