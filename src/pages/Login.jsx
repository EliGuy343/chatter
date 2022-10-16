import { Box, Button, TextField, Typography } from '@mui/material'
import TextsmsIcon from '@mui/icons-material/Textsms';
import ImageIcon from '@mui/icons-material/Image';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    }
    catch (err) {
      setErr(err);
      console.log(err);
    }
  };

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
        <form onSubmit={handleSubmit}>
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
              Login
            </Typography>
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
            {err &&
              <Typography
                sx={{
                  color:'red',
                  fontsize:'20'
                }}
              >
                Something went wrong
              </Typography>
            }
            <Button
              sx={{
                backgroundColor:'#3180b5',
                color:'white',
                '&:hover':{
                  backgroundColor:'#195882'
                }
              }}
              type='submit'
            >
              Login
            </Button>
            <Typography
              sx={{
                color:'#3180b5'
              }}
            >
              Don't Have an Account? <Link to='/register'>Register</Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login