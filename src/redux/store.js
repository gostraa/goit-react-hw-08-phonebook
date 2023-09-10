import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice/ContactsSlice';
import { filterReducer } from './filterSlice/FilterSlice';
import { authReducer } from './authSlice/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);
