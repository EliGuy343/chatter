import {configureStore, createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      loading:true,
      accessToken:null,
      displayName:null,
      email:null,
      uid:null,
      photoURL:null
    }
  },
  reducers: {
    LoginUser(state, action) {
      state.user = action.payload;
      state.user.loading = false;
    },
    LogoutUser(state) {
      state.user = {
          loading:false,
          accessToken:null,
          displayName:null,
          email:null,
          uid:null,
          photoURL:null
        }
    }
  }
});

export const {LoginUser, LogoutUser} = userSlice.actions;

export const store = configureStore({
  reducer: {
  user: userSlice.reducer
  }
});