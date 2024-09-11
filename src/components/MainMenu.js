import React from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
    return (
        <div className="container">
        <Link to="/invoices" className='link'><h2 className="nav-buttons"> Invoices</h2></Link>
        <Link to="/expenses" className='link'><h2 className="nav-buttons">Expenses</h2></Link>
        <Link to="/balance" className='link'><h2 className="nav-buttons">Balance (Locked)</h2></Link> 
    </div>
    )
}