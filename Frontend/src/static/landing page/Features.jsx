import React from "react";
import style from "./style.module.css";
import Img1 from "./images/Image.svg";
import Img2 from "./images/Group 17.svg";
import Img3 from "./images/Group 6.svg";

const Features = () => {
  return (
    <section className="p-4">
      <div>
        <div className="text-center mb-5 py-5">
          <h2 className="text-arrow">
            <span className="text-btn-color">Exciting </span>features to explore
          </h2>
        </div>

        <div className={`${style._features_con} w-75 mx-auto container`}>
          <div
            className={`${style._features} d-flex justify-content-between align-items-center mb-5 w-100`}
          >
            <div className={`${style._features_text} container`}>
              <span className="text-text-color2 w-50">
                Know more about the movies you want to watch.
              </span>
            </div>
            <div className={`${style._features_img} container-sm w-75`}>
              <img className="w-100" src={Img1} alt="" />
            </div>
          </div>

          <div
            className={`${style._features} d-flex justify-content-between align-items-center flex-row-reverse mb-5`}
          >
            <div className={`${style._features_text} container`}>
              <span className="text-text-color2">
                Chat about upcoming movies, your favourite movies, block buster
                movies with friends.
              </span>
            </div>
            <div className={`${style._features_img} w-75`}>
              <img className="w-75" src={Img2} alt="" />
            </div>
          </div>

          <div
            className={`${style._features} d-flex justify-content-between align-items-center flex-row-reverse mb-5`}
          >
            <div className={`${style._features_text} container`}>
              <span className="text-text-color2">
                You aren't limited. Choose to stream, download your movies and
                share them with friends.
              </span>
            </div>
            <div className={`${style._features_img} container w-75`}>
              <img className="w-100" src={Img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
