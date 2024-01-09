import { ChatBubbleOutlineOutlined, FavouriteBorderOutlined, FavouriteOutlined, ShareOutlined} from  '@mui/icons-material'
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material'
import FlexBetween from '../../components/FlexBetween.jsx'
import Friend from '../../components/Friend.jsx'
import WidgetWrapper from '../../components/WidgetWrapper.jsx'
import { useState } from 'react'
import {  useDispatch, useSelector }  from 'react-redux'
import { setPost } from '../../state/state.js'


const PostWidget = ({
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments
}) => {

    const [isComments, setIsComments] = useState(false)
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const loggedInUserId = useSelector((state) => state.user._id);
    const isLiked = Boolean(likes[loggedInUserId]);
    const likeCount = Object.keys(likes).length;


    const { palette } = useTheme();
    const main  = palette.neutral.main;
    const primary = palette.primary.main;

    const patchLike =  async () => {
        const response = await fetch(`http:/localhost:3002/posts/${postId}/like`,{
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({userId: loggedInUserId})
        })
        const updatedPost = await response.json();
        dispatch(setPost({post: updatedPost}));
    }

  return (
    <WidgetWrapper m='2rem 0'>
        <Friend
            friendId={postUserId}
            name={name}
            subtitle={location}
            userPicturePath={userPicturePath}
        ></Friend>
        <Typography color={main} sx={{mt: '1rem'}}>
            {description}
        </Typography>
        {picturePath && (
            <img 
                width='100%'
                height='auto'
                alt='post'
                style={{borderRadius: '0.75rem', marginTop:'0.75rem'}}
                src={`http://localhost:3002/assets/${picturePath}`}
            ></img>

        )}
        <FlexBetween mt='0.25rem'>
            <FlexBetween gap='1rem'>
                <FlexBetween gap='0.3rem'>
                    <IconButton onClick={patchLike}>
                        {isLiked ? (
                          <FavouriteOutlined sx={{color:primary}}></FavouriteOutlined>) : (
                            <FavouriteBorderOutlined></FavouriteBorderOutlined>
                          )}
                    </IconButton>
                </FlexBetween>

                <FlexBetween gap="0.3rem">
                    <IconButton onClick={()=> setIsComments(!isComments)}>
                        <ChatBubbleOutlineOutlined></ChatBubbleOutlineOutlined>
                    </IconButton>
                    <Typography>{comments.length}</Typography>
                </FlexBetween>
            </FlexBetween>

            <IconButton>
                <ShareOutlined></ShareOutlined>
            </IconButton>
        </FlexBetween>

        {isComments && (
            <Box mt='0.5rem'>
                {comments.map((comment, i) => (
                    <Box key={`${name}-${i}`}>
                        <Divider></Divider>
                        <Typography sx={{color: main, m:'0.5rem 0', pl: '1rem'}}>
                            {comment}
                        </Typography>
                        <Divider></Diver>
                    </Box>
                ))}
            </Box>
        )}
    </WidgetWrapper>
  )
}

export default PostWidget