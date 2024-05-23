import { Customer } from "../model/Customer";

const url: string = 'http://localhost:3002/customers';

export const customerService = {
    // getAll: async function () {},
    async getAll(): Promise<Customer[]> {
        const response = await fetch(url)
        return response.json();
    },

    async deleteById(id: number) {
        const response = await fetch(url + '/' + id, { method: 'DELETE' })
        return response.json();
    },
};