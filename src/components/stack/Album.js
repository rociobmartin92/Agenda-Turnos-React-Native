/* eslint-disable no-undef */
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {Box, Image, Button} from 'native-base';
import plus from '../../assets/images/plus.jpg';

const Album = () => {
  const openCamera = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
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
    </Box>
  );
};

export default Album;
