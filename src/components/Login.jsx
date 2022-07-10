import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { userLogin } from "../api";
import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const changed = event.target.id;
    if (changed === "username") {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await userLogin(username, password);
      const token = result.data.token;
      console.log(token, "token inside of login");
      localStorage.setItem("token", token);
      navigate("/profile");
    } catch (err) {
      setErrorMessage(
        "Username Doesn't Exists, Please Use Register Option Instead"
      );
    }
  };
  return (
    <div className="box">
      ('This is your Login Component')
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <div className="username-input-container">
            <label>Username</label>
            <input
              id="username"
              onChange={handleOnChange}
              placeholder="Username Here"
              value={username}
              type="text"
            />
          </div>
          <label>Password</label>
          <input
            id="password"
            onChange={handleOnChange}
            placeholder="Password Here"
            value={password}
            type="password"
          />
          <button type="submit">Login</button>
          <p>{errorMessage}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
