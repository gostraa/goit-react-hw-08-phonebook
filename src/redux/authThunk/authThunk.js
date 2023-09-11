import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getProfile,
  logOut,
  login,
  register,
  setToken,
} from 'services/auth-service';
import { toast } from 'react-toastify';

export const registerThunk = createAsyncThunk('auth/register', async body => {
  try {
    return await register(body);
  } catch (error) {
    return toast.error('The user already exists.');
  }
});

export const loginThunk = createAsyncThunk('auth/login', async body => {
  try {
    return await login(body);
  } catch (error) {
    return toast.error('Invalid email or password.');
  }
});

export const getProfileThunk = createAsyncThunk('auth/profile', async () => {
  try {
    return await getProfile();
  } catch (error) {
    return toast.error(error.message);
  }
});

export const logOutThunk = createAsyncThunk('auth/logOut', async () => {
  try {
    return await logOut();
  } catch (error) {
    return toast.error(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const stateThunk = thunkAPI.getState();
    const token = stateThunk.auth.token;

    if (!token) return;

    try {
      setToken(token);
      return await getProfile();
    } catch (error) {
      return toast.error(error.message);
    }
  }
);
