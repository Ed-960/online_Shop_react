import React from "react";
import styles from "./logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
   return (
      <div>
         <NavLink to="/Main" className={styles.logo}>
            <div>
               <h2 className={styles.header__logo_text_1}>
                  Food
               </h2>
               <h2 className={styles.header__logo_text_2}>
                  delivery
               </h2>
            </div>
         </NavLink>
      </div>
   )
}


export default Logo;