import React, { useState, useEffect } from "react";
import "../index.css";
// import "./CoursePage.css"; // move your styles here

const CoursePage = () => {
  const [openModules, setOpenModules] = useState([0]); // first module open
  const [enrolled, setEnrolled] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [playing, setPlaying] = useState(false);

  // initialize particles.js
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: "#38a0cd" },
          shape: { type: "circle" },
          opacity: { value: 0.3, random: true },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#178ec9",
            opacity: 0.1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  // toggle modules
  const toggleModule = (index) => {
    setOpenModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // enroll button
  const handleEnroll = () => {
    setProcessing(true);
    setTimeout(() => {
      setEnrolled(true);
      setProcessing(false);
      setTimeout(() => setEnrolled(false), 2000);
    }, 1500);
  };

  // play button
  const togglePlay = () => {
    setPlaying((p) => !p);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div id="particles-js" className="absolute inset-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-8"
        >
          <i className="fas fa-arrow-left"></i> Back to Courses
        </a>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-semibold rounded-full">
                Intermediate
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                Development
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Full Stack Web Development
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Master HTML, CSS, JavaScript and backend technologies to build
              scalable web applications. This comprehensive course takes you
              from the fundamentals to advanced concepts, preparing you for a
              successful career as a full stack developer.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">4.8/5</div>
                <div className="text-sm text-gray-400">Course Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">12 Weeks</div>
                <div className="text-sm text-gray-400">Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">98%</div>
                <div className="text-sm text-gray-400">Completion Rate</div>
              </div>
            </div>
          </div>

          <div
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={togglePlay}
          >
            <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
              <div
                className="text-6xl transition-all duration-300"
                style={{
                  color: playing ? "#38a0cd" : "#ffffff",
                  textShadow: playing
                    ? "0 0 20px rgba(56,160,205,0.7)"
                    : "none",
                }}
              >
                <i
                  className={`fas ${
                    playing ? "fa-pause-circle" : "fa-play-circle"
                  }`}
                ></i>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Build complete web applications from frontend to backend",
              "Master modern JavaScript frameworks like React and Vue.js",
              "Create APIs with Node.js and Express",
              "Implement authentication and security best practices",
              "Work with databases including MongoDB",
              "Deploy applications to cloud platforms like AWS and Heroku",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-check-circle text-white text-sm"></i>
                </div>
                <div className="text-gray-300 leading-relaxed">{text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Curriculum */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Course Curriculum
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Module 1: Frontend Fundamentals",
                lessons: [
                  "HTML5 & Semantic Markup",
                  "Modern CSS with Flexbox and Grid",
                  "Responsive Design Principles",
                  "JavaScript Fundamentals",
                ],
                duration: "8 Lessons • 6 Hours",
              },
              {
                title: "Module 2: Frontend Frameworks",
                lessons: [],
                duration: "10 Lessons • 8 Hours",
              },
              {
                title: "Module 3: Backend Development",
                lessons: [],
                duration: "12 Lessons • 10 Hours",
              },
              {
                title: "Module 4: Databases & Deployment",
                lessons: [],
                duration: "7 Lessons • 6 Hours",
              },
            ].map((mod, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-white/5 transition-colors duration-200 flex items-center justify-between"
                  onClick={() => toggleModule(i)}
                >
                  <div className="flex items-center gap-4">
                    <i className="fas fa-folder text-blue-400 text-xl"></i>
                    <span className="text-white font-semibold text-lg">
                      {mod.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">
                      {mod.duration}
                    </span>
                    <i
                      className={`fas fa-chevron-down text-gray-400 transition-transform duration-200 ${
                        openModules.includes(i) ? "rotate-180" : ""
                      }`}
                    ></i>
                  </div>
                </div>
                {mod.lessons.length > 0 && openModules.includes(i) && (
                  <div className="border-t border-white/20 p-6 space-y-3">
                    {mod.lessons.map((lesson, j) => (
                      <div
                        key={j}
                        className="flex items-center justify-between py-2"
                      >
                        <div className="flex items-center gap-3">
                          <i className="far fa-play-circle text-blue-400"></i>
                          <span className="text-gray-300">{lesson}</span>
                        </div>
                        <span className="text-gray-400 text-sm">~60 min</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Instructor */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Your Instructor
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-white text-4xl"></i>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-white">Akshai</h3>
                <div className="text-blue-400 font-semibold">
                  Senior Full Stack Developer at Tensorik
                </div>
                <p className="text-gray-300 leading-relaxed">
                  With over 10 years of experience in web development, Akshai
                  has worked on projects ranging from small startups to
                  enterprise applications. He specializes in JavaScript
                  ecosystem and cloud architecture. He is passionate about
                  teaching and has helped thousands of students transition into
                  tech careers.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      4.9/5
                    </div>
                    <div className="text-sm text-gray-400">
                      Instructor Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">
                      15,000+
                    </div>
                    <div className="text-sm text-gray-400">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">8</div>
                    <div className="text-sm text-gray-400">Courses</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            LIMITED TIME OFFERS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "graduation-cap",
                title: "Complete Learning Package",
                desc: "Full course + Resources + Certificate",
                oldPrice: "₹19,999",
                price: "₹15,999",
                discount: "Save 20%",
              },
              {
                icon: "users",
                title: "Group Enrollment",
                desc: "Special pricing for teams of 3+",
                oldPrice: "₹50,000",
                price: "₹30,000",
                discount: "Save ₹10,000",
              },
              {
                icon: "medal",
                title: "Premium Bundle",
                desc: "Course + Mentorship + Career Support",
                oldPrice: "₹50,000",
                price: "₹22,000",
                discount: "Save 20%",
              },
            ].map((offer, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 text-center hover:bg-white/15 transition-colors duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fas fa-${offer.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-gray-300 mb-4">{offer.desc}</p>
                <div className="text-gray-400 line-through text-sm mb-1">
                  {offer.oldPrice}
                </div>
                <div className="text-2xl font-bold text-green-400 mb-2">
                  {offer.price}
                </div>
                <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block">
                  {offer.discount}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enroll */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who have advanced their
            careers with Tensorik&apos;s Full Stack Web Development course
          </p>
          <button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            onClick={handleEnroll}
            disabled={processing}
            style={
              enrolled
                ? { background: "linear-gradient(135deg, #28a745, #2ecc71)" }
                : {}
            }
          >
            {processing ? (
              "Processing..."
            ) : enrolled ? (
              <>
                <i className="fas fa-check mr-2"></i> Enrolled!
              </>
            ) : (
              "Enroll Now"
            )}
          </button>
        </section>
      </div>
    </div>
  );
};

export default CoursePage;
