import React from "react";
import { Link } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

export default function MainMenu() {

    const [{auth}] = AuthConsumer();

    return (
        <div className="container">
          <Link to="/invoices" className='link'><p className="nav-buttons"> Invoices</p></Link>
          <Link to="/expenses" className='link'><p className="nav-buttons">Expenses</p></Link>
          {auth ? (
            <Link to="/balance" className='link'><p className="nav-buttons">Balance</p></Link> 
          ) : (
            <Link to="/login" className='link'><p className="nav-buttons">Login to Unlock</p></Link> 
          )
        }
        </div>
    )
}