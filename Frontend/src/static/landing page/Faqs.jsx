import React from "react";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundDown } from "react-icons/io";
import faqsData from "./faqsData";
import style from "./style.module.css";

const Faqs = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (btn) => {
    if (clicked === btn) {
      return setClicked(null);
    }
    setClicked(btn);
  };

  return (
    <section>
      <div className="mb-5">
        <div className="my-5 text-center p-3">
          <h3 className="text-arrow">Frequently Asked Questions (FAQ)</h3>
        </div>
        <div className="w-75 mx-auto">
          {faqsData.map((data, btn) => (
            <div key={data.id} className="mb-4">
              <div
                className={`${style._faq_body} bg-cards d-flex justify-content-start align-items-center rounded-1 p-2`}
                onClick={() => toggle(btn)}
              >
                <h3 className="text-arrow mx-2 fs-3 mb-2 font-bold">
                  {clicked === btn ? (
                    <IoIosArrowRoundDown />
                  ) : (
                    <IoIosArrowRoundForward />
                  )}
                </h3>
                <h2 className="mb-0 text-decoration-none p-0 text-arrow fs-6 fw-normal">
                  {data.question}
                </h2>
              </div>
              <div
                className={`${
                  clicked === btn ? style._content_show : style._content
                } card-body bg-accordion text-faq p-3 rounded-bottom`}
              >
                {data.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
