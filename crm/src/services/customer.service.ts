import type { Customer } from "../model/customer";

const url: string = 'http://localhost:3002/customers';

export const customerService = {
    // getAll: async function () {},
    async getAll(): Promise<Customer[]> {
        const response = await fetch(url)
        return response.json();
    },
};