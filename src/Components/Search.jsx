import { Avatar, Box, formGroupClasses, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from '../firebase';
const Search = () => {
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