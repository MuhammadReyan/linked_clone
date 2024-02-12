import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.status = 'fulfilled';
    },
    logOut: (state) => {
      state.user = null;
      state.status = 'idle';
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = 'error';
    },
    clearError: (state) => {
      state.error = null;
      state.status = 'idle';
    },
  },
});

export const { login, logOut, setError, clearError } = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;
export const selectError = (state) => state.user.error;

// Reducer
export default userSlice.reducer;
