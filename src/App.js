import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import {changeUserState} from './store/index'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(user)=>{
      if(user) {
        dispatch(changeUserState({
          accessToken:user.accessToken,
          displayName:user.displayName,
          email:user.email,
          uid:user.uid,
          photoURL:user.photoURL
        }));
      }
      else {
        dispatch(changeUserState({}));
      }
    });

    return () => {
      unsub();
    }
  },[]);

  const user = useSelector(state =>state.user.user);
  console.log(user);
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route index element={<Home/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
