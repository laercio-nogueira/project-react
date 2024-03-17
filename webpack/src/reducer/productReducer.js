import { useReducer } from 'react'

const initialState = {
  product: {},
  loading: false,
  error: false
}

const reducer = (state, action) => {
  switch(action.type) {
    case "REQUEST":
      return { ...state, loading: true, error: false }
    case "SUCCESS":
      return { ...state, product: action.payload, loading: false }
    case "ERROR":
      return { ...state, error: true, loading: false }
    default:
      return state
  }
}

export {
  reducer, initialState
}