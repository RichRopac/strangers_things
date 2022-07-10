import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { userRegistration } from "../api"

const Register = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()
    const handleOnChange = (event) => {
       const changed = event.target.id
       if (changed === 'username') {
          setUsername(event.target.value)
       }
       else {
        setPassword(event.target.value)
       }
    
    }


    const handleSubmit = async (event) => {
      try{
        event.preventDefault()
        const result = await userRegistration(username, password)
        const token = result.data.token
        console.log(token, "token inside of login")
        localStorage.setItem("token",token)
        navigate("/profile")
      } catch (err) {
        setErrorMessage("Username Already Exists, Please Use Login Option Instead")
      }

    
    
}
return (
  <div className='box'>('This is your Registration Component')
    <form onSubmit={handleSubmit} >
       <label>Username</label>

       <input
         id="username"
         onChange={handleOnChange}
         placeholder="Username Here"
         value={username}
         type="text"
        />

        <label>Password</label>

        <input
         id="password"
         onChange={handleOnChange}
         placeholder="Password Here"
         value={password}
         type="password"

        />
        <button type="submit">Register</button>
        <p>{errorMessage}</p>
    </form>
  </div>
)}

export default Register
