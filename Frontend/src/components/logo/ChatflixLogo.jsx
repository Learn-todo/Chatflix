import React from "react";
import style from "./style.module.css"
import { Image } from "cloudinary-react";

const Logo = () => {
  return (
      <Image
        className={`${style._size}`}
        cloudName="dfsclcxhm"
        publicId="Chatflix/State_Full_Logo_jv2vdv.png"
      />
  );
};

export default Logo;
