import { http } from "../lib/http.js";

http.get('customers.json').then((customers) => {
    console.log(customers);
})

