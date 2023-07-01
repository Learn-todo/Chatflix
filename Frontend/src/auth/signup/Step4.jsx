import React, { useState, useEffect } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsPerson } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import Progressbar from "./Progressbar";
import imageCompression from 'browser-image-compression';

const Step4 = () => {
  let navigate = useNavigate();
  const error = (message) => toast.error(message);
  const success = (message) => toast.success(message);
  const [imageSrc, setImageSrc] = useState("");
  const [uploadFile, setUploadFile] = useState(false);
  const [userName, setUserName] = useState("");
  const [index, setIndex] = useState(3);
  const [inputError, setInputError] = useState(false);

  const handleChange = async (e) => {
    const imageFile = (e.target.files[0]);
    const options = {
      maxSizeMB: 0.5,
      maxWidthOrHeight: 800,
      useWebWorker: true,
    };
    try{
      const compressedFile = await imageCompression(imageFile, options);
      const imageUrl = URL.createObjectURL(compressedFile);
      setImageSrc(imageUrl);
      setUploadFile(true);
      return compressedFile;
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    localStorage.setItem('username', userName);
  }, [userName]);
  const name = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const username = localStorage.getItem("username");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === ""){
      error("Username cannot be empty");
      setInputError(prevState => !prevState);
    } else if (userName.length < 5 ){
      error("Username must be greater than 5 characters");
      setInputError(prevState => !prevState);
    } else {
      axios.post(`http://ec2-18-222-214-188.us-east-2.compute.amazonaws.com/api/user/create/`, {
        name,
        email,
        password,
        username,
        imageSrc,
      })
        .then(res => {
          console.log(res);
          success("Redirecting in 3 seconds");
          success("Congratulations! sign up successful");
          setTimeout(() => {
            navigate("/step5")
        }, 3000)
        })
        .catch(err => {
          console.log(err?.message)
          error(err?.message)
        })
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
              <div className={`w-75 px-4`}><Progressbar className={``} step={index} /></div>
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

              <form className="mb-4" action="" onSubmit={handleSubmit}>
                <div className={`d-flex justify-content-start align-items-center mb-4`}>
                  <div className={`${style._avatar} bg-cards rounded-circle d-flex justify-content-center align-items-center`}>
                    { uploadFile ? <img src={imageSrc} alt="avatar" /> : <BsCamera
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
                  accept="image/*"
                  id="file"
                  onChange={handleChange}
                  />
                </div>
                <div className={`mb-5`}>
                  <div className={`${style._input_div} position-relative mt-3 mb-1`}>
                  <input
                    className={`${style._input_element} position-relative w-100 bg-background border  rounded-1 p-2 ps-5 form-control shadow-none text-cancel ${inputError ? `${style._error} border-reaction` : `${style._input_element} border-cancel`}`}
                    type="text"
                    value={userName}
                    id="username"
                    placeholder=" "
                    onChange={(e) => setUserName(e.target.value)}
                  />
                    <BsPerson
                      className={`${style._input_icon} position-absolute top-50 translate-middle ${inputError ? `text-reaction` : `text-cancel`}`}
                    />
                  <label htmlFor="username" className={`${style._input_text} ${inputError ? `${style._error}` : `text-cancel`}`} tabIndex={1}>
                    Username
                  </label>
                  </div>
                  <div className={`${style._password_info} mb-5 text-text-color ${inputError ? `text-reaction` : `text-text-color`}`}>
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
