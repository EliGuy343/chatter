import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const user = useSelector(state => state.user.user);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    signOut(auth);
    handleCloseUserMenu();
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor:'#31458f'
      }}
    >
      <Container
      >
        <Toolbar
          disableGutters
          sx={{
            display:'flex',
            justifyContent:'space-between',
          }}
        >
          <Box
            sx={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            <TextsmsIcon/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display:'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                marginLeft:'5px'
              }}
            >
              Chatter
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.name} src={user.photoURL} />
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
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
