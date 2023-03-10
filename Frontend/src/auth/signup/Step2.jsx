import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsEnvelope } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Step2 = () => {
  let navigate = useNavigate();
  const error = (message) => toast.error(message);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (fullName === "") {
      error("Name is required!");
    } else if (email === ""){
      error("Email is required!")
    } else if (fullName.length < 5) {
      error("Name must be greater than 5 characters")
    } else {
      localStorage.setItem("fullName", fullName);
      localStorage.setItem("email", email);
      navigate("/step3")
    }
  }

    const handlePrev = () => {
      navigate('/step1');
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

              <div className={`${style._form_content} mx-auto my-3 px-4`}>
                <div className={`mb-5 text-center`}>
                  <h3 className={`text-arrow mb-2 fs-3 lh-4`}>Create Your Account</h3>
                  <p className={`text-text-color`}>
                    Create a free account to start chatting with friends while
                    watching movies.
                  </p>
                </div>

                <form className="mb-4" action="" onSubmit={handleNext}>
                  <div className={`mb-5`}>
                    <div className={`${style._input_div} position-relative mb-4`}>
                      <input
                        className={`${style._input_element} position-relative w-100 bg-background border border-cancel rounded-1 p-2 ps-5 text-cancel form-control shadow-none`}
                        type="text"
                        id="name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                      <BsPerson
                        className={`${style._input_icon} position-absolute top-50 translate-middle text-cancel`}
                      />
                      <span className={`${style._input_text} text-cancel position-absolute`} tabIndex={1}>
                        Full name
                      </span>
                    </div>
                    <div className={`${style._input_div} position-relative mb-4`}>
                      <input
                        className={`${style._input_element} position-relative w-100 bg-background border border-cancel rounded-1 p-2 ps-5 text-cancel form-control shadow-none`}
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

export default Step2;
