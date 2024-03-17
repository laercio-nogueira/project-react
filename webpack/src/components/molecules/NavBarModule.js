import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBarModule.module.scss"

const NavBarModule = () => (
  <div className={styles.navbar}>
    <Link to="/" className={styles.navbar__link}>Home</Link>
    <Link to="/#/products/22" className={styles.navbar__link}>Products</Link>
  </div>
);

export default NavBarModule