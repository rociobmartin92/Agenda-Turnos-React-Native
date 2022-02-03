import {Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Button, Center, Modal} from 'native-base';
import Form from './Form';

const ModalC = () => {
  const [modal, setModal] = useState(false);
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
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <Modal.Content maxWidth="500px">
          <Modal.CloseButton />
          <Modal.Header alignItems="center">
            <Text style={estilo.mod}>Agendar Turno </Text>
          </Modal.Header>
          <Modal.Body>
            <Form setModal={setModal} />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

const estilo = StyleSheet.create({
  mod: {fontSize: 20, fontFamily: 'sans-serif'},
});
export default ModalC;