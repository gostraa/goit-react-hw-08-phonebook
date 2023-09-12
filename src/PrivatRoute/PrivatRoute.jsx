import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getStateToken } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(getStateToken);
  const location = useLocation();
  return isAuth ? children : <Navigate to="/" state={location} />;
};

export default PrivateRoute;
