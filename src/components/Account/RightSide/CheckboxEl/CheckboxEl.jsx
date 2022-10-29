import React, { useState } from "react";
import styles from "./checkboxEl.module.css";

const CheckboxEl = (props) => {

   const [isChecked, setisChecked] = useState(true);

   const onCheck = () => {
      setisChecked(!isChecked);
   }

   const CheckboxState = isChecked ? true : false;

   return (
      <div className={styles.checkbox__elements}>
         <input type="checkbox" onChange={onCheck} checked={CheckboxState} className={styles.page__checkbox} />
         <label className={styles.page__checkbox_label}>{props.info}</label>
      </div>
   )
}



export default CheckboxEl;