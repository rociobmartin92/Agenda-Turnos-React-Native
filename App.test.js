import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import App from './App';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  const wrapper = ({children}) => (
    <NavigationContainer>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationContainer>
  );

  it('render the right way', () => {
    const {getByText} = render(<App />, {wrapper});
    const text = getByText(/No tenes Turnos/i);
    expect(text).toBeDefined();
  });
});
