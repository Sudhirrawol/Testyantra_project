import React from "react";
import logoImg from "./logo/images/TY_logo_color_70px.png";
import st from './Logo.module.css'
const Logo = () => {
    return (
      <section className={st.container}>
        <article className={st.subcontainer}>
          <figure>
            <img height={"70px"} width={"240px"} src={logoImg} alt="" />
          </figure>
        </article>
      </section>
    );
};

export default Logo;
