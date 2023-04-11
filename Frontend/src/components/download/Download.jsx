import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/fa";
import { BiPause } from "react-icons/fa";
import { TiTimes } from "react-icons/fa";
import { BiDotsVertical } from "react-icons/fa";
import { BsImage } from "react-icons/fa";
import { downloadCSS } from "./downloadCSS.module.css";

const download = () => {
    return (
        <div>
            <div className={downloadCSS.frame}>
                <div className={downloadCSS.h3}>
                    <h3>Download</h3>
                </div>
                <div className={downloadCSS.search}>
                    <CiSearch className={downloadCSS.search} />
                    <input type="text" placeholder="Search downloaded movies"/>
                </div>
            </div>

            <div classNam={downloadCSS.downloading}>
                <h2>Downloading</h2>
                <div><BsImage /></div>
                    <div>className={downloadCSS.description}
                        <h3>Best movie ever</h3>
                        <p className={downloadCSS.mbcalculate}>5395</p>
                        <p className={downloadCSS.percent}>50% . remaining seconds countdown</p>
                    </div>
                
                    <div className={downloadCSS.d-icons}>
                        <TiTimes />
                        <BiPause />
                        <BiDotsVertical />
                    </div>
            </div>
        
        </div>
    )
};

export default Download;
