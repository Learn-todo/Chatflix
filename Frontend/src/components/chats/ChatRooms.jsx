import React, { useContext, useState } from "react";
import { ToggleContext } from "../../App";
import style from "./style.module.css";

const ChatRooms = () => {
  const toggle = useContext(ToggleContext);

     return (
          <section className={`${style._main} bg-background pb-4 ${
        toggle ? `${style._main_resize}` : `${style._main}`
               }`}
          >
               <div className={`p-3`}>
                    <h1 className={``}>Chats Room</h1>
               </div>
               
          </section>
     )
}

export default ChatRooms;