import React from 'react';
import {NavLink} from 'react-router-dom';
//
import './navigation.scss';

const Navigation = (props) => {

  //if need result page rout
  // const isResultActive = (match, location) => location.pathname.match('result');

  const loginLogoutLinks = () => {
    const pathTo = props.isAuth ? '/logout' : '/login';
    const text = props.isAuth ? 'Logout' : 'Login';

    return (
      <li className="nav-item">
        <NavLink to={pathTo}
                 className="nav-link"
                 activeClassName="active">{text}</NavLink>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/scan"
                       className="nav-link"
                       activeClassName="active">Scan</NavLink>
            </li>
            {loginLogoutLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;