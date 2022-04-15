import { useReducer, createContext } from "react";
import { account } from "./reducers/user";

// initial state
const initialState = {
  account: "",
  kyc: false, 
  amountToBuy: 0,
  remainingTks: null,
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(account), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };