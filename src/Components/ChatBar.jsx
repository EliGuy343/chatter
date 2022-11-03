import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ButtonAppBar() {
  const user = useSelector(state=> state.chat.user);
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor:'#1c2c66',
          boxShadow:'2px 2px 2px 2px #000',
        }}
      >
        <Toolbar
          sx={{
            display:'flex',
            justifyContent:'start',
            gap:'5px'
          }}
        >
          {user.uid && <>
            <Avatar
              alt={user.name}
              src={user.photoURL}
            />
            <Typography
              sx={{
                fontsize:'30px',
                fontWeight:'600'
              }}
            >
              {user.displayName}
            </Typography>
          </>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
