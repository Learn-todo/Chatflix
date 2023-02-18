import React from "react";
import { Image } from "cloudinary-react";
import Gloria from "./img/Gloria.jpg";
import { CgChevronLeftR } from "react-icons/cg";
import { HiOutlineSparkles } from "react-icons/hi";
import { FiFilm } from "react-icons/fi";
import { MdHomeFilled } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { TbActivity } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { BsGear } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsBoxArrowInDown } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsBoxArrowLeft } from "react-icons/bs";
import style from "./style.module.css";
import { useState } from "react";

const Dashboard = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prevState) => {
      return !prevState;
    });
  };
  return (
    <main className={`${style._main} bg-backgroundTwo text-white p-0 m-0`}>
      <div className={`${style._grid_container} row w-100 m-0`}>
        <div
          className={
            toggle
              ? `${style._sidebar} p-0 ps-2 bg-backgroundTwo col-4 col-md-2 position-relative`
              : `${style._sidebar} p-0 ps-2 bg-backgroundTwo col-2 col-md-1 position-relative`
          }
        >
          <div className="d-flex flex-column h-100">
          <div className="pe-2 d-flex justify-content-between align-items-center py-4 mb-5">
            {toggle ? (
              <Image
                className={`w-75`}
                cloudName="dfsclcxhm"
                publicId="Chatflix/Chatflix_Logo_glf2wf"
              />
            ) : (
              <Image
                className={`w-25`}
                cloudName="dfsclcxhm"
                publicId="Chatflix/Chatflix_Logo_1_owuywp.png"
              />
            )}
            <CgChevronLeftR
              className={`${style._toggle}`}
              onClick={handleClick}
            />
          </div>
          <div className={`${style._menu_list}`}>
            <small className={`${style._menu_heading}`}>Menu</small>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <MdHomeFilled className={`${style._menu_icons}`} />
              <a href=".">Home</a>
            </div>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <BsUiChecksGrid className={`${style._menu_icons}`} />
              <a href=".">Categories</a>
            </div>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <BiMoviePlay className={`${style._menu_icons}`} />
              <a href=".">Upcoming Movies</a>
            </div>
            <div
              className={`${
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              } mb-3`}
            >
              <BsClock className={`${style._menu_icons}`} />
              <a href=".">Watch History</a>
            </div>
          </div>
          <div className={`${style._menu_list}`}>
            <small className={`${style._menu_heading}`}>Social</small>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <IoChatbubblesOutline className={`${style._menu_icons}`} />
              <a href=".">Chat</a>
            </div>
            <div
              className={`${
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              } mb-3`}
            >
              <HiOutlineUsers className={`${style._menu_icons}`} />
              <a href=".">Community</a>
            </div>
          </div>
          <div className={`${style._menu_list}`}>
            <small className={`${style._menu_heading}`}>Library</small>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <TbActivity className={`${style._menu_icons}`} />
              <a href=".">Activity</a>
            </div>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <HiOutlineSparkles className={`${style._menu_icons}`} />
              <a href=".">Top Rated</a>
            </div>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <FiFilm className={`${style._menu_icons}`} />
              <a href=".">Watchlist</a>
            </div>
            <div
              className={`${
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              } mb-3`}
            >
              <BsBoxArrowInDown className={`${style._menu_icons}`} />
              <a href=".">Downloads</a>
            </div>
          </div>
          <div className={`${style._menu_list}`}>
            <small className={`${style._menu_heading}`}>General</small>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <CiUser className={`${style._menu_icons}`} />
              <a href=".">Profile</a>
            </div>
            <div
              className={`${
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              } mb-3`}
            >
              <BsGear className={`${style._menu_icons}`} />
              <a href=".">Settings</a>
            </div>
          </div>
          <div className={`${style._menu_list} ${style._logout}`}>
            <div
              className={
                toggle
                  ? `${style._active} ${style._menu_list_show} d-flex justify-center align-items-center`
                  : `${style._active}`
              }
            >
              <BsBoxArrowLeft className={`${style._menu_icons}`} />
              <a href=".">Logout</a>
            </div>
          </div>
          </div>
        </div>
        <div
          className={
            toggle
              ? `col-8 col-md-10 p-0 border-0 bg-backgroundTwo`
              : `col-10 col-md-11 p-0 border-0 bg-backgroundTwo`
          }
        >
          <div
            className={`${style._search} p-2 py-3 border-bottom border-menu-heading d-flex justify-content-between align-items-center`}
          >
            <div className={`${style._input_container} position-relative w-75`}>
              <input
                className={`text-input-text px-4 py-2 w-100 bg-input border-0`}
                type="text"
                placeholder="Search for friends and movies..."
              />
              <BsSearch
                className={`text-input-text position-absolute text-menu-heading`}
              />
            </div>
            <div
              className={`${style._profile} d-flex justify-content-between align-items-center `}
            >
              <div
                className={`bg-input rounded-circle d-flex justify-content-center align-items-center`}
              >
                <BsBell />
              </div>
              <div
                className={`bg-input rounded-circle d-flex w- justify-content-center align-items-center`}
              >
                <img
                  src={Gloria}
                  alt=""
                  className="overflow-hidden object-fit-contain rounded-circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
