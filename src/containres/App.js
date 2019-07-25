import React, {Component} from 'react';
import {Redirect, Route, Switch, HashRouter} from 'react-router-dom';
//
import './App.scss';
//
import Scan from "../pages/Scan/Scan";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import Result from "../pages/Result/Result";
import Navigation from "../components/Navigation/Navigation";
import Auth from '../hoc/Auth/Auth';

const storageKey = 'jwt';

class App extends Component {

  state = {
    isAuth: false
  };

  componentDidMount() {

    const isAuth = localStorage.getItem(storageKey);

    if (isAuth) {
      this.setState({isAuth});

    } else {
      this.setState({isAuth: false});
    }
  }

  handleAuth = (isAuth) => {
    this.setState({isAuth});
  };

  render() {
    const {isAuth} = this.state;

    return (
      <HashRouter basename="/">
        <div>
          <Navigation isAuth={isAuth}/>
          <div className="container mt-4">
            <Switch>
              <Route path="/scan" component={Auth(Scan, isAuth)}/>
              <Route path="/result" component={Auth(Result, isAuth)}/>
              {isAuth ?
                <Route path="/logout"
                       component={(props) => (
                         <Logout storageKey={storageKey} setAuth={this.handleAuth} {...props} />
                       )}/>
                :
                <Route path="/login"
                       component={(props) => (
                         <Login storageKey={storageKey} setAuth={this.handleAuth} {...props} />
                       )}/>
              }
              <Redirect to="/scan"/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
