/* eslint-disable no-undef */
import React from 'react';
import {Text, TextInput, Button, StyleSheet} from 'react-native';
import {Box, Center, FormControl} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';

// VALIDAR UN EMAIL (con o sin Yup)
// Phone solo numeros
// Fecha mayor de hoy

const defaultTurno = {
  id: Date.now(),
  name: '',
  phone: '',
  job: '',
  date: new Date(Date.now()),
};

const FormHook = prop => {
  const {addTurno, turno = defaultTurno} = prop;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: turno,
  });
  // eslint-disable-next-line no-undef

  return (
    <Center>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <FormControl.Label>
              <Text style={styles.input}>Nombre y Apellido:</Text>
            </FormControl.Label>
            <TextInput
              style={styles.inputs}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="name"
      />

      {errors.name && <Text>Completa todos los campos</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <FormControl.Label>
              <Text style={styles.input}>Teléfono:</Text>
            </FormControl.Label>
            <TextInput
              style={styles.inputs}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="phone"
      />
      {errors.phone && <Text>Completa todos los campos</Text>}

      <FormControl.Label>
        <Text style={styles.input}>Fecha y Hora:</Text>
      </FormControl.Label>

      <Box>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <DatePicker
              mode="datetime"
              is24Hour={true}
              date={value}
              locale="es"
              onDateChange={date => onChange(date)}
              androidVariant="nativeAndroid"
            />
          )}
          name="date"
        />
      </Box>

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <FormControl.Label>
              <Text style={styles.input}>Trabajo:</Text>
            </FormControl.Label>
            <TextInput
              style={styles.inputs}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="job"
      />
      {errors.job && <Text>Completa todos los campos</Text>}
      <Box marginTop={10}>
        <Button
          title="Agendar"
          onPress={handleSubmit(addTurno(data, setShow))}
        />
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  inputs: {borderWidth: 1, width: '90%', padding: 2},
  input: {fontSize: 17, color: 'rgb(0,0,0)', marginTop: 10},
});

export default FormHook;
