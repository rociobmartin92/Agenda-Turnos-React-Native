/* eslint-disable no-undef */
import React, {useContext, useState} from 'react';
import {Button, Center, Modal, Image, HStack} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import FormHook from './FormHook';
import calendar from '../assets/images/calendar.png';
import {useNavigation} from '@react-navigation/native';
import {TurnoContext} from '../context/TurnoContext';
import pesos from '../assets/images/pesos.jpg';
import album from '../assets/images/album.png';

const AddItem = () => {
  const {turnos, setTurnos} = useContext(TurnoContext);
  const [show, setShow] = useState(false);
  const Nav = useNavigation();

  const submitTurno = data => {
    setTurnos([...turnos, data]);
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
      <HStack>
        <Button
          onPress={() => Nav.navigate('turnos')}
          borderColor="#dea5a4"
          borderWidth={2}
          bg="transparent"
          marginTop={20}
          marginRight={10}
          _pressed={{bg: 'transparent'}}>
          <Image source={calendar} alt="calendar" size={10} />
        </Button>
        <Button
          onPress={() => Nav.navigate('ganancias')}
          borderColor="#dea5a4"
          borderWidth={2}
          bg="transparent"
          marginTop={20}
          _pressed={{bg: 'transparent'}}>
          <Image source={pesos} alt="pesos" size={10} />
        </Button>
        <Button
          onPress={() => Nav.navigate('fotos')}
          borderColor="#dea5a4"
          borderWidth={2}
          bg="transparent"
          marginTop={20}
          marginLeft={10}
          _pressed={{bg: 'transparent'}}>
          <Image source={album} alt="fotos" size={10} />
        </Button>
      </HStack>
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
