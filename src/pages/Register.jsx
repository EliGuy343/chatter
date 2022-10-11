import { Box, Button, TextField, Typography } from '@mui/material';
import { auth,storage, db } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import TextsmsIcon from '@mui/icons-material/Textsms';
import ImageIcon from '@mui/icons-material/Image';
import React, { useState } from 'react'
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

const Register = () => {
  const [err, setErr] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const passwordConfirm = e.target[3].value;
    const file = e.target[4].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`upload is ${progress} done`);
          
          switch(snapshot.state) {
            case "paused":
              console.log('upload is  paused');
              break;
            case "running":
              console.log('upload is running');
              break;
          }
        },
        (err) => {
          setErr(err);
          console.log(err);
        },
        ()  => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await updateProfile(res.user, {
                displayName:name,
                photoURL:downloadURL,
              })
              await setDoc(doc(db,"users", res.user.uid), {
                uid: res.user.uid,
                displayName:name,
                email,
                photoURL: downloadURL
              });
            });
        }
      );
    } catch (err) {
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
            {err && <Typography>{err}</Typography>}
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

export default Register;