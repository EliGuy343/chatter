import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

//TODO: When it's the user message change color of message background,
//JustifyContent to End and flexDirection to row-reverse

const userDisplay = {
  display:'flex',
  flexDirection:'row-reverse',
  justifyContent:'End',
  alignItems: 'top',
  gap:'20px',
  marginBottom:'20px',
}

const senderDisplay = {
  display:'flex',
  flexDirection:'row',
  justifyContent:'start',
  alignItems: 'top',
  gap:'20px',
  marginBottom:'20px',
}

const Message = ({message}) => {
  const currentUser = useSelector(state=> state.user.user)
  const chat = useSelector(state => state.chat)
  console.log(message)
  return (
    <Box
      sx={message.senderId === currentUser.uid
        ? userDisplay
        : senderDisplay
      }
    >
      <Box
        sx={{
          width:'40px',
          height:'40px',
          borderRadius:'50%',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
        }}
      >
        <Avatar
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : chat.user.photoURL
          }
          sx={{
            boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"
          }}
        />
        <Typography
          sx={{
            color:'#777777',
            fontWeight:'300',
            fontSize:"12px",
            marginLeft:'8px'
          }}
        >
          Just now
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth:'80%',
          display:'flex',
          flexDirection:'column',
          gap: '10px'
        }}
      >
        <Typography
          sx={{
            backgroundColor:'#32344d',
            color:'white',
            padding:'14px',
            borderRadius:'20px',
            fontSize:'14px',
            boxShadow:"0 3px 10px rgb(0 0 0 / 0.2)"
          }}
        >
          {message.text}
        </Typography>
        {message.img && <img
          src={message.img}
          style={{
            width:'50%'
          }}
        />}
      </Box>
    </Box>
  )
}

export default Message