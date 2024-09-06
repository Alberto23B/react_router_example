import { useParams } from "react-router-dom"

export default function Bills() {
    let params = useParams();
    console.log(params)
    return <h1>Invoice #{params.invoiceId}</h1>
}
