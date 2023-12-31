import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  AuthContext,
  setAuthStatusLocalStorage,
} from "../../context/authContext";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setLogin, setActiveUserId } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit() {
    const userFound = userData.filter(
      (i) => i.userName === userName && i.password === password
    );

    if (userFound.length > 0) {
      setLogin(true);
      setActiveUserId(userFound[0].id);
      setAuthStatusLocalStorage("yes", userFound[0].id);
      setUserName("");
      setPassword("");
      navigate("/");
    } else {
      alert("wrong user name & password");
    }
  }

  return (
    <div className="p-login-form__form">
      <div>
        <h1>POST BLOG</h1>
        <p>Welcome to POST BLOG</p>
        <div>
          <div className="input-control">
            <label htmlFor="userName"> Email </label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(ev) => {
                setUserName(ev.target.value);
              }}
            />
          </div>
          <div className="input-control">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
            />
          </div>
          <div className="p-login-form__submit">
            <button type="button" onClick={handleSubmit}>
              Sign in
            </button>
          </div>
          <p>
            New User? <Link to="/user/sign-up">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
