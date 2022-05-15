import 'react-native-gesture-handler';
import React from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import {TurnoProvider} from './src/context/TurnoContext';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/components/stacks/HomeStack';

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
