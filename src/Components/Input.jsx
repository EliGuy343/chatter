import { Box, Button, TextField } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

const Input = () => {
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'row',
        alignItems:'self-start',
        backgroundColor:'#292859',
        padding:'10px',
        height:'50px'
      }}
    >
      <TextField
        variant='filled'
        sx={{
          width:"90%",
          input:{
            color:'white'
          }
        }}
      />
      <Box
        sx={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <input
          type="file"
          style={{
            display:'none'
          }}
          id='file'
        />
        <label htmlFor='file'>
          <Box>
            <ImageIcon
              sx={{
                color:'#fff',
                fontSize:'30px'
              }}
            />
          </Box>
        </label>
        <Button
          sx={{
            color:'white',
            fontSize:'13px',
            padding:'0px',
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default Input