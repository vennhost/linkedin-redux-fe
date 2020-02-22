import React from "react";
import {} from "reactstrap";
import {useState} from "react";
import "../../src/index.css";

const Login = () => {

    const {username, setUsername} = useState("");
    const {password, setPassword} = useState("");

    const handleSubmit = () => {
        
    }


    return(
        <div className="login-div">
            <input className="username" type="text" value="username" placeholder="username" />
            <input className="password" type="password" value="password" placeholder="********" />
            <button className="login-button" onClick={this.handleSubmit}>Login</button>
        </div>
        )
}

export default Login;