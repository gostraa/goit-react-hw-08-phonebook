import Contacts from 'pages/Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';
import Header from './userMenu/UserMenu';
import Register from 'pages/Register/Register';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import Login from 'pages/Login/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<WelcomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};
