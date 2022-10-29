import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
   const { cartFoods, selectedImage, removeFoodCart } = props;
   return (
      <>
         <Header cartFoods={cartFoods} selectedImage={selectedImage} removeFoodCart={removeFoodCart} />
         <div className="line__divider"></div>
         <div>
            <Outlet />
         </div>
      </>
   )
}

export default Layout;