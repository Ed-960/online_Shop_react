import React from "react";
import styles from "./sortBlog.module.css";

const SortBlog = () => {
   return (
      <div className={styles.select__sort}>
         <form>
            <select className={styles.select__sort_select}>
               <option className={styles.select__sort_option}>Sort by: Newest first</option>
               <option className={styles.select__sort_option}>Sort by: Newest first</option>
               <option className={styles.select__sort_option}>Sort by: Newest first</option>
               <option className={styles.select__sort_option}>Sort by: Newest first</option>
            </select>
         </form>
      </div>
   )
}


export default SortBlog;