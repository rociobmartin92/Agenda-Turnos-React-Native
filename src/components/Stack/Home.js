import React from 'react';
import ModalC from '../ModalC';
import Header from '../Header';
import {TurnoProvider} from '../../context/TurnoContext';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const Nav = useNavigation();
  return (
    <TurnoProvider>
      <Header />
      <ModalC />
      <Button
        onPress={() => Nav.navigate('turnos')}
        marginTop={10}
        bg="rgb(0,0,0)"
        padding={3}
        _pressed={{bg: '#CD5C5C'}}>
        Mis Turnos
      </Button>
    </TurnoProvider>
  );
};

export default Home;
