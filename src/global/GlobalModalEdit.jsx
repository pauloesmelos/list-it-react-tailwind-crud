import React from 'react';

export const GlobalModalEdit = React.createContext();
export const GlobobalModalEditProvider = ({ children }) => {
    const [value, setValue] = React.useState(false);
    return (
        <GlobalModalEdit.Provider value={{value, setValue}}>
            { children }
        </GlobalModalEdit.Provider>
    )
}
