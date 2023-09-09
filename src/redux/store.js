import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/ContactsSlice';
import { filterReducer } from './filterSlice/FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
