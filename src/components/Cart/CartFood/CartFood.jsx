import React from "react";
import styles from "./cartFood.module.css";


const CartFood = (props) => {
   const { cartFoods, setCartFoods, removeFoodCart, item, id } = props;

   const toMin = (id) => {
      setCartFoods(cartFoods.map((el) => {
         if (el.id === id && el.count > 1) {
            el.count -= 1;
            return el;
         } else {
            return el;
         }
      }));
   }

   const toPluse = (id) => {
      setCartFoods(cartFoods.map((el) => {
         if (el.id === id && el.count >= 1) {
            el.count += 1;
            return el;
         } else {
            return el;
         }
      }));
   }

   return (
      <div>
         <div className={styles.product__box}>
            <div className={styles.product__box_info}>
               <img className={styles.product__img} src={item.foodInfo.img} alt='img' />
               <div className={styles.product__info}>
                  <div className={styles.product__name}>{item.foodInfo.resName}</div>
                  <div className={styles.product__price}>Price: {item.foodInfo.price}$</div>
                  <div className={styles.product__remove_btn} onClick={function () { removeFoodCart(id) }}>Remove</div>
               </div>
            </div>
            <div className={styles.count}>
               <button className={styles.btn_min} onClick={() => { toMin(id) }}>-</button>
               <div className={styles.count__field}>{item.count}</div>
               <button className={styles.btn_pluse} onClick={() => { toPluse(id) }}>+</button>
            </div>
            <div className={styles.total_sum}>
               <div className={styles.sum__field}>{item.foodInfo.price * item.count}$</div>
            </div>
         </div>
         <div className={styles.divider_product}></div>
      </div>
   )
}

export default CartFood;