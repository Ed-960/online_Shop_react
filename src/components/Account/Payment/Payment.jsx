import React from "react";
import styles from "./payment.module.css";


const Payment = (props) => {
   return (
      <div className={styles.paymentMeth}>
         <p>Payment methods</p>
         <div className={styles.method}>
            <p>Cash</p>
            <p>Checks</p>
            <p>Debit cards</p>
            <p>Mobile payments</p>
            <p>Electronic bank transfers</p>
         </div>
      </div>
   )
}

export default Payment;