import axios from 'axios';
const API_URL = "https://strangers-things.herokuapp.com/api/"
const COHORT = "2206-FTB-ET-WEB-FT"

export const userLogin = async (username, password) => {
  const response = await fetch(`${API_URL + COHORT}/users/login`,
    {
      method: "POST",
      headers: {
              'Content-Type': 'application/json'
               },
      body: JSON.stringify({
          user: {
              username: username,
              password:  password
          }

      })
    }
   )
   console.log(response, "response from loginUser")
   const result = await response.json()
   const token = result.data.token
   return token
  }

export const getProfile = async(token) => {
  const response = await fetch(`${API_URL + COHORT}/users/me`,
    {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       }
      })
  const result = await response.json()
  const data = result.data
  return data
}

export const getPosts = async () => {
   try {
      const response = await fetch(`${API_URL + COHORT}/posts`);
      const posts = await response.json();
      console.log("Im here")
      return posts;
     } catch (err) {
         console.log('There was a problem getting posts!')
       }    
}