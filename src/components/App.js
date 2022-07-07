import React from 'react'
import {Posts, NavBar} from "./" 
import {Route, Routes} from 'react-router-dom'

const App = () => {
return(<>
<NavBar/>
<Routes>
   <Route path="/Posts" element= {<Posts/>} />
</Routes>


</>)

}

export default App