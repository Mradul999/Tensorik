import React from "react";
import Header from "../common/Header";
import WhyTensorik from "../components/WhyTensorik";
import Services from "../components/Services";
import FounderSection from "../components/FounderSection";
import Testimonials from "../components/Testimonials";
import BuildChallenge from "../components/BuildChallenge";
import StartJourney from "../components/StartJourney";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import TopInterns from "../components/TopInterns";
import WorkshopSection from "../components/WorkshopSection";

function Home() {
  return (
    <div>
      <Header />
      <Hero></Hero>  
      <WorkshopSection />
      <WhyTensorik />
       <Services />
      <FounderSection />
      <Testimonials />
      <BuildChallenge />
      <StartJourney />
      <TopInterns></TopInterns>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
