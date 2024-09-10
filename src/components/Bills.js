import { useParams } from "react-router-dom";
import { getSingleInvoice } from "./data";

export default function Bills() {
    let params = useParams();
    let invoice = getSingleInvoice(parseInt(params.invoiceId));
    return (
        <main className="invoice">
          <h2>Total Due: {invoice.amount}</h2>
          <p>{invoice.name} : {invoice.number}</p>
          <p>Due Date: {invoice.due}</p>
        </main>
    )
}
