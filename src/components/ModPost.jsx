import React from 'react'
import { modifyPost } from '../api'

const ModPost = (props) => {
    const {singlePost, setModPostflag} = props
    const [title, setTitle] = useState(singlePost.title)
    const [description, setDescription] = useState(singlePost.description)
    const [price, setPrice] = useState(singlePost.price)
    const handleSubmit = async (event) => {
        event.preventDefault()
        const token = localStorage.getItem("token")
        const post = {
            title: title,
            description: description,
            price: price
        }
        modifyPost(token, post, singlePost._id)           
    }
  return(
    <div className='box'>
      {`Mod Post Details`}
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
            <button type="submit">Update Post</button>
        </form>
    <button onClick = {
         () => {
            setModPostflag(false)
         }}>Cancel Modifing Post</button>
    </div>
)}
 
export default ModPost
