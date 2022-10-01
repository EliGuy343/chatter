import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

const Sidebar = () => {
  return (
    <Box
      sx={{
        flex:1,
        borderRight:'1px solid #7c7c7c',
        color:'white',
        backgroundColor:'#394066'
      }}
    >
      <Navbar/>
    </Box>
  )
}

export default Sidebar