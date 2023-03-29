import React from "react";
import bgImg from "../assets/contentimages/happy-young-asia-businessmen-businesswoman-meeting-brainstorming-some-new-ideas-about-project.jpg";
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
const About = () => {
  return (
    <section>
      <article>
        <div>
          <figure>
            <img className={st.backGroundImg} src={bgImg} alt="" />
          </figure>
          <figure>
            <img className={st.wave} src={wave} alt="" />
          </figure>
          <figure>
            <img className={st.blankImg} src={blank} alt="" />
          </figure>
          <aside className={st.TextCon}>
            <div className={st.TopText}>
              <p>ABOUT</p>
              <p>DEVELOPEMENT</p>
            </div>
            <div className={st.BottomText}>
              <p>
                We offer unique IT solutions to digitally transform your company
              </p>
            </div>
          </aside>
        </div>
      </article>
    </section>
  );
};

export default About;
