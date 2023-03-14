import React from "react";
import { Image } from "cloudinary-react";
import style from "./style.module.css";
import Logo from "../../components/logo/ChatflixLogo";

const EmailTemplate = () => {
  const name = localStorage.getItem("fullName");
  return (
    <section className={`${style._section} bg-background text-center m-0 p-0`}>
      <header
        className={`d-flex justify-content-between align-items-center border-bottom border-text-cancel p-4 mb-4`}
      >
        <Logo />
        <a href="www" className="text-decoration-none text-text-color">
          Open in browser
        </a>
      </header>
      <div className={`px-4 pt-4`}>
        <h1 className="text-center text-arrow my-4">{name}</h1>
        <p className={`text-text-color fs-5`}>
          Welcome to <span className={`text-btn-color`}>Chat</span>flix!
        </p>
        <div className="my-4">
          <Image
            className={`${style._size}`}
            cloudName="dfsclcxhm"
            publicId="Chatflix/Group_28_c8mamj.png"
          />
        </div>
        <div className={`${style._text} my-4 text-text-color mx-auto`}>
          <p>
            We created an account for you. Please verify your email address by
            clicking on the button below and use our service to the maximum.
          </p>
        </div>
        <div className="mt-4 pb-4">
          <button className="py-2 px-4 bg-btn-color text-white border-0">
            Verify Email Address
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmailTemplate;
