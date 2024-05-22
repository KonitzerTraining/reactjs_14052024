import { http } from "../lib/http.js";

// Web Component - selbst erstelltes HTML-Element
class ListCustomers extends HTMLElement {
    constructor() {
        super();

        http.get('customers.json').then((customers) => {
            this.innerHTML = `Kunden (${customers.length})`;
        })
    }
}

customElements.define('list-customers', ListCustomers)




