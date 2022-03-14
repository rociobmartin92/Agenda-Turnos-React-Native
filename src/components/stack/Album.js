/* eslint-disable no-undef */
import React, {useState, useContext} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {FlatList} from 'react-native';
import {Box, Image, Button, HStack, Center, Heading} from 'native-base';
import plus from '../../assets/images/plus.jpg';
import {TurnoContext} from '../../context/TurnoContext';

const Album = () => {
  const [imagenes, setImagenes] = useState([]);
  const {turnos} = useContext(TurnoContext);

  let fechas = turnos.map(el => el.date);
  console.log(fechas);

  const openCamera = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      setImagenes([...imagenes, image.path]);
      console.log(imagenes);
    });
  };

  return (
    <Box>
      <Box>
        <FlatList
          ListEmptyComponent={
            <Heading marginTop={20} alignSelf="center">
              No hay fotos para mostrar
            </Heading>
          }
          data={imagenes}
          renderItem={({item}) => {
            return (
              <Center>
                <HStack space={3} justifyContent="center">
                  <Image
                    source={{uri: item}}
                    alt="imagenes clientas"
                    size="xl"
                    margin={5}
                    borderWidth={5}
                    borderColor="black"
                  />
                </HStack>
              </Center>
            );
          }}
          keyExtractor={item => item}
        />
      </Box>
      <Button
        onPress={() => openCamera()}
        bg="transparent"
        position="absolute"
        marginTop={620}
        marginLeft={250}
        _pressed={{bg: 'transparent'}}>
        <Image source={plus} alt="Agregar Foto" size={16} />
      </Button>
    </Box>
  );
};

export default Album;
