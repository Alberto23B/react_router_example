import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AuthConsumer from "../hooks/auth";

export default function Home() {

  const [{ auth }] = AuthConsumer()

  function ActiveLink(props) {
    return (
    <NavLink style={({isActive}) => {
      return {
        color: isActive ? "#8b96cd" : "#ffffff"
      }
    }}
    {...props}></NavLink>
  )
  }

    return (
        <>
        <div>
        <nav className='nav-bar'>
          <ActiveLink to="/" className='nav-link'><span>Home</span></ActiveLink>
          <ActiveLink to="/invoices" className='nav-link'><span>Invoice</span></ActiveLink>
          <ActiveLink to="/expenses" className='nav-link'><span>Expenses</span></ActiveLink>
          {
            auth ? (
              <ActiveLink to="/balance" className='nav-link'><span>Balance</span></ActiveLink>     
            ) : <></>
          }
          <ActiveLink to="/login" className='nav-link'><span>Login</span></ActiveLink> 
        </nav>
        <Outlet></Outlet>
      </div>
        </>
    )
}