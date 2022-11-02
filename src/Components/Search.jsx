import { Avatar, Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";
import { db } from '../firebase';
import { useSelector} from 'react-redux';

const Search = () => {
  const currentUser = useSelector(state=>state.user.user);
  const [username, setUsername] = useState();
  const [user, setUser] = useState();
  const [err, setErr] = useState();

  const handeSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username
    ));
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    }
    catch (err) {
      console.log(err);
      setErr(err);
    }
  }

  const handleSelect = async () => {
    const combineId =
    currentUser.uid > user.uid
    ? currentUser.uid + user.uid
    : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combineId));
      if(!res.exists()) {
        await setDoc(doc(db, "chats", combineId), {messages:[]});

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combineId+".userInfo"]:{
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combineId+".date"]: serverTimestamp()});

        await updateDoc(doc(db, "userChats", user.uid), {
          [combineId+"userInfo"]:{
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combineId+".date"]: serverTimestamp()});
          setUser(null);
          setUsername("");
      }
    }
    catch (err) {
      console.log(err);
      setErr(err);
    }

  }
  const handleKey = (e) => {
    e.code === "Enter" && handeSearch();
  }

  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        borderBottom:'2px dotted #555555'
      }}
    >
      <Box>
      <TextField
        label="Find a user"
        variant="filled"
        sx={{
          marginTop:'3px',
          width:'100%',
          color:'white',
          input:{
            color:'white'
          }
        }}
        onChange={(e) => setUsername(e.target.value)}
        onKeyDown={handleKey}
        value={username}
      />
      </Box>
      {err && <Typography>User not Found</Typography>}
      {user && <Box
        sx={{
          padding:'5px',
          display:'flex',
          alignItems:'center',
          gap:2,
          '&:hover':{
            backgroundColor:'#414970'
          }
        }}
        onClick={handleSelect}
      >
        <Avatar alt={user.displayName} src={user.photoURL}/>
        <Typography
          sx={{
            fontSize:'15px',
            fontWeight:'600'
          }}
        >
          {user.displayName}
        </Typography>
      </Box>}
    </Box>
  )
}

export default Search;