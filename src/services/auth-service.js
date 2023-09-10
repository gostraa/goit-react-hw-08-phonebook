import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers.common['Authorization'] = token;
};

export const deleteToken = () => {
  delete instance.defaults.headers.common['Authorization'];
};

export const register = async body => {
  return await instance.post('/users/signup', body);
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
  await instance.post('/users/logout');
  deleteToken();
};
