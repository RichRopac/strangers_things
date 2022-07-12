import React, { useEffect, useState } from "react";
import { NewPost, ModPost} from './'
import { deletePost, getAllPosts } from "../api";
import './Posts.css';
const Posts = (props) => {
  const [newPostFlag, setNewPostFlag] = useState(false);
  const [modPostFlag, setModPostFlag] = useState(false);
  const {setSinglePost, setMessageFlag, singlePost} = props
  const [allPosts, setAllPosts] = useState([])
  const handleMessage = (event) => {
      const singledOutPost = allPosts.filter(element => element._id == event.target.id)
      setSinglePost(singledOutPost[0])
  }
  const handleDelete = async (event) => {
      event.preventDefault()
      const token = localStorage.getItem("token")
      deletePost(event.target.id)
  }
  console.log("made it to useEffect")
      useEffect( () => {
        async function fetchPosts() {
         
          if (!allPosts.length) {
            const retrievedPosts = await getAllPosts()
            setAllPosts(retrievedPosts)
           
          }
        }
       
        fetchPosts()
      }
      , []) 
  
  const displayPosts = 
     allPosts.length ?
     (<div className="box all-posts">
         {allPosts.map((post) => { 
            return (
              <p className="card" key={`all-posts-${post._id}`}>
                  <h2><u>Title:</u> {post.title}</h2>
                  <h3><u>Author:</u> {post.author.username}</h3>
                  <h3><u>Location:</u> {post.location}</h3>
                  <button className='button' id={`${post._id}`}
                    onClick={(event) => {
                     event.preventDefault()
                     setMessageFlag(true)
                     handleMessage(event)
                     }
                     }>Message Owner</button>
                     <button className='button' id={`${post._id}`} onClick={(event) => {
                        event.preventDefault()
                        setModPostFlag(true)
                        handleMessage(event)
                     }
                     }>Modify This Post</button>
                     <button className='button' id={`${post._id}`} onClick={handleDelete}
                     >Delete This Post</button>
              </p>
            )
           }
         )}
     </div>)
        : <div>Loading Posts...</div>
      
     
     console.log(allPosts)
    
    
    return (

        <div className='card-row card'>
        <h1 className="user-posts">{"Users' Posts"}</h1>
          {newPostFlag ?
            <NewPost
              setNewPostFlag={setNewPostFlag}
              setAllPosts={setAllPosts}
              allPosts={allPosts}
           />
           : modPostFlag ?
             <ModPost
              singlePost={singlePost}
              setModPostFlag={setModPostFlag} 
              
              />
             : <>        
              <button className="createButton" onClick={() => {
                  setNewPostFlag(true)
              }}>Create New Post</button>
              
              { displayPosts }
        
            </>
            }       
         </div>
   )}   

export default Posts