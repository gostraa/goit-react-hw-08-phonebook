import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchGetContacts,
  fetchAddContact,
  fetchDeleteContact,
} from '../../services/contactsAPI';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    try {
      const data = await fetchGetContacts();
      return data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await fetchAddContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchDeleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
