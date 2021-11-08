import { NavLink } from 'react-router-dom';

const styles = {
  activeLink: '#3f51b5',
};

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" activeStyle={styles.activeLink}>
        Home
      </NavLink>
      <NavLink to="/contacts" activeStyle={styles.activeLink}>
        Phonebook
      </NavLink>
    </nav>
  );
};

export default Navigation;
