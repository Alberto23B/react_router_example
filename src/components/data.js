let invoices = [
    {
        name: "Roland",
        number: 1,
        amount: "€12.000",
        due: "10/09/2024"
    },
    {
        name: "Korg",
        number: 2,
        amount: "7.220",
        due: "13/09/2024"
    },
    {
        name: "Erica Synth",
        number: 3,
        amount: "15.000",
        due: "15/09/2024"
    },
    {
        name: "Yamaha",
        number: 4,
        amount: "€1.800",
        due: "1/10/2024"
    },
    {
        name: "Allen & Heath",
        number: 5,
        amount: "€11.200",
        due: "12/10/2024"
    }
];

export function getInvoices(){
    return invoices;
}

export function getSingleInvoice(number) {
    return invoices.find((invoice) => invoice.number === number)
}