import { http } from "../lib/http.js";

const titleElement = document.getElementById('subheadline');
titleElement.innerHTML = 'Customer Dashboard';
console.log(titleElement);

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




