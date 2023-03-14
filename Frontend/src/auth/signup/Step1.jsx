import React from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsEnvelope } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  let navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  };
  const handleSignup = () => {
    navigate('/step2');
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
              <div className="fs-5 fw-normal text-cancel cursor-pointer">
              </div>

              <div className="fs-1 fw-normal text-cancel cursor-pointer" onClick={handleClose}>
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

              <form className="" action="">
                <div className={`${style._btn_div} position-relative mb-4`}>
                  <button
                    className={`text-backgroundTwo fw-semibold py-3 border-0 w-100 rounded text-center`}
                  >
                    Sign up with Google
                  </button>
                  <FcGoogle className={`position-absolute`} />
                </div>
                <div className={`${style._btn_div} position-relative mb-4`}>
                  <button
                    className={`text-backgroundTwo fw-semibold py-3 border-0 w-100 rounded`}
                  >
                    Sign up with Apple
                  </button>
                  <FaApple className={`position-absolute`} />
                </div>
                <div
                  className={`${style._divider} d-flex justify-content-center align-items-center my-4`}
                >
                  <div className={`bg-menu-heading`}></div>
                  <p className={`px-3 text-menu-heading mb-0`}>or</p>
                  <div className={`bg-menu-heading`}></div>
                </div>
                <div className={`${style._btn_div} position-relative mb-4`}>
                  <button
                    className={`py-3 border-0 w-100 rounded text-backgroundTwo fw-semibold`}
                    onClick={handleSignup}
                  >Signup with Email
                  </button>
                  <BsEnvelope className={`position-absolute`} />
                </div>
                <div
                  className={`mb-5 text-arrow text-decoration-none lh-base`}
                >
                  <p>
                    By signing up, you agree to the{" "}
                    <a
                      href="."
                      className={`text-btn-color text-decoration-none`}
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="."
                      className={`text-btn-color text-decoration-none`}
                    >
                      Privacy Policy,
                    </a>{" "}
                    &nbsp;including{" "}
                    <a
                      href="."
                      className={`text-btn-color text-decoration-none`}
                    >
                      Cookie use.
                    </a>
                  </p>
                </div>
                <div className={`mb-5 text-arrow`}>
                  <p>
                    Have an account already?{" "}
                    <Link
                      to="/signin"
                      className={`text-btn-color text-decoration-none`}
                    >Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>}
        </div>
      </div>
    </section>
  );
};
export default Step1;
