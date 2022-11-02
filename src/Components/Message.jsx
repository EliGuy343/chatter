import { Avatar, Box, Typography } from '@mui/material'
import { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

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

  const ref = useRef();
  const currentUser = useSelector(state=> state.user.user)
  const chat = useSelector(state => state.chat)

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:'smooth'})
  },[message])
  return (
    <Box
      sx={message.senderId === currentUser.uid
        ? userDisplay
        : senderDisplay
      }
      ref={ref}
    >
      <Box
        sx={{
          width:'40px',
          height:'40px',
          borderRadius:'50%',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          marginBottom:'15px'
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
            marginLeft:'8px',
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
          alt=''
          style={{
            width:'50%'
          }}
        />}
      </Box>
    </Box>
  )
}

export default Message