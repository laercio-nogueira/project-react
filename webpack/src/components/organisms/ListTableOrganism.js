import React from "react";
import TypographyHeading3hAtom from "../atoms/TypographyHeading3Atom";
import TableMolecule from "../molecules/TableMolecule";

const ListTableOrganism = ({ title, data, legendTable }) => {
  return (
    <>
      <TypographyHeading3hAtom>{ title }</TypographyHeading3hAtom>
      <TableMolecule data={data} legendTable={legendTable} />
    </>
  );
};

export default ListTableOrganism;