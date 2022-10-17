import { Avatar, Box, Typography } from '@mui/material'
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../firebase';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const currentUser = useSelector(state=>state.user.user);

  useEffect(()=>{
    const getchats = () =>{
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) =>{
          setChats(doc.data());
      });

      return () =>{
        unsub();
      };
    }
    currentUser.uid && getchats();
  },[currentUser.uid]);
  console.log(chats);
  return (
    <Box>
      {Object.entries(chats)?.map((chat) =>{
        return(
        <Box
          sx={{
            padding:'5px',
            display:'flex',
            alignItems:'center',
            gap:2,
            '&:hover':{
              backgroundColor:'#414970'
            }
          }}
          key={chat[0]}
        >
          <Avatar
            alt={chat[1].userInfo.displayName}
            src={chat[1].userInfo.photoURL}
          />
          <Box
            sx={{
              display:'flex',
              flexDirection:'column',
              alignItems:'start'
            }}
          >
            <Typography
              sx={{
                fontSize:'15px',
                fontWeight:'600'
              }}
            >
              {chat[1].userInfo.displayName}
            </Typography>
            <Typography
              sx={{
                fontSize:'12px',
                color:'#777777'
              }}
            >
              {chat[1].userInfo.lastMessage?.text}
            </Typography>
          </Box>
        </Box>
      )})}
    </Box>
  )
}

export default Chats