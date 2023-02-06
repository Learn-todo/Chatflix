import React from "react";
import Cta from "../../static/landing page/Cta";
import Cards from "../../static/landing page/Cards";
import Faqs from "../../static/landing page/Faqs";
import Features from "../../static/landing page/Features";
import Footer from "../../static/landing page/Footer";
import Slideshow from "../../static/landing page/Slideshow";
import Header from "../../static/landing page/Header";

const Main = () => {

  return (
    <div className="bg-backgroundTwo">
      <Slideshow />
      <Header />
      <Features />
      <Cards />
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
};

export default Main;
