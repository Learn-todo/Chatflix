import React from "react";
import style from "./style.module.css";

const Cards = (props) => {
  return (
    <div className={`${style._card_columns} col-4 mb-4`}>
      <div className={`${style._card} p-4 text-start rounded-1 bg-cards`}>
        <img
          src={`./img/${props.cards.img}`}
          className={`${style._card_img_top}`}
          alt=""
        />
        <div className={`${style._card_body} p-0 py-1`}>
          <h5 className="card-title py-2 text-chat fs-5">{props.cards.title}</h5>
          <p className="card-text">{props.cards.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
