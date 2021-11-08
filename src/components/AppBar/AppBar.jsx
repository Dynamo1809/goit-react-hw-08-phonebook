import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from 'redux/auth';

const AppBar = () => {
  return (
    <header>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
};

export default AppBar;
