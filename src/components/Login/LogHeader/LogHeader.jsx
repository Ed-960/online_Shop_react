import React from "react";
import styles from "./logHeader.module.css";

const LogHeader = () => {
   return (
      <div className={styles.header}>
         <div className={styles.container}>
            <div className={styles.header__inner}>
               <div className={styles.logo}>
                  <h4 className={styles.header__logo_text_1}>
                     Food
                  </h4>
                  <h4 className={styles.header__logo_text_2}>
                     delivery
                  </h4>
               </div>
            </div>
         </div>
      </div>
   )
}


export default LogHeader;