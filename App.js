import React from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import HomeStack from './src/components/Stack/HomeStack';

const App = () => {
 
  return (
    <NativeBaseProvider theme={theme}>
      <HomeStack />
    </NativeBaseProvider>
  );
};

export default App;
