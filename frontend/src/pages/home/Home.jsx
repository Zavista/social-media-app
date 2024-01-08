import { Box, useMediaQuery } from "@mui/material"
import { useSelector } from "react-redux"
import Navbar from "../navbar/Navbar.jsx"
import UserWidget from "../widgets/UserWidget.jsx"

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
          flexBasis={isNonMobileScreens ? '26%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}
        >

        </Box>

        {isNonMobileScreens && (
          <Box>

          </Box>
        )}
      </Box>

      
    </Box>
  )
}

export default Home