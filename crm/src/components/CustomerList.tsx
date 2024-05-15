import { useEffect, useState } from "react";
import type { Customer } from "../model/customer";
import { customerService } from "../services/customer.service";

function CustomerList() {

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
            <h2>Customer List</h2>
            <p>Lorem, ipsum dolor.</p>
            {/* {JSON.stringify(customers)} */}
            <ul>
            {
                customers.map((el: Customer) => {
                    return (
                        <li key={el.id}>{el.name}</li>
                    )
                })
            }
            </ul>
        </>
    )
}
export default CustomerList;