import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(password);
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://seeklogo.net/wp-content/uploads/2016/10/amazon-logo-preview-400x400.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button className="login__signin_button">Sign In</button>
        </form>
        <p>
          By Signing in you agree to this clone of Amazon Conditions of Use &
          Sale. Please see our Privacy Notice, our cookies Notice and our
          Interest-Based Ads Notice
        </p>

        <button className="login__register_button">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
