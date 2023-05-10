import React from "react";
import CommentData from "./commentData";
import style from "./style.module.css";
import Img2 from "./img/wolf.png";

const Comments = () => {
  return (
    <section className={`${style._comments}`}>
      <div className={`my-4`}>
        <div className={`d-flex align-items-center`}>
          <div className={`${style._comment_profile_avatar}`}>
            <img src={Img2} alt="" className={``} />
          </div>
          <div className={`position-relative w-100 ms-2 ms-md-4`}>
            <input
              type="text"
              placeholder="Join the discussion"
              name=""
              id=""
              className={`${style._input} bg-input p-2 border-0 rounded text-cancel w-100`}
            />
          </div>
        </div>
        <div className={`my-4`}>
          {CommentData.map((comment) => {
            return (
              <div key={comment.id}>
                <div className={`d-flex align-items-start mb-4`}>
                  <div className={`${style._comment_profile_avatar}`}>
                    <img src={comment.img} alt="" className={``} />
                  </div>

                  <div className={`ms-2 ms-md-4`}>
                    <div className={`${style._username} d-flex align-items-center mb-2`}>
                      <p className={`fw-medium text-signin mb-0`}>
                        {comment.name}
                      </p>
                      <p className={`ms-2 mb-0 fw-bold text-text-color`}>
                        .
                      </p>
                      <p className={`ms-2 mb-0 text-text-color`}>
                        {comment.time}
                      </p>
                    </div>
                    <div className={`mb-2`}>
                      <p className={`text-arrow fs-6 fw-light`}>
                        {comment.comment}
                      </p>
                    </div>
                    <div className={`${style._comments_action} d-flex align-items-center`}>
                      <span className={`text-text-color fw-light`}>
                        {comment.likes} Likes
                      </span>
                      <span className={`text-text-color ms-2 fw-light`}>
                        {comment.reply} Reply
                      </span>
                      <span className={`text-text-color ms-2 fw-light`}>Share</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Comments;
