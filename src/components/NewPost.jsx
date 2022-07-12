import React, { useState } from 'react'
import { postNew } from '../api'
const NewPost = (props) => { 
    const { setNewPostFlag, allPosts, setAllPosts } = props 
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState("free")
    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem("token")
        const newPost = {
            title: title,
            description: description,
            location: location,
            price: price,
    }
    const freshPost = await postNew(token, newPost)
    setAllPosts([...allPosts, freshPost])
    setNewPostFlag(false)    
 }
 return(
    <div className='box'>
      {`New Post Details`}
       <form onSubmit = {handleSubmit} className="box form">
       <label>Title</label>
         <input
            value={title}
            onChange={(event) => {
                setTitle(event.target.value)
            }}   
            >
         </input>
         <label>Description</label>
         <input
            value={description}
            onChange={(event) => {
                setDescription(event.target.value)
            }}
            >
            </input>
            <label>Location</label>
         <input
            value={location}
            onChange={(event) => {
                setLocation(event.target.value)
            }}
            >
            </input>
            <label>
                Price
             </label>
            <input
                value={price}
                onChange={(event) => {
                    setPrice(event.target.value)
            }}
            >
            </input>
            <button type="submit">Submit</button>
        </form>
    <button onClick = {
         () => {
            setNewPostFlag(false)
         }}>Cancel New Post</button>
    </div>
)}
 
export default NewPost

           

      