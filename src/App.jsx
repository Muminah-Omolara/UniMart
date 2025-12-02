import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import TrustSection from "./components/TrustSection";
import Marquee from "./components/Marquee";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Categories />
      <HowItWorks />
      <TrustSection />
      <Marquee />
      <Testimonials />
      <CallToAction />
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
