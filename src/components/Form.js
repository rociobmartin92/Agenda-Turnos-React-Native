import React, {useState} from 'react';
import {FormControl, Button} from 'native-base';
import {Text, StyleSheet, TextInput} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const Form = props => {
  const {setModal} = props;
  const [resp, setResp] = useState([]);

  const Validation = Yup.object().shape({
    name: Yup.string().required('Completa todos los campos'),
    day: Yup.string().required('Completa todos los campos'),
    month: Yup.string().required('Completa todos los campos'),
    hour: Yup.string().required('Completa todos los campos'),
    job: Yup.string().required('Completa todos los campos'),
  });

  const handleSubmit = value => {
    setResp([value.name, value.day, value.month, value.hour, value.job]);
    setModal(false);
  };

  console.log(resp);
  return (
    <Formik
      initialValues={{name: '', day: '', month: '', hour: null, job: ''}}
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
          <FormControl mt="1">
            <FormControl.Label>
              <Text style={estilo.input}>Trabajo:</Text>
            </FormControl.Label>
            <TextInput
              style={estilo.ti}
              value={values.job}
              onBlur={handleBlur('job')}
              onChangeText={handleChange('job')}
            />
            {errors.job && touched.job ? (
              <Text style={estilo.err}>{errors.job}</Text>
            ) : null}
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
