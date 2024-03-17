import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { HookEffects } from "@hooks/HooksEffects";
import { CounterContextProvider } from '@context/CounterContext'
import { UseCounterContext } from "@hooks/HooksContexts"
import LoadingGenericAtom from "@components/atoms/LoadingGenericAtom";
import InputTextOrganism from "@components/organisms/InputTextOrganism";

const ProductsPage = () => {
  const { id } = useParams();
  const { dispatch, error, loading, product } = UseCounterContext();

  HookEffects({ 
    url: `/products/${id}`, 
    callbackSuccess: (data) => dispatch({ type: "SUCCESS", payload: data }), 
    callbackLoading: () => dispatch({ type: "REQUEST" }),
    callbackError: (error) => dispatch({ type: "ERROR", payload: error })
  });

  return (
    <div className="container">
      { error && <p>{ error.message }</p> }
      { loading 
        ? <LoadingGenericAtom /> 
        : <ul>
            <li>{ product.id }</li>
            <li>{ product.name }</li>
            <li>{ product.cost }</li>
            <li>{ JSON.stringify(product.status) }</li>
            <li>{ product.branch }</li>
          </ul> 
      }
      <hr />
      <InputTextOrganism />
    </div>
  );
};

const productPageContext = () => (
  <CounterContextProvider>
    <ProductsPage />
  </CounterContextProvider>
)

export default productPageContext;