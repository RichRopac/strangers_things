import { useEffect, useState } from "react";
import { getPosts } from "../api";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
       const myposts = getPosts()
       setPosts(myposts)
 

    }, []) 
    console.log(posts)
    return(<h1>Posts</h1>)
    
    }

export default Posts