import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Mid_Cards from "../../Component/Mid_Cards/MidCards";
import Innovation from "../../Component/Innovation/Innovation";
import Awards from "../../Component/Awards/Awards";
import Footer from "../../Component/footer/footer";

const HomePage = () => {
  return (
    <main className="homepage-new">
      <Navbar />
      <Hero />
      <About />
      <Mid_Cards />
      <Innovation />
      <Awards />
      <Footer />
    </main>
  );
};

export default HomePage;
