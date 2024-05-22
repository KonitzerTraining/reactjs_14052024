let num1 = 200; // implizite Typisierung
num1 = '200';

// Zustand wie in JavaScript
let num2: any = 200;
num2 = '200';

// string, boolen

let surname: string = 'Taylor';

let names: string[] = ['a', 3453];

let id: string | number = 3;

let role: 'admin' | 'editor' | null = null;
console.log(role, typeof role); 
