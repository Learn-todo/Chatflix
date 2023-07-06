import React, { useContext, useState } from "react";
import { ToggleContext } from "../../App";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import style from "./style.module.css";
import friendsData from "./chatroomdata";
import ChatTemplate from "./ChatTemplate";

const ChatRooms = () => {
  const toggle = useContext(ToggleContext);
  const [friends, setFriends] = useState(friendsData);
  const [openChat, setOpenChat] = useState(false);

  return (
    <section
      className={`${style._main} ${
        toggle ? `${style._main_resize}` : `${style._main}`
      }`}
    >
      <div className={`d-md-flex`}>
     {<div className={`${openChat ? `d-none d-md-block` : ` d-block`} ${style._friends_list} bg-background`}>
        <div className={`${style._chat_rooms} p-3 pt-5`}>
          <h1 className={`text-arrow fs-3 fw-semibold lh-base mb-4`}>
           Chats Room <span className={`text-btn-color`}>({friends.length})</span>
          </h1>
          <div className={`position-relative mb-4`}>
            <BsSearch
              className={`${style._search_icon} text-cancel position-absolute `}
            />
            <input
              type="text"
              placeholder="Search name, messages"
              className={`${style._search_input} bg-input fw-normal lh-base border border-0 rounded w-100`}
            />
          </div>
          <div
            className={`d-flex justify-content-between align-items-center text-cancel mb-3`}
          >
            <div className={`d-flex align-items-start`}>
              <IoIosPeople className={`fs-6`} />
              <p className={`${style._friends} ms-2 mb-0`}>All Friends</p>
            </div>
            <div className={style._friends_menu}>
              <BsThreeDots />
            </div>
          </div>
          <div>
            {friends.map((friend, index) => {
              return (
                <div
                  key={index}
                  id={friend.name}
                  className={`${style._friends_div} d-flex align-items-center mb-4`}
                  onClick={() => setOpenChat(true)}
                >
                  <div className={`position-relative`}>
                    <img
                      src={friend.img}
                      alt={friend.name}
                      className={`${style._friends_img}`}
                    />
                    <div className={`${style._online_indicator}`}></div>
                  </div>
                  <p
                    className={`${style._friend_name} ms-2 text-arrow fw-normal lh-base mb-0`}
                  >
                    {friend.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        </div>}

        {openChat ? <ChatTemplate /> : <div className={`${openChat ? `d-none` : `d-block`} ${style._room} bg-backgroundTwo text-center p-3 py-5 d-flex justify-content-center align-items-center`}>
          <div>
               <h2 className={`text-cancel fs-3 fw-semibold mb-3 lh-base`}>
               Welcome to your chat room!
               </h2>
               <p className={`${style._friend_name} text-faq mb-4`}>
               Start a private conversation with yourself, friends or groups.
               </p>
               <button className={`btn btn-primary bg-btn-color`}>
               Start a chat
               </button>
          </div>
        </div>}
        </div>
    </section>
  );
};

export default ChatRooms;
