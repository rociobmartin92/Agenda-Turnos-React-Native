import React, {createContext, useState} from 'react';

export const TurnoContext = createContext({});

export const TurnoProvider = ({children}) => {
  const [name, setName] = useState("");
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [phone, setPhone] = useState('');
  const [job, setJob] = useState(null);

  return (
    <TurnoContext.Provider
      value={{
        name, setName,
        day,
        setDay,
        month,
        setMonth,
        hour,
        setHour,
        phone,
        setPhone,
        job,
        setJob,
      }}>
      {children}
    </TurnoContext.Provider>
  );
};
