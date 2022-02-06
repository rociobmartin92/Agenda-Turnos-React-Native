/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import {FormControl, Button} from 'native-base';
import {Text, StyleSheet, TextInput, View} from 'react-native';
import {TurnoContext} from '../context/TurnoContext';
import DatePicker from 'react-native-date-picker';

const Form = ({setModal}) => {
  const {name, setName, job, date, setDate, setJob} = useContext(TurnoContext);

  const handleSubmit = () => {
    setModal(false);
  };

  return (
    <>
      <FormControl>
        <FormControl.Label>
          <Text style={estilo.input}>Nombre y Apellido:</Text>
        </FormControl.Label>
        <TextInput style={estilo.ti} value={name} onChangeText={setName} />
      </FormControl>
      <FormControl mt="1">
        <FormControl.Label>
          <Text style={estilo.input}>Fecha y Hora:</Text>
        </FormControl.Label>
        <View>
          <DatePicker
            mode="datetime"
            date={date}
            locale="es"
            onDateChange={date => setDate(date)}
            androidVariant="nativeAndroid"
          />
        </View>
      </FormControl>
      <FormControl mt="1">
        <FormControl.Label>
          <Text style={estilo.input}>Trabajo:</Text>
        </FormControl.Label>
        <TextInput style={estilo.ti} value={job} onChangeText={setJob} />
      </FormControl>
      <Button.Group marginLeft={10} space={2} marginTop={10}>
        <Button
          colorScheme="rgb(0,0,0)"
          bg="white"
          fontSize="lg"
          onPress={() => {
            setModal(false);
          }}>
          Cancelar
        </Button>
        <Button
          colorScheme="rgb(0,0,0)"
          bg="lightBlue.500"
          onPress={handleSubmit}>
          Guardar
        </Button>
      </Button.Group>
    </>
  );
};

const estilo = StyleSheet.create({
  but: {fontSize: 18},
  input: {fontSize: 16, color: 'rgb(0,0,0)'},
  ti: {borderColor: 'rgb(0,0,0)', borderWidth: 1, padding: 0.5},
  err: {color: 'rgb(117,16,117)', fontWeight: 'bold'},
});
export default Form;
