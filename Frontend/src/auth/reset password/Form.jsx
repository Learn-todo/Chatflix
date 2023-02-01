import React from "react";
import style from "./style.module.css";
import Logo from "./images/Chatflix Logo.svg";
import Mail from "./images/Frame 3325.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Form = () => {
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

          <div className={`${style._main} mx-auto my-3`}>
            <div className="d-flex justify-content-center align-items-center w-25 mx-auto">
              <img className="w-50" src={Mail} alt="message icon" />
            </div>
            <div className="p-3 text-center mb-3">
              <h2 className="text-arrow fs-4 pb-3">Check your Mail</h2>
              <span className="text-text-color fs-6">
                We've sent a password recovery instruction to your email
                address.
              </span>
            </div>

            <form className="px-4" action="">
              <div className="text-center text-arrow">
                <button className="btn btn-primary p-2 w-100 mb-4">
                  Open your email app
                </button>

                <p className="">
                  Didn't receive any email?
                  <a className="text-btn-color text-decoration-none" href="www">
                    {" "}
                    Resend link.
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
