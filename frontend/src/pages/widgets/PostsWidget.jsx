import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../../state/state.js'

const PostsWidget = ({ userId,  isProfile = false}) => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const token = useSelector((state) => state.token);


  return (
    <div>PostsWidget</div>
  )
}

export default PostsWidget