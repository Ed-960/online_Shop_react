import React from "react";
import styles from "./aside.module.css";
import AsideBox from "./AsideBox/AsideBox";


const Aside = (props) => {

   return (
      <aside className={styles.aside}>
         <h5 className={styles.aside__head}>Settings</h5>
         <div className={styles.aside__items}>
            {props.accountAsideBoxInfo.map(item => <AsideBox
               passState={props.passState}
               key={item.id}
               img={item.img}
               info={item.info}
            />)}
         </div>
      </aside>
   )
}

export default Aside;