import React from "react";
import Img2 from "./img/man2.jpg";
import style from "./style.module.css";

const Reply = ({ textInput, reply }) => {
  return (
    <section>
     <div className={`d-flex justify-content-start mt-1 align-items-end`}>
            <div className={`${style._chats_reply} p-3 bg-chat-reply-bg text-clicked-movie-heading fs-6 position-relative order-2`}>
          <p className={`mb-2 text-break`}>{textInput}</p>
              <div className={`${style._timestamp} position-absolute d-flex align-items-center`}>
                <p className={`${style._typing} text-faq mb-0`}>07:26 am</p>
              </div>
            </div>
            <div className={`me-2 order-1`}>
              <img src={Img2} alt="user" className={`${style._chat_img}`} />
            </div>
          </div>
    </section>
  );
};

export default Reply;