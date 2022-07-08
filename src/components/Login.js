import React, {useState} from "react";
import { userLogin } from "../api"

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
    event.preventDafault()
    const token = await userLogin(username, password)
    console.log(token, "token inside of login")
    localStorage.setItem("token", token)

}
return (
  <div className='box'>('This is your Login Component')
    <form onSubmit={handleSubmit} >
       <label>Username</label>

       <input
         id="username"
         onChange={handleOnChange}
         placeholder="Username Here"
         value={username}

        />

        <label>Password</label>

        <input
         id="password"
         onChange={handleOnChange}
         placeholder="Password Here"
         value={password}

        />
        <button type="submit">Login Please</button>
    </form>
  </div>
)}

export default Login;
