import React from "react";
import ButtonGenericAtom from "../atoms/ButtonGenericAtom";
import TypographyHeading3Atom from "../atoms/TypographyHeading3Atom";

const CountNumberOrganism = ({ handlers, count }) => {
  return (
    <>
      <div className="mt-2">
      <TypographyHeading3Atom>Contador</TypographyHeading3Atom>
        {
          handlers.map((handler, index) => (
            <ButtonGenericAtom
              key={index}
              onClick={handler.onClick}
              appearance={handler.appearance}
              textButton={handler.textButton}
            />
          ))
        }
      </div>
      <p>Count: {count}</p>
    </>
  );
};

export default CountNumberOrganism;