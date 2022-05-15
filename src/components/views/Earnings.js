/* eslint-disable no-undef */
import React, {useContext} from 'react';
import {Box, Button, Divider, Image} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import ok from '../../assets/images/ok.png';
import {useNavigation} from '@react-navigation/native';
import {TurnoContext} from '../../context/TurnoContext';

const EarningsMap = {
  Semi: 900,
  Remocion: 250,
  Tradicional: 400,
  Esculpidas: 1300,
};

const Earnings = () => {
  const {turnos} = useContext(TurnoContext);

  let valores = turnos.map(el => el.job);
  console.log(valores);

  let transform = turnos.map(el => {
    const value = EarningsMap[el] || 0;
    console.log(value);
    return value;
  });
  console.log(transform);
  const Nav = useNavigation();
  return (
    <Box
      flex={1}
      justifyContent="center"
      borderColor="#1c2841"
      borderWidth={20}>
      <Box alignItems="center">
        <Text style={styles.tit}> ~ Mis Ganancias ~ </Text>
      </Box>
      <Box marginLeft={10} marginRight={10}>
        <Text style={styles.sub}> Hoy: </Text>
        <Divider my="3" bg="#700000" />
        <Text style={styles.sub}> Semanal: </Text>
        <Divider my="3" bg="#700000" />
        <Text style={styles.sub}> Mensual: </Text>
      </Box>
      <Box alignItems="center" marginTop={5}>
        <Button
          _pressed={{bg: 'transparent'}}
          bg="transparent"
          onPress={() => Nav.navigate('home')}>
          <Image source={ok} alt="OKicon" size={10} marginTop={10} />
        </Button>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  tit: {
    fontSize: 35,
    fontFamily: 'HandyQuomteRegular-6YLLo',
    color: '#700000',
    marginBottom: 35,
  },
  sub: {
    fontSize: 28,
    marginLeft: 10,
    color: 'black',
    fontFamily: 'HandyQuomteRegular-6YLLo',
  },
});

export default Earnings;
