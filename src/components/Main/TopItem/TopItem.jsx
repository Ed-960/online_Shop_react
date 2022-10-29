import React from "react";
import styles from "./topItem.module.css";


const TopItem = (props) => {
   return (
      <div className={styles.top__item}>
         <img alt='img' src={props.src} className={styles.top__item_img} />
         <div className={styles.top__item_info}>
            <div>
               <p className={styles.top__item_text_1}>
                  All deserts
               </p>
               <p className={styles.top__item_text_2}>
                  20% OFF
               </p>
               <p className={styles.top__item_text_3}>
                  Deserty
               </p>
            </div>
         </div>
      </div>
   )

}


export default TopItem;