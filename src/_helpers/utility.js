
import React, {createContext, useContext, useReducer} from 'react';

export const calculateSum = (obj, field) => obj.map(item => item[field]).reduce((prev, curr) => prev + curr, 0);

export const calculateSumGen = (obj, field) => obj.filter((item)=>{
      return item["type"] === "GENERAL" || item["type"] === "GOAL" || item["type"] === "FOREIGN"    
})
.map(item => item[field]).reduce((prev, curr) => prev + curr, 0);

export const calculateWalletFieldSum = (obj, field,type) => obj.filter((item)=>{
    return item["type"] === type   
})
.map(item => item[field]).reduce((prev, curr) => prev + curr, 0);


export const goTo = (address) => window.location.href = `${address}`;

export const checkFileValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
        isValid = typeof value === 'object' && isValid;
    }
    if (rules.isImage) {
        isValid = rules.regex.test(value ? value.name : '') && isValid;
    }

    return isValid;
};


export const StateContext = createContext();
export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
