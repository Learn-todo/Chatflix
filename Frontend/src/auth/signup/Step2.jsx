import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsEnvelope } from "react-icons/bs";

const Step2 = () => {
  const [nextStep, setNextStep] = useState(false)

  const handleSubmit = () => {
    setNextStep(prevStep => !prevStep)
  }
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

              <div className="fs-1 fw-normal text-cancel cursor-pointer">
                <IoIosClose />
              </div>
            </div>

            <div className={`${style._form_content} mx-auto my-3 px-4`}>
              <div className={`mb-4 text-center`}>
                <h3 className={`text-arrow mb-2 fs-4`}>Create Your Account</h3>
                <p className={`text-text-color`}>
                  Create a free account to start chatting with friends while
                  watching movies.
                </p>
              </div>

              <form className="" action="">
                <div>
                  <div className={`${styles._input_div} position-relative mb-4`}>
                  <input
                    className={`${styles._input_element} position-relative w-100 bg-background border border-cancel rounded-1 p-2 ps-5 text-cancel form-control shadow-none`}
                    type="email"
                    name=""
                    id=""
                  />
                  <Image 
                  cloudName="dfsclcxhm" 
                  publicId="Chatflix/sms1_gto7kq.png"
                  className={`${styles._form_img} position-absolute top-50 translate-middle text-cancel`} 
                  />
                  <span className={`${styles._input_text} text-cancel position-absolute`} tabIndex={1}>
                    Full name
                  </span>
                </div>
                </div>
                <div className={`${style._btn_div} position-relative mb-4`}>
                  <button
                    onSubmit={handleSubmit}
                    className={`bg-btn-color text-arrow fw-semibold py-3 border-0 w-100 rounded`}
                  >
                    Next
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
export default Step2;
