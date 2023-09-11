import PrivateRoute from 'PrivatRoute/PrivatRoute';
import PublicRoute from 'PublicRoute/PublicRoute';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshThunk } from 'redux/authThunk/authThunk';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = lazy(() => import('./userMenu/UserMenu'));
const Register = lazy(() => import('pages/Register/Register'));
const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div className="app">
      {' '}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route
              index
              element={
                <PublicRoute>
                  <WelcomePage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
};
