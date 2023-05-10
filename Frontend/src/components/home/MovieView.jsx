import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToggleContext } from "../../App";
import style from "./style.module.css";
import { BsHeartFill, BsHeart, BsMic, BsPaperclip, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiSendPlaneLine } from "react-icons/ri";
import { MdOutlineShare } from "react-icons/md";
import Img from "./images/gatsby.png";
import Movies from "./Movies";
import MovieSuggestions from "./MovieSuggestions";
// import { Image } from "cloudinary-react";
// import { IoStarOutline } from "react-icons/io5";
// import Comments from "./comments/Comments";

const MovieView = ({ movieName, genre }) => {
  const toggle = useContext(ToggleContext);
  const navigate = useNavigate();
  const [likes, setLikes] = useState([]);
  const [bookmarks, setBookmarks] = useState([])

  const handleLike = (movie) => {
    if (likes.includes(movie)){
      setLikes(likes.filter(id => id !== movie))
    } else {
      setLikes([...likes, movie]);
    }
  }

  const handleBookmark = (movie) => {
    if (bookmarks.includes(movie)){
      setBookmarks(bookmarks.filter(id => id !== movie))
    } else {
      setBookmarks([...bookmarks, movie]);
    }
  }

  const handleClickedMovie = () => {
    navigate("/dashboard/clicked-movie")
  }


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
          {Movies.map(movie => {
            return (
              <div 
                key={movie.id}
                id={movie.id}
                className={`col-md-6`}
              >
                <div
                  className={`px-lg-3 pt-lg-3`}>
                  <img
                    src={movie.url}
                    alt=""
                    className={`${style._card} w-100 h-100`}
                    onClick={handleClickedMovie}
                  />
                  <div className={`${style._header_card} p-3 mb-3`}>
                    <div
                      className={`d-flex justify-content-between align-items-center mb-3`}
                    >
                      <div
                        className={`${style._icon_div} text-arrow d-flex justify-content-between align-items-center`}
                      >
                        {likes.includes(movie.id) ? <BsHeartFill
                          id={movie.id}
                          className={`${style._header_icons} text-reaction`}
                          onClick={() => handleLike(movie.id)} 
                          /> : 
                          <BsHeart
                          id={movie.id}
                          className={`${style._header_icons} text-arrow`}
                          onClick={() => handleLike(movie.id)} 
                          />
                        }
                        
                        <RiSendPlaneLine className={`${style._header_icons}`} />

                        {bookmarks.includes(movie.id) ? <BsBookmarkFill
                          id={movie.id}
                          className={`${style._header_icons} text-btn-color`}
                          onClick={() => handleBookmark(movie.id)} 
                          /> : 
                          <BsBookmark
                          id={movie.id}
                          className={`${style._header_icons} text-arrow`}
                          onClick={() => handleBookmark(movie.id)} 
                          />
                          }
                        <MdOutlineShare className={`${style._header_icons}`} />
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
                          <BsHeart
                          id={movie.id}
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
