import { NavLink, Outlet } from "react-router-dom"
import { getInvoices } from "./data"

export default function Invoices() {
    let invoices = getInvoices();
    return (
        <main className="alternate-row">
            <div className="list">
              { invoices.map((invoice) => {
                return <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-selected" : ""
                }
                to={`/invoices/${invoice.number}`} 
                key={invoice.number}
                >
                  {invoice.name}    
                </NavLink>
              })}
            </div>
            <Outlet></Outlet>
        </main>        
    )
}