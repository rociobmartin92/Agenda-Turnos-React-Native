import React from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import {TurnoProvider} from './src/context/TurnoContext';
import HomeStack from './src/components/stack/HomeStack';


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
