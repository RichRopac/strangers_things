import React, {useState, useEffect} from "react";
import { getProfile } from "../api"

const Profile = (props) => {
  let token = "";
  const [myInfo, setMyInfo] =useState({})
  useEffect(() => {
     token = localStorage.getItem("token")
     console.log(token);
     async function getMyInfo() {
        const myReturnedInfo = await getProfile(token)
        console.log(myReturnedInfo, "returned info from api call")
        setMyInfo(myReturnedInfo)
     }
     getMyInfo()
    },[])
console.log("Made it to the Profile")
return (
    <div className="box">{'This is your Profile Component'}
      <h2>This is the Profile Page</h2>
    </div> 
)

}

export default Profile
