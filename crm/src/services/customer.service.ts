import { useEffect, useState } from "react";
import { CONFIG } from "../CONFIG";
import { Customer } from "../model/Customer";

const url = CONFIG.api + 'customers/';

export const customerService = {
    async getAll(): Promise<Customer[]> {
        const response = await fetch(url);
        return response.json();
    },
    async deleteById(id: number): Promise<unknown> {
        const response = await fetch(
            url + id,
            {
                method: 'DELETE'
            }
        );
        return response.json();
    }
}

export function useCustomers() {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const loadCustomers = () => {
        customerService.getAll().then((customers) => {
            setCustomers(customers);
        });
    }

    useEffect(() => {
        loadCustomers()
    }, []);
  
    return {
        customers,
        loadCustomers
    };
  } 
  