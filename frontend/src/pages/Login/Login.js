import React from "react";
import "./Login.css";
import LoginImg from "../../assets/login-img.svg";
import LogoImg from "../../assets/webdev-logo.svg";
import TextField from "@material-ui/core/TextField";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-sub-container">
        <div className="left-side">
          <img src={LoginImg} alt="Login" />
          <div className="description"> Oh baby! Its a awesome login auth!</div>
        </div>
        <div className="right-side">
          <div className="logo-container">
            <img src={LogoImg} alt="Logo" />
          </div>

          <div className="fields-container">
            <TextField id="standard-basic" label="username or email" />
            <TextField id="standard-basic" label="password" />
            <div className="sign-in-container">
                <button>Sign In</button>
            </div>
          </div>

          <div className="create-account">
            <div>
              New here? <span>Create a account</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
