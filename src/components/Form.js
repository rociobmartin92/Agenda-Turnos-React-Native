import React, {useState, useContext} from 'react';
import {FormControl, Button, CheckIcon, WarningOutlineIcon} from 'native-base';
import {Text, StyleSheet, TextInput} from 'react-native';
import {TurnoContext} from '../context/TurnoContext';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Select} from 'native-base';

const Form = props => {
  const {setModal} = props;
  const {resp, setResp} = useContext(TurnoContext);
  const [service, setService] = useState('');

  const Validation = Yup.object().shape({
    name: Yup.string().required('Completa todos los campos'),
    day: Yup.string().required('Completa todos los campos'),
    month: Yup.string().required('Completa todos los campos'),
    hour: Yup.string().required('Completa todos los campos'),
  });

  const handleSubmit = value => {
    setResp([
      value.name,
      value.day,
      value.month,
      value.hour,
      value.job,
      service,
    ]);
    setModal(false);
  };

  console.log(resp);
  return (
    <Formik
      initialValues={{name: '', day: '', month: '', hour: '', job: ''}}
      validationSchema={() => Validation}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <>
          <FormControl>
            <FormControl.Label>
              <Text style={estilo.input}>Nombre y Apellido:</Text>
            </FormControl.Label>
            <TextInput
              style={estilo.ti}
              value={values.name}
              onBlur={handleBlur('name')}
              onChangeText={handleChange('name')}
            />
            {errors.name && touched.name ? (
              <Text style={estilo.err}>{errors.name}</Text>
            ) : null}
          </FormControl>
          <FormControl mt="1">
            <FormControl.Label>
              <Text style={estilo.input}>Día:</Text>
            </FormControl.Label>
            <TextInput
              style={estilo.ti}
              value={values.day}
              onBlur={handleBlur('day')}
              onChangeText={handleChange('day')}
            />
            {errors.day && touched.day ? (
              <Text style={estilo.err}>{errors.day}</Text>
            ) : null}
          </FormControl>
          <FormControl mt="1">
            <FormControl.Label>
              <Text style={estilo.input}>Mes:</Text>
            </FormControl.Label>
            <TextInput
              style={estilo.ti}
              value={values.month}
              onBlur={handleBlur('month')}
              onChangeText={handleChange('month')}
            />
            {errors.month && touched.month ? (
              <Text style={estilo.err}>{errors.month}</Text>
            ) : null}
          </FormControl>
          <FormControl mt="1">
            <FormControl.Label>
              <Text style={estilo.input}>Hora:</Text>
            </FormControl.Label>
            <TextInput
              style={estilo.ti}
              value={values.hour}
              onBlur={handleBlur('hour')}
              onChangeText={handleChange('hour')}
            />
            {errors.hour && touched.hour ? (
              <Text style={estilo.err}>{errors.hour}</Text>
            ) : null}
          </FormControl>
          <FormControl mt="5" isRequired>
            <FormControl.Label>
              <Text style={estilo.input}>Trabajo:</Text>
            </FormControl.Label>
            <Select
              color="darkText"
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Elije un servicio"
              placeholder="Elije un servicio"
              _selectedItem={{
                bg: '#dea5a4',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setService(itemValue)}>
              <Select.Item label="Tradicional" value="tradicional" />
              <Select.Item label="Semi Permanentes" value="semi" />
              <Select.Item label="Esculpidas" value="esculpidas" />
              <Select.Item label="Remoción" value="remover" />
              <Select.Item label="Arreglo" value="arreglar" />
            </Select>
            <FormControl.ErrorMessage
              color="rgb(117,16,117)"
              leftIcon={
                <WarningOutlineIcon size="xs" color="rgb(117,16,117)" />
              }>
              <Text style={estilo.err}>Selecciona un servicio</Text>
            </FormControl.ErrorMessage>
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
      )}
    </Formik>
  );
};

const estilo = StyleSheet.create({
  but: {fontSize: 18},
  input: {fontSize: 16, color: 'rgb(0,0,0)'},
  ti: {borderColor: 'rgb(0,0,0)', borderWidth: 1, padding: 0.5},
  err: {color: 'rgb(117,16,117)', fontWeight: 'bold'},
});
export default Form;
