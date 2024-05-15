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

    const deleteCustomer = (id: number) => {
        console.log(id);
        customerService.deleteById(id).then(() => {
            console.log('Datensatz gelöscht');
            loadCustomers();
        })
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
                        <li key={el.id}>{el.name} <button onClick={() => {
                            deleteCustomer(el.id);
                        }}>Delete</button></li>
                    )
                })
            }
            </ul>
        </>
    ) 
}
export default CustomerList;