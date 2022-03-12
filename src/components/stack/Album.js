/* eslint-disable no-undef */
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Box, Image, Button} from 'native-base';
import plus from '../../assets/images/plus.jpg';

const fotos = [
  {nombre: 'Rocio', situacion: 'Totalmente enamorado'},
  {nombre: 'Belen', situacion: 'No puedo sentir nada'},
];

const Album = () => {
  // const [foto, setFoto] = useState([]);

  // eslint-disable-next-line react/prop-types

  const openCamera = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image.path);
    });
  };

  return (
    <Box>
      <Button
        onPress={() => openCamera()}
        bg="transparent"
        position="absolute"
        marginTop={620}
        marginLeft={250}
        _pressed={{bg: 'transparent'}}>
        <Image source={plus} alt="Agregar Foto" size={16} />
      </Button>
      <Box>
        <FlatList
          ListEmptyComponent={<Text>No hay fotos para mostrar</Text>}
          data={fotos}
          renderItem={({item}) => {
            return (
              <Box>
                <Text> {item.nombre} </Text>
                <Text> {item.situacion} </Text>
              </Box>
            );
          }}
          keyExtractor={item => item.nombre}
        />
      </Box>
    </Box>
  );
};

export default Album;
