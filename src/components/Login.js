import React from "react";
import AuthConsumer from "../hooks/auth";

export default function Login() {
    const [authed, dispatch] = AuthConsumer();
    console.log(authed);
    return (
        <>
          <h1>Login Page</h1>
          <button 
          onClick={() => {
            dispatch({type: "login"})
          }}
          >Login</button> 
          <button 
          onClick={() => {
            dispatch({type: "logout"})
          }}
          >Logout</button>
        </>
    )
}