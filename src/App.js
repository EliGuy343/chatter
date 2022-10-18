import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {LoginUser, LogoutUser} from './store/index'
import { Typography } from '@mui/material';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(user)=>{
      if(user) {
        dispatch(LoginUser({
          accessToken:user.accessToken,
          displayName:user.displayName,
          email:user.email,
          uid:user.uid,
          photoURL:user.photoURL
        }));
      }
      else {
        dispatch(LogoutUser());
      }
    });

    return () => {
      unsub();
    }
  },[]);

  const user = useSelector(state =>state.user.user);

  const ProtectedRoute = ({children}) => {
    if(user.loading) {
      return (
        <Typography>
          Loading...
        </Typography>
      );
    }
    if(!user.accessToken) {
      return <Navigate to='/login'/>
    }
    return children;
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }
        />
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
