import { Box } from '@mui/material';
import React from 'react'
import ChatBar from './ChatBar';
import Input from './Input';
import Messages from './Messages';

const Chat = () => {
  return (
    <Box
      sx={{
        flex:2
      }}
    >
      <ChatBar/>
      <Messages/>
      <Input/>
    </Box>
  )
}

export default Chat;