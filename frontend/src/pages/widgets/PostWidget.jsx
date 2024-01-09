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


    <div>PostWidget</div>
  )
}

export default PostWidget