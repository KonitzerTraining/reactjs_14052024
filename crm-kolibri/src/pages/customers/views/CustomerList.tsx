import { useEffect, useState } from "react";
import { Customer } from "../../../model/Customer";
import { customerService } from "../../../services/customer.service";

export function CustomerList() {


    // Einsatz eines Hooks
    const [customers, setCustomers ] = useState<Customer[]>([]);
    const loadCustomers = () => {
        customerService.getAll().then((c) => {
            console.log(c);
            setCustomers(c);
        });        
    }

    useEffect(() => {
        loadCustomers();
    }, []);

    return (
        <>
            <h2>List</h2>
            {JSON.stringify(customers)}
        </>
    )
}