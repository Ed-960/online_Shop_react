import React from "react";
import styles from "./form.module.css";
import search from "../../../images/search.svg";

const Form = () => {
   return (
      <form className={styles.header__form}>
         <input placeholder="Search" className={styles.header__input} type="text" />
         <img alt='img' className={styles.header__btn_img} src={search} />
      </form >
   )

}









export default Form;