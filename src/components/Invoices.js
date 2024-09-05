import { Outlet } from "react-router-dom"

export default function invoices() {
    return (
        <div className="text-center">
          <h1>Invoices</h1>    
          <Outlet></Outlet>
        </div>
        
    )
}