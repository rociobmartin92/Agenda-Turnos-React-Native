import {NativeBaseProvider} from 'native-base';
import React from 'react';
import theme from './src/theme';
import {Text} from 'react-native';

const App = () => (
  <NativeBaseProvider theme={theme}>
    <Text> Diego y Rocío </Text>
  </NativeBaseProvider>
);

export default App;
