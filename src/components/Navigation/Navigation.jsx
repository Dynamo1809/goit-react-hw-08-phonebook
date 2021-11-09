import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

import './Navigation.scss';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink
        exact
        className="Navigation__link"
        to="/"
        activeStyle={{ color: 'red' }}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className="Navigation__link"
          to="/contacts"
          activeStyle={{ color: 'red' }}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
