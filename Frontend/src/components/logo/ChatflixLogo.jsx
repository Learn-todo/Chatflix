import React from "react";
import style from "./style.module.css"
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <Image
        className={`${style._size}`}
        cloudName="dfsclcxhm"
        publicId="Chatflix/State_Full_Logo_jv2vdv.png"
      />
    </Link>
      
  );
};

export default Logo;
