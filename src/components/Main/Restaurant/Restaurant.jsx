import React, { useState } from "react";
import styles from "./restaurant.module.css";

import clock from "../../../images/clock.svg";
import featuredIcon from "../../../images/restaurants/featured.png";
import ellipse from "../../../images/ellipse.png";
import bag from "../../../images/shopping_bag.svg";
import bagBlue from "../../../images/added.svg";
import Food from "./Food/Food";
import { restaurants } from "../../../redux/state";
import { useNotification } from "../../Notification/NotificationProvider";
const Restaurant = (props) => {


   const { cartFoods, setCartFoods, resFoods, img, id, name, resinfo } = props;

   const dispatchNot = useNotification();
   const handleNewNotification = () => {
      dispatchNot({
         type: 'SUCCESS',
         message: 'The Food Added Successfully!!',
         title: 'xxx'
      })
   }

   const [isImgHover, setisImgHover] = useState(false);
   const onClick = () => {
      setisImgHover(!isImgHover);
   }

   const style = {
      display: isImgHover ? "block" : "none"
   };

   const [isInitialBadgeStayle, setInitialBadgeStayle] = useState(false);

   const initialBadgeStayle = {
      display: isInitialBadgeStayle ? "block" : "none"
   };


   const [count, setCount] = useState(0);
   const [isBagClicked, setBagClicked] = useState(false);

   const onBagClick = () => {
      handleNewNotification();
      setBagClicked(true);
      setInitialBadgeStayle(true);

      console.log('cart', cartFoods);
      cartFoods.forEach((element) => {
         console.log('1', element.foodInfo.resName);
         console.log('2', resFoods[0]);
         if (element.foodInfo.resName === resFoods[0].resName) {
            setCount(element.count);
         }

      })
      console.log('count', count);
   }
   const ImgBag = isBagClicked ? bagBlue : bag;

   const addTocart = (idRes) => {

      let isInArray = false;
      const food = restaurants[idRes - 1].resFoods[0];
      cartFoods.forEach(el => {
         if (el.count === undefined) {
            el.count = 0;
         }
         if (el.foodInfo.resName === food.resName && el.foodInfo.price === food.price) {
            isInArray = true;
         }
      })
      if (!isInArray) {
         setCartFoods([...cartFoods, { id: new Date().toISOString(), foodInfo: food, count: 1 }])
      } else {
         setCartFoods(cartFoods.map((el) => {
            if (el.count && el.foodInfo.resName === food.resName && el.foodInfo.price === food.price) {
               el.count += 1;
               return el;
            }
            return el;
         }));
      }
   }

   return (
      <div className={styles.restaurants__item}>
         <img alt='img' src={img} onClick={onClick} className={styles.restaurants__item_img} />
         <img alt='img' src={featuredIcon} style={style} className={styles.restaurants__item_icon}></img>
         <div className={styles.restaurants__item_info}>
            <div className={styles.restaurants__info_box}>
               <span className={styles.restaurants__name}>{name}</span>
               <div className={styles.restaurants__info}>
                  <img alt='img' src={clock} className={styles.clock} />
                  <span className={styles.restaurants__info_text_1}>{resinfo[0]}</span>
                  <img alt='img' src={ellipse} className={styles.restaurants__info_ellipse} />
                  <span className={styles.restaurants__info_text_2}>{resinfo[1]}</span>
               </div>
            </div>
            <div onClick={function () { addTocart(id) }}>
               <img onClick={() => onBagClick(id)} src={ImgBag} alt='img'
                  className={styles.restaurants__food_item_icon} />
               <div style={initialBadgeStayle} className={styles.badge}><span className={styles.badge_number}>
                  {count + 1}
               </span></div>
            </div>
            <div className={styles.restaurants__food_item}>
               {
                  resFoods.map((item, i) => <Food
                     key={i}
                     inner={item.resName}
                     img={item.img}
                  />)
               }
            </div>
         </div>
      </div>
   )
}

export default Restaurant;