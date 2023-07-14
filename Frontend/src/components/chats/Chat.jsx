import React from "react";
import Img1 from "./img/man1.jpg";
import { BsCheckAll } from "react-icons/bs";
import style from "./style.module.css";

const Chat = ({ textInput }) => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const timeFormat = hours >= 12 ? "pm" : "am"

  return (
    <section>
          <div className={`d-flex justify-content-end align-items-end mt-1`}>
        <div className={`${style._chats} bg-chat-bg p-3 text-clicked-movie-heading fs-6 position-relative`}>
          <p className={`text-break`}>{textInput}</p>
          <div className={`${style._timestamp} position-relative d-flex align-items-center justify-content-end`}>
            <p className={`${style._typing} text-faq mb-0`}>{`${hours}:${minutes} ${timeFormat}`}</p>
            {<BsCheckAll className={`text-faq fs-6 ms-1`} />}
          </div>
        </div>
        <div className={`${`ms-2`}`}>
          <img src={Img1} alt="user" className={`${style._chat_img}`} />
        </div>
      </div>
    </section>
  );
};

export default Chat;

