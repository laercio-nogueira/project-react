import React from "react";
import { Link } from "react-router-dom";

import styles from "./NavBarModule.module.scss"

const NavBarModule = () => (
  <div className={styles.navbar}>
    <a href="/" className={styles.navbar__link}>Home</a>
    <a href="/#/about" className={styles.navbar__link}>About</a>
  </div>
);

export default NavBarModule