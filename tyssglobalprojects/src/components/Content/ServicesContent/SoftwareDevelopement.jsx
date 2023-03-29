import React from "react";
import bgImg from '../assets/contentimages/it-specialist-checking-code-computer-dark-office-night.jpg'
import blank from "../assets/contentimages/blank.gif";
import wave from "../assets/images/Wave_White_bottom_left_shape_01.png";
import st from "./Service.module.css";
const SoftwareDevelopement = () => {
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
              <p>SOFTWARE</p>
              <p>DEVELOPEMENT</p>
            </div>
            <div className={st.BottomText}>
              <p>
                Our team of Software Design and Development Engineers provide a
                variety of solutions that elevate your business to the next
                level.
              </p>
            </div>
          </aside>
        </div>
      </article>
    </section>
  );
};

export default SoftwareDevelopement;
