import React from "react";
import About from "../components/About";
import Collection from "../components/Collection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Roadmap />
    </>
  );
};

export default HomeScreen;
