import { NavLink } from 'react-router-dom';

import './AuthNav.scss';

const styles = {
  activeLink: '#3f51b5',
};

const AuthNav = () => {
  return (
    <div className="AuthNav__container">
      <NavLink className="AuthNav__link" to="/register" activeStyle={styles.activeLink}>
        Sign up
      </NavLink>
      <NavLink className="AuthNav__link" to="/login" activeStyle={styles.activeLink}>
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
