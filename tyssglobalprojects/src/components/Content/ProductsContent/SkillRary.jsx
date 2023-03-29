import React from "react";
import bgImg from "../assets/contentimages/BF_portfolio_01 lap with hand.jpeg";
import blank from "../assets/contentimages/blank.gif";
import st from "./Service.module.css";
const SkillRary = () => {
   return (
     <section>
       <article>
         <div>
           <figure>
             <img className={st.backGroundImg} src={bgImg} alt="" />
           </figure>
           <figure>
             <img className={st.blankImg} src={blank} alt="" />
           </figure>
           <aside className={st.TextCon}>
             <div className={st.TopText}>
               <p>SkillRary</p>
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

export default SkillRary;
