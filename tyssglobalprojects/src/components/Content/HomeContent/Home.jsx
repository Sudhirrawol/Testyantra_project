import React from "react";
import st from "./Home.module.css";
import backGround from "../assets/images/background_03.jpg";
import wave from '../assets/images/Wave_White_bottom_left_shape_01.png'

const Home = () => {
  return (
    <section className={st.container}>
      <article className={st.Subcontainer}>
        <figure>
          <img className={st.Backfigure} src={backGround} alt="" />
        </figure>
        <figure>
          <img className={st.wave} src={wave} alt="" />
        </figure>
        <div className={st.ParaText}>
          <aside className={st.UpParaText}>
            <p>Enabling the Digital</p>
          </aside>
          <aside className={st.MiddleParaText}>
            <p>Transformation</p>
          </aside>
          <aside className={st.DrowParaText}>
            <p>
              Test Yantra Global provides a range of innovative technology
              solutions to digitally transform your organization.
            </p>
          </aside>
        </div>
        <div className={st.bottomDiv}>
          hi
        </div>
      </article>
    </section>
  );
};

export default Home;
