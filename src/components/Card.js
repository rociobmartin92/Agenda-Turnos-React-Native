/* eslint-disable no-undef */
import React, {useContext} from 'react';
import {TurnoContext} from '../context/TurnoContext';
import {
  Box,
  Center,
  Stack,
  Heading,
  Text,
  HStack,
  Image,
  AspectRatio,
} from 'native-base';

const Card = () => {
  const {name, date, phone, job} = useContext(TurnoContext);

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
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1">
        <Box>
          <AspectRatio w="100%" ratio={16 / 10}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/photos/white-soft-wool-texture-background-cotton-wool-light-natural-sheep-picture-id942216898?k=6&m=942216898&s=170667a&w=0&h=Cw8WkUyiwviND6h6-avsYYw84FbahZlZV3SGuols-k8=',
              }}
              alt="image"
            />
          </AspectRatio>
          <Center position="absolute" bg="white" bottom="0" px="3" py="3">
            <Text marginTop={2} fontSize="lg">
              {`Nombre: ${name}`}
            </Text>
            <Stack p="2" space={3}>
              <Stack space={2}>
                <Heading size="lg">
                  <Text> {job}</Text>
                </Heading>
              </Stack>
              <Text fontWeight="400">{`${formater(
                date,
              )} - ${date.toLocaleTimeString()} `}</Text>
              <HStack space={4}>
                <HStack>
                  <Text fontWeight="400">{`Teléfono: ${phone}`}</Text>
                </HStack>
              </HStack>
            </Stack>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
