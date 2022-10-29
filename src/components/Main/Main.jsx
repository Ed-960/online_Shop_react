import styles from "./main.module.css";
import TopItem from "./TopItem/TopItem";
import topItemImg1 from "../../images/top__item-img_1.png";
import topItemImg2 from "../../images/top__item-img_2.png";
import MenuFoodItem from "./MenuFoodItem/MenuFoodItem";
import Restaurant from "./Restaurant/Restaurant";
import { useState } from "react";

const Main = (props) => {

   const { res, cartFoods, setCartFoods } = props;


   // show and hide a button that is for showing all the foods 
   const [showState, setshowState] = useState(false);

   const buttonStyleHide = {
      display: showState ? 'block' : 'none'
   }
   const onShowFilteredRes = () => {
      setshowState(false);
      setFoodName('default');
   }

   // filter Restaurants

   //=== get name for a filter ...
   const [foodName, setFoodName] = useState('default')

   const getNameFood = (name) => {
      setshowState(true); //for showing or hiding the button at the same time
      setFoodName(name);
   }

   console.log(showState);

   // const [filteredResArr, setFilteredResArr] = useState([]);
   //  const filteredRes = (name) => {
   //    res.filter((item) => {
   //       if (item.resFoods.some((el) => el.resName === name)) {
   //          if (filteredResArr.some((element) => element.name === item.name)) {
   //             return item;
   //          }
   //          return setFilteredResArr((prev) => [...prev, item]);
   //       }
   //       if (isResclickedTwice) {
   //          return setFilteredResArr((prev) => [...prev.filter((ele) => ele.name !== item.name)]);
   //       }
   //    })
   // };
   // console.log(filteredResArr);

   return (
      <main className={styles.main}>
         <section className={styles.top}>
            <div>
               <div className={styles.top__items}>
                  <TopItem src={topItemImg1} />
                  <TopItem src={topItemImg2} />
               </div>
               <div className={styles.menu__food}>
                  <div className={styles.menu__food_items}>
                     {
                        props.food.map(item => <MenuFoodItem
                           getNameFood={getNameFood} key={item.id} name={item.name} img={item.img}
                           showState={showState}
                        />)
                     }
                  </div>
               </div>
               <div className={styles.restaurants}>
                  <div className={styles.restaurants__where__and__btn}>
                     <p className={styles.restaurants__where}>
                        Nearby restaurants
                     </p>
                     <button style={buttonStyleHide} onClick={onShowFilteredRes}>Show All</button>
                  </div>
                  <div className={styles.restaurants__items}>
                     {
                        // eslint-disable-next-line array-callback-return
                        res.filter((item) => {
                           if (item.resFoods.some((el) => el.resName === foodName)) {
                              return item
                           } else if (foodName === 'default') {
                              return item;
                           }
                        })
                           .map((item, i) => <Restaurant
                              key={item.id} name={item.name} img={item.img} resinfo={item.resinfo} resFoods={item.resFoods} setCartFoods={setCartFoods}
                              id={item.id} cartFoods={cartFoods} i={i}
                           />)
                     }
                  </div>
               </div>
            </div>
         </section>
      </main>
   )
}

export default Main;