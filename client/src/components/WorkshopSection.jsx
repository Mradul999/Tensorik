import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WorkshopSection = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [isClosed, setIsClosed] = useState(false);

  const deadline = new Date("2025-08-01T23:59:59");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = deadline - now;

      if (difference <= 0) {
        clearInterval(timer);
        setIsClosed(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="workshop"
      className="py-16 md:py-20 bg-[#2C313C] px-6 text-center text-white"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
          Upcoming Workshop: AI Fundamentals
        </h2>
        <p
          className="text-lg text-[#A0AEC0] mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Join us for an intensive workshop designed to kickstart your journey
          into Artificial Intelligence. Learn core concepts, practical
          techniques, and build your first AI model!
        </p>

        <div className="mb-12">
          <h3
            className="text-2xl font-semibold mb-4 text-[#42A5F5]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Registration Closes In:
          </h3>

          <div className="flex justify-center items-center gap-4 flex-wrap">
            {["days", "hours", "minutes", "seconds"].map((unit, i) => (
              <div
                key={unit}
                className="flex flex-col items-center p-4 bg-[#2C3E50] rounded-xl shadow-md w-24"
                data-aos="flip-up"
                data-aos-delay={300 + i * 100}
              >
                <div className="text-3xl font-bold">
                  {String(timeLeft[unit] || 0).padStart(2, "0")}
                </div>
                <div className="text-sm text-[#CBD5E1]">
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </div>
              </div>
            ))}
          </div>

          {isClosed && (
            <p className="mt-8 text-xl font-semibold text-[#42A5F5]">
              Registration Closed!
            </p>
          )}
        </div>

        {!isClosed ? (
          <Link
            to="/workshop-register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md inline-flex items-center justify-center space-x-2 transition duration-300 transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <span>Register for Workshop</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        ) : (
          <p className="mt-4 text-[#A0AEC0]">
            Thank you for your interest. We will notify you about future
            workshops!
          </p>
        )}
      </div>
    </section>
  );
};

export default WorkshopSection;
