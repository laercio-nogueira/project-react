import React from "react";
import ItemMolecule from "../molecules/ItemMolecule";
import TypographyHeading3hAtom from "../atoms/TypographyHeading3Atom";

const ListTableOrganism = ({ title, data }) => {
  return (
    <>
      <TypographyHeading3hAtom text={title} />
      {
        data.map((item, index) => (
          <ItemMolecule
            key={index}
            { ...item }
          />
        ))
      }
    </>
  );
};

export default ListTableOrganism;