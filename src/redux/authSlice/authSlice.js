import {
  getProfileThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
} from 'redux/authThunk/authThunk';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

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
      .addMatcher(
        isAnyOf(loginThunk.fulfilled, registerThunk.fulfilled),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(loginThunk.pending, getProfileThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(loginThunk.rejected, getProfileThunk.rejected),
        handleRejected
      );
  },
});

export const authReducer = authSlice.reducer;
