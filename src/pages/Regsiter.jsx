import { Box, Button, TextField, Typography } from '@mui/material'
import TextsmsIcon from '@mui/icons-material/Textsms';
import ImageIcon from '@mui/icons-material/Image';
import React from 'react'

const Regsiter = () => {
  return (
    <Box
      sx={{
        backgroundColor:'#929292',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          backgroundColor:'white',
          padding:'40px',
          boxShadow:"2px 0px 2px 0px"
        }}
      >
        <form>
          <Box 
            sx={{
              display:'flex', 
              flexDirection:'column',
              gap:'15px',
              padding:'20px 60px',
              width:'60vh'
            }}
          > 
            <Typography 
              sx={{
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
                fontSize:'28px',
                fontWeight:'800',
                color:'#3180b5',
              }}
            >
              <TextsmsIcon 
                sx={{
                  color:'#3180b5',
                  marginRight:'5px',
                  fontSize:'32px'
                }}
              />
              Chatter
            </Typography>
            <Typography
              sx={{
                fontSize:'18px',
                color:'#3180b5'
              }}
            >
              Register
            </Typography>
            <TextField 
              variant='standard'
              type='text'
              label='name'
              sx={{
                width:'100%'
              }}
            />
            <TextField
              variant='standard'
              type='email'
              label='email'
              sx={{
                width:'100%'
              }}
            />
            <TextField
              variant='standard'
              type='password'
              label='password'
              sx={{
                width:'100%'
              }}
            />
            <TextField
              variant='standard'
              type='password'
              label='confirm password'
              sx={{
                width:'100%'
              }}
            />
            <input
              type="file"
              style={{
                display:'none'
              }}
              id='file'
            />
            <label htmlFor='file'>
              <Box>
                <Typography>Upload an Image</Typography>
                <ImageIcon
                  sx={{
                    color:'#3180b5',
                    fontSize:'32px'
                  }}
                />
              </Box>
            </label>
            <Button
              sx={{
                backgroundColor:'#3180b5',
                color:'white',
                '&:hover':{
                  backgroundColor:'#195882'
                }
              }}
            >
              Signup
            </Button>
            <Typography
              sx={{
                color:'#3180b5'
              }}
            >
              Have an account? login
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Regsiter