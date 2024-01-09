import { Box, useMediaQuery} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import FriendListWidget from '../widgets/FriendListWidget';
import MyPostWidget from '../widgets/MyPostWidget';
import PostsWidget from '../widgets/PostsWidget';
import UserWidget from '../widgets/UserWidget';


const Profile = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px');

  const getUser = async () => {
    const response = await fetch(`${import.meta.env.VITE_SERVER}users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`}
    })
    const data = await response.json();
    setUser(data);
  }

  useEffect(()=>{
    getUser()
  },[])

  if (!user) return null;

  return (
    <Box>
      <Navbar></Navbar>
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreens ? "flex" : "block"}
        gap='2rem'
        justifyContent='center'
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={user._id} picturePath={user.picturePath}></UserWidget>
          <Box m='2rem 0'></Box>
          <FriendListWidget userId={userId}></FriendListWidget>
        </Box>
        
        <Box 
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={user.picturePath}></MyPostWidget>
          <Box m='2rem 0'></Box>
          <PostsWidget userId={user._id} isProfile></PostsWidget>
        </Box>
      </Box>

      
    </Box>
  )
}

export default Profile