import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div>
        <nav className='nav-bar'>
          <Link to="/" className='nav-link'><span>Home</span></Link>
          <Link to="/invoices" className='nav-link'><span>Invoice</span></Link>
          <Link to="/expenses" className='nav-link'><span>Expenses</span></Link>
          <Link to="/balance" className='nav-link'><span>Balance</span></Link>     
          <Link to="/login" className='nav-link'><span>Login</span></Link> 
        </nav>
        <Outlet></Outlet>
      </div>
        </>
    )
}