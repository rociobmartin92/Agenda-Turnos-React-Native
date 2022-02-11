import React from 'react';
import {Box, Image} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import nails from '../assets/images/nails.jpg';

const Header = () => {
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
    </>
  );
};

const estilo = StyleSheet.create({
  tit: {fontSize: 50, fontFamily: 'Junitta-BW55G'},
});

export default Header;
