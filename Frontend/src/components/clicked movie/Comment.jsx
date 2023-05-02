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
                                             <img
                                             src={Img2}
                                             alt=""
                                             className={``}
                                        />
                                        </div>
                    <div className={`position-relative w-100 ms-4`}>
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
                    {
                         CommentData.map(comment => {
                              return <div key={comment.id}>
                                   <div className={`d-flex align-items-start mb-4`}>
                                        <div className={`${style._comment_profile_avatar} mt-3`}>
                                             <img
                                             src={comment.img}
                                             alt=""
                                             className={``}
                                        />
                                        </div>
                                        
                                        <div className={`ms-4`}>
                                             <div className={`d-flex align-items-center`}>
                                                  <p className={`fw-medium fs-6 text-signin mb-0`}>{comment.name}</p>
                                                  <p className={`ms-2 mb-2 fw-bold fs-1 text-text-color`}>.</p>
                                                  <p className={`fs-6 ms-2 mb-0 text-text-color`}>{comment.time}</p>
                                             </div>
                                             <div className={`mb-2`}>
                                                  <p className={`text-arrow fs-6 fw-lighter`}>{comment.comment}</p>
                                             </div>
                                             <div className={`d-flex align-items-center`}>
                                                  <span className={`fs-6 text-text-color`}>{comment.likes} Likes</span>
                                                  <span className={`fs-6 text-text-color ms-2`}>{comment.reply} Reply</span>
                                                  <span className={`fs-6 text-text-color ms-2`}>Share</span>
                                             </div>
                                             
                                        </div>
                                   </div>
                              </div>
                         })
                    }
               </div>
                      
          </div>
          </section>
     )
}

export default Comments;