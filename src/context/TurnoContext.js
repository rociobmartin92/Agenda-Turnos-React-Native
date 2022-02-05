import React, {createContext, useState} from 'react';

export const TurnoContext = createContext({});



export const TurnoProvider = ({children}) => {
  const [resp, setResp] = useState([]);

  return (
    <TurnoContext.Provider value={{resp, setResp}}>
      {children}
    </TurnoContext.Provider>
  );
};
