import { Link, Outlet } from "react-router-dom"
import { getInvoices } from "./data"

export default function invoices() {
    let invoices = getInvoices();
    return (
        <main className="text-center">
            <div className="flex flex-col gap-3">
              { invoices.map((invoice) => {
                return <Link className="bg-gray-200" 
                to={`/invoices/${invoice.number}`} 
                key={invoice.number}
                >
                  {invoice.name}    
                </Link>
              })}
            </div>
            <Outlet></Outlet>
        </main>        
    )
}