import React from 'react';
import { useAppContext } from '../exports/context';

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  console.log(alertType);
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};

export default Alert;
