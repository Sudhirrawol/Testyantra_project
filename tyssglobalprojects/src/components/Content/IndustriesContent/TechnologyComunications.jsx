import React from "react";
import bgImg from "../assets/contentimages/technologyeducation.jpg";
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
const TechnologyComunications = () => {
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
              <p>INFORMATION,</p>
              <p>COMMUNICATION,</p>
              <p>TECHNOLOGY </p>
              <p>(ICT) </p>
            </div>
            <div className={st.BottomText}>
              <p>
                We provide super-fast, efficient and personalized IT services
              </p>
            </div>
          </aside>
        </div>
      </article>
    </section>
  );
};

export default TechnologyComunications;
