import { useEffect, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Components //
import { authOperations, authSelectors } from 'redux/auth';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import AppBar from 'components/AppBar';
const HomeView = lazy(() => import('./components/views/HomeView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));
const LoginView = lazy(() => import('./components/views/LoginView'));
const ContactsView = lazy(() => import('./components/views/ContactsView'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() =>{
    dispatch(authOperations.getCurrentUser())
  },[dispatch])

  return (      
    !isFetchingCurrentUser && (<div className="App">
      <AppBar />
        <Suspense fallback={<p>Загрузка...</p>}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" restricted redirectTo='/contacts'>
              <LoginView />
            </PublicRoute>
          <PrivateRoute exact path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
          </Switch>
        </Suspense>
    </div>
    )
  )
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  filter: PropTypes.string,
};