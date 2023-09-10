import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';

import { getProfileThunk, logOutThunk } from 'redux/authThunk/authThunk';

const Header = () => {
  // const isAuth = useSelector(state => state.auth.token);
  const { profile, token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  useEffect(() => {
    token && dispatch(getProfileThunk());
  }, [token, dispatch]);

  return (
    <>
      <header>
        <nav>
          <NavLink to={'/welcome'}>Home</NavLink>
          {profile && (
            <div>
              <p>{profile.email}</p>
              <button onClick={handleLogOut}>Logout</button>
            </div>
          )}
        </nav>
      </header>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;