import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsPerson } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Step4 = () => {
  let navigate = useNavigate();
  const error = (message) => toast.error(message);
  const [selectFile, setSelectFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(false);
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    const url = URL.createObjectURL(e.target.files[0]);
		setSelectFile(url);
    setUploadFile(true);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (userName === ""){
      error("Username cannot be empty");
    } else if (userName.length < 6 ){
      error("Username must be greater than 5 characters")
    } else {
      navigate("/step5")
    }
  }

  const handlePrev = () => {
    navigate('/step3');
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
                  Choose your favorite header picture and set a unique username.
                </p>
              </div>

              <form className="mb-4" action="" onSubmit={handleNext}>
                <div className={`d-flex justify-content-start align-items-center mb-4`}>
                  <div className={`${style._avatar} bg-cards rounded-circle d-flex justify-content-center align-items-center`}>
                    { uploadFile ? <img src={selectFile} alt="" /> : <BsCamera
                    className={`text-cancel`}
                  />}
                  </div>
                  <label
                    htmlFor="file"
                    className={`${style._label} bg-btn-color text-arrow p-2 ms-3 text-center`}
                  >Choose Avatar</label>
                  <input 
                  className={`${style._avatar_input}`}
                  type="file"
                  id="file"
                  onChange={handleChange}
                  />
                </div>
                <div className={`mb-5`}>
                  <div className={`${style._input_div} position-relative mt-3 mb-1`}>
                  <input
                    className={`${style._input_element} position-relative w-100 bg-background border border-cancel rounded-1 p-2 ps-5 text-cancel form-control shadow-none`}
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setUserName(e.target.value)}
                  />
                    <BsPerson
                      className={`${style._input_icon} position-absolute top-50 translate-middle text-cancel`}
                    />
                  <span className={`${style._input_text} text-cancel position-absolute`} tabIndex={1}>
                    Username
                  </span>
                  </div>
                  <div className={`${style._password_info} mb-5 text-text-color`}>
                    <p>Username can only contain special characters e.g _, - or .</p>
                    <p>username can contain numbers</p>
                    <p>Username must not exceed 16 characters</p>
                  </div>
                </div>
                <div className={`${style._btn_div} position-relative mb-5`}>
                  <button
                    className={`bg-btn-color py-2 border-0 w-100 rounded text-arrow`}
                  >Finish
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
export default Step4;
