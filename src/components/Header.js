import React from 'react';
import {Box, Image, Button} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import nails from '../assets/images/nails.jpg';

import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const Nav = useNavigation();

  return (
    <>
      <Box
        marginTop={10}
        alignItems="center"
        justifyContent="center"
        bg="#dea5a4"
        padding={5}>
        <Text style={estilo.tit}>Aumeier Uñas</Text>
      </Box>
      <Box alignItems="center">
        <Image source={nails} alt="nails" size={80} marginTop={10} />
      </Box>
      <Box>
        <Button
          onPress={() => Nav.navigate('turnos')}
          marginTop={10}
          bg="rgb(0,0,0)"
          padding={3}
          _pressed={{bg: '#CD5C5C'}}>
          Mis Turnos
        </Button>
      </Box>
    </>
  );
};

const estilo = StyleSheet.create({
  tit: {fontSize: 50, fontFamily: 'Junitta-BW55G'},
  mod: {fontSize: 20, fontFamily: 'sans-serif'},
});

export default Header;
