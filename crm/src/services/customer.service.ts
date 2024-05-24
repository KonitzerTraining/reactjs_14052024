import { useEffect, useState } from "react";
import { CONFIG } from "../CONFIG";
import { Customer } from "../model/Customer";

const url = CONFIG.api + 'customers/';

export const customerService = {
    async getAll(): Promise<Customer[]> {
        const response = await fetch(url);
        return response.json();
    },
    async getById(id: number | string): Promise<Customer> {
        const response = await fetch(url + id);
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
    },
    async post(customer: Omit<Customer, 'id'>): Promise<Customer> {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                "Content-Type": "application/json",
              },
        });

        return response.json();
    },
    async put(customer: Customer): Promise<Customer> {
        const response = await fetch(url + customer.id, {
            method: 'PUT',
            body: JSON.stringify(customer),
            headers: {
                "Content-Type": "application/json",
              },
        });

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


  export function useCustomer(id: number | string) {
    const [customer, setCustomer] = useState<Customer>({
        name: '',
        credit: 0,
        id: null
    });
    const loadCustomer = () => {
        customerService.getById(id).then((customer) => {
            setCustomer(customer);
        });
    }

    useEffect(() => {
        loadCustomer()
    }, []);
  
    return {
        customer,
        loadCustomer
    };
  } 
  