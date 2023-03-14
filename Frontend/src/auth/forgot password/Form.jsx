import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "../signup/style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsEnvelope } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  let navigate = useNavigate();
  const [inputError, setInputError] = useState(false);
  const handleForgotPassword = () => {
    navigate('/reset password');
  }
  const handlePrev = () => {
    navigate('/signin');
  };
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
              <div className="fs-5 fw-normal text-cancel cursor-pointer" onClick={handlePrev}>
                <IoIosArrowBack />
              </div>

              <div className="fs-2 fw-normal text-cancel cursor-pointer" onClick={handlePrev}>
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

              <form className="mb-4" action="" onSubmit={handleForgotPassword}>
                <div className={`mb-5`}>
                  <div className={`${style._input_div} position-relative mb-4`}>
                  <input
                    className={`${style._input_element} position-relative w-100 bg-background border  rounded-1 p-2 ps-5 form-control shadow-none text-cancel ${inputError ? `${style._error} border-reaction` : `${style._input_element} border-cancel`}`}
                    type="email"
                    // value=""
                      id="email"
                      placeholder=" "
                  />
                    <BsEnvelope
                      className={`${style._input_icon} position-absolute top-50 translate-middle ${inputError ? `text-reaction` : `text-cancel`}`}
                    />
                    <label htmlFor="email" className={`${style._input_text} ${inputError ? `${style._error}` : `text-cancel`}`} tabIndex={1}>
                    Email
                  </label>
                </div>
                </div>
                <div className={`${style._btn_div} position-relative mb-5 mt-3`}>
                  <button
                    className={`bg-btn-color py-2 border-0 w-100 rounded text-arrow`}
                  >Continue
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
