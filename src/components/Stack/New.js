/* eslint-disable no-undef */
import React, {useContext} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {Box, Image} from 'native-base';
import {TurnoContext} from '../../context/TurnoContext';
import smile from '../../assets/images/smile.jpg';
import Card from '../Card';

const New = () => {
  const {turnos} = useContext(TurnoContext);

  return (
    <Box alignItems="center" justifyContent="center">
      {turnos.length === 0 ? (
        <>
          <Text style={estilo.nt}>No tenes Turnos</Text>
          <Image source={smile} alt="nails" size="2xl" marginTop={10} />
        </>
      ) : (
        <FlatList
          data={turnos}
<<<<<<< Updated upstream
          renderItem={({item}) => {
            return <Card item={item} />;
          }}
=======
          renderItem={item => <Card item={item} />}
>>>>>>> Stashed changes
          keyExtractor={item => item.id}
        />
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
