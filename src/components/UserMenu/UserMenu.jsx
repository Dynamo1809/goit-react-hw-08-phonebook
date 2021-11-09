import { useSelector, useDispatch } from 'react-redux';

import { authSelectors, authOperations } from 'redux/auth';

import './UserMenu.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className="UserMenu__container">
      <span className="UserMenu__text">Welcome, {name}</span>
      <button
        className="UserMenu__button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
