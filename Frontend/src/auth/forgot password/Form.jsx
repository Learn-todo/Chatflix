import React from "react";
// import { useState } from "react";
import styles from "./styles.module.css";
import style from "../reset password/style.module.css";
import Logo from "./images/Chatflix Logo.svg";
import Sms from "./images/sms.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const ForgotPassword = () => {
  // const inputStyle = {
  //      color: "#206CDF",
  //      transform: "translateX(-25px) translateY(-20px)",
  //      transition: ".7s",
  //      padding: "0 .4rem",
  //      backgroundColor: "#030B19",
  // }

  return (
    <section className={`${style._content}`}>
      <div className="logo w-50 z-1 m-4">
        <img className="" src={Logo} alt="chatflix logo" />
      </div>
      <div
        className={`${style._container} d-flex justify-content-end align-items-center`}
      >
        <div className={`${style._form_div} bg-background rounded`}>
          <div className="mx-3 py-3 d-flex justify-content-between">
            <div className="fs-5 fw-normal text-cancel cursor-pointer">
              <IoIosArrowBack />
            </div>

            <div className="fs-3 fw-normal text-cancel cursor-pointer">
              <IoIosClose />
            </div>
          </div>
          <div className={`${style._main} mx-auto p-2`}>
            <div className="p-3 text-center">
              <h2 className="text-arrow fs-4 pb-3">Forgot your password?</h2>
              <span className="text-text-color fs-6">
                Input the email address associated with your account and we'll
                send you a link to reset password.
              </span>
            </div>

            <form className="p-4" action="">
              <div className="">
                <div className={`${styles._input_div} position-relative mb-4`}>
                  <input
                    className={`${styles._input_element}  position-relative w-100 bg-background border border-cancel rounded-1 p-2 ps-5 text-cancel form-control shadow-none`}
                    type="email"
                    name=""
                    id=""
                    required="required"
                  />
                  <img
                    className={`${styles._form_img} position-absolute top-50 translate-middle`}
                    src={Sms}
                    alt=""
                  />
                  <span className={`${styles._input_text} text-cancel`}>
                    {" "}
                    Email
                  </span>
                </div>

                <button className="btn btn-primary p-2 w-100">Continue</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
