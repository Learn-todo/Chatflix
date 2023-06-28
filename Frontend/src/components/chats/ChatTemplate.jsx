import React, { useContext, useState } from "react";
import { ToggleContext } from "../../App";
import style from "./style.module.css";

const ChatTemplate = () => {
  const toggle = useContext(ToggleContext);

     return (
          <section className={`${style._main} bg-dark pb-4 ${
        toggle ? `${style._main_resize}` : `${style._main}`
               }`}
          >
               <div className={`mx-2 mt-2 bg-backgroundTwo rounded p-3`}>
                    Chat box!!
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptas ad voluptatum. Autem temporibus illum, nesciunt cumque, assumenda aspernatur vel corrupti aut expedita esse libero, recusandae exercitationem cum quidem quibusdam.
               </div>
               
          </section>
     )
}

export default ChatTemplate;