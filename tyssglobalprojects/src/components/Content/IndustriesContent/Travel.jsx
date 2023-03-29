import React from "react";
import bgImg from "../assets/contentimages/industry_travel.jpg";
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
const Travel = () => {
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
              <p>TRAVEL</p>
              <p>TOURISM</p>
            </div>
            <div className={st.BottomText}>
              <p>
                We transform browsers into regular travellers with our range of
                technological solutions
              </p>
            </div>
          </aside>
        </div>
      </article>
    </section>
  );
};

export default Travel;
