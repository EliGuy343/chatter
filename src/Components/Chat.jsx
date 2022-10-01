import { Box } from '@mui/material';
import React from 'react'
import ChatBar from './ChatBar';

const Chat = () => {
  return (
    <Box
      sx={{
        flex:2
      }}
    >
      <ChatBar/>
    </Box>
  )
}

export default Chat;