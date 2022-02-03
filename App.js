import React from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import ModalC from './src/components/ModalC';
import Header from './src/components/Header';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Header />
      <ModalC />
    </NativeBaseProvider>
  );
};

export default App;
