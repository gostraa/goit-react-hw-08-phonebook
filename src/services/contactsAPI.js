import { instance } from './auth-service';

export const fetchGetContacts = async () => {
  const { data } = await instance('/contacts');
  return data;
};

export const fetchAddContact = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

export const fetchDeleteContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};
