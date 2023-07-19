import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { MdOutlineLock } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Progressbar from "./Progressbar";

const Step3 = () => {
  let navigate = useNavigate();
  const error = (message) => toast.error(message);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [index, setIndex] = useState(2);
  const [inputError, setInputError] = useState(false);
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;

  const handleNext = (e) => {
    e.preventDefault();
    if (password === "" && confirmPassword === "") {
      error("Password cannot be empty");
      setInputError(prevState => !prevState);
    } else if (password.length < 8 && confirmPassword.length < 8) {
      error("Password must be greater than 8 characters");
      setInputError(prevState => !prevState);
    } else if (confirmPassword !== password) {
      error("Passwords do not match");
      setInputError(prevState => !prevState);
    } else if (!regex.test(password) && !regex.test(confirmPassword)) {
      error("Password must have a number, an uppercase and a special character");
      setInputError(prevState => !prevState);
    } else {
      localStorage.setItem("password", password);
      localStorage.setItem("confirmPassword", confirmPassword);
      navigate("/step4");
    }
  }
  const handlePrev = () => {
    navigate('/step2');
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
                <div className={`w-75 px-4`}><Progressbar className={``} step={index} /></div>
              <div className="fs-2 fw-normal text-cancel cursor-pointer" onClick={handleClose}>
                <IoIosClose />
              </div>
            </div>

            <div className={`${style._form_content} mx-auto my-3 px-4`}>
              <div className={`mb-5 text-center`}>
                <h3 className={`text-arrow mb-2 fs-3 lh-4`}>Create Your Account</h3>
                <p className={`text-text-color`}>
                  Create a strong password to keep your account safe.
                </p>
              </div>

              <form className="mb-4" action="" onSubmit={handleNext}>
                <div className={`mb-4`}>
                  <div className={`${style._input_div} position-relative mt-3 mb-1`}>
                  <input
                    className={`${style._input_element} position-relative w-100 bg-background border  rounded-1 p-2 ps-5 form-control shadow-none text-cancel ${inputError ? `${style._error} border-reaction` : `${style._input_element} border-cancel`}`}
                    type="password"
                    value={password}
                    id="password"
                    placeholder=" "
                    onChange={(e) => setPassword(e.target.value)}
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
                    value={confirmPassword}
                    id="confirmPassword"
                    placeholder=" "
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                    <MdOutlineLock
                      className={`${style._input_icon} position-absolute top-50 translate-middle ${inputError ? `text-reaction` : `text-cancel`}`}
                    />
                  <label htmlFor="confirmPassword" className={`${style._input_text} ${inputError ? `${style._error}` : `text-cancel`}`} tabIndex={1}>
                    Confirm password
                  </label>
                  </div>
                  
                </div>
                <div className={`${style._btn_div} position-relative mb-5 mt-4 $`}>
                  <button
                    className={`bg-btn-color py-2 border-0 w-100 rounded text-arrow`}
                  >Next
                  </button>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </div>
      <Toaster />
    </section>
  );
};
export default Step3;
