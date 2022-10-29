import React from "react";
import styles from "./adress.module.css";

const Adress = () => {
   return (
      <div className={styles.adresses}>
         <p>Adresses</p>
         <div className={styles.adress}>
            <p>Adress 1</p>
            <p>Adress 2</p>
            <p>Adress 3</p>
         </div>
      </div>
   )
}

export default Adress;