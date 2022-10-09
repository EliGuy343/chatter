import { Box } from '@mui/material'
import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'self-start',
        backgroundColor:'#24234a',
        padding:'10px',
        height:'calc(100% - 155px)',
      }}
    >
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </Box>
  )
}

export default Messages