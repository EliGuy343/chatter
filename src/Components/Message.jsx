import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

//TODO: When it's the user message change color of message background,
//JustifyContent to End and flexDirection to row-reverse

const Message = () => {
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'row',
        justifyContent:'start',
        alignItems: 'top',
        gap:'20px',
        marginBottom:'20px',
      }}
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
          alt='Obi Wan Kenobi'
          src='/static/obiwan.jpg'
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
          Let's write something longer and see what it's like.
          Maybe a little more?
        </Typography>
        <img
          src='https://image.shutterstock.com/image-vector/sample-stamp-rubber-style-red-260nw-1811246308.jpg'
          style={{
            width:'50%'
          }}
        />
      </Box>
    </Box>
  )
}

export default Message