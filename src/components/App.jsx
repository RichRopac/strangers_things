import React from 'react'
import {Login, Posts, Profile, NavBar, Register} from "." 
import {Navigate, Route, Routes} from 'react-router-dom'
import "./App.css"
import { Home } from './Home'
const App = () => {
return(<>
  <NavBar/>
    <Routes>
     <Route path='/' element={<Navigate replace to="/home"/>} />
     <Route path='/posts' element= {<Posts/>} /> 
     <Route path='/home' element={<Home/>} />
     <Route path='/login' element={<Login />} />
     <Route path='/profile' element={<Profile />} />
     <Route path='/register' element={<Register />} />
   </Routes>
</>)}

export default App