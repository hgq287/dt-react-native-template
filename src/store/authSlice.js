import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  password: null,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user = {}, token },
      },
    ) => {
      state.token = token;
      state.email = user.email;
      state.email = user.password;
    },
  },
})

export const { setCredentials } = authSlice.actions;

export default authSlice.reducer;

export const selectAccessToken = (state) => state.auth.token;