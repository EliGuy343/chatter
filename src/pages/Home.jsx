import { Box } from '@mui/material';
import Chat from '../Components/Chat';
import Sidebar from '../Components/Sidebar';

const Home = () => {

  return (
    <Box
      sx={{
        backgroundColor:'#191538',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Box
        sx={{
          border:'1px solid #4c4c4c',
          borderRadius:'10px',
          width:'65%',
          height:'80%',
          display:'flex',
          overflow:'hidden'
        }}
      >
        <Sidebar/>
        <Chat/>
      </Box>
    </Box>
  )
}

export default Home;