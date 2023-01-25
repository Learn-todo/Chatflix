import React from "react";
import Logo from "./images/Chatflix Logo.svg";
import style from "./style.module.css";

const Cta = () => {
  return (
    <section>
      <div className="w-75 mx-auto">
        <div className="m-4 p-3">
          <div className="d-flex justify-content-center">
            <img src={Logo} alt="" />
          </div>
        </div>

        <div className={`${style._cta} mb-5 text-center w-75 mx-auto`}>
          <span className="text-arrow">
            Chatflix is a multi-functional platform that give users the ultimate
            experience by allowing them perform different actions of choice with
            their movies such as save, stream, download and share while being
            able to chat with actors, producers, and most especially, friends in
            the hype.
          </span>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <button className="btn btn-btn-color p-2 px-3 rounded-1">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
