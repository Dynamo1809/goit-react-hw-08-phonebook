import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const styles = {
  activeLink: '#3f51b5',
};

const Navigation = () => {
  return (
    <nav>
      <NavLink
        className="Navigation__link"
        to="/"
        activetyle={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        className="Navigation__link"
        to="/contacts"
        activeStyle={styles.activeLink}
      >
        Phonebook
      </NavLink>
    </nav>
  );
};

export default Navigation;
