import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';

import './LoginView.scss';

const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className="Login__form" onSubmit={handleSubmit} autoComplete="off">
      <label className="Login__label">
        Email:<br></br>
        <input
          className="Login__input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="Login__label">
        Password:<br></br>
        <input
          className="Login__input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </label>
      <br></br>
      <button className="Login__button" type="submit">
        LogIn
      </button>
    </form>
  );
};

export default LoginView;
