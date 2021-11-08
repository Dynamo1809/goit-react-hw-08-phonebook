import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contacts">Phonebook</NavLink>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default AppBar;
