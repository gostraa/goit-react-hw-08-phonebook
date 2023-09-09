import axios from 'axios';

const BASE_URL = 'https://64f8900f824680fd217fc5fc.mockapi.io';

export const fetchGetContacts = async () => {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  return data;
};

export const fetchAddContact = async contact => {
  const { data } = await axios.post(`${BASE_URL}/contacts`, contact);
  return data;
};

export const fetchDeleteContact = async id => {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
  return data;
};
