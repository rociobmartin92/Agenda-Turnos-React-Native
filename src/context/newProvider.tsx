// Cada vez que creo un contexto debo crear tambien un Provider
// es como el async await, uno depende del otro para funcionar

// este archivo es .TSX o .JSX, mientras que el archivo donde creo que contesto
// es solo .TS o .JS

// PASOS:

// 1) Importar nuestro contexto en cuestión
//2) Colocarlo en las extremidades con la terminación .Provider
// 3) Colocar adentro todos los componentes que de alguna manera vayan a usar estos estados, variables e info "props"
// El paso 3 puede resumirse colocando {children}
// Dentro del value coloca esas "props" que quiero compartir, para ello debo traermela a este componente
import React, {useState} from 'react';
import newContext from './newContext';

export const newProvider = children => {
  const [resp, setResp] = useState([]);
  return (
    <newContext.Provider value={{resp, setResp}}>
      {children}
    </newContext.Provider>
  );
};

export default newProvider;
