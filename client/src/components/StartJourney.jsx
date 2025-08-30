import React from "react";

const StartJourney = () => {
  return (
    <section className="bg-[#42A5F5] text-white py-16 md:py-20 px-6 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">
          Ready to Start Your AI Journey?
        </h2>
        <p
          className="text-xl mb-8 opacity-90"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Join thousands of learners worldwide and build the future with AI.
        </p>
        <a
          href="https://chat.whatsapp.com/EwJaKqBTSNM0LcqBYklknP?mode=ac_t"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#42A5F5] hover:bg-[#f0f0f0] hover:text-[#1F618D] font-semibold py-3 px-6 rounded-full transition duration-300"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Join Our AI Community
        </a>
      </div>
    </section>
  );
};

export default StartJourney;
