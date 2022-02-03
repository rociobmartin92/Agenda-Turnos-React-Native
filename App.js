import React from 'react';
import theme from './src/theme';
import {TurnoProvider} from './src/context/TurnoContext';
import {NativeBaseProvider, ScrollView} from 'native-base';
import ModalC from './src/components/ModalC';
import Header from './src/components/Header';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView>
        <TurnoProvider>
          <Header />
          <ModalC />
        </TurnoProvider>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
