import React from 'react'
import {Login, Posts, Profile, NavBar} from "./" 
import {Route, Routes} from 'react-router-dom'

const App = () => {
return(<>
  <NavBar/>
    <Routes>
     <Route path="/posts" element= {<Posts/>} /> 
     <Route path='/' element={<div>Landing Page</div>} />
     <Route path='/login' element={<Login />} />
     <Route path="/profile"
            element={<Profile />} />
   </Routes>


</>)

}

export default App