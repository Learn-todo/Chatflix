import React from "react";
import Img1 from "./img/man1.jpg";
import { BsCheckAll } from "react-icons/bs";
import style from "./style.module.css";

const Chat = ({ textInput }) => {
  return (
    <section>
      <div className={`d-flex justify-content-end align-items-end`}>
        <div className={`${style._chats} p-3 bg-chat-bg text-clicked-movie-heading fs-6 position-relative`}>
          <p className={`mb-2`}>{textInput}</p>
          <div className={`${style._timestamp} position-absolute d-flex align-items-center`}>
            <p className={`${style._typing} text-faq mb-0`}>07:16 am</p>
            <BsCheckAll className={`text-faq fs-6 ms-1`} />
          </div>
        </div>
        <div className={`ms-2`}>
          <img src={Img1} alt="user" className={`${style._chat_img}`} />
        </div>
      </div>
    </section>
  );
};

export default Chat;