import React, {useContext} from 'react';
import {Text, StyleSheet} from 'react-native';
import {Box, Image} from 'native-base';
import {TurnoContext} from '../../context/TurnoContext';
import smile from '../../assets/images/smile.jpg';

const New = () => {
  const {turnos} = useContext(TurnoContext);
  // eslint-disable-next-line no-undef
  console.log(turnos);
  return (
    <Box alignItems="center" justifyContent="center">
      {turnos ? (
        <>
          <Text style={estilo.nt}>No tenes Turnos</Text>
          <Image source={smile} alt="nails" size="2xl" marginTop={10} />
        </>
      ) : (
        <Text style={estilo.nt}> TE AMO; TE DOY </Text>
      )}
    </Box>
  );
};

const estilo = StyleSheet.create({
  nt: {
    color: '#dea5a4',
    fontSize: 21,
    fontFamily: 'Simpla Demo',
    marginTop: 50,
  },
});

export default New;
