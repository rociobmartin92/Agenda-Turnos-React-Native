/* eslint-disable react/prop-types */
import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
export const TurnoContext = createContext();
export const TurnoProvider = ({children}) => {
  const [turnos, setTurnos] = useState([]);
  const [modal, setModal] = useState(false);

  const modifyTurno = id => {
    // eslint-disable-next-line no-undef
    console.log('editando..', id);
    setModal(true);
  };
  const deleteTurno = turnoId => {
    const actualizados = turnos.filter(item => item.id !== turnoId);
    setTurnos(actualizados);
  };

  const submitTurno = (
    name,
    phone,
    job,
    date,
    setDate,
    setJob,
    setPhone,
    setName,
  ) => {
    if ([name, phone, job].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
    } else {
      setModal(false);
      const nuevoTurno = {
        id: Date.now(),
        name: name,
        date: date,
        phone: phone,
        job: job,
      };

      setTurnos([...turnos, nuevoTurno]);
    }
    setName('');
    setJob('');
    setDate(new Date());
    setPhone('');
  };

  return (
    <TurnoContext.Provider
      value={{
        turnos,
        setTurnos,
        deleteTurno,
        submitTurno,
        modal,
        setModal,
        modifyTurno
      }}>
      {children}
    </TurnoContext.Provider>
  );
};
