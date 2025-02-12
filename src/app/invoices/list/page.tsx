const InvoicesList = () => {
    const invoices = [
        {
            id: 1,
            name: 'Invoice 1',
            amount: 1000,
            dueDate: new Date(),
        },
        {
            id: 2,
            name: 'Invoice 2',
            amount: 2000,
            dueDate: new Date(),
        },
        {
            id: 3,
            name: 'Invoice 3',
            amount: 3000,
            dueDate: new Date(),
        },
    ]
    return (
        <div>
            <h3>Invoices List</h3>
            <ul>
                {invoices.map((invoice) => (
                    <li key={invoice.id}>
                        <h4>{invoice.name}</h4>
                        <p>Amount: ${invoice.amount}</p>
                        <p>Due Date: {invoice.dueDate.toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default InvoicesList