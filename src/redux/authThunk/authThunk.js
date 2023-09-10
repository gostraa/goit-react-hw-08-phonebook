import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfile, logOut, login } from 'services/auth-service';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  return await login(body);
});

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  return await getProfile();
});

export const logOutThunk = createAsyncThunk('auth/logOut', async () => {
  return await logOut();
});
