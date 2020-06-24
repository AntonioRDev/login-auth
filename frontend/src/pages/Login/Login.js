import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginImg from "../../assets/login-img.svg";
import LogoImg from "../../assets/webdev-logo.svg";
import TextField from "@material-ui/core/TextField";
import { projectRestClient } from "../../services/rest-client-service";
import { toastSuccess, toastError, toastWarn } from "../../services/toast-service";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = async() => {
    const restClient = projectRestClient();
    const params = {
      email,
      password: Number(password)
    };

    try {
      if(!email || !password){
        toastWarn("Os campos E-mail e Senha não podem ficar vazios");
        return;
      }

      const response = await restClient.post("/login", params);
      toastSuccess("Autenticando...");
      
      localStorage.setItem("user-tkn", response.data.token);
      history.push("/dashboard");
    } catch(error) {
      if(error.response.status === 404){
        toastError(error.response.data.msg);
      }
      else{
        toastError("Algo de errado aconteceu ao autenticar.");
        console.log("login error:", error.response);
      }
    }
  }

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
            <TextField id="standard-basic" label="username or email" onChange = {e => setEmail(e.target.value)}/>
            <TextField id="standard-basic" type="password" label="password" onChange = {e => setPassword(e.target.value)}/>
            <div className="sign-in-container">
                <button onClick={() => login()}>Sign In</button>
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
