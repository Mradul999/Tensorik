import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaUsers, FaChalkboardTeacher, FaUserTie, FaPaintBrush, FaGlobe } from "react-icons/fa";

const interns = [
  {
    name: "Sumit Kushwaha",
    role: "MERN Stack Developer",
    description: "Led website redesign with advanced animations and integrated major frontend updates.",
    icon: <FaLaptopCode className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Nishi Singh",
    role: "MERN Stack Developer",
    description: "Contributed to bug fixes and handled component-level development for responsiveness.",
    icon: <FaLaptopCode className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Madhav Aggarwal",
    role: "Web Developer & Community Coordinator",
    description: "Worked on 'Build with Tensorik' section and drove engagement via community collabs.",
    icon: <FaGlobe className="text-green-400 text-3xl" />,
  },
  {
    name: "Sahil Mir",
    role: "Community Lead",
    description: "Spearheaded workshop planning, college outreach, and community partnership campaigns.",
    icon: <FaChalkboardTeacher className="text-pink-400 text-3xl" />,
  },
  {
    name: "Pragya Rana",
    role: "HR & Community Support",
    description: "Managed speaker onboarding, assisted in outreach, and supported engagement tracking.",
    icon: <FaPaintBrush className="text-purple-400 text-3xl" />,
  },
  {
    name: "Ananya Mishra",
    role: "HR Coordinator",
    description: "Handled intern onboarding, task assignments, and weekly tracking responsibilities.",
    icon: <FaUserTie className="text-blue-400 text-3xl" />,
  },
];

export default function TopInterns() {
  return (
    <section className="bg-gray-900 text-white py-16 px-4" id="interns">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-2">🏆 Top Interns of Tensorik</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Meet the shining stars who made a real impact through hands-on AI and tech projects at Tensorik.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {interns.map((intern, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {intern.icon}
              <div>
                <h3 className="text-xl font-semibold capitalize">{intern.name}</h3>
                <p className="text-blue-400">{intern.role}</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{intern.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}