let num1 = 200; // implizite Typisierung
// num1 = '200';
console.log(num1);

// Zustand wie in JavaScript
let num2: any = 200;
num2 = '200';

// string, boolen

let surname: string = 'Taylor';

let names: string[] = ['a', /* 3453 */];

// Auswahl unter verschiedenen Typen
let id: string | number = 3;

// Werte als Typen
let role: 'admin' | 'editor' | null = null;
console.log(role, typeof role); 

// für komplexe Objekte, hat keine Entsprechung in JavaScript
interface Customer {
  id: number
  name: string
}

// customers ist nur ein Array, keine Instanz von Customer vorhanden
let customers: Customer[] = [
  {
    id: 3,
    name: 'Kim'
  },
];


