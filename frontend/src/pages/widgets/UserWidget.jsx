import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
} from '@mui/icons-material'
import { Box, Typography, Divider, useTheme} from '@mui/material'
import UserImage from '../../components/UserImage.jsx'
import FlexBetween from '../../components/FlexBetween.jsx'
import WidgetWrapper from '../../components/WidgetWrapper.jsx'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Twitter from '../../assets/twitter.png'
import LinkedIn from '../../assets/linkedin.png'


const UserWidget = ({ userId, picturePath}) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3002/users/${userId}`,
        {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}`}

        })
        const data = await response.json();
        setUser(data);
    }

    useEffect(()=>{
        getUser()
    },[])

    if (!user) {
        return null;
    }
    
    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends
    } = user;

  return (
    <WidgetWrapper>
        <FlexBetween
            gap='0.5rem'
            pb='1.1rem'
            onClick={() => navigate(`/profile/${userId}`)}
        >
            <FlexBetween>
                <UserImage image={picturePath}></UserImage>
                <Box>
                    <Typography
                        variant='h4'
                        color={dark}
                        fontWeight='500'
                        sx={{
                            '&:hover': {
                                color: palette.primary.light,
                                cursor: 'pointer'
                            }
                        }}
                    >
                        {firstName} {lastName}
                    </Typography>
                    <Typography color={medium}>{friends ? friends.length : 0} friends</Typography>
                </Box>
                <ManageAccountsOutlined></ManageAccountsOutlined>
            </FlexBetween>

            <Divider></Divider>

            <Box p='1rem 0'>
                <Box display='flex' alignItems='center' gap='1rem' mb='0.5rem'>
                    <LocationOnOutlined fontSize='large' sx={{color: main}}></LocationOnOutlined>
                    <Typography color={medium}>{location}</Typography>
                </Box>
                <Box display='flex' alignItems='center' gap='1rem'>
                    <WorkOutlineOutlined fontSize='large' sx={{color: main}}></WorkOutlineOutlined>
                    <Typography color={medium}>{occupation}</Typography>
                </Box>
            </Box>

            <Box p='1rem 0'>
                <FlexBetween mb='0.5rem'>
                    <Typography color={medium}>Who&apos;s viewed your profile</Typography>
                    <Typography color={main} fontWeight='500'>{viewedProfile}</Typography>
                </FlexBetween>
                <FlexBetween>
                    <Typography color={medium}>Impressions of your post</Typography>
                    <Typography color={main} fontWeight='500'>{impressions}</Typography>
                </FlexBetween>
            </Box>

            <Box p='1rem 0'>
                <Typography fontSize='1rem' color={main} fontWeight='500' mb='1rem'>
                    Social Profiles
                </Typography>
                <FlexBetween gap='1rem' mb='0.5rem'>
                    <FlexBetween gap='1rem'>
                        <img src={Twitter} alt='twitter'></img>
                        <Box>
                            <Typography color={main} fontWeight='500'>
                                Twitter
                            </Typography>
                            <Typography color={medium}>Social Network</Typography>
                        </Box>
                    </FlexBetween>
                    <EditOutlined sx={{color: main}}></EditOutlined>
                </FlexBetween>

                <FlexBetween gap='1rem' mb='0.5rem'>
                    <FlexBetween gap='1rem'>
                        <img src={LinkedIn} alt='linkedin'></img>
                        <Box>
                            <Typography color={main} fontWeight='500'>
                                LinkedIn
                            </Typography>
                            <Typography color={medium}>Nework Platform</Typography>
                        </Box>
                    </FlexBetween>
                    <EditOutlined sx={{color: main}}></EditOutlined>
                </FlexBetween>

            </Box>

        </FlexBetween>
    </WidgetWrapper>
  )
}

export default UserWidget