/* eslint-disable no-undef */
import React from 'react';
import {Text, TextInput, Button, StyleSheet} from 'react-native';
import {Box, Center, FormControl, Select, CheckIcon} from 'native-base';
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
  const {turno = defaultTurno, onSubmit} = prop;

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
          render={({field: {onChange, value}}) => (
            <DatePicker
              minimumDate={new Date()}
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
        render={({field: {onChange, value}}) => (
          <>
            <FormControl.Label>
              <Text style={styles.input}>Trabajo:</Text>
            </FormControl.Label>
            <Box w="3/4" maxW="300">
              <Select
                selectedValue={value}
                placeholder="Elige el Servicio"
                _selectedItem={{
                  bg: '#dea5a4',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={job => onChange(job)}>
                <Select.Item label="Semi" value="sem" />
                <Select.Item label="Esculpidas" value="esc" />
                <Select.Item label="Tradicional" value="tra" />
                <Select.Item label="Remocion" value="rem" />
              </Select>
            </Box>
          </>
        )}
        name="job"
      />

      <Box marginTop={10}>
        <Button title="Agendar" onPress={handleSubmit(onSubmit)} />
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  inputs: {borderWidth: 1, width: '90%', padding: 2},
  input: {fontSize: 17, color: 'rgb(0,0,0)', marginTop: 10},
});

export default FormHook;
