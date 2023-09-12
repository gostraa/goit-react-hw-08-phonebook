import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { logOutThunk } from 'redux/authThunk/authThunk';
import { getStateAuth } from 'redux/selectors';
import { deleteToken } from 'services/auth-service';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(to bottom, #446479, #ffffff);
  padding: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #000000;
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
  color: #000000;
  font-size: 20px;
`;

const LogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid #e74c3c;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.5s ease-in-out;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #c0392b;
    transition: background-color 0.3s ease-in-out;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.4);
  }
`;

const SuspenseFallback = styled.div`
  text-align: center;
  font-size: 20px;
  color: #333;
`;

const Header = () => {
  const { profile } = useSelector(getStateAuth);
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
