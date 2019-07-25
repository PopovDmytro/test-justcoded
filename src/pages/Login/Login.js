import React from 'react';
import {Base64} from "js-base64";
//
import Form from "../../components/Form/Form";

const Login = (props) => {

  const inputs = [
    {
      id: 'login',
      placeholder: 'Login',
      type: 'text',
      name: 'login',
    },
    {
      id: 'password',
      placeholder: 'Password',
      type: 'password',
      name: 'password',
    }
  ];

  const handleWriteDataToStorage = (login, password) => {

    if (login && password) {
      const encodedLoginPassword = Base64.encode(`${login}:${password}`);
      localStorage.setItem(props.storageKey, encodedLoginPassword);

      //change state
      props.setAuth(true);
      //redirect to scan page
      props.history.push('/scan');
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <h1 className="text-center">Login</h1>
      </div>
      <div className="col-md-6 col-lg-4">
        <Form inputs={inputs}
              writeDataToStorage={handleWriteDataToStorage}/>
      </div>
    </div>
  );
};

export default Login;