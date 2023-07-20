import React, { useState } from "react";
import style from "./style.module.css";
import { IoClose } from "react-icons/io5";
import { BsBell, BsToggleOn, BsToggleOff } from "react-icons/bs";
import { MdOutlineReport, MdBlock } from "react-icons/md";
import { TbArchive } from "react-icons/tb";



const ChatProfile = ({ friendsImage, friendsName, handleCloseChatProfile }) => {
     const [imageChats, setImageChats] = useState([]);
     const [imageClicked, setImageClicked] = useState(true);
     const [documentChats, setDocumentChats] = useState([]);
     const [documentClicked, setDocumentClicked] = useState(false);
     const [linkChats, setLinkChats] = useState([]);
     const [linkClicked, setLinkClicked] = useState(false);
     const [notification, setNotification] = useState(false);

  return (
    <section className={`${style._chat_profile}`}>
     <div className={`p-3 p-md-5`}>
          <div className={`${style._friends_div} d-flex justify-content-end text-arrow fs-3`} onClick={handleCloseChatProfile}>
               <IoClose className={`text-arrow`} />
          </div>
          
          <div className={`mx-auto mb-5 text-center`}>
               <img src={friendsImage} alt="friend" className={`${style._profile_pic} mb-3`} />
               <p className={`fs-5 text-arrow fw-semibold lh-base`}>{friendsName}</p>
               <p className={`fw-base fs-6 lh-base text-online`}>Online</p>
          </div>

          <div className={`border-bottom border-header-border mx-auto pb-2 text-arrow fw-semibold lh-base fs-6`}>
               <div className={`d-flex justify-content-between align-items-center mx-auto w-md-25 `}>
                    <div onClick={() => {
                         setLinkClicked(false);
                         setDocumentClicked(false);
                         setImageClicked(true);
                           }} className={`${style._friends_div} ${imageClicked ? `text-btn-color` : `text-arrow`}`}>Image</div>
                           <div onClick={() => {
                                setImageClicked(false);
                                setLinkClicked(false);
                                setDocumentClicked(true);
                           }} className={`${style._friends_div} ${documentClicked ? `text-btn-color` : `text-arrow`}`}>Document</div>
                    <div onClick={() => {
                                setDocumentClicked(false);
                                setImageClicked(false);
                                setLinkClicked(true);
                           }} className={`${style._friends_div} ${linkClicked ? `text-btn-color` : `text-arrow`}`}>Link</div>
               </div>
          </div>
          <div className={`mb-4 border-bottom border-header-border mx-auto py-5`}>
               {imageClicked && imageChats.length > 0 ? imageChats.map((imageChat, index) => {
                           return <div key={index} className={`mb-3`}>{imageChat}</div>
                      }) :
                    <div className={`text-arrow fs-6 text-center`}><p className={`mb-0`}>{imageClicked ? `image not sent yet` : ``}</p></div>
               }
               
               {documentClicked && documentChats.length > 0 ? documentChats.map((documentChat, index) => {
                           return <div key={index} className={`mb-3`}>{documentChat}</div>
                      }) :
                    <div className={`text-arrow fs-6 text-center`}><p className={`mb-0`}>{documentClicked ? `document not sent yet` : ``}</p></div>
               }
               
               {linkClicked && linkChats.length > 0 ? linkChats.map((linkChat, index) => {
                           return <div key={index} className={`mb-3`}>{linkChat}</div>
                      }) :
                    <div className={`text-arrow fs-6 text-center`}><p className={`mb-0`}>{linkClicked ? `link not sent yet` : ``}</p></div>
               }
                      
          </div>
          <div className={`border-bottom border-header-border py-3 text-arrow mx-auto fs-6 lh-base mb-4`}>
               <div className={`d-flex align-items-center mb-3`}>
                    <BsBell className={`me-2 fs-5`} />
                    <p className={`${style._friends_div} mb-0`}>Notification</p>
                    {<div className={`${style._friends_div} ms-auto`} onClick={() => setNotification(prevState => !prevState)}>{notification ? <BsToggleOn className={`text-btn-color fs-5`} /> : <BsToggleOff className={`text-arrow fs-5`} />}</div>}
               </div>
               <div className={`${style._friends_div} w-25 d-flex align-items-center mb-3`}>
                    <MdOutlineReport className={`me-2 fs-5`} />
                    <p className={`mb-0`}>Report</p>
               </div>
               <div className={`${style._friends_div} w-25 d-flex align-items-center mb-3 text-block`}>
                    <MdBlock className={`me-2 fs-5`} />
                    <p className={`mb-0`}>Block</p>
               </div>
          </div>
          
          <div className={`pb-5 py-3 text-arrow fs-6 lh-base mb-5 mx-auto `}>
               <div className={`${style._friends_div} w-25 d-flex align-items-center mb-3`}>
                    <TbArchive className={`me-2 fs-5`} />
                    <p className={`mb-0`}>Archive</p>
               </div>
               <div className={`${style._friends_div} w-25 d-flex align-items-center mb-3 text-block`}>
                    <TbArchive className={`me-2 fs-5`} />
                    <p className={`mb-0`}>Delete</p>
               </div>
          </div>
               
     </div>
    </section>
  );
};

export default ChatProfile;