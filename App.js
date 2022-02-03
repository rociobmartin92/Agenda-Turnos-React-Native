import React from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import ModalC from './src/components/ModalC';
import Header from './src/components/Header';
import {TurnoProvider} from './src/context/TurnoContext';

const App = () => {
  return (
    <TurnoProvider>
      <NativeBaseProvider theme={theme}>
        <Header />
        <ModalC />
      </NativeBaseProvider>
    </TurnoProvider>
  );
};

export default App;
