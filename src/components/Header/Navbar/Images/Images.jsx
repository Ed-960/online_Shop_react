import React, { useState } from "react";
import styles from "./images.module.css";
import cart from "../../../../images/added.svg";
import divider from "../../../../images/media__img/divider.svg";
import mini from "../../../../images/media__img/mini__btn.svg";
import { NavLink } from "react-router-dom";
import { RiDeleteBin6Line } from 'react-icons/ri';

const Images = (props) => {
   const { cartFoods, removeFoodCart, selectedImage } = props;
   const [bagOpen, setBagOpen] = useState(false);

   return (
      <div className={styles.header__menu_images}>
         <img onClick={() => { setBagOpen(prev => !prev) }} src={cart} alt='img' className={styles.cart} />
         {bagOpen && (
            <div className={styles.bagPopup}>
               {cartFoods.length > 0 ? cartFoods.map((item, i) => (
                  <div key={i} className={styles.product__info_popup}>
                     <img className={styles.product__img_popup} src={item.foodInfo.img} alt='img' />
                     <div className={styles.product__div}>
                        <div className={styles.product__name_popup}>{item.foodInfo.resName}</div>
                        <div className={styles.product__price_popup}>Price: {item.foodInfo.price}$</div>
                        <div className={styles.cart_divider}></div>
                     </div>
                     <div onClick={() => { removeFoodCart(item.id) }} className={styles.cart_food_remove}><RiDeleteBin6Line className={styles.cart_food_remove} /></div>
                  </div>
               )) : 'The Cart is empty'}
            </div>
         )}
         <div className={styles.badge}><p className={styles.badgeText_style}>{cartFoods.length > 0 && cartFoods.length}</p></div>
         <NavLink to="/Account"><img alt='img' src={selectedImage} className={styles.avatarka} /></NavLink>
         <img src={divider} alt='img' className={styles.divider} />
         <img src={mini} alt='img' className={styles.mini__menu} />
      </div>
   )
};


export default Images;