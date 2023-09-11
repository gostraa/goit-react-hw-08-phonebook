import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { logOutThunk } from 'redux/authThunk/authThunk';
import { deleteToken } from 'services/auth-service';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #55778e;
  padding: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  margin-right: 20px;
  font-size: 24px;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Email = styled.p`
  color: #fff;
`;

const LogoutButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;

const SuspenseFallback = styled.div`
  text-align: center;
  font-size: 20px;
  color: #333;
`;

const Header = () => {
  const { profile } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    navigate('/');
    deleteToken();
  };

  return (
    <>
      <HeaderContainer>
        {!profile && <NavItem to={'/'}>Home</NavItem>}
        {profile && (
          <ProfileInfo>
            <Email>{profile.email}</Email>
            <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
          </ProfileInfo>
        )}
      </HeaderContainer>
      <Suspense fallback={<SuspenseFallback>Loading...</SuspenseFallback>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
