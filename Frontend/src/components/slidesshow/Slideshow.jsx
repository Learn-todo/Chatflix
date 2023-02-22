import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import style from "./style.module.css";
import slideshowData from "./slideshowData";

const Slideshow = () => {
  
  const buttonStyle = {
    display: "none",
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>
};

  return (
    <div className={`${style._slideshow} `}>
      <Fade {...properties} >
        {slideshowData.map((fadeImage, index) => (
          <div key={index} className={`${style._container} ${style._overlay}`}>
            <img className={`${style._slideshow}`} src={fadeImage.url} alt="." />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;