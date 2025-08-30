import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BuildChallenge = () => {
  const [formData, setFormData] = useState({
    name: "",
    projectUrl: "",
    level: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setMessage("Thanks! Your project has been submitted.");
    setFormData({ name: "", projectUrl: "", level: "" });
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#181B1E] to-[#2C3E50] text-center text-[#F9FAFB]">
      <div className="container mx-auto max-w-6xl">
        {/* Banner */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#06b6d4]">
            Build with Tensorik Challenge
          </h2>
          <p className="text-lg md:text-xl text-[#A0AEC0] mb-6">
            A monthly dev challenge to showcase your creativity and skills.
          </p>
          <p className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] mb-8">
            Build Your AI-Powered Portfolio
          </p>
          <a
            href="#challenge-form"
            className="bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold py-2 px-6 rounded-full inline-flex items-center space-x-2"
          >
            <span>Join Now</span>
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
          </a>
        </div>

        {/* About & Participate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div
            className="p-8 rounded-lg shadow-xl text-left bg-[#1A1D20]"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-[#3b82f6] mb-4">
              About the Challenge
            </h3>
            <ul className="list-disc list-inside space-y-3 text-[#CBD5E1]">
              <li>
                Each month, a new AI/ML theme or problem statement will be
                released.
              </li>
              <li>
                Participants will have until the end of the month to build and
                submit their solutions.
              </li>
              <li>
                Submissions will be judged based on innovation, technical
                implementation, and real-world impact.
              </li>
              <li>
                Top projects will be featured on our website and social media.
              </li>
              <li>
                Great opportunity to build your portfolio and gain recognition!
              </li>
            </ul>
          </div>

          <div
            className="p-8 rounded-lg shadow-xl text-left bg-[#1A1D20]"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-[#3b82f6] mb-4">
              How to Participate
            </h3>
            <ul className="list-disc list-inside space-y-3 text-[#CBD5E1]">
              <li>
                Stay tuned for the monthly challenge announcement on our
                community channels.
              </li>
              <li>
                Develop your AI/ML solution according to the challenge prompt.
              </li>
              <li>
                Host your project (e.g., GitHub, Hugging Face, Netlify) and get
                a shareable URL.
              </li>
              <li>
                Fill out the submission form below with your details and project
                link.
              </li>
              <li>
                Join our Discord/Telegram for discussions, tips, and support
                from mentors.
              </li>
            </ul>
          </div>
        </div>

        {/* Levels Table */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-[#F9FAFB] mb-8">
            Challenge Levels
          </h3>
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full bg-[#2c2f36] text-left text-[#F9FAFB]">
              <thead>
                <tr className="bg-[#374151]">
                  <th className="p-4 text-blue-400">Level</th>
                  <th className="p-4 text-blue-400">Description</th>
                  <th className="p-4 text-blue-400">Suggested Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#232830] transition-colors">
                  <td className="p-4 font-semibold">Beginner</td>
                  <td className="p-4">
                    Ideal for those starting out. Focus on core concepts and
                    basic implementations.
                  </td>
                  <td className="p-4">
                    Python, Scikit-learn, basic Pandas/NumPy
                  </td>
                </tr>
                <tr className="bg-[#1A1D20] hover:bg-[#232830] transition-colors">
                  <td className="p-4 font-semibold">Intermediate</td>
                  <td className="p-4">
                    For learners comfortable with ML basics, looking to apply
                    more complex models.
                  </td>
                  <td className="p-4">
                    TensorFlow, Keras, PyTorch, advanced data preprocessing
                  </td>
                </tr>
                <tr className="hover:bg-[#232830] transition-colors">
                  <td className="p-4 font-semibold">Pro</td>
                  <td className="p-4">
                    For experienced developers. Tackle complex, real-world
                    problems with advanced techniques.
                  </td>
                  <td className="p-4">
                    Deep learning frameworks, MLOps tools, cloud platforms (AWS,
                    GCP, Azure)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Submission Form */}
        <div
          id="challenge-form"
          className="max-w-xl mx-auto p-8 rounded-lg shadow-xl text-left bg-[#1A1D20]"
          data-aos="fade-up"
        >
          <h3 className="text-3xl font-bold text-[#3b82f6] mb-6 text-center">
            Submit Your Project
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-[#F9FAFB] mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full p-3 border border-gray-600 rounded-lg bg-[#1A1D20] text-[#F9FAFB]"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-[#F9FAFB] mb-2">
                Project URL
              </label>
              <input
                type="url"
                name="projectUrl"
                value={formData.projectUrl}
                onChange={handleChange}
                required
                placeholder="e.g., https://github.com/project"
                className="w-full p-3 border border-gray-600 rounded-lg bg-[#1A1D20] text-[#F9FAFB]"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-[#F9FAFB] mb-2">
                Challenge Level
              </label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-600 rounded-lg bg-[#1A1D20] text-[#F9FAFB]"
              >
                <option value="">Select your level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="pro">Pro</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white py-3 rounded-full font-semibold flex items-center justify-center space-x-2"
            >
              <span>Submit Project</span>
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            {message && (
              <p className="text-[#3b82f6] font-semibold text-center">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BuildChallenge;
