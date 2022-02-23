import React, {useContext} from 'react';
import {Button, Center, Modal, Box, Image} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import Form from './Form';
import calendar from '../assets/images/calendar.png';
import {useNavigation} from '@react-navigation/native';
import { TurnoContext } from '../context/TurnoContext';

const ModalC = () => {
const {modal, setModal} = useContext(TurnoContext)
  const Nav = useNavigation();
  return (
    <Center>
      <Button
        marginTop={10}
        bg="#dea5a4"
        padding={3}
        _pressed={{bg: '#CD5C5C'}}
        onPress={() => setModal(true)}>
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
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <Modal.Content minWidth="350px">
          <Modal.CloseButton />
          <Modal.Header alignItems="center">
            <Text style={estilo.mod}>Agendar Nuevo Turno </Text>
          </Modal.Header>
          <Modal.Body>
            <Form />
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
export default ModalC;
