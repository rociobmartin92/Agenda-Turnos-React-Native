import React from 'react';
import theme from './src/theme';
import {TurnoProvider} from './src/context/TurnoContext';
import {NativeBaseProvider, ScrollView} from 'native-base';
import ModalC from './src/components/ModalC';
import Header from './src/components/Header';
import PlaceNew from './src/components/PlaceNew';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView
        _contentContainerStyle={{
          px: '20px',
          mb: '4',
          minW: '72',
        }}>
        <TurnoProvider>
          <Header />
          <ModalC />
          <PlaceNew />
        </TurnoProvider>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default App;
