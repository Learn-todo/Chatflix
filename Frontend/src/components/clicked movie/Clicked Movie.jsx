import React, { useContext, useState } from "react";
import { ToggleContext } from "../../App";
import Img1 from "./img/Inception.png";
import style from "./style.module.css";
import { BsHeart, BsHeartFill, BsBookmark, BsBookmarkFill, BsShare, BsStar, BsStarFill, BsPlayFill } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import MovieSuggestions from "../home/MovieSuggestions";
import Comment from "./Comment";

const ClickedMovie = () => {
  const toggle = useContext(ToggleContext);
  const [likes, setLikes] = useState(false);
  const [save, setSave] = useState(false);
  const [rating, setRating] = useState([]);
  
  const handleRating = (e) => {
    if (rating.includes(e)) {
      setRating(rating.filter(id => id !== e))
    } else {
      setRating([...rating, e])
    }
  }

  return (
    <section
      className={`${style._main} bg-dark pb-0 ${
        toggle ? `${style._main_resize}` : `${style._main}`
      }`}
    >
      <div className={`bg-backgroundTwo rounded p-3 p-md-4`}>
        <div>
          <div className={`mb-4 position-relative`}>
            <img src={Img1} alt="" className={`w-100 h-100`} />
            <div
              className={`${style._play_btn} position-absolute top-50 start-50 translate-middle bg-btn-color d-flex justify-content-center align-items-center`}
            >
              <BsPlayFill className={`text-arrow w-100`} />
            </div>
          </div>
          <div
            className={`d-md-flex justify-content-between align-items-center`}
            id="1"
          >
            <div
              className={`${style._icon_text} ${style._icon_div} d-flex justify-content-between align-items-center text-arrow mb-3 mb-md-0`}
            >
              <div className={`d-flex align-items-center`} onClick={() => setLikes(prevLike => !prevLike)}>
                {likes ? <BsHeartFill
                          className={`${style._header_icons} text-reaction`}/> : 
                          <BsHeart
                          className={`${style._header_icons} text-arrow`}/>
                }
                <div className={`${style._icon_text} text-arrow ms-1 ms-md-2`}>
                  Like
                </div>
              </div>
              <div className={`d-flex align-items-center`} onClick={() => setSave(prevSave => !prevSave)}>
                {save ? <BsBookmarkFill className={`${style._header_icons} text-btn-color`} /> : 
                          <BsBookmark className={`${style._header_icons} text-arrow`}/>
                }
                <div className={`${style._icon_text} text-arrow ms-1 ms-md-2`}>
                  Save
                </div>
              </div>
              <div className={`d-flex align-items-center`}>
                <BsShare />
                <div className={`${style._icon_text} text-arrow ms-1 ms-md-2`}>
                  Share
                </div>
              </div>
              <div className={`d-flex align-items-center`}>
                <FiDownload />
                <div className={`${style._icon_text} text-arrow ms-1 ms-md-2`}>
                  Download
                </div>
              </div>
            </div>
            <div
              className={`${style._icon_text} ${style._rating_icon} d-flex align-items-center justify-content-between ${rating? `text-chat` : `text-arrow`}`}
               onClick={(id) => handleRating(id)}
            >
              {rating ? <div className={`w-100 d-flex align-items-center justify-content-between`}>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div> : <div className={`w-100 d-flex align-items-center justify-content-between`}>
                <BsStar/>
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
              </div>}
              <div className={`${style._icon_text} text-arrow ms-2`}>Rate</div>
            </div>
          </div>
          <div
            className={`my-3 border border-bottom border-header-border`}
          ></div>

          <div
            className={`mb-4 d-md-flex justify-content-between align-items-start my-4`}
          >
            <div className={`${style._img_container}`}>
              <img src={Img1} alt="" className={``} />
            </div>
            <div className={`w-md-25 ms-md-4`}>
              <div className={`my-3 d-flex align-items-center my-md-0 mb-md-3`}>
                <h1 className={`fs-3 fw-bold text-arrow mb-0`}>
                  Django Unchained
                </h1>
                <div
                  className={`${style._movie_title} ms-2 bg-chat d-flex justify-content-center align-items-center`}
                >
                  <p
                    className={`${style._icon_text} mb-0 fw-semibold text-black`}
                  >
                    HD
                  </p>
                </div>
              </div>
              <div className={`d-flex align-items-center my-2 mb-3`}>
                <div
                  className={`border border-arrow rounded-pill bg-transparent text-arrow p-2 px-3 px-md-4 text-center`}
                >
                  Drama
                </div>
                <div
                  className={`border border-arrow rounded-pill bg-transparent text-arrow p-2 px-3 px-md-4 text-center ms-2 ms-md-4`}
                >
                  Western
                </div>
              </div>
              <div className={`d-flex align-items-center my-2`}>
                <BsStar className={`text-text-color fs-3`} />
                <p className={` text-text-color ms-3 mb-2`}>
                  8.4/10 &nbsp;<span className={`fs-1 fw-bold`}>.</span>&nbsp;
                  1.5M
                </p>
                <p className={` text-text-color ms-3 mb-2`}>
                  165 min &nbsp;<span className={`fs-1 fw-bold`}>.</span>&nbsp;
                  R
                </p>
              </div>
              <div className={`my-4`}>
                <p className={`text-faq fs-5 fw-light`}>
                  Two years before the civil war pits brother against brother,
                  German-born bounty-hunter Dr King Schultz (Academy
                  Award-winnier Christoph Waltz) arrives in America determined
                  to capture the outlaw Brittle brothers dead or alive. In the
                  midst of his search, Dr. Schultz crosses path...{" "}
                  <span>
                    <a href="#." className={`text-btn-color fs-6`}>
                      More
                    </a>
                  </span>
                </p>
              </div>
              <div>
                <div className={`d-flex align-items-center mb-3`}>
                  <span
                    className={`text-clicked-movie-heading fw-medium fs-5 mb-0`}
                  >
                    Country:
                  </span>
                  <span className={`text-text-color ms-2 ms-md-4 mb-0`}>
                    United States
                  </span>
                </div>
                <div className={`d-flex align-items-center mb-3`}>
                  <span
                    className={`text-clicked-movie-heading fw-medium fs-5 mb-0`}
                  >
                    Release:
                  </span>
                  <span className={`text-text-color ms-2 ms-md-4 mb-0`}>
                    2012-12-25
                  </span>
                </div>
                <div className={`d-flex align-items-center mb-3`}>
                  <span
                    className={`text-clicked-movie-heading fw-medium fs-5 mb-0`}
                  >
                    Director:
                  </span>
                  <span className={`text-text-color ms-2 ms-md-4 mb-0`}>
                    Quentin Tarantino
                  </span>
                </div>
                <div className={`d-flex align-items-center mb-3`}>
                  <span
                    className={`text-clicked-movie-heading fw-medium fs-5 mb-0`}
                  >
                    Production:
                  </span>
                  <span className={`text-text-color ms-2 ms-md-4 mb-0`}>
                    Columbia Pictures
                  </span>
                </div>
                <div className={`d-flex align-items-center mb-3`}>
                  <span
                    className={`text-clicked-movie-heading fw-medium fs-5 mb-0`}
                  >
                    Cast:
                  </span>
                  <span className={`text-text-color ms-2 ms-md-4 mb-0`}>
                    Jamie Foxx, Christoph...{" "}
                    <span>
                      <a href="#." className={`text-btn-color`}>
                        More
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`my-5 border border-bottom border-header-border`}
          ></div>
          <Comment />
        </div>
        <MovieSuggestions />
      </div>
    </section>
  );
};

export default ClickedMovie;
