import React, {useState, createContext} from 'react';

export const ModalContext = createContext();
// eslint-disable-next-line react/prop-types
export const ModalProvider = ({children}) => {
  const [show, setShow] = useState(false);
  const modifyTurno = id => {
    // eslint-disable-next-line no-undef
    console.log('editando..', id);
    setShow(true);
  };

  const submitTurno = data => {
    // eslint-disable-next-line no-undef
    console.log(data);
    setShow(false);
  };

  return (
    <ModalContext.Provider value={{show, setShow, modifyTurno, submitTurno}}>
      {children}
    </ModalContext.Provider>
  );
};
