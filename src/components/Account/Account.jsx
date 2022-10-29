import React, { useState } from "react";
import styles from "./account.module.css";
import Adress from "./Adress/Adress";
import Aside from "./Aside/Aside";
import Payment from "./Payment/Payment";
import RightSide from "./RightSide/RightSide";
import Security from "./Security/Security";



const Account = (props) => {
   const [rightSideCheckedInner, setRightSideCheckedInner] = useState();

   const passState = (res) => {
      setRightSideCheckedInner(res);
   }

   const RightSideInner = (res = 'Account') => {
      if (res === 'Account') {
         return (
            <RightSide checkboxElInfo={props.checkboxElInfo} selectedImage={props.selectedImage}
               name={props.name} setSelectedImage={props.setSelectedImage} setSave={props.passSetSave} onChangeInfo={props.onChangeInfo} />
         )
      } else if (res === 'Address') {
         return (
            <Adress />
         )
      } else if
         (res === 'Payment method') {
         return (
            <Payment />
         )
      } else if
         (res === 'Security') {
         return (
            <Security />
         )
      }
   }
   return (
      <main className={styles.main}>
         <section className={styles.page}>
            <div className={styles.container}>
               <div className={styles.page__inner}>
                  <Aside passState={passState} accountAsideBoxInfo={props.accountAsideBoxInfo} />
                  {RightSideInner(rightSideCheckedInner)}
               </div>
            </div>
         </section>
      </main>
   )
}

export default Account;