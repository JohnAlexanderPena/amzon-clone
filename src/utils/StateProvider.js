import React, { createContext, useContext, useReducer } from "react";

//Preparationg of the data
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//eporting to access data from data layer
export const useStateValue = () => useContext(StateContext);
