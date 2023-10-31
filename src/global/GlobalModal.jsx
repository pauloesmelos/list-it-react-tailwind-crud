import React from 'react';

export const GlobalModal = React.createContext();
export const GlobalModalProvider = ({ children }) => {
  const [modal, setModal] = React.useState(false);
  function handleClick() {
    setModal(e => !e);
  }
  return (
    <GlobalModal.Provider value={{modal, setModal, handleClick}}>
      {children}
    </GlobalModal.Provider>
  )
}