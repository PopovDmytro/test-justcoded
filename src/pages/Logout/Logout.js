import React from 'react';
import {Redirect} from 'react-router-dom';

const Logout = ({storageKey, setAuth}) => {

  localStorage.removeItem(storageKey);

  setAuth(false);

  return <Redirect to="/login"/>;
};

export default Logout;