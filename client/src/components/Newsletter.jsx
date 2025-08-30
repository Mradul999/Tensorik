import React, { useState } from "react";

const Newsletter = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [messageVisible, setMessageVisible] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter form data:", formData);
    setFormData({ name: "", email: "" });
    setMessageVisible(true);

    setTimeout(() => setMessageVisible(false), 3000);
  };

  return (
    <section
      id="newsletter"
      className=" py-16 md:py-20 px-6 bg-[#42A5F5]" //
    >
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-4xl font-bold text-white mb-6" data-aos="fade-up">
          Stay Updated with Tensorik
        </h2>
        <p
          className="text-xl text-white mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Subscribe to our newsletter for the latest AI trends, course updates,
          and exclusive insights.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-[#42A5F5] flex-grow sm:max-w-xs bg-[#1A1D20] text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-[#42A5F5] flex-grow sm:max-w-xs bg-[#1A1D20] text-white"
          />
          <button
            type="submit"
            className="bg-white text-[#42A5F5] border border-[#42A5F5] 
font-semibold py-4 px-8 rounded-full 
flex items-center justify-center gap-3 
transition-all duration-200
"
          >
            <span>Subscribe</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </form>

        {messageVisible && (
          <p className="mt-4 text-[#42A5F5] font-semibold">
            Thanks for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
