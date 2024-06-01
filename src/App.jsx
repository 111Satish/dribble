import React from "react";
import Navbar from "./navbar/Navbar";
import ShotThumbnail from "./home/ShotThumbnail";
import Hero from "./home/hero/Hero";
import Footer from "./home/Footer";
import CategorySlider from "./CategorySlider/CategorySlider";
import Footer2 from "./Footer/Footer2";
import Menu from "./components/menubar/Menu";

function App() {
  return (
    <div>
      <Navbar />
      <Menu />
      <Hero />
      <ShotThumbnail />
      <Footer />
      <CategorySlider />
      <Footer2 />
    </div>
  );
}

export default App;
