import { Box } from '@mui/material'
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { db } from '../firebase';
import Message from './Message'

const Messages = () => {
  let unSub;
  const [messages, setMessages] = useState([]);
  const chatId = useSelector(state=>state.chat.chatId);
  useEffect(() => {
    if(chatId) {
      unSub = onSnapshot(doc(db, "chats", chatId), (doc)=>{
        doc.exists() && setMessages(doc.data().messages)
      })
    }
    return () => {
      if(unSub)
        unSub()
    }
  }, [chatId])

  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#24234a',
        overflow:'scroll',
        padding:'10px',
        height:'calc(100% - 155px)',
      }}
    >
      {messages.map((m) => {
        return <Message message={m} key={m.id}/>
      })}
    </Box>
  )
}

export default Messages