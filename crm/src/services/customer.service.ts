import { CONFIG } from "../CONFIG";

const url = CONFIG.api + 'customers';

export const customerService = {
    async getAll() {
      const response = await fetch(url);
      return response.json();
    }
}