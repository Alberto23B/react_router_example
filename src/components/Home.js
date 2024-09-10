import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="container">
            <Link to="/invoices" className='nav-link'><h2 className="invoices"> Invoices</h2></Link>
            <Link to="/expenses" className='nav-link'><h2 className="expenses">Expenses</h2></Link> 
        </div>
    )
}