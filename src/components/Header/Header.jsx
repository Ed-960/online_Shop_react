import React from "react";
import Form from "./Form/Form";
import styles from "./header.module.css";
import Logo from "./Logo/Logo";
import Images from "./Navbar/Images/Images";
import Navbar from "./Navbar/Navbar";

const Header = (props) => {
   const { cartFoods, selectedImage, removeFoodCart } = props;

   return (
      <header className={styles.header}>
         <div>
            <div className={styles.header__inner}>
               <Logo />
               <Form />
               <Navbar />
               <Images cartFoods={cartFoods} selectedImage={selectedImage} removeFoodCart={removeFoodCart} />
            </div>
         </div>
      </header>
   )
}

export default Header;