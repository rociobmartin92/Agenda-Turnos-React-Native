import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import New from './New';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
  
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="turnos"
          component={New}
          options={{headerShown: false}}
        />
      </Stack.Navigator>

  );
};

export default HomeStack;
