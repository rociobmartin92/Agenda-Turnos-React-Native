import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native';

import New from './New';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const wrapper = ({children}) => (
  <NavigationContainer>
    <NativeBaseProvider>{children}</NativeBaseProvider>
  </NavigationContainer>
);

describe('Testing react navigation', () => {
  test('render the right way', () => {
    const {getByText} = render(<New />, {wrapper});
    const text = getByText('No tenes Turnos');
    expect(text).toBeDefined();
  });
});
