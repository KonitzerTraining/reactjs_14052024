import { useEffect, useState } from "react";
import { Customer } from "../../../model/Customer";
import { customerService } from "../../../services/customer.service";
import { KolButton, KolTable } from "@public-ui/react";
import { KoliBriTableDataType } from "@public-ui/components";
import { Link, useNavigate } from "react-router-dom";

export function CustomerList() {
    
    // Einsatz eines Hooks
    const navigate = useNavigate();
    const [customers, setCustomers] = useState<Customer[]>([]);
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
            
            <KolButton _label="New Customer" _variant="primary" _on={{
                onClick: () => {
                    navigate('new');
                }
            }}></KolButton>

            <KolTable
                _data={customers as unknown as KoliBriTableDataType[]}
                _headers="{'horizontal':[
                    [
                        {'label':'#','key':'id'},
                        {'label':'Name','key':'name'},
                        {'label':'Credit','key':'credit'}
                    ]
                ]}"
                _label="Kundenliste"
            ></KolTable>


        </>
    )
}