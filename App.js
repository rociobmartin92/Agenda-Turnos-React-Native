import React from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import HomeStack from './src/components/Stack/HomeStack';
import {TurnoProvider} from './src/context/TurnoContext';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <TurnoProvider>
        <HomeStack />
      </TurnoProvider>
    </NativeBaseProvider>
  );
};

export default App;
