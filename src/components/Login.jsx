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
    <form className="form" onSubmit={handleSubmit}>
      <h2>Please Login To Begin</h2>
      <div className="">
        <div className="">
          <label className=""></label>
          <input
            id="username"
            onChange={handleOnChange}
            placeholder="Username"
            value={username}
            type="text"
          />
        </div>
        <label className=""></label>
        <input
          id="password"
          onChange={handleOnChange}
          placeholder="Password Here"
          value={password}
          type="password"
        />
        <button className="button" type="submit">
          Login
        </button>
        <p className="errorMessage">{errorMessage}</p>
      </div>
    </form>
  );
};

export default Login;
