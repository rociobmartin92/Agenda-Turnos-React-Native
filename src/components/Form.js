/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, {useContext} from 'react';
import DatePicker from 'react-native-date-picker';
import {FormControl, Button} from 'native-base';
import {Text, StyleSheet, TextInput, View, Alert} from 'react-native';
import {TurnoContext} from '../context/TurnoContext';

const Form = ({setModal}) => {
  const {
    name,
    setName,
    job,
    date,
    setDate,
    setJob,
    phone,
    setPhone,
    turnos,
    setTurnos,
  } = useContext(TurnoContext);

  const handleCita = () => {
    if ([name, phone, job].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
    } else {
      setModal(false);
      const nuevoTurno = {
        name,
        date,
        phone,
        job,
      };

      console.log(nuevoTurno);

      setTurnos([...turnos, nuevoTurno]);
      console.log(turnos);

      setName('');
      setJob('');
      setPhone('');
    }
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
          <Text style={estilo.input}>Teléfono:</Text>
        </FormControl.Label>
        <TextInput style={estilo.ti} value={phone} onChangeText={setPhone} />
      </FormControl>
      <FormControl mt="1">
        <FormControl.Label>
          <Text style={estilo.input}>Trabajo:</Text>
        </FormControl.Label>
        <TextInput style={estilo.ti} value={job} onChangeText={setJob} />
      </FormControl>
      <Button.Group space={2} marginTop={10} alignItems="center">
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
          onPress={handleCita}>
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
