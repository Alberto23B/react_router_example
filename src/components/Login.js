import React from "react";
import { useNavigate } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

export default function Login() {
    const [authed, dispatch] = AuthConsumer();
    let navigate = useNavigate();

    return (
        <>
          <h1>Login Page</h1>
          <button 
          onClick={() => {
            dispatch({type: "login"})
            navigate("/balance", { replace : true})
          }}
          >Login</button> 
          <button 
          onClick={() => {
            dispatch({type: "logout"})
            navigate("/", { replace : true})
          }}
          >Logout</button>
        </>
    )
}