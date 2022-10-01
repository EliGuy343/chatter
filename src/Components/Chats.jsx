import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'

const Chats = () => {
  return (
    <Box>
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
      >
        <Avatar alt='Obi Wan Kenobi' src='/static/obiwan.jpg'/>
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
            Obi Wan Kenobi
          </Typography>
          <Typography
            sx={{
              fontSize:'12px',
              color:'#777777'
            }}
          >
            Yo whaddup
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Chats