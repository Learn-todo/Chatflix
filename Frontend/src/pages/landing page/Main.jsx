import React from "react";
import style from "./style.module.css";
import cardData from "../../static/landing page/cardData";
import Cta from "../../static/landing page/Cta";
import Cards from "../../static/landing page/Cards";
import Faqs from "../../static/landing page/Faqs";
import Features from "../../static/landing page/Features";
import Footer from "../../static/landing page/Footer";
import Slideshow from "../../static/landing page/Slideshow";

const Main = () => {
  const data = cardData.map((cards) => {
    return <Cards key={cards.id} cards={cards} />;
  });

  return (
    <div className="bg-backgroundTwo">
      <Slideshow />
      <Features />
      <section>
        <div className="mb-5 text-center">
          <h3 className="text-arrow">
            How are we <span className="text-btn-color">different</span>?
          </h3>
        </div>

        <div className="mb-5">
          <div
            className={`${style._unique} container text-center text-text-color2 mb-4`}
          >
            <div className="row mb-5">{data}</div>
          </div>
        </div>
      </section>
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
};

export default Main;
