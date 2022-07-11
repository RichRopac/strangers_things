import React, { useEffect, useState } from "react";
import { NewPost, ModPost} from './'
import { deletePost, getAllPosts } from "../api";
import './Posts.css';

const Posts = () => {
    
  const [posts, setPosts] = useState([]);
  const [newPostFlag, setNewPostFlag] = useState(false);
  
    useEffect( () => {
      getAllPosts().then( (response) => {
        
      setPosts(response.data.posts)
      }     )

    }, []) 
    
    
    return (
        <div className="user-posts">
          
          <button onClick={() => {
                   setNewPostFlag(true)
                   NewPost
               }}>Create New Post</button>
               {/* <button onClick={() => {
                   setModPostFlag(true)
               }}>Modify This Post</button> */}
          
          <h2>Posts</h2>
          
          {posts.map((post, index) => (
            <div key={ index } className="post">
              <h3>User Name: {post.author.username}</h3>
              <p>User ID: {post.author._id }</p>
              <p>Located In: {post.location}</p>
              <p>Title: {post.title}</p>
              <p className="footer">Description: {post.description}</p>
        </div>
          ))}


             

        </div>
      );
}

export default Posts





// const Posts = (props) => {
//   const [newPostFlag, setNewPostFlag] = useState(false);
//   const [modPostFlag, setModPostFlag] = useState(false);
//   const {setSinglePost, setMessageFlag, singlePost} = props
//   const [allPosts, setAllPosts] = useState([])
//   const handleMessage = (event) => {
//       const singledOutPost = allPosts.filter(element => element._id == event.target.id)
//       setSinglePost(singledOutPost[0])
//   }
//   const handleDelete = async (event) => {
//       event.preventDefault()
//       const token = localStorage.getItem("token")
//       deletePost(event.target.id)
//   }
//   console.log("made it to useEffect")
//       useEffect( () => {
//         async function fetchPosts() {
         
//           if (!allPosts.length) {
//             const retrievedPosts = await getAllPosts()
//             setAllPosts(retrievedPosts)
           
//           }
//         }
       
//         fetchPosts()
//       }
//       , []) 
//   console.log("made it to display posts")
//   console.log("Post: ")
//     const displayPosts = 
//     allPosts.length ?
//     (<ol className="box all-posts">
//         {allPosts.map((post) => { 
//            return (
//              <li className="box" key={`all-posts-${post._id}`}>
//                  {post.title}
//                  <button id={`${post._id}`}
//                    onClick={(event) => {
//                     event.preventDefault()
//                     setMessageFlag(true)
//                     handleMessage(event)
//                   //  }
//                   //  }>Message Owner</button>
//                   //  <button id={`${post._id}`} onClick={(event) => {
//                   //     event.preventDefault()
//                   //     setModPostFlag(true)
//                   //     handleMessage(event)
//                     }}>Modify This Post</button>
//                     <button id={`${post._id}`} onClick={handleDelete}
//                     >Delete This Post</button>
//              </li>
//            )
//           }
//         )}
//     </ol>)
//        : <div>Loading Posts...</div>
      
//     console.log("Made it to Return")
//     console.log(allPosts)
    
    
//     return (

//         <div className='box all-posts'>
//         {'This is your Posts Component'}
//           {newPostFlag ?
//             <NewPost
//               setNewPostFlag={setNewPostFlag}
//               setAllPosts={setAllPosts}
//               allPosts={allPosts}
//            />
//            : modPostFlag ?
//              <ModPost
//               singlePost={singlePost}
//               setModPostFlag={setModPostFlag} 
              
//               />
//              : <>        
//               <button onClick={() => {
//                   setNewPostFlag(true)
//               }}>Create New Post</button>
//               <button onClick={() => {
//                   setModPostFlag(true)
//               }}>Modify This Post</button>
//               { {displayPosts} }
        
//             </>
//             }       
//          </div>
//    )}   

// export default Posts
