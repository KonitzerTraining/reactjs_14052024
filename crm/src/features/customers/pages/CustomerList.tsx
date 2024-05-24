import { useCustomers } from "../../../services/customer.service"

export function CustomerList () {

    const customers = useCustomers();


    return (
        <>
            <h2>Customer List</h2>
            {JSON.stringify(customers)}
        </>
    )
}