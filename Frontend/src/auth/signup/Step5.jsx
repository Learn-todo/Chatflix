import React from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "./style.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import { useNavigate } from 'react-router-dom';

const Step5 = () => {
  let navigate = useNavigate();
  const handleNext = () => {
    navigate('/verified account');
  }
  const handlePrev = () => {
    navigate('/step4');
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
                  publicId="Chatflix/Frame_3325_vpmybk.png"
                  className={``} 
                  />
            </div>
            <div className={`${style._form_content} mx-auto my-3 px-4`}>
              <div className={`mb-5 text-center`}>
                <h3 className={`text-arrow mb-2 fs-3 lh-4`}>Verify Your Email Address</h3>
                <p className={`text-text-color`}>
                  Please click on the link that was sent to your email address to verify your account.
                </p>
              </div>

              <form className="mb-4" action="" onSubmit={handleNext}>
                <div className={`${style._btn_div} position-relative mb-5`}>
                  <button
                    className={`bg-btn-color py-2 border-0 w-100 rounded text-arrow`}
                  >Open your email app
                  </button>
                </div>
                <div className={`mb-5 text-arrow`}>
                  <p>Didn't receive any email? <Link to="" className={`text-decoration-none text-btn-color`}>Resend link.</Link></p>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
};
export default Step5;
