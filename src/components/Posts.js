import { useEffect, useState } from "react";
import { getPosts } from "../api";
import './Posts.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
      getPosts().then( (response) => {
        
      setPosts(response.data.posts)
      }     )

    }, []) 
    
    console.log(posts)
    
    return (
        <div className="user-posts">
          <h2>Posts</h2>
          {posts.map((post, index) => (
            <div key={ index } className="post">
              <h3>User Name: {post.author.username}</h3>
              <p>User ID: {post.author._id }</p>
              <p>Located In: {post.location}</p>
              <p>Title: {post.title}</p>
              <p className="btm">Description: {post.description}</p>
        
            </div>
          ))}
        </div>
      );
}


export default Posts