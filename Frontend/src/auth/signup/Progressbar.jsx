import React from "react";
import "react-step-progress-bar/styles.css";
import style from "./style.module.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Progressbar = (props) => {
  return (
    <ProgressBar percent={((props.step - 1) * 100) / 2} height="2px">
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`${
              style._progressbar_num
            } d-flex justify-content-between align-items-center ${
              accomplished ? `bg-primary` : "bg-progress-bar"
            }`}
          >
            <p className={`text-progress-bar mx-auto mb-0`}>1</p>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`${
              style._progressbar_num
            } d-flex justify-content-between align-items-center ${
              accomplished ? `bg-primary` : `bg-progress-bar`
            }`}
          >
            <p className={`text-text-color mx-auto mb-0 ${accomplished ? `text-white` : `text-progress-bar`}`}>2</p>
          </div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            className={`${
              style._progressbar_num
            } d-flex justify-content-between align-items-center ${
              accomplished ? `bg-primary` : `bg-progress-bar`
            }`}
          >
            <p className={`text-progress-bar mx-auto mb-0 ${accomplished ? `text-white` : `text-text-color`}`}>3</p>
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};
export default Progressbar;
