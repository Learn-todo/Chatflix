import React from "react";
import style from "./style.module.css";

const Reply = ({ textInput, friendsImage }) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const timeFormat = hours >= 12 ? "pm" : "am";

  return (
    <section>
     <div className={`d-flex justify-content-start mt-1 align-items-end`}>
            <div className={`${style._chats_reply} p-3 bg-chat-reply-bg text-clicked-movie-heading fs-6 position-relative order-2`}>
          <p className={`mb-2 text-break`}>{textInput}</p>
              <div className={`${style._timestamp} position-relative d-flex align-items-center justify-content-end`}>
                <p className={`${style._typing} text-faq mb-0`}>{`${hours}:${minutes} ${timeFormat}`}</p>
              </div>
            </div>
            <div className={`me-2 order-1`}>
              <img src={friendsImage} alt="user" className={`${style._chat_img}`} />
            </div>
          </div>
    </section>
  );
};

export default Reply;