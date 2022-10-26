import { Box, Button, TextField } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const [text, setText]  = useState("");
  const [img, setImg] = useState(null);

  const currentUser = useSelector(state => state.user.user)
  const chat = useSelector(state => state.chat)

  const handleSend = async (e) => {
    if(img && text) {
      const storageRef = ref(storage, uuid())
      const uploadTask = uploadBytesResumable(storageRef, img)

      uploadTask.on(
        (err) =>{
          console.log(err)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", chat.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    }
    else if(text) {
      await updateDoc(doc(db, "chats", chat.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId:currentUser.uid,
          date: Timestamp.now()
        })
      })
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [chat.chatId + ".lastMessage"]:{
        text
      },
      [chat.chatId + ".date"]:serverTimestamp()
    })
    await updateDoc(doc(db, "userChats", chat.user.uid), {
      [chat.chatId + ".lastMessage"]:{
        text
      },
      [chat.chatId + ".date"]:serverTimestamp()
    })
    setText("");
    setImg(null);
  }


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
        onChange={(e)=> setText(e.target.value)}
        value={text}
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
          onChange={(e)=> setImg(e.target.files[0])}
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
          onClick={handleSend}
        >
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default Input