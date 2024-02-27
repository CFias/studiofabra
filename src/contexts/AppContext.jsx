import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);


  return (
    <AppContext.Provider 
        value={{
            showModal,

        }}
    >
        {children}
    </AppContext.Provider>
  )

};
