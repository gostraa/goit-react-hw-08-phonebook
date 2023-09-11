import {
  getProfileThunk,
  logOutThunk,
  loginThunk,
  refreshThunk,
  registerThunk,
} from 'redux/authThunk/authThunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  profile: null,
};

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.token = payload.token;
  state.profile = payload.user;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
};

const handleFulfilledProfile = (state, { payload }) => {
  state.isLoading = false;
  state.error = '';
  state.profile = payload;
};

const handlelogOut = state => {
  state.token = '';
  state.isLoading = false;
  state.profile = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
      .addCase(logOutThunk.fulfilled, handlelogOut)
      .addCase(loginThunk.fulfilled, handleFulfilled)
      .addCase(registerThunk.fulfilled, handleFulfilled)
      .addCase(refreshThunk.fulfilled, handleFulfilledProfile)
      .addCase(loginThunk.pending, handlePending)
      .addCase(getProfileThunk.pending, handlePending)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(getProfileThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
