import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getStateToken } from 'redux/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(getStateToken);
  const { state } = useLocation();

  return !isAuth ? children : <Navigate to={state ? state : '/contacts'} />;
};

export default PublicRoute;
