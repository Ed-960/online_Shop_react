import React from "react";
import styles from "./cart.module.css";
import CartFood from './CartFood/CartFood';

const Cart = (props) => {
   const { cartFoods, setCartFoods, removeFoodCart } = props;
   let price = 0;
   if (cartFoods.length === 0) {
      price = 0;
   } else {
      price = cartFoods.reduce((aggr, val) => {
         return aggr + val.foodInfo.price * val.count;
      }, 0)
   }
   let tax = Math.round(price * 0.1);
   let total = price + tax;

   // console.log('id', props.cartFoods.id, props.cartFoods);
   const createCartfood = () => {
      return cartFoods.map((item, i) => <CartFood setCartFoods={setCartFoods} cartFoods={cartFoods} removeFoodCart={removeFoodCart} key={i} item={item} id={item.id} />)
   }
   return (
      <div className={styles.cartPage}>
         <div className={styles.inner}>
            <div className={styles.info}>
               <div className={styles.info__item_product}>Product</div>
               <div className={styles.info__item}>Quantity</div>
               <div className={styles.info__item}>Subtotal</div>
            </div>
            <div className={styles.products}>
               {createCartfood()}
            </div>
         </div>
         <footer className={styles.footer}>
            <div className={styles.divider}></div>
            <div className={styles.price__info}>
               <div className={styles.Subtotal}>Subtotal: {price}</div>
               <div className={styles.tax}>Tax: {tax}</div>
               <div className={styles.Total}>Total: {total}</div>
            </div>
            <button type="button" className={styles.checkout}>Proceed to checkkout</button>
         </footer>
      </div>
   )
}

export default Cart;