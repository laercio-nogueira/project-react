import React from "react";
import TypographyParagraphAtom from "../atoms/TypographyParagraphAtom";

const ItemMolecule = ({ title, body, isTitle }) => (
  <div className={`list ${isTitle}`}>
    <TypographyParagraphAtom text={title}/>
    <TypographyParagraphAtom text={body}/>
  </div>
)

export default ItemMolecule