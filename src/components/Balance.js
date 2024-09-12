import React from "react";
import { getInvoices, getExpenses } from "./data"

export default function Balance() {
    const invoices = getInvoices();
    const expenses = getExpenses();

    const totalInvoices = invoices.reduce((a, b) => a + b.amount, 0)
    const totalExpenses = expenses.reduce((a, b) => a + b.amount, 0)

    const balance = totalInvoices - totalExpenses;

    return (
        <div>
            <p>The current balance is:</p>
            <p>{Math.sign(balance) === 1 ? `+ ${balance}` : `${balance}` }</p>
        </div>
    )
}