import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

export default function ButtonAppBar() {

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.target);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(false);
  }
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor:'#1c2c66'
        }}
      >
        <Toolbar
          sx={{
            display:'flex',
            justifyContent:'space-between'
          }}
        >
          <Typography
            sx={{
              fontsize:'30px',
              fontWeight:'600'
            }}
          >
            Obi Wan Kenobi
          </Typography>
          <Box
            sx={{
              display:'flex',
              alignItems:'center',
            }}
          >
            <Button
              sx={{
                color: 'white',
                p:0
              }}
            >
              <PersonAddIcon/>
            </Button>
            <Button
              sx={{
                color: 'white',
                p:0
              }}
            >  
              <VideoCallIcon/>
            </Button>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <MenuIcon
                  sx={{
                    color:'white',
                    marginLeft:'5px'
                  }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Test</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
