import React, { createContext, useState, useReducer } from "react";
import { initialState, reducer } from "@reducer/productReducer";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter, ...state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}