import React from "react";
import TypographyParagraphAtom from "../atoms/TypographyParagraphAtom";

const TitleTableAtom = ({ legend, key }) => (
  <th key={key}>
    { legend }
  </th>
)

export default TitleTableAtom