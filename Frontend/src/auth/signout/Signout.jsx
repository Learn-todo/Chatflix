import React from "react";
import Logo from "../../components/logo/ChatflixLogo";
import style from "../signup/style.module.css";
import Slideshow from "../../components/slidesshow/Slideshow";
import { Link } from "react-router-dom";

const Signout = () => {
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
              <div className="mx-3 py-3 my-5 d-flex justify-content-center align-items-center">
                <Logo />
              </div>

              <div className={`${style._form_content} mx-auto my-3 px-4`}>
                <div className={`mb-5 text-center`}>
                  <h3 className={`text-arrow mb-2 fs-3 lh-4`}>
                    Log out of Chatflix?
                  </h3>
                  <p className={`text-text-color`}>
                    You can always log in back into chatflix whenever you want.
                    You can also switch accounts by adding an existing account.
                  </p>
                </div>
                <form className="mb-5" action="">
                  <div className={`${style._btn_div} position-relative mb-3`}>
                    <button
                      className={`bg-btn-color py-2 border-0 w-100 rounded`}
                    >
                      <Link
                        to="/signin"
                        className={`text-decoration-none text-arrow`}
                      >
                        Logout
                      </Link>
                    </button>
                  </div>
                  <div className={`${style._btn_div} position-relative mb-5`}>
                    <button
                      className={`border border-btn-color bg-background py-2 w-100 rounded`}
                    >
                      <Link
                        to="/"
                        className={`text-decoration-none text-btn-color`}
                      >
                        Cancel
                      </Link>
                    </button>
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
export default Signout;
