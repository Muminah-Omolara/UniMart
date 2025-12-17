import React from "react";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import TrustSection from "../components/TrustSection";
import Marquee from "../components/Marquee";
import CallToAction from "../components/CallToAction";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <TrustSection />
      <Marquee />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;
