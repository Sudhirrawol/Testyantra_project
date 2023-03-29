import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import st from './Navbar.module.css'
const Navbar = () => {
    return (
      <section className={st.cointainer}>
        <article className={st.subcontainer}>
          <div className={st.left}>
            <Logo />
          </div>
          <div className={st.right}>
            <Menu />
          </div>
        </article>
      </section>
    );
};

export default Navbar;
