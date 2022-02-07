/* eslint-disable react/prop-types */
import React, {createContext, useState} from 'react';
export const TurnoContext = createContext();
export const TurnoProvider = ({children}) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');
  const [turnos, setTurnos] = useState([]);

  return (
    <TurnoContext.Provider
      value={{
        id,
        setId,
        name,
        phone,
        setPhone,
        date,
        setDate,
        job,
        setName,
        setJob,
        turnos,
        setTurnos,
      }}>
      {children}
    </TurnoContext.Provider>
  );
};
