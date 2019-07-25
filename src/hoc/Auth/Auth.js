import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default function (ComposedClass, isAuth) {
  class AuthenticationCheck extends Component {

    render() {

      if(isAuth) {
        return <ComposedClass {...this.props} />;
      } else {
        return <Redirect to="/login"/>;
      }
    }
  }

  return AuthenticationCheck;
}