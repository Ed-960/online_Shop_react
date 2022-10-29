import React from "react";
import styles from "./asideBox.module.css";


const AsideBox = (props) => {
   const onClickInner = () => {
      props.passState(props.info[0]);
   }

   return (
      <div className={styles.aside__items_box} onClick={onClickInner}>
         <img src={props.img} alt='img' className={styles.aside__items_box_img} />
         <div className={styles.aside__items_box_info1}>
            <p className={styles.aside__items_box_text_1}>{props.info[0]}</p>
            <p className={styles.aside__items_box_text_2}>{props.info[1]}</p>
         </div>
      </div>
   )
}

export default AsideBox;

