/* eslint-disable no-undef */
import React from 'react';
import {Text, TextInput, Button, StyleSheet} from 'react-native';
import {Box, Center, FormControl, Select, CheckIcon} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schemaValidation = yup.object().shape({
  email: yup.string().email().required(),
  phone: yup.string().required(),
});

const FormHook = prop => {
  var TurnoValue = {
    id: Date.now(),
    name: '',
    phone: '',
    job: '',
    email: '',
    date: new Date(Date.now()),
  };
  const {turno, onSubmit, onEdit} = prop;

  turno && (TurnoValue = turno[0]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schemaValidation),
    defaultValues: TurnoValue,
  });

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

      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <FormControl.Label>
              <Text style={styles.input}>Email:</Text>
            </FormControl.Label>
            <TextInput
              style={styles.inputs}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </>
        )}
        name="email"
      />
      {errors.email && <Text>Email inválido</Text>}

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
                <Select.Item label="Semi" value="Semi" />
                <Select.Item label="Esculpidas" value="Esculpidas" />
                <Select.Item label="Tradicional" value="Tradicional" />
                <Select.Item label="Remoción" value="Remocion" />
              </Select>
            </Box>
          </>
        )}
        name="job"
      />

      <Box marginTop={10}>
        {turno === undefined ? (
          <Button title="Agendar" onPress={handleSubmit(onSubmit)} />
        ) : (
          <Button title="Editar" onPress={handleSubmit(onEdit)} />
        )}
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  inputs: {borderWidth: 1, width: '90%', padding: 2},
  input: {fontSize: 17, color: 'rgb(0,0,0)', marginTop: 10},
});

export default FormHook;
