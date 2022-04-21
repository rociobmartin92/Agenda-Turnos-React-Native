/* eslint-disable no-undef */
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {FlatList, Text, StyleSheet} from 'react-native';
import {Box, Image, Button, Center} from 'native-base';
import plus from '../../assets/images/plus.jpg';

const Album = () => {
  const [imagenes, setImagenes] = useState([]);

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

  const eliminarFoto = imagen => {
    const nuevoArrayImagenes = imagenes.filter(id => id !== imagen);
    setImagenes(nuevoArrayImagenes);
  };
  return (
    <Box>
      <Box>
        <FlatList
          ListEmptyComponent={<Text style={styles.texto}>No hay fotos</Text>}
          data={imagenes}
          renderItem={({item}) => {
            return (
              <Center>
                <Button
                  bg="#a67b5b"
                  padding={0}
                  margin={4}
                  onPress={() => eliminarFoto(item)}
                  _pressed={{bg: '#EBE0C6'}}>
                  <Image
                    source={{uri: item}}
                    alt="imagenes clientas"
                    size={80}
                    margin={3}
                  />
                </Button>
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

const styles = StyleSheet.create({
  texto: {
    fontFamily: 'Junitta-BW55G',
    alignSelf: 'center',
    fontSize: 50,
    marginTop: 50,
  },
});

export default Album;
