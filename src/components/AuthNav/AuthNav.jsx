import { NavLink } from 'react-router-dom';

const styles = {
  activeLink: '#3f51b5',
};

const AuthNav = () => {
  return (
    <>
      <NavLink to="/register" activeStyle={styles.activeLink}>
        Sign up
      </NavLink>
      <NavLink to="/login" activeStyle={styles.activeLink}>
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
