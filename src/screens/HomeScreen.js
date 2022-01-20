import React from "react";
import About from "../components/About";
import Collection from "../components/Collection";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
// import Rarity from "../components/Rarity";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Roadmap />
      <Faq />
      <Team />
      {/* <Rarity /> */}
    </>
  );
};

export default HomeScreen;
