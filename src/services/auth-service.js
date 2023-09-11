import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export const register = async body => {
  const response = await instance.post('/users/signup', body);
  setToken(`Bearer ${response.data.token}`);
  return response.data;
};

export const login = async body => {
  const response = await instance.post('/users/login', body);
  setToken(`Bearer ${response.data.token}`);
  return response.data;
};

export const getProfile = async () => {
  const { data } = await instance('/users/current');
  return data;
};

export const logOut = async () => {
  instance.post('/users/logout');
  deleteToken();
};
