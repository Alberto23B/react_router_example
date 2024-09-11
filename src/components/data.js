let invoices = [
    {
        name: "London",
        number: 1,
        amount: "€7.600",
        due: "12/09/2024"
    },
    {
        name: "Madrid",
        number: 2,
        amount: "€10.000",
        due: "16/09/2024"
    },
    {
        name: "Athens",
        number: 3,
        amount: "€7.000",
        due: "21/09/2024"
    },
    {
        name: "Paris",
        number: 4,
        amount: "€7.800",
        due: "23/10/2024"
    },
    {
        name: "Rome",
        number: 5,
        amount: "€16.200",
        due: "30/10/2024"
    }
];

export function getInvoices(){
    return invoices;
}

export function getSingleInvoice(number) {
    return invoices.find((invoice) => invoice.number === number)
}

let expenses = [
    {
        name: "Roland",
        number: 1,
        amount: "€12.000",
        due: "10/09/2024"
    },
    {
        name: "Korg",
        number: 2,
        amount: "€7.220",
        due: "13/09/2024"
    },
    {
        name: "Erica Synth",
        number: 3,
        amount: "€15.000",
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

export function getExpenses(){
    return expenses;
}

export function getSingleExpense(number) {
    return expenses.find((expense) => expense.number === number)
}
