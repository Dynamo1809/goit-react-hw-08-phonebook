import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from 'redux/auth';

const styles = {
  form: {
    width: 320,
    padding: 10,
    border: '#3f51b5 solid 2px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
};

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
    <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label style={styles.label}>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <label style={styles.label}>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">LogIn</button>
    </form>
  );
};

export default LoginView;
