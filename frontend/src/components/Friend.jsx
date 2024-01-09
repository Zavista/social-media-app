import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from '@mui/icons-material';
import {  useDispatch, useSelector } from  'react-redux';
import { setFriends } from '../state/state.js'
import FlexBetween from "../components/FlexBetween.jsx";
import UserImage from '../components/UserImage.jsx'


const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const _id= useSelector((state) => state.user._id);
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main  = palette.neutral.main;
    const medium = palette.neutral.medium;

    const isFriend  = friends.find((friend) => friend._id  === friendId);

    const patchFriend = async () => {
        const response = await fetch(`http:/localhost:3002/users/${_id}/${friendId}`, 
        {
            method: "PATCH",
            headers: {
                Authorization:  `Bearer ${token}`,
                "Content-Type": 'aplication/json'
            }
        })

        const data = await response.json();
        dispatch(setFriends({ friends: data}))
    }

  return (
    <div>Friend</div>
  )
}

export default Friend