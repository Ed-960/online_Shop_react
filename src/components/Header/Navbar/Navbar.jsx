import React from "react";
import styles from "./navbar.module.css";
import ListItem from "./ListItem/ListItem";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <nav className={styles.menu}>
         <ul className={styles.menu__list}>
            <NavLink to='/Main'><ListItem item="Restaurants" /></NavLink>
            <NavLink to='/Deals'><ListItem item="Deals" /></NavLink>
            <NavLink to='/Cart'><ListItem item="My orders" /></NavLink>
         </ul>
      </nav>
   )

}









export default Navbar;