import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "../signup/style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";
import Slideshow from "../../components/slidesshow/Slideshow";
import { Image } from "cloudinary-react";
import { useNavigate } from "react-router-dom";

const SetNewPassword = () => {
  let navigate = useNavigate();
  const [inputError, setInputError] = useState(false);
  const handleSetNewPassword = () => {
    navigate('/reset-success');
  }
  const handlePrev = () => {
    navigate('/reset-password');
  };
  const handleClose = () => {
    navigate('/');
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

              <div className="fs-2 fw-normal text-cancel cursor-pointer" onClick={handleClose}>
                <IoIosClose />
              </div>
            </div>
            <div className={`d-flex justify-content-center align-items-center my-5`}>
              <Image 
                  cloudName="dfsclcxhm" 
                  publicId="Chatflix/Frame_3325_1_rvw6f7.png"
                  className={``} 
                  />
            </div>
            <div className={`${style._form_content} mx-auto my-3 px-4`}>
              <div className={`mb-5 text-center`}>
                <h3 className={`text-arrow mb-2 fs-3 lh-4`}>Set New Password</h3>
                <p className={`text-text-color`}>
                  Your new password must be different from previously used passwords.
                </p>
              </div>

              <form className="mb-4" action="" onSubmit={handleSetNewPassword}>
                <div className={`mb-4`}>
                  <div className={`${style._input_div} position-relative mt-3 mb-1`}>
                  <input
                    className={`${style._input_element} position-relative w-100 bg-background border  rounded-1 p-2 ps-5 form-control shadow-none text-cancel ${inputError ? `${style._error} border-reaction` : `${style._input_element} border-cancel`}`}
                    type="password"
                    // value=""
                      id="password"
                      placeholder=" "
                  />
                    <MdOutlineLock
                      className={`${style._input_icon} position-absolute top-50 translate-middle ${inputError ? `text-reaction` : `text-cancel`}`}
                    />
                  <label htmlFor="password" className={`${style._input_text} ${inputError ? `${style._error}` : `text-cancel`}`} tabIndex={1}>
                    Password
                  </label>
                  </div>
                  <div className={`${style._password_info} mb-4 ${inputError ? `text-reaction` : `text-text-color`}`}>
                    <p>At least 8 characters long</p>
                    <p>A mixture of both UPPERCASE and lowercase</p>
                    <p>Must contain numbers</p>
                    <p>Must include at least one special character, e.g !@#$%&?</p>
                  </div>
                  <div className={`${style._input_div} position-relative mb-5`}>
                  <input
                    className={`${style._input_element} position-relative w-100 bg-background border  rounded-1 p-2 ps-5 form-control shadow-none text-cancel ${inputError ? `${style._error} border-reaction` : `${style._input_element} border-cancel`}`}
                    type="password"
                    // value=""
                    id="confirmPassword"
                    placeholder=" "
                  />
                    <MdOutlineLock
                      className={`${style._input_icon} position-absolute top-50 translate-middle ${inputError ? `text-reaction` : `text-cancel`}`}
                    />
                  <label htmlFor="confirmPassword" className={`${style._input_text} ${inputError ? `${style._error}` : `text-cancel`}`} tabIndex={1}>
                    Confirm password
                  </label>
                  </div>
                  
                </div>
                <div className={`${style._btn_div} position-relative mb-5 mt-3`}>
                  <button
                    className={`bg-btn-color py-2 border-0 w-100 rounded text-arrow`}
                  >Reset Password
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
export default SetNewPassword;
