import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'redux/contactsThunk/contactsThunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getContactsThunk.pending]: state => {
      state.isLoading = true;
    },
    [getContactsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    [getContactsThunk.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },

    [addContactThunk.pending]: state => {
      state.isLoading = true;
    },

    [addContactThunk.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
      state.isLoading = false;
    },
    [addContactThunk.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },

    [deleteContactThunk.pending]: state => {
      state.isLoading = true;
    },
    [deleteContactThunk.fulfilled]: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContactThunk.rejected]: (state, action) => {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
