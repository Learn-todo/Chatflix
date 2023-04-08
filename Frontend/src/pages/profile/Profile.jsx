import React from "react";
import profileStyle from "./Profile.module.css";
import Image from "./assets/img.svg";
import Post from "./assets/post.svg";
import Saved from "./assets/saved.svg";
import Rate from "./assets/rate.svg";
import Tag from "./assets/tag.svg";

export default function Profile() {
  return (
    // <section className={`${profileStyle.body}`}>
    <section className={`${profileStyle.body}`}>
      <section className={`${profileStyle.main}`}>
        <section className={`${profileStyle.firstSection}`}>
          <img className="" src={Image} alt={Image} />
          <button className={`${profileStyle.profileBtn}`} data-toggle="modal" data-target="#exampleModalLong" type="button">Edit profile</button>

          
            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  {/* <div class="modal-body">
                    ...
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div> */}
                </div>
              </div>
            </div>
          
        </section>
        <section className={`${profileStyle.secondSection}`}>
          <div className={`${profileStyle.sectionTwo}`}>
            <h3>Phily John</h3>
            <span>Jay_phily</span>
            <p>Avid and eclectic movie watcher. DM me let me wow you.</p>
          </div>
          <div className={`${profileStyle.subSectionTwo}`}>
            <div className={`${profileStyle.subSectionTwoDiv}`}>
              <span className="text-#E4E7EB">2</span>
              <p className="font-weight-bolder text-#E4E7EB"> Posts</p>
            </div>
            <div className={`${profileStyle.subSectionTwoDiv}`}>
              <span className="text-#E4E7EB">108</span>
              <p> Following</p>
            </div>
            <div className={`${profileStyle.subSectionTwoDiv}`}>
              <span className="text-#E4E7EB">2089</span>
              <p> Followers</p>
            </div>
          </div>
        </section>
        <section className={`${profileStyle.sectionThree}`}>
          <div className={`${profileStyle.sectionThreeDiv}`}>
            <img src={Post} alt={Image} />
            <p> Posts</p>
          </div>
          <div className={`${profileStyle.sectionThreeDiv}`}>
            <img src={Saved} alt={Image} />
            <p>Saved</p>
          </div>
          <div className={`${profileStyle.sectionThreeDiv}`}>
            <img src={Rate} alt={Image} />
            <p>Rated Movies</p>
          </div>

          <div className={`${profileStyle.sectionThreeDiv}`}>
            <img src={Tag} alt={Image} />
            <p>Tagged</p>
          </div>
        </section>

        <section className={`${profileStyle.sectionFour}`}>
          <div className={`${profileStyle.card}`}></div>
          <div className={`${profileStyle.card}`}></div>
          <div className={`${profileStyle.card}`}></div>
          <div className={`${profileStyle.card}`}></div>
          {/* <div className={`${profileStyle.card}`}></div> */}
        </section>
      </section>

      {/* </section> */}
    </section>
  );
}
