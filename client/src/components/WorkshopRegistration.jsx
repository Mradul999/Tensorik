import React, { useState } from "react";

const WorkshopRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    university: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      occupation: "",
      university: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-[#1A1D20] text-[#F9FAFB] font-[Inter]">
      {/* Banner */}
      <div className="w-full max-w-4xl mb-8">
        <img
          src="./images/workshop-banner.jpg"
          alt="Workshop Banner"
          className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-xl"
        />
      </div>

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-white">
          AI Fundamentals Workshop
        </h1>
        <p className="text-[#A0AEC0] text-lg">
          Fill in the details below to secure your seat.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-[#25292e] p-8 rounded-xl shadow-lg space-y-6"
      >
        {[
          { label: "Full Name", name: "name", type: "text" },
          { label: "Email", name: "email", type: "email" },
          { label: "Phone", name: "phone", type: "tel" },
          {
            label: "Occupation",
            name: "occupation",
            type: "text",
            placeholder: "e.g. Student, Working Professional",
          },
          {
            label: "University / College Name",
            name: "university",
            type: "text",
          },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-semibold mb-1">
              {label}
            </label>
            <input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder || `Enter your ${name}`}
              required
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1A1D20] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#42A5F5]"
            />
          </div>
        ))}

        <div className="text-center pt-4">
          <button
            type="submit"
            className="w-full bg-[#42A5F5] hover:bg-[#2196F3] transition duration-300 text-white font-semibold py-3 rounded-full"
          >
            Submit Registration
          </button>
        </div>
      </form>

      {/* Message */}
      {submitted && (
        <p className="mt-6 text-[#42A5F5] font-semibold">
          ✅ Thank you for registering! We'll be in touch soon.
        </p>
      )}
    </div>
  );
};

export default WorkshopRegistration;
