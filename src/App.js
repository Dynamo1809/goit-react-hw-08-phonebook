import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

// Components //
import AppBar from 'components/AppBar';
const HomeView = lazy(() => import('./components/views/HomeView'));
const RegisterView = lazy(() => import('./components/views/RegisterView'));
const LoginView = lazy(() => import('./components/views/LoginView'));
const ContactsView = lazy(() => import('./components/views/ContactsView'));

export function App() {
  // useEffect(() =>{
    //  window.localStorage.setItem('contacts', JSON.stringify(contacts))
    // },[contacts])

  return (      
    <div className="App">
      <AppBar />
        <Suspense fallback={<p>Загрузка...</p>}>
          <Routes>
            <Route index path="/" element={<HomeView />} />
            <Route index path="register" element={<RegisterView />} />
            <Route path="login" element={<LoginView />} />
            <Route path="contacts" element={<ContactsView />} />
          </Routes>
        </Suspense>
    </div>
  )
};

App.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape()),
  filter: PropTypes.string,
};



{/* <Route exact path="/">
  <HomeView />
</Route>
<Route path="/register">
  <RegisterView />
</Route>
<Route path="/login">
  <LoginView />
</Route>
<Route path="/contacts">
  <ContactsView />
</Route> */}