import React from "react";

const ItemTableAtom = ({ text, key }) => (
  <td key={key}>
    { JSON.stringify(text)}
  </td>
)

export default ItemTableAtom