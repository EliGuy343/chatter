import { Box } from '@mui/material';
import React from 'react'
import Chat from '../Components/Chat';
import Sidebar from '../Components/Sidebar';

const Home = () => {
  return (
    <Box 
      sx={{
        backgroundColor:'#a7bcff',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <Box>
        <Sidebar/>
        <Chat/>
      </Box>
    </Box>
  )
}

export default Home;