import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import './RegisterView.scss';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className="Register__form" onSubmit={handleSubmit} autoComplete="off">
      <label className="Register__label">
        Name:<br></br>
        <input
          className="Register__input"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label className="Register__label">
        Email:<br></br>
        <input
          className="Register__input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="Register__label">
        Password:<br></br>
        <input
          className="Register__input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
      </label>
      <button className="Register__button" type="submit">
        Sign up
      </button>
    </form>
  );
};

export default RegisterView;
