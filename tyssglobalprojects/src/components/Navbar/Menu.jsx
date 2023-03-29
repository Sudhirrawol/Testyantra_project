import React from "react";
import st from "./Menu.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Menu = () => {
  let Servise = () => {
    let ser = document.getElementById("serv");
    ser.style.display = "block";
  };
  let ServiseClear = () => {
    let ser = document.getElementById("serv");
    ser.style.display = "none";
  };
  let Product = () => {
    let ser = document.getElementById("Prod");
    ser.style.display = "block";
  };
  let ProductClear = () => {
    let ser = document.getElementById("Prod");
    ser.style.display = "none";
  };
  let Industries = () => {
    let ser = document.getElementById("inds");
    ser.style.display = "block";
  };
  let IndustriesClear = () => {
    let ser = document.getElementById("inds");
    ser.style.display = "none";
  };
  let About = () => {
    let ser = document.getElementById("abt");
    ser.style.display = "block";
  };
  let AboutClear = () => {
    let ser = document.getElementById("abt");
    ser.style.display = "none";
  };
  let Career = () => {
    let ser = document.getElementById("career");
    ser.style.display = "block";
  };
  let CareerClear = () => {
    let ser = document.getElementById("career");
    ser.style.display = "none";
  };
  return (
    <section className={st.container}>
      <article className={st.subcontainer}>
        <ul>
          <li className={st.home}>
            <Link to="/">Home</Link>
          </li>

          <li
            onMouseOver={Servise}
            onMouseOut={ServiseClear}
            className={st.service}
          >
            <a href="">Service</a>
          </li>
          <div
            id="serv"
            onMouseOver={Servise}
            onMouseOut={ServiseClear}
            className={st.servicesDisplay}
          >
            <aside>
              <div>
                <Link to="/SoftwareDevelopement"> SoftwareDevelopement</Link>
              </div>
              <div>
                <Link to="/SoftwareTesting"> SoftwareTesting</Link>
              </div>
              <div>
                <Link to="/ElevateItTraining"> ElevateItTraining</Link>
              </div>
              <div>
                <Link to="/ItConsultingManagedServices">
                  ItConsultingManagedServices
                </Link>
              </div>
            </aside>
          </div>
          <li
            onMouseOver={Product}
            onMouseOut={ProductClear}
            className={st.products}
          >
            <a href="">Products</a>
          </li>
          <div
            id="Prod"
            onMouseOver={Product}
            onMouseOut={ProductClear}
            className={st.productDisplay}
          >
            <aside>
              <div>
                <Link to="/SkillRary"> SkillRary</Link>
              </div>
            </aside>
          </div>
          <li
            onMouseOver={Industries}
            onMouseOut={IndustriesClear}
            className={st.industries}
          >
            <a href="">Industries</a>
          </li>
          <div
            id="inds"
            onMouseOver={Industries}
            onMouseOut={IndustriesClear}
            className={st.industriesDisplay}
          >
            <aside>
              <div>
                <Link to="/BankingFinance">BankingFinance</Link>
              </div>
              <div>
                <Link to="/Education">Education</Link>
              </div>
              <div>
                <Link to="/Healthcare">Healthcare</Link>
              </div>
              <div>
                <Link to="/Insurance">Insurance</Link>
              </div>
              <div>
                <Link to="/MediaEntertainment">MediaEntertainment</Link>
              </div>
              <div>
                <Link to="/RetaileCommerce">RetaileCommerce</Link>
              </div>
              <div>
                <Link to="/TechnologyComunications">
                  TechnologyComunications
                </Link>
              </div>
              <div>
                <Link to="/Travel">Travel</Link>
              </div>
            </aside>
          </div>
          <li className={st.blogs}>
            <a href="">Blogs</a>
          </li>
          <li onMouseOver={About} onMouseOut={AboutClear} className={st.about}>
            <a href="">About</a>
          </li>
          <div
            id="abt"
            onMouseOver={About}
            onMouseOut={AboutClear}
            className={st.aboutDisplay}
          >
            <aside>
              <div>
                <Link to="/About">About</Link>
              </div>
              <div>
                <Link to="/Article">Article</Link>
              </div>
              <div
                onMouseOver={Career}
                onMouseOut={CareerClear}
                className={st.career}
              >
                <Link>Careers</Link>
                <div
                  id="career"
                  onMouseOver={Career}
                  onMouseOut={CareerClear}
                  className={st.careerDisplay}
                >
                  <aside>
                    <div>
                      <Link to="/WorkWith">Work With</Link>
                    </div>
                    <div>
                      <Link to="/Life@TY">Life @ TY</Link>
                    </div>
                  </aside>
                </div>
              </div>

              <div>
                <Link to="/Contact">Contact</Link>
              </div>
              <div>
                <Link to="/OurPurposeMission">OurPurposeMission</Link>
              </div>
            </aside>
          </div>
          <li className={st.search}>
            <a href="">{<FaSearch />}</a>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Menu;
