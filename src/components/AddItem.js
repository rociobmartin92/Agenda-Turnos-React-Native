/* eslint-disable no-undef */
import React, {useContext, useState} from 'react';
import {Button, Center, Modal, Box, Image} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import FormHook from './FormHook';
import calendar from '../assets/images/calendar.png';
import {useNavigation} from '@react-navigation/native';
import {TurnoContext} from '../context/TurnoContext';

const AddItem = () => {
  const {turnos, setTurnos} = useContext(TurnoContext);
  const [show, setShow] = useState(false);
  const Nav = useNavigation();

  const submitTurno = data => {
    console.log(data);
    setTurnos([...turnos, data]);
    console.log(turnos);
    setShow(false);
  };

  return (
    <Center>
      <Button
        marginTop={10}
        bg="#dea5a4"
        padding={3}
        _pressed={{bg: '#CD5C5C'}}
        onPress={() => setShow(true)}>
        Nuevo Turno
      </Button>
      <Box>
        <Button
          testID="calendar"
          onPress={() => Nav.navigate('turnos')}
          borderColor="#dea5a4"
          borderWidth={2}
          bg="transparent"
          position="absolute"
          marginTop={20}
          marginLeft={70}
          _pressed={{bg: 'transparent'}}>
          <Image source={calendar} alt="calendar" size={10} />
        </Button>
      </Box>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <Modal.Content minWidth="350px">
          <Modal.CloseButton />
          <Modal.Header alignItems="center">
            <Text style={estilo.mod}>Agendar Nuevo Turno </Text>
          </Modal.Header>
          <Modal.Body>
            <FormHook onSubmit={submitTurno} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

const estilo = StyleSheet.create({
  mod: {fontSize: 23, fontFamily: 'sans-serif'},
});
export default AddItem;
