import React from 'react';
import Home from '../views/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Earnings from '../views/Earnings';
import Album from '../views/Album';
import New from '../New';

const Dra = createDrawerNavigator();

const Drawer = () => {
  return (
    <Dra.Navigator>
      <Dra.Screen name="home" component={Home} options={{title: 'Home'}} />
      <Dra.Screen name="dates" component={New} options={{title: 'Turnos'}} />
      <Dra.Screen
        name="earnings"
        component={Earnings}
        options={{title: 'Ganancias'}}
      />
      <Dra.Screen name="photos" component={Album} options={{title: 'Album'}} />
    </Dra.Navigator>
  );
};

export default Drawer;
