import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import Navbar from "../navbar/Navbar.jsx"
import UserWidget from "../widgets/UserWidget.jsx"
import MyPostWidget from '../widgets/MyPostWidget.jsx'
import PostsWidget from "../widgets/PostsWidget.jsx"
import AdvertWidget from "../widgets/AdvertWidget.jsx"
import FriendListWidget from "../widgets/FriendListWidget.jsx"

const Home = () => {

  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const { _id, picturePath} = useSelector((state) => state.user);


  return (
    <Box>
      <Navbar></Navbar>
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreens ? "flex" : "block"}
        gap='0.5rem'
        justifyContent='space-between'
      >
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}></UserWidget>
        </Box>
        
        <Box 
          flexBasis={isNonMobileScreens ? '46%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >
          <MyPostWidget picturePath={picturePath}></MyPostWidget>
          <PostsWidget userId={_id}></PostsWidget>
        </Box>

        {isNonMobileScreens && (
          <Box flexBasis='26%'>
            <AdvertWidget></AdvertWidget>
            <Box m='2rem 0'></Box>
            <FriendListWidget userId={_id}></FriendListWidget>
          </Box>
        )}
      </Box>

      
    </Box>
  )
}

export default Home