import React from "react";
import ButtonGenericAtom from "../atoms/ButtonGenericAtom";

const CountNumberOrganism = ({ handlers, count }) => {
  return (
    <>
      <div className="mt-2">
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