import { Avatar, Box, Typography } from '@mui/material'
import { doc, onSnapshot} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { db } from '../firebase';
import { changeUserChat } from '../store';

const Chats = () => {
  const [chats, setChats] = useState([]);
  const currentUser = useSelector(state=>state.user.user);
  const dispatch = useDispatch();

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

  const handleSelect = (user) => {
    dispatch(changeUserChat({
      user,
      chatId: currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid
    }));
  }

  return (
    <Box>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) =>{
        return(
        <Box
        onClick={() => handleSelect(chat[1].userInfo)}
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
              {chat[1].lastMessage?.text}
            </Typography>
          </Box>
        </Box>
      )})}
    </Box>
  )
}

export default Chats