import React from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import {TurnoProvider} from './src/context/TurnoContext';
import HomeStack from './src/components/stack/HomeStack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <TurnoProvider>
          <HomeStack />
        </TurnoProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
