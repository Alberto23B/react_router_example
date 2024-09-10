import { NavLink, Outlet } from "react-router-dom"
import { getInvoices } from "./data"

export default function invoices() {
    let invoices = getInvoices();
    return (
        <main className="alternate-row">
            <div className="list">
              { invoices.map((invoice) => {
                return <NavLink 
                // style={({ isActive }) => {
                //   return {
                //     color: isActive  ? "red" : ""
                //   }
                // }}
                className={({isActive}) => 
                  isActive ? "nav-selected" : ""
                }
                // className="bg-gray-200" 
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