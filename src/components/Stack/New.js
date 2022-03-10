/* eslint-disable no-undef */
import React, {useContext, useState} from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {Box, Image} from 'native-base';
import {TurnoContext} from '../../context/TurnoContext';
import smile from '../../assets/images/smile.jpg';
import Card from '../Card';

const New = () => {
  const {turnos, deleteTurno, setTurnos} = useContext(TurnoContext);
  const [show, setShow] = useState(false);
  const [turno, setTurno] = useState();

  const onClose = () => {
    setShow(false);
  };

  const onPressButtonEdit = id => {
    setShow(true);
    const editedTurno = turnos.find(item => item.phone === id);
    setTurno(editedTurno);
  };

  const editTurnos = data => {
    const updateTurnos = turnos.map(item =>
      item.phone === turno.phone ? data : item,
    );

    console.log(updateTurnos);
    setTurnos(updateTurnos);
    setShow(false);
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
              show={show}
              onClose={onClose}
              turno={turno}
              onPressEdit={onPressButtonEdit}
              turnos={turnos}
              onEdit={editTurnos}
            />
          );
        }}
        keyExtractor={item => item.phone}
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
