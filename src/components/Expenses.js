import { NavLink, Outlet } from "react-router-dom"
import { getExpenses } from "./data"

export default function Expenses() {
    let expenses = getExpenses();
    return (
        <main className="alternate-row">
            <div className="list">
              { expenses.map((expense) => {
                return <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-selected" : ""
                }
                to={`/expenses/${expense.number}`} 
                key={expense.number}
                >
                  {expense.name}     
                </NavLink>
              })}
            </div>
            <Outlet></Outlet>
        </main>        
    )
}