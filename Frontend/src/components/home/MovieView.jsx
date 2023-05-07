import React, { useContext, useState } from "react";
import { ToggleContext } from "../../App";
import style from "./style.module.css";
import { BsHeartFill, BsMic, BsPaperclip } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";
import { BsShare } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import Img from "./images/gatsby.png";
import Movies from "./Movies";
import MovieSuggestions from "./MovieSuggestions";
// import { Image } from "cloudinary-react";
// import { IoStarOutline } from "react-icons/io5";
// import Comments from "./comments/Comments";

const MovieView = ({ movieName, genre }) => {
  const toggle = useContext(ToggleContext);
  const [likes, setLikes] = useState(false);


  // const stars = Array(5).fill(0);

  // const [currenRating, setCurrentRating] = useState(0);
  // const [hoverValue, setHoverValue] = useState(undefined);

  // const colors = {
  // 	orange: "#ffba5a",
  // 	grey: "#a9a9a9",
  // };

  // const handleClick = (value) => {
  // 	setCurrentRating(value);
  // };

  // const handloeMouseOver = (value) => {
  // 	setHoverValue(value);
  // };

  // const handleMouseLeave = () => {
  // 	setHoverValue(undefined);
  // };

  return (
    <section
      className={`${style._main} bg-dark pb-0 ${
        toggle ? `${style._main_resize}` : `${style._main}`
      }`}
    >
      <div className={`mx-2 mt-2 bg-backgroundTwo rounded p-3`}>
        <div className={`row`}>
          {Movies.map((movie, index) => {
            return (
              <div 
                key={movie.id}
                id={movie.id}
                className={`col-md-6`}
              >
                <div className={`px-lg-3 pt-lg-3`}>
                  <img src={movie.url} alt="" className={`w-100 h-100`} />
                  <div className={`${style._header_card} p-3 mb-3`}>
                    <div
                      className={`d-flex justify-content-between align-items-center mb-3`}
                    >
                      <div
                        className={`${style._icon_div} text-arrow d-flex justify-content-between align-items-center`}
                      >
                        <BsHeartFill
                          id={movie.id}
                          className={`${style._header_icons} ${likes ? `text-reaction ` : `text-arrow`}`}
                          onClick={(e) => e.currentTarget.id.includes(e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.id) ? setLikes(prevLike => !prevLike) : setLikes(false)} 
                          />
                        <BsShare className={`${style._header_icons}`} />
                        <CiSaveDown2 className={`${style._header_icons}`} />
                        <FiDownload className={`${style._header_icons}`} />
                      </div>
                      <div
                        className={`d-none ms-3 d-md-flex justify-content-end align-items-center w-75`}
                      >
                        <button
                          className={`${style._download_btn} bg-btn-color btn btn-primary rounded text-center text-arrow mb-2 mb-md-0`}
                        >
                          Stream
                        </button>
                        <button
                          className={`${style._download_btn} btn btn-outline-primary ms-md-3`}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                    <div className={`mb-3`}>
                      <div
                        className={`${style._img_container} position-relative d-flex justify-content-start align-items-center mb-3`}
                      >
                        <div className={``}>
                          <img
                            src={Img}
                            alt=""
                            className={`${style._profile_avatar} position-absolute top-0 left-0`}
                          />
                          <img
                            src={movie.url}
                            alt=""
                            className={`${style._profile_avatar} ${style._profile_avatar2} position-absolute top-0`}
                          />
                          <img
                            src={Img}
                            alt=""
                            className={`${style._profile_avatar} ${style._profile_avatar3} position-absolute top-0`}
                          />
                        </div>
                        <div>
                          <p
                            className={`${style._header_text_size} ${style._header_text_size_comment} text-comments mb-0`}
                          >
                            Liked by
                            <span className={`fw-semibold text-comments`}>
                              &nbsp; Desin_guy
                            </span>{" "}
                            and &nbsp;
                            <span className={`fw-semibold text-comments`}>
                              152 others
                            </span>
                          </p>
                        </div>
                      </div>
                      <p
                        className={`${style._header_text_size} text-comments mb-1`}
                      >
                        View all 76 comments
                      </p>
                      <div
                        className={`d-flex justify-content-between align-items-center`}
                      >
                        <p
                          className={`${style._header_text_size} text-comments mb-1`}
                        >
                          {" "}
                          <span className={`fw-semibold text-comments`}>
                            Toluwa &nbsp;
                          </span>
                          Dope movie. Ya'll should...
                        </p>
                        <BsHeartFill
                          className={`${style._header_icons} text-arrow`}
                        />
                      </div>
                      <p
                        className={`${style._header_text_size} text-comments mb-1`}
                      >
                        3 hours ago
                      </p>
                    </div>

                    <div className={`d-md-none`}>
                      <button
                        className={`${style._download_btn} d-block bg-btn-color btn btn-primary rounded text-center text-arrow mb-3`}
                      >
                        Stream
                      </button>
                      <button
                        className={`${style._download_btn} btn btn-outline-primary`}
                      >
                        Download
                      </button>
                    </div>
                    <div
                      className={`my-4 border border-bottom border-header-border `}
                    ></div>
                    <div className={`d-flex  align-items-center mb-4`}>
                      <div>
                        <img
                          src={Img}
                          alt=""
                          className={`${style._profile_avatar}`}
                        />
                      </div>
                      <div className={`position-relative w-100 ms-4`}>
                        <input
                          type="text"
                          placeholder="Write your comments"
                          name=""
                          id=""
                          className={`${style._input} bg-input p-2 border-0 rounded text-cancel w-100`}
                        />
                        <BsPaperclip
                          className={`${style._input_icon} ${style._header_icons} text-arrow position-absolute`}
                        />
                        <BsMic
                          className={`${style._input_icon2} ${style._header_icons} text-arrow position-absolute`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <MovieSuggestions />
      </div>
    </section>
  );
};

export default MovieView;
