import React from 'react';
import AddItem from '../AddItem';
import {Box, Image} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import nails from '../../assets/images/nails.jpg';

const Home = () => {
  return (
    <>
      <Box
        marginTop={5}
        alignItems="center"
        justifyContent="center"
        bg="#dea5a4"
        padding={5}>
        <Text style={styles.tit}>Aumeier Uñas</Text>
      </Box>
      <Box alignItems="center">
        <Image source={nails} alt="nails" size={80} marginTop={5} />
      </Box>
      <AddItem />
    </>
  );
};

const styles = StyleSheet.create({
  tit: {fontSize: 50, fontFamily: 'Junitta-BW55G'},
});
export default Home;
