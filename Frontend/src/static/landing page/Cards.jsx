import React from "react";
import style from "./style.module.css";
import cardData from "./cardData";

const Cards = () => {
  const titleColor = (i) => {
    if (i === 0) {
      return "text-chat";
    } else if (i === 1) {
      return "text-reaction";
    } else if (i === 2) {
      return "text-ratings";
    } else if (i === 3) {
      return "text-share";
    } else if (i === 4) {
      return "text-captions";
    } else if (i === 5) {
      return "text-categories";
    }
  };

  return (
    <section>
      <div className="mb-5 text-center">
        <h3 className="text-arrow">
          How are we <span className="text-btn-color">different</span>?
        </h3>
      </div>

      <div className="mb-5">
        <div
          className={`${style._unique} container text-center text-text-color2 mb-4`}
        >
          <div className="row mb-5">
            {cardData.map((card, i) => {
              return (
                <>
                  <div className={`${style._card_columns} col-4 mb-4`}>
                    <div
                      className={`${style._card} p-4 text-start rounded-1 bg-cards`}
                    >
                      <img
                        src={`./img/${card.img}`}
                        className={`${style._card_img_top}`}
                        alt=""
                      />
                      <div className={`${style._card_body} p-0 py-1`}>
                        <h5 className={`${titleColor(i)} card-title py-2 fs-5`}>
                          {card.title}
                        </h5>
                        <p className="card-text">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
