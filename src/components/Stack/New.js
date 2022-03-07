/* eslint-disable no-undef */
import React, {useContext, useState} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {Box, Image} from 'native-base';
import {TurnoContext} from '../../context/TurnoContext';
import smile from '../../assets/images/smile.jpg';
import Card from '../Card';

const New = () => {
  const {turnos, deleteTurno} = useContext(TurnoContext);
  const [show, setShow] = useState(false);
 

  const onClose = () => {
    setShow(false);
  };

  const onPressButtonEdit = id => {
    setShow(true);
    const editedTurno = turnos.filter(item => item.id === id);
    setTurno(editedTurno);

    console.log(editedTurno);
  };

  return (
    <Box alignItems="center" justifyContent="center" testID="new">
      <FlatList
        ListEmptyComponent={
          <>
            <Text style={estilo.nt}>No tenes Turnos</Text>
            <Image source={smile} alt="nails" size="2xl" marginTop={10} />
          </>
        }
        data={turnos}
        renderItem={({item}) => {
          return (
            <Card
              item={item}
              onDelete={deleteTurno}
              onPressButtonEdit={onPressButtonEdit}
              show={show}
              onClose={onClose}
              turno={turno}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
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
