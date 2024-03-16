import React from "react";
import ItemTableAtom from "../atoms/ItemTableAtom";
import TitleTableAtom from "../atoms/TitleTableAtom";
import styles from "./TableMolecule.module.scss";

const TableMolecule = ({ data, legendTable }) => (
  <table className={styles.table}>
    <thead className={styles.thead}>
      <tr>
        { legendTable.map((legend, key) => <TitleTableAtom key={key} legend={legend.text} />)}
      </tr>
    </thead>
    <tbody className={styles.tbody}>
      {
        data.map((value, key) => (
          <tr key={key}>
            { Object.keys(value).map(item => typeof(value[item]) !== 'string' || <ItemTableAtom text={value[item]} key={item} />) }
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default TableMolecule