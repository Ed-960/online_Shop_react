import React from "react";
import styles from "./food.module.css";

const Food = (props) => {
   return (
      <div className={styles.restaurants__foods}>
         <img alt='img' src={props.img} className={styles.restaurants__food_img} />
         <span className={styles.restaurants__food_name}>{props.inner}</span>
      </div>
   )
}
export default Food;