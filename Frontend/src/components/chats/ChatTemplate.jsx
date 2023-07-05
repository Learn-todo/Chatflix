import React, { useContext, useState } from "react";
import { ToggleContext } from "../../App";
import Img1 from "./img/man1.jpg";
import { AiOutlineVideoCameraAdd, AiOutlineInfoCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import style from "./style.module.css";

const ChatTemplate = () => {
  const toggle = useContext(ToggleContext);

  return (
    <section
      className={`${style._room} bg-backgroundTwo position-relative p-3 py-5 py-md-0 px-md-0`}
    >
        <div className={``}>
          <div
            className={`${toggle ? `${style._chat_header_resize}`: `${style._chat_header}`}  bg-backgroundTwo d-flex justify-content-between align-items-center pb-4 pt-md-5 py-md-4 border-bottom border-faq`}
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

      
      <div className={`${style._chats_div} bg-backgroundTwo position-relative py-3 py-md-1 px-md-3 py-md-3`}>
        
        </div>
    </section>
  );
};

export default ChatTemplate;
