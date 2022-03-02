import React from 'react';
import {
  Box,
  Center,
  Stack,
  Heading,
  HStack,
  Image,
  AspectRatio,
  Button,
} from 'native-base';
import {Text, StyleSheet, Alert} from 'react-native';

// eslint-disable-next-line react/prop-types
const Card = ({item = {}, onDelete, onModify}) => {
  const {name, phone, email, date, job, id} = item;

  const eliminarTurno = id => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text: 'Cancelar'},
        {
          text: 'Editar',
          onPress: () => {
            onModify(id);
          },
        },
        {
          text: 'Si, Eliminar',
          onPress: () => {
            onDelete(id);
          },
        },
      ],
    );
  };

  const formater = date => {
    var dayOfWeek = ['Lun', 'Mar', 'Mier', 'Jue', 'Vier', 'Sab', 'Dom'],
      monthName = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Augosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      utc = date.getTime() + date.getTimezoneOffset() * 60000,
      US_time = utc,
      US_date = new Date(US_time);

    return (
      dayOfWeek[US_date.getDay() - 1] +
      ', ' +
      US_date.getDate() +
      ' ' +
      monthName[US_date.getMonth()]
    );
  };

  return (
    <Box alignItems="center" marginTop={10}>
      <Button
        margin={0}
        padding={1}
        bg="#dea5a4"
        _pressed={{bg: 'rgb(0,0,0)'}}
        onPress={() => eliminarTurno(id)}>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1">
          <Box>
            <AspectRatio w="100%" ratio={16 / 11}>
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/photos/white-soft-wool-texture-background-cotton-wool-light-natural-sheep-picture-id942216898?k=6&m=942216898&s=170667a&w=0&h=Cw8WkUyiwviND6h6-avsYYw84FbahZlZV3SGuols-k8=',
                }}
                alt="image"
              />
            </AspectRatio>
            <Center position="absolute" bg="white" bottom="0" px="5" py="7">
              <Text style={estilo.name}>{name}</Text>
              <Stack p="2" space={3}>
                <Stack space={2}>
                  <Heading size="lg">
                    <Text style={estilo.job}> {job}</Text>
                  </Heading>
                </Stack>
                <Text style={estilo.date}>{`${formater(
                  date,
                )} - ${date.toLocaleTimeString()} `}</Text>
                <HStack space={4}>
                  <HStack>
                    <Text style={estilo.phone}>{phone}</Text>
                  </HStack>
                </HStack>
              </Stack>
              <Text style={estilo.email}>{email}</Text>
            </Center>
          </Box>
        </Box>
      </Button>
    </Box>
  );
};

const estilo = StyleSheet.create({
  name: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    marginTop: 5,
  },
  job: {fontSize: 21, fontWeight: 'bold', color: '#dea5a4'},
  date: {fontSize: 15, fontWeight: 'bold', color: 'rgb(0, 0, 0)'},
  phone: {fontSize: 21, fontWeight: 'bold'},
  email: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#005A9C',
    marginBottom: 0,
    paddingBottom: 0,
  },
});

export default Card;
