import React, {useState} from 'react';
import theme from './src/theme';
import {NativeBaseProvider} from 'native-base';
import ModalC from './src/components/ModalC';
import Header from './src/components/Header';

const init = {name: '', day: '', month: '', hour: '', job: ''};

const App = () => {
  const [resp, setResp] = useState(init);
  return (
    <NativeBaseProvider theme={theme}>
      <Header />
      <ModalC resp={resp} setResp={setResp} />
    </NativeBaseProvider>
  );
};

export default App;
