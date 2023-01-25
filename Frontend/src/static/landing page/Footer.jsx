import React from "react";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={`${style._links} w-75 mx-auto text-center p-3`}>
          <div className="d-flex justify-content-between align-items-center flex-column text-center text-arrow">
            <div
              className={`${style._footer_links} mb-5 d-flex justify-content-between w-100`}
            >
              <a href=".">.&nbsp; Media</a>
              <a href=".">.&nbsp; Categories</a>
              <a href=".">.&nbsp; FAQs</a>
              <a href=".">.&nbsp; Advertising</a>
              <a href=".">.&nbsp; Ads info</a>
            </div>
            <div
              className={`${style._footer_links} d-flex justify-content-between w-75 text-center`}
            >
              <a className="mx-2" href=".">
                .&nbsp; Terms of use
              </a>
              <a className="mx-2" href=".">
                .&nbsp; Privacy Policy
              </a>
              <a className="mx-2" href=".">
                .&nbsp; Cookie preference
              </a>
            </div>
          </div>
        </div>
        <div className="border border-bottom border-arrow mx-auto my-5 w-75"></div>
        <p className="text-center text-arrow mb-0 pb-4">
          All rights reserved &copy; 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
