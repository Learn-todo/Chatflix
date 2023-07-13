import React, { useContext, useState, useRef, useEffect } from "react";
import { ToggleContext } from "../../App";
import Img1 from "./img/man1.jpg";
import { AiOutlineVideoCameraAdd, AiOutlineInfoCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { CiMicrophoneOn } from "react-icons/ci";
import { TbSend } from "react-icons/tb";
import { MdOutlineAttachment } from "react-icons/md";
import style from "./style.module.css";
import Chat from "./Chat";
import Reply from "./Reply";

const ChatTemplate = () => {
  const toggle = useContext(ToggleContext);
  const [isTyping, setIsTyping] = useState(false);
  const [text, setText] = useState("");
  const [sendText, setSendText] = useState(false);
  const [reply, setReply] = useState(false);
  const [chats, setChats] = useState([]);
  const [chatsReply, setChatsReply] = useState([]);
  const texts = useRef("");

  const sendChat = () => {
    setSendText(true);    

    if (!reply) {
      setChats(prevChat => {
        return [...prevChat, text]
      })
    } else {
      setChatsReply(prevChat => {
        return [...prevChat, text]
      })
    }

    if(chats.length > 1){
      setReply(true)
    }
    else if(chatsReply.length === 1) {
      setReply(false)
    }
    texts.current.value = null;
  }

  useEffect(() => {
    if (texts.current.value === null) {
      setIsTyping(false)
    } else {
      setIsTyping(true)
    }
  }, [text.length])


  return (
    <section
      className={`${style._room} bg-backgroundTwo position-relative py-md-0 px-md-0`}
    >
        <div className={``}>
          <div
            className={`${toggle ? `${style._chat_header_resize}`: `${style._chat_header}`} bg-backgroundTwo d-flex justify-content-between align-items-center py-3 px-3 border-bottom border-faq`}
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
                 {isTyping && `Toluwa is typing...`}
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

      
      <div className={`${toggle ? `${style._chats_div_resize}` : `${style._chats_div}`}  bg-backgroundTwo position-relative py-md-0 px-3`}>
        <div className={`d-flex justify-content-between align-items-center mb-4`}>
          <div className={`border-bottom border-secondary-subtle w-50`}></div>
           <p className={`${style._friends} text-faq mb-0 mx-3`}>Today</p>
          <div className={`border-bottom border-secondary-subtle w-50`}></div>
        </div>

        <div className={``}>
          <div className={`${toggle ? `${style._chat_input_div_resize}` : `${style._chat_input_div}`} position-fixed`}>
            <div className={`position-relative bg-input p-3 pb-4 rounded d-flex align-items-center`}>
              <img src={Img1} alt="user"  className={`${style._chat_img}`} />
              <textarea name="" id="" cols="60" rows={text.length > 26 && !texts.current.value === null ? "2" : "1"} placeholder="Write a message..." className={`${style._chat_input} bg-transparent text-cancel border-0 ps-2 py-0`} onChange={(e) => setText(e.target.value)} ref={texts}></textarea>
              <div className={`${style._chat_control} position-absolute text-arrow d-flex justify-content-between align-items-center fs-5`}>
                <CiMicrophoneOn />
                <MdOutlineAttachment className={`${style._attachment}`} />
                <p className={`mb-0 text-chat-divider fw-lighter px-1 fs-6`}>|</p>
                <TbSend className={`text-chat-send`} onClick={sendChat} />
              </div>
            </div>
          </div>
          {sendText && chats.map((chat, index) => {
            return <Chat textInput={chat} key={index} />
          })}
          {sendText && chatsReply.map((chat, index) => {
            return reply && <Reply textInput={chat} key={index} />
          })}
        </div>
      </div>
    </section>
  );
};
export default ChatTemplate;
