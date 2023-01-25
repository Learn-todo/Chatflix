import React from "react";
import style from "./style.module.css";
import Logo from "./images/Chatflix Logo.svg";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className={`${style._header} z-3`}>
      <nav className="mx-3 pt-2">
        <div className={`${style._nav_con} d-flex justify-content-between p-5`}>
          <div className={`${style._logo}`}>
            <img src={Logo} alt="" />
          </div>
          <div>
            <button
              className={`${style._login_btn} btn btn-outline-btn-color px-5`}
            ><Link to="/reset password" className="text-decoration-none text-white">Log in</Link>
            </button>
          </div>
        </div>
      </nav>
      <div className={`${style._hero_text} d-flex justify-content-center`}>
        <div className={`${style._hero_text_container} w-50>`}>
          <div className={`${style._hero_div} mx-auto text-center mb-5`}>
            <div className="mb-4">
              <h1 className="text-arrow">
                Watch your
                <span className="text-btn-color"> favourite movies</span> while
                <span className="text-btn-color"> chatting</span> with friends
              </h1>
            </div>
          </div>
          <div className={`${style._hero_div} mx-auto mb-5 text-center`}>
            <p className="text-arrow w-100">
              Know more and enjoy talking about your favourite movies you
              stream, download or share.
            </p>
          </div>

          <div className={`${style._hero_div} mx-auto`}>
            <button className="mt-4 btn btn-btn-color w-100 p-2 mb-5">
              Create a free account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
