import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Logo from "../../components/logo/ChatflixLogo";

const PageNotFound = () => {
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
        <Link
          to="/"
          className={`text-btn-color border border-btn-color py-2 px-2 text-center text-decoration-none display-block`}
        >
          Take me back
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;
