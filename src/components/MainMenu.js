import React from "react";
import { Link } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

export default function MainMenu() {

    const [{auth}] = AuthConsumer();

    return (
        <div className="container">
          <Link to="/invoices" className='link'><h2 className="nav-buttons"> Invoices</h2></Link>
          <Link to="/expenses" className='link'><h2 className="nav-buttons">Expenses</h2></Link>
          {auth ? (
            <Link to="/balance" className='link'><h2 className="nav-buttons">Balance</h2></Link> 
          ) : (
            <Link to="/login" className='link'><h2 className="nav-buttons">Login to Unlock</h2></Link> 
          )
        }
        </div>
    )
}