import axios from 'axios';
const API_URL = "https://strangers-things.herokuapp.com/api/"
const COHORT = "2206-FTB-ET-WEB-FT"

export async function userRegistration(event) {
  const registerUsername = event.target[0].value
  const registerPassword = event.target[1].value 
  // console.log(registerUsername, registerPassword)
  // console.log(`${API_URL + COHORT}users/register`)
  const response = await 
  fetch(`${API_URL + COHORT}users/register`, {
    method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: registerUsername,
      password: registerPassword
    }
  })
})
const result = await response.json()
const token = result.data.token
localStorage.setItem("token",token)
const tokenFromStorage = localStorage.getItem("token")
console.log(tokenFromStorage)
  }


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
  //  console.log(response, "response from loginUser")
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
      // console.log("Im here")
      return posts;
     } catch (err) {
        //  console.log('There was a problem getting posts!')
       }    

}

