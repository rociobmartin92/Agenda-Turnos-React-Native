/* eslint-disable no-undef */
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Box, Modal, Button, Image} from 'native-base';
import FormHook from './FormHook';
import edit from '../assets/images/edit.png';

const Modal_ = () => {
  const [show, setShow] = useState(false);

  // const modifyTurno = id => {
  //   // eslint-disable-next-line no-undef
  //   console.log('editando..', id);
  //   setShow(true);
  // };

  return (
    <Box>
      <Button
        padding={0}
        marginTop={2}
        bg="transparent"
        _pressed={{bg: 'transparent'}}
        onPress={() => setShow(true)}>
        <Image padding={0} margin={0} source={edit} alt="Editar" size="xs" />
      </Button>
      <Modal isOpen={show} onClose={() => setShow(false)}>
        <Modal.Content minWidth="350px">
          <Modal.CloseButton />
          <Modal.Header alignItems="center">
            <Text style={estilo.mod}>Agendar Nuevo Turno </Text>
          </Modal.Header>
          <Modal.Body>
            <FormHook />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

const estilo = StyleSheet.create({
  mod: {fontSize: 23, fontFamily: 'sans-serif'},
});
export default Modal_;
