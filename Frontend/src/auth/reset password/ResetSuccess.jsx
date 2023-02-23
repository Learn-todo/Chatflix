import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "../signup/style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";


const ResetSuccess = () => {
  return (
    <section className={``}>
      <Slideshow />
      <div
        className={`${style._content} d-flex justify-content-evenly flex-column`}
      >
        <div className="logo w-50 z-1 my-5 mx-4">
          <Logo />
        </div>
        <div className={`${style._form_container} mx-auto`}>
          {<div className={`${style._form_div} bg-background rounded`}>
            <div className="mx-3 py-3 d-flex justify-content-between align-items-center">
              <div className="fs-5 fw-normal text-cancel cursor-pointer">
                <IoIosArrowBack />
              </div>

              <div className="fs-2 fw-normal text-cancel cursor-pointer">
                <IoIosClose />
              </div>
            </div>
            <div className={`d-flex justify-content-center align-items-center my-5`}>
              <Image 
                  cloudName="dfsclcxhm" 
                  publicId="Chatflix/Frame_3325_xwdpvg.png"
                  className={``} 
                  />
            </div>
            <div className={`${style._form_content} mx-auto my-3 px-4`}>
              <div className={`mb-5 text-center`}>
                <h3 className={`text-arrow mb-2 fs-3 lh-4`}>Password Reset</h3>
                <p className={`text-text-color`}>
                  Your new password has been set successfully. Click the button below to magically login.
                </p>
              </div>

              <form className="mb-4" action="">
                <div className={`mb-4`}>
                </div>
                <div className={`${style._btn_div} position-relative mb-5 mt-3`}>
                  <button
                    className={`bg-btn-color py-2 border-0 w-100 rounded`}
                  >
                    <Link to="/signin" className={`text-decoration-none text-arrow`}>Continue</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
};
export default ResetSuccess;
