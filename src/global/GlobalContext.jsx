import React from 'react';
import useTodoData from '../hooks/useTodoData';

export const GlobalContext = React.createContext(); // export

export const GlobalContextData = ({ children }) => { //export
  const data = useTodoData();

  return (
    <GlobalContext.Provider value={data}>
        { children }
    </GlobalContext.Provider>
  )
}