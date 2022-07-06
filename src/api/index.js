import axios from 'axios';

const cohortName = '2206-FTB-ET-WEB-FT';
const API_URL = `https://strangers-things.herokuapp.com/api/`;
const theURL = `https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-FT/posts`


  
  
export const getPosts = async () => {
  try {
     const response = await fetch(theURL);
     const posts = await response.json();
     console.log("Im here",posts)
     return posts;
    } catch (err) {
        console.log('There was a problem getting posts!')
      }
    
    }


    
    console.log(theURL)