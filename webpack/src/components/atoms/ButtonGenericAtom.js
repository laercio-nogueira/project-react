import React from "react";
import styles from "./ButtonGenericAtom.module.scss";

const ButtonGenericAtom = ({ textButton, onClick, appearance = "primary"}) => (
  <button className={`${styles.btn} ${styles[appearance]}`} onClick={onClick}>{textButton}</button>
);

export default ButtonGenericAtom