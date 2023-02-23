import React, { useState } from "react";
import Logo from "../../components/logo/ChatflixLogo";
import styles from "./styles.module.css";
import style from "../signup/style.module.css";
import { IoIosClose } from "react-icons/io";
import Slideshow from "../../components/slidesshow/Slideshow";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineLock } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signin = () => {
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
          {
            <div className={`${style._form_div} bg-background rounded`}>
              <div className="mx-3 py-3 d-flex justify-content-between align-items-center">
                <div className="fs-5 fw-normal text-cancel cursor-pointer "></div>

                <div className="fs-2 fw-normal text-cancel cursor-pointer">
                  <IoIosClose />
                </div>
              </div>

              <div className={`${style._form_content} mx-auto my-3 px-4`}>
                <div className={`mb-5 text-center`}>
                  <h3 className={`text-arrow mb-2 fs-3 lh-4`}>
                    Welcome to <span className={`text-btn-color`}>Chat</span>
                    flix
                  </h3>
                </div>

                <form className="mb-4" action="">
                  <div className={`mb-2`}>
                    <div className={`${style._btn_div} position-relative mb-4`}>
                      <button
                        className={`text-backgroundTwo fw-semibold py-3 border-0 w-100 rounded text-center`}
                      >
                        Sign in with Google
                      </button>
                      <FcGoogle className={`position-absolute`} />
                    </div>
                    <div className={`${style._btn_div} position-relative mb-4`}>
                      <button
                        className={`text-backgroundTwo fw-semibold py-3 border-0 w-100 rounded`}
                      >
                        Sign in with Apple
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
                    <div
                      className={`${style._input_div} position-relative mb-4`}
                    >
                      <input
                        className={`${style._input_element} position-relative w-100 bg-background border border-cancel rounded-1 p-2 ps-5 text-cancel form-control shadow-none`}
                        type="email"
                        name=""
                        id=""
                      />
                      <BsEnvelope
                        className={`${style._input_icon} position-absolute top-50 translate-middle text-cancel`}
                      />
                      <span
                        className={`${style._input_text} text-cancel position-absolute`}
                        tabIndex={1}
                      >
                        Email
                      </span>
                    </div>
                    <div
                      className={`${style._input_div} position-relative mb-4`}
                    >
                      <input
                        className={`${style._input_element} position-relative w-100 bg-background border border-cancel rounded-1 p-2 ps-5 text-cancel form-control shadow-none`}
                        type="email"
                        name=""
                        id=""
                      />
                      <MdOutlineLock
                        className={`${style._input_icon} position-absolute top-50 translate-middle text-cancel`}
                      />
                      <span
                        className={`${style._input_text} text-cancel position-absolute`}
                        tabIndex={1}
                      >
                        Password
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${styles._checkbox_container} d-flex justify-content-between align-items-center my-4`}
                  >
                    <div className={`text-signin`}>
                      <input
                        type="checkbox"
                        name=""
                        id="signin"
                        className={``}
                      />
                      <label htmlFor="signin" className={`ms-2`}>
                        Keep me logged in
                      </label>
                    </div>
                    <Link
                      to="/forgot password"
                      className={`text-btn-color text-right text-decoration-none`}
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className={`${style._btn_div} position-relative mb-5`}>
                    <button
                      className={`bg-btn-color py-2 border-0 w-100 rounded`}
                    >
                      <Link
                        to="/dashboard"
                        className={`text-decoration-none text-arrow`}
                      >
                        Signin
                      </Link>
                    </button>
                  </div>
                  <div
                    className={`${styles._checkbox_container} text-signin mb-4`}
                  >
                    <p>
                      You do not have an account?{" "}
                      <Link
                        to="/step1"
                        className={`text-decoration-none text-btn-color`}
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  );
};
export default Signin;
