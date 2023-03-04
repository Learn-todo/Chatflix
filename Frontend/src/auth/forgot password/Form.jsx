import React from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "../signup/style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
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
              <div className={`mb-5 text-center`}>
                <h3 className={`text-arrow mb-2 fs-3 lh-4`}>Forgot Your Password?</h3>
                <p className={`text-text-color`}>
                  Input the email address associated with your account and we’ll send you a link to reset password.
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
                    <BsEnvelope
                      className={`${style._input_icon} position-absolute top-50 translate-middle text-cancel`}
                    />
                  <span className={`${style._input_text} text-cancel position-absolute`} tabIndex={1}>
                    Email
                  </span>
                </div>
                </div>
                <div className={`${style._btn_div} position-relative mb-5 mt-3`}>
                  <button
                    className={`bg-btn-color py-2 border-0 w-100 rounded`}
                  >
                    <Link to="/reset password" className={`text-decoration-none text-arrow`}>Continue</Link>
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
export default ForgotPassword;
