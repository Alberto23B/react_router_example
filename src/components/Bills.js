import { useParams } from "react-router-dom";
import { getSingleInvoice } from "./data";

export default function Bills() {
    let params = useParams();
    let invoice = getSingleInvoice(parseInt(params.invoiceId));
    return (
        <main className="lex flex-col py-5 border my-4 w-1/3 mx-auto">
          <h2>Total Due: {invoice.amount}</h2>
          <p>{invoice.name} : {invoice.number}</p>
          <p>Due Date: {invoice.due}</p>
        </main>
    )
}
