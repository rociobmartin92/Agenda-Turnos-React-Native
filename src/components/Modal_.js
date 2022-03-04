/* eslint-disable no-undef */
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Box, Modal} from 'native-base';
import FormHook from './FormHook';

const Modal_ = () => {
  const [show, setShow] = useState(false);

  // const modifyTurno = id => {
  //   // eslint-disable-next-line no-undef
  //   console.log('editando..', id);
  //   setShow(true);
  // };

  return (
    <Box>
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
