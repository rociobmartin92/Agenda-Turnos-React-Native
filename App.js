import React from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import {TurnoProvider} from './src/context/TurnoContext';
import HomeStack from './src/components/stack/HomeStack';
import {NavigationContainer} from '@react-navigation/native';
import {ModalProvider} from './src/context/ModalContext';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <TurnoProvider>
          <ModalProvider>
            <HomeStack />
          </ModalProvider>
        </TurnoProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
