import React, { useContext, useState } from "react";
import { ToggleContext } from "../../App";
import Img1 from "./img/man1.jpg";
import Img2 from "./img/man2.jpg";
import { AiOutlineVideoCameraAdd, AiOutlineInfoCircle } from "react-icons/ai";
import { BsTelephone, BsSend } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CiMicrophoneOn } from "react-icons/ci";
import { MdOutlineAttachment } from "react-icons/md";
import style from "./style.module.css";
import Chat from "./Chat";

const ChatTemplate = () => {
  const toggle = useContext(ToggleContext);

  return (
    <section
      className={`${style._room} bg-backgroundTwo position-relative px-3 py-md-0 px-md-0`}
    >
        <div className={``}>
          <div
            className={`${toggle ? `${style._chat_header_resize}`: `${style._chat_header}`} bg-backgroundTwo d-flex justify-content-between align-items-center py-4 border-bottom border-faq`}
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

      
      <div className={`${toggle ? `${style._chats_div_resize}` : `${style._chats_div}`}  bg-backgroundTwo position-relative py-3 py-md-0 px-md-3`}>
        <div className={`d-flex justify-content-between align-items-center mb-4`}>
          <div className={`border-bottom border-secondary-subtle w-50`}></div>
           <p className={`${style._friends} text-faq mb-0 mx-3`}>Today</p>
          <div className={`border-bottom border-secondary-subtle w-50`}></div>
        </div>

        <div>
          <div className={`${style._chat_input_div} position-fixed`}>
            <div className={`position-relative bg-input p-3 rounded`}>
              <img src={Img1} alt="user"  className={`${style._friends_img}`} />
              <input type="text" name="" id="" placeholder="Write a message..." className={`${style._chat_input} bg-transparent text-cancel border-0 px-2 pe-6`} />
              <div className={`${style._chat_control} position-absolute text-cancel d-flex justify-content-between align-items-center w-25 fs-5`}>
                <CiMicrophoneOn />
                <MdOutlineAttachment className={`${style._attachment}`} />
                <p className={`mb-0`}>|</p>
                <BsSend className={`text-btn-color`} />
              </div>
            </div>
          </div>
          {/* <div className={`d-flex justify-content-end align-items-end`}>
            <div className={`${style._chats} p-3 bg-chat-bg text-clicked-movie-heading fs-6 position-relative`}>
              <p className={`mb-2`}>HELLO</p>
              <div className={`${style._timestamp} position-absolute d-flex align-items-center`}>
                <p className={`${style._typing} text-faq mb-0`}>07:16 am</p>
                <BsCheckAll className={`text-faq fs-6 ms-1`} />
              </div>
            </div>
            <div className={`ms-2`}>
              <img src={Img1} alt="user" className={`${style._friends_img}`} />
            </div>
          </div> */}

          {/* <div className={`d-flex justify-content-end mt-1 align-items-end`}>
            <div className={`${style._chats} p-3 bg-chat-bg text-clicked-movie-heading fs-6 position-relative`}>
              <p className={`mb-2`}>I saw your comment on django unchained and I noticed your movie preference aligned with mine. If you don't mind could you recommend some movies for me and probably we binge watch some together.</p>
              <div className={`${style._timestamp} position-absolute d-flex align-items-center`}>
                <p className={`${style._typing} text-faq mb-0`}>07:17 am</p>
                <BsCheckAll className={`text-faq fs-6 ms-1`} />
              </div>
            </div>
            <div className={`ms-2`}>
              <img src={Img1} alt="user" className={`${style._friends_img}`} />
            </div>
          </div> */}

          <div className={`d-flex justify-content-start mt-3 align-items-end`}>
            <div className={`${style._chats_reply} p-3 bg-chat-reply-bg text-clicked-movie-heading fs-6 position-relative order-2`}>
              <p className={`mb-2`}>Hello</p>
              <div className={`${style._timestamp} position-absolute d-flex align-items-center`}>
                <p className={`${style._typing} text-faq mb-0`}>07:26 am</p>
                {/* <BsCheckAll className={`text-faq fs-6 ms-1`} /> */}
              </div>
            </div>
            <div className={`me-2 order-1`}>
              <img src={Img2} alt="user" className={`${style._friends_img}`} />
            </div>
          </div>
          <div className={`d-flex justify-content-start mt-1 align-items-end`}>
            <div className={`${style._chats_reply} p-3 bg-chat-reply-bg text-clicked-movie-heading fs-6 position-relative order-2`}>
              <p className={`mb-2`}>Sure, but I can't assure you we're gonna watch some together.</p>
              <div className={`${style._timestamp} position-absolute d-flex align-items-center`}>
                <p className={`${style._typing} text-faq mb-0`}>07:26 am</p>
                {/* <BsCheckAll className={`text-faq fs-6 ms-1`} /> */}
              </div>
            </div>
            <div className={`me-2 order-1`}>
              <img src={Img2} alt="user" className={`${style._friends_img}`} />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};
export default ChatTemplate;
