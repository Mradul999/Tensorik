import React from "react";
import { FaGraduationCap, FaStar} from "react-icons/fa";
const Testimonials = () => {
  return (
    <div className="bg-[#0d1117] text-white py-24 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2
      className="text-4xl font-extrabold mb-4 flex justify-center items-center gap-4 text-[#F9FAFB]"
      data-aos="fade-up"
    >
      Echoes From the Classroom

      <FaGraduationCap className="text-[#42A5F5] text-4xl drop-shadow-md transition-transform duration-300 hover:scale-110" />
    </h2>
    <div
      className="flex justify-center items-center gap-1 text-[#FCD34D] text-xl mb-4"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} />
      ))}
      <span className="text-sm text-gray-400 ml-2">(4.9 / 5 from 200+ learners)</span>
    </div>


    <p
      className="text-lg text-gray-400 leading-relaxed"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      Real voices. Real experiences. Here’s what they achieved with Tensorik.
    </p>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div
            className="bg-gradient-to-br from-[#25292e] to-[#2C3E50] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="https://placehold.co/80x80/CBD5E1/4A5568?text=P"
              alt="Student Priya"
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#42A5F5]"
            />
            <p className="text-[#F9FAFB] italic mb-4">
              "Tensorik transformed my understanding of AI. The content is
              practical and the instructors are fantastic!"
            </p>
            <p className="font-semibold text-[#42A5F5]">
              - Priya, Diploma Student
            </p>
          </div>

          {/* Testimonial 2 */}
          <div
            className="bg-gradient-to-br from-[#25292e] to-[#2C3E50] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="https://placehold.co/80x80/A0AEC0/4A5568?text=S"
              alt="Student Sai"
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#42A5F5]"
            />
            <p className="text-[#F9FAFB] italic mb-4">
              "The hands-on projects helped me build a strong portfolio. Highly
              recommend for aspiring AI engineers."
            </p>
            <p className="font-semibold text-[#42A5F5]">
              - Sai, BTech 2nd Year
            </p>
          </div>

          {/* Testimonial 3 */}
          <div
            className="bg-gradient-to-br from-[#25292e] to-[#2C3E50] p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-5px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="https://placehold.co/80x80/718096/4A5568?text=RK"
              alt="Student Rishika"
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-[#42A5F5]"
            />
            <p className="text-[#F9FAFB] italic mb-4">
              "The community support is unparalleled. I always get my questions
              answered quickly and thoroughly."
            </p>
            <p className="font-semibold text-[#42A5F5]">- Rishika, Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
