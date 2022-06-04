import React, { useEffect, useState } from "react";
import "./Login.css";
import fbLogo from "../images/fbLogo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppState } from "../context/ContextProvider";

function Login() {
  const { user, setUser } = AppState();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    if (userInfo) navigate("/");
  }, []);

  const loginHandle = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill all the inputs");
    }
    try {
      const data = await axios.post(
        "/user/signin",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/");
    } catch (error) {
      alert("invalid credentials!");
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img src={fbLogo} alt="" />
          <span>connect with your friends</span>
        </div>
        <div className="loginRight">
          <form className="loginContainer">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength="6"
            />
            <button className="loginBtn" type="submit" onClick={loginHandle}>
              Log In
            </button>
            <span>Forgot Password?</span>
            <Link className="loginLink" to="/signup">
              <button className="loginBtnSignup">Create a New Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
