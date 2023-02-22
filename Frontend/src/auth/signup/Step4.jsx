import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom"

const Step3 = () => {
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

            <div className={`${style._form_content} mx-auto my-3 px-4`}>
              <div className={`mb-4 text-center`}>
                <h3 className={`text-arrow mb-2 fs-4`}>Create Your Account</h3>
                <p className={`text-text-color`}>
                  Choose your favorite header picture and set a unique username.
                </p>
              </div>

              <form className="mb-4" action="">
                <div className={`mb-5`}>
                  <div className={`${style._input_div} position-relative mb-4`}>
                  <input
                    className={`${style._input_element} position-relative w-100 bg-background border border-cancel rounded-1 p-2 ps-5 text-cancel form-control shadow-none`}
                    type="email"
                    name=""
                    id=""
                  />
                    <BsPerson
                      className={`${style._input_icon} position-absolute top-50 translate-middle text-cancel`}
                    />
                  <span className={`${style._input_text} text-cancel position-absolute`} tabIndex={1}>
                    Username
                  </span>
                  </div>
                  <div classname={`${style._password_info} text-text-color`}>
                    <p>Username can only contain special characters e.g _, - or .</p>
                    <p>username can contain numbers</p>
                    <p>Username must not exceed 16 characters</p>
                  </div>
                </div>
                <div className={`${style._btn_div} position-relative mb-5`}>
                  <button
                    className={`bg-btn-color py-2 border-0 w-100 rounded`}
                  >
                    <Link to="/step3" className={`text-decoration-none text-arrow`}>Finish</Link>
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
export default Step3;
