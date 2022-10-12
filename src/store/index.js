import {configureStore, createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      accessToken:null,
      displayName:null,
      email:null,
      uid:null,
      photoURL:null
    }
  },
  reducers: {
    changeUserState(state, action) {
      state.user = action.payload;
    },
  }
});

export const {changeUserState} = userSlice.actions;

export const store = configureStore({
  reducer: {
  user: userSlice.reducer
  }
});