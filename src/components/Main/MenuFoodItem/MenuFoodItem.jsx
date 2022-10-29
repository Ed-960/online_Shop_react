import React, { useEffect, useState } from "react";
import styles from "./menuFoodItem.module.css";

const MenuFoodItem = (props) => {

   const { name, img, getNameFood, showState } = props;
   const [isHover, setisHover] = useState(false);
   const onClick = () => {
      setisHover((prev) => !prev);
   }
   const classname = isHover ? styles.menu__food_item_active : styles.menu__food_item;

   useEffect(() => {
      if (!showState) {
         setisHover(false);
      }
   }, [showState])


   return (
      <div onClick={function () { getNameFood(name) }}
         className={classname} >
         <img onClick={onClick} src={img} alt='img' className={styles.menu__food_img} />
         <p className={styles.menu__food_text}>
            {name}
         </p>
      </div >
   )
}

export default MenuFoodItem;