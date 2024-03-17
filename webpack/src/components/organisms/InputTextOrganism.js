import React from "react";
import { UseCounterContext } from "@hooks/HooksContexts"

const InputTextOrganism = () => {
  const { counter, setCounter, product, dispatch } = UseCounterContext();

  setTimeout(() => {
    const data = { "id": 999, "name": "Ventilador", "branch": "Tufao", "cost": 200.51, "status": false }
    dispatch({ type: "SUCCESS", payload: data })
  }, 5000)
  
  return (
    <div>
      <p>{counter}</p>
      <p>{JSON.stringify(product)}</p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  )
}

export default InputTextOrganism