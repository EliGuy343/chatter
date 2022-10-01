import { Avatar, Box, TextField, Typography } from '@mui/material';

const Search = () => {
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
      }}
    >
      <Box>
      <TextField 
        label="Find a user"
        variant="filled"
        sx={{
          marginTop:'3px',
          width:'100%',
          color:'white',
          input:{
            color:'white'
          }
        }}
      />
      </Box>
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
        <Avatar alt='Kyle Katarn' src='/static/Kyle.jpg'/>
        <Typography>Kyle Katarn</Typography>
      </Box>
    </Box>
  )
}

export default Search;