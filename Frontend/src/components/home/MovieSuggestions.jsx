import React from "react";
import MovieData from "./Movies";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const MovieSuggestions = () => {
  const responsiveSettings = [
    {
      breakpoint: 914,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },

    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ];

  return (
    <section className="mt-4">
      <h3 className={`text-arrow fs-2 fw-bold text-start`}>
        You May also Like
      </h3>
      <div className={`mt-4`}>
        <Slide responsive={responsiveSettings} autoplay={true} arrows={false}>
          {MovieData.map((movie) => {
            return (
              <div className={`mb-4 mx-md-2`} key={movie.id}>
                <div className={`mb-3`}>
                  <img src={movie.url} alt="" className={`w-100 `} />
                </div>
                <div className={`m-0`}>
                  <a
                    href="#."
                    className={`text-arrow fw-semibold fs-4 mb-0 text-decoration-none`}
                  >
                    {movie.title}
                  </a>
                  <p className={`fs-6 text-cancel mb-2`}>
                    {movie.year} &nbsp; <span className={`fw-b fs-1`}>.</span>{" "}
                    &nbsp; {movie.duration}
                  </p>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </section>
  );
};

export default MovieSuggestions;
