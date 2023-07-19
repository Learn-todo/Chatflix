import React from "react";
import style from "./style.module.css";
import { IoClose } from "react-icons/io5";


const ChatProfile = ({ friendsImage, friendsName, handleCloseChatProfile }) => {

  return (
    <section>
     <div className={`p-3 p-md-4`}>
          <div className={`d-flex justify-content-end text-arrow fs-3`} onClick={handleCloseChatProfile}>
               <IoClose className={`text-arrow`} />
          </div>
          
          <div className={`mx-auto mb-5 text-center`}>
               <img src={friendsImage} alt="friend" className={`${style._profile_pic} mb-3`} />
               <p className={`fs-5 text-arrow fw-semibold lh-base`}>{friendsName}</p>
               <p className={`fw-base fs-6 lh-base text-online`}>Online</p>
          </div>

          <div className={`border-bottom border-header-border pb-2 d-flex justify-content-between align-items-center mx-auto w-md-25 text-arrow fw-semibold lh-base fs-6`}>
               <div>Image</div>
               <div>Document</div>
               <div>Link</div>
          </div>
     </div>
    </section>
  );
};

export default ChatProfile;