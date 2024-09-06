import { NavLink, Outlet } from "react-router-dom"
import { getInvoices } from "./data"

export default function invoices() {
    let invoices = getInvoices();
    return (
        <main className="text-center">
            <div className="flex flex-col gap-3">
              { invoices.map((invoice) => {
                return <NavLink 
                // style={({ isActive }) => {
                //   return {
                //     color: isActive  ? "red" : ""
                //   }
                // }}
                className={({isActive}) => 
                  isActive ? "text-red-400 bg-gray-200" : ""
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