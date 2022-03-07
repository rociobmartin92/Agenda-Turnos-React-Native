/* eslint-disable react/prop-types */
import React, {createContext, useState} from 'react';
export const TurnoContext = createContext();
export const TurnoProvider = ({children}) => {
  const [turnos, setTurnos] = useState([]);
  const [turno, setTurno] = useState();

  const deleteTurno = turnoId => {
    const actualizados = turnos.filter(item => item.id !== turnoId);
    setTurnos(actualizados);
  };

  // const submitTurno = (
  //   name,
  //   phone,
  //   job,
  //   date,
  //   setDate,
  //   setJob,
  //   setPhone,
  //   setName,
  // ) => {
  //   if ([name, phone, job].includes('')) {
  //     Alert.alert('Error', 'Todos los campos son obligatorios');
  //   } else {
  //     setModal(false);
  //     const nuevoTurno = {
  //       id: Date.now(),
  //       name: name,
  //       date: date,
  //       phone: phone,
  //       job: job,
  //     };

  //     setTurnos([...turnos, nuevoTurno]);
  //   }
  //   setName('');
  //   setJob('');
  //   setDate(new Date());
  //   setPhone('');
  // };

  return (
    <TurnoContext.Provider
      value={{
        turnos,
        setTurnos,
        deleteTurno,
        turno,
        setTurno,
      }}>
      {children}
    </TurnoContext.Provider>
  );
};
