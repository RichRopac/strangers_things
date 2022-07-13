import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { userRegistration } from "../api";
import "./Register.css";

const Register = (props) => {
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
      const result = await userRegistration(username, password);
      const token = result.data.token;
      console.log(token, "token inside of login");
      localStorage.setItem("token", token);
      navigate("/profile");
    } catch (err) {
      setErrorMessage(
        "Username Already Exists, Please Use Login Option Instead"
      );
    }
  };
  return (
    <div className="form">
      <h2>Please Register To Begin</h2>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            <input
              id="username"
              onChange={handleOnChange}
              placeholder="Username Here"
              value={username}
              type="text"
            />
          </div>

          <input
            id="password"
            onChange={handleOnChange}
            placeholder="Password Here"
            value={password}
            type="password"
          />
          <button className="button" type="submit">
            Register
          </button>
          <p className="errorMessage">{errorMessage}</p>
        </div>
      </form>
    </div>
  );
};

export default Register;
