import { NavLink } from 'react-router-dom';

import './AuthNav.scss';

const AuthNav = () => {
  return (
    <div className="AuthNav__container">
      <NavLink
        className="AuthNav__link"
        to="/register"
        activeStyle={{ color: 'red' }}
      >
        Sign up
      </NavLink>
      <NavLink
        className="AuthNav__link"
        to="/login"
        activeStyle={{ color: 'red' }}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
