import { useParams } from "react-router-dom";
import { getSingleExpense } from "./data";

export default function Bills() {
    let params = useParams();
    let expense = getSingleExpense(parseInt(params.expenseId));
    return (
        <main className="invoice">
          <h2>Total Paid: {expense.amount}</h2>
          <p>{expense.name} : {expense.number}</p>
          <p>Due Date: {expense.due}</p>
        </main>
    )
}