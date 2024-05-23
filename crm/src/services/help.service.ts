import { CONFIG } from "../CONFIG";

const url = CONFIG.api + 'help';

export const helpService = {
    async getAll() {
      const response = await fetch(url);
      return response.json();
    }
}