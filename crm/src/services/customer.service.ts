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