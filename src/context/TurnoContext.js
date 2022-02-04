import React, {createContext, useState} from 'react';

export const TurnoContext = createContext({});

const init = {name: '', day: '', month: '', hour: '', job: null};

export const TurnoProvider = ({children}) => {
  const [resp, setResp] = useState(init);

  return (
    <TurnoContext.Provider value={{resp, setResp}}>
      {children}
    </TurnoContext.Provider>
  );
};
