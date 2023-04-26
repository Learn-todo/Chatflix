import React from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import Logo from "../../components/logo/ChatflixLogo";

const PageNotFound = () => {
  let navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  return (
    <section className={`${style._background_image}`}>
      <div className={`${style._logo}`}>
        <Logo />
      </div>
      <p className="text-btn-color my-4">404 Error</p>
      <h1 className={`text-arrow`}>Ooops, page not found...</h1>
      <p className={`${style._text} pb-3 text-menu-heading`}>
        Sorry, you were not to be here. The page you're looking for doesn't
        exist or has been moved.
      </p>
      <div
        className={`${style._links} my-4 d-flex justify-content-between align-items-center`}
      >
        <Link
          to="/"
          className={`text-arrow bg-btn-color py-2 px-4 text-center text-decoration-none display-block`}
        >
          Go home
        </Link>
        <button
          onClick={handlePrev}
          className={`text-btn-color bg-transparent border border-btn-color py-2 px-2 text-center display-block rounded`}
        >
          Take me back
        </button>
      </div>
    </section>
  );
};

export default PageNotFound;
