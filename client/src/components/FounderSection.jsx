import React from "react";
import founderImg from "../assets/images/Akshai.png"; // Update path as needed

const FounderSection = () => {
  return (
    <div className="bg-[#2A2F39] py-10 md:py-14">
      <div className="container mx-auto max-w-7xl px-4">
        <h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#F9FAFB]"
          data-aos="fade-up"
        >
          Meet the Founder
        </h2>

        {/* Top Intro Text: Name & Role */}
        <div className="text-center lg:text-left mb-8" data-aos="fade-up" data-aos-delay="50">
          <h3 className="text-2xl md:text-3xl font-bold text-[#F9FAFB] mb-1">
            Maripi Akshai Naidu
          </h3>
          <p className="text-base md:text-lg text-[#42A5F5] font-semibold">
            Founder & CEO
          </p>
        </div>

        {/* Flex Row for Paragraph + Image */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
          {/* Paragraph Text */}
          <div
            className="lg:w-7/12 text-left flex flex-col justify-start"
            data-aos="fade-up-right"
            data-aos-delay="100"
          >
            <div className="space-y-4 text-[#A0AEC0] text-[0.95rem] md:text-[1.05rem] leading-[1.7]">
              <p>
                Akshai Naidu is the founder of Tensorik — a young, self-built
                initiative driven by curiosity, consistency, and a deep desire
                to make tech learning more accessible. He doesn’t come from a
                privileged background in startups or fancy titles, but what he
                brings instead is raw dedication and the willingness to figure
                things out one step at a time.
              </p>

              <ul className="list-disc list-inside space-y-3">
                <li>
                  <strong>Founder of Tensorik</strong> – Built the platform from
                  scratch with zero funding, bringing together learners,
                  developers, and mentors through webinars, projects, and real
                  collaborations.
                </li>
                <li>
                  <strong>Core Team Member at CodeZen</strong> – Contributed
                  technically to events, managed backend tasks, and created
                  certificates as part of the organizing team.
                </li>
                <li>
                  <strong>Self-Taught Designer & Marketer</strong> – Created
                  Tensorik’s design, branding, and digital presence by
                  experimenting, learning online, and iterating fast.
                </li>
                <li>
                  <strong>Hackathon Finalist – IIIT Delhi E-Summit 2025</strong>{" "}
                  – Not for winning, but for showing up, building something that
                  mattered, and pushing limits with a small team.
                </li>
              </ul>

              <p>
                Akshai’s story is still being written — but what stands out
                already is his ability to rally people, build things without
                waiting for perfection, and stay true to his goal of building
                something meaningful from the ground up. If there's one thing he
                proves daily, it’s that you don’t need to be extraordinary to
                start — you just need to start and stay consistent.
              </p>
            </div>
          </div>

          {/* Founder Image */}
          <div
            className="lg:w-5/12 flex justify-center"
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <img
              src={founderImg}
              alt="Akshai Naidu, Founder"
              className="w-64 md:w-80 lg:w-[400px] h-auto rounded-2xl border-8 border-[#42A5F5] shadow-2xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
