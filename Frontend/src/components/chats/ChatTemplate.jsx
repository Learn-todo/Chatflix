import React, { useContext, useState } from "react";
import Img1 from "./img/man1.jpg";
import { AiOutlineVideoCameraAdd, AiOutlineInfoCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import style from "./style.module.css";

const ChatTemplate = () => {
  return (
    <section
      className={`${style._room} bg-backgroundTwo position-relative p-3 py-4 py-md-5 px-md-3`}
    >
      <div className={``}>
        <div className={``}>
          <div
            className={`d-flex justify-content-between align-items-center pb-4 border-bottom border-faq`}
          >
            <div className={`${style._friends_div} d-flex align-items-center`}>
              <div className={`${style._user_img_div} position-relative`}>
                <img
                  src={Img1}
                  alt={Img1}
                  className={`${style._friends_img}`}
                />
                <div className={`${style._online_indicator}`}></div>
              </div>
              <div className={`d-flex flex-column ms-2`}>
                <p
                  className={`${style._friend_name} text-arrow fw-normal lh-base mb-0`}
                >
                  Toluwa
                </p>
                <p className={`${style._typing} text-btn-color mb-0`}>
                  Toluwa is typing...
                </p>
              </div>
            </div>

            <div
              className={`d-flex justify-content-between align-items-center w-25 text-arrow`}
            >
              <BsTelephone className={`${style._friends_div}`} />
              <AiOutlineVideoCameraAdd className={`${style._friends_div}`} />
              <FiSearch className={`${style._friends_div}`} />
              <AiOutlineInfoCircle className={`${style._info_icon}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatTemplate;
