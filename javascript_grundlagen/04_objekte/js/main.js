console.log(Object);
console.dir(Object);
console.log(typeof Object);

// new erstellt einen neuen Kontext, Object veredelt diesen
const simpleObject = new Object(); // unüblich

// Erweitern eines Objekts
simpleObject.color = 'green';
console.log(simpleObject);
console.log(typeof simpleObject);

const simpleList = new Array(); // unüblich
console.log(simpleList);
console.log(typeof simpleList);

// Null ist nicht undefined
console.log(null, typeof null);

// Üblich: object literal notation
const customer = { // besser als new Object()
    name: 'Tim',
    address: 'Main Street 3a'
};

customer.city = 'Montreal';
console.log(customer.city);
console.log(customer['city']);

// array literal notation - besser als new Array()
const record = [34, 'Headline', 'Tim Taler'];
console.log(record);
console.log(record[0]);

for (let element of record) {
    console.log(element);
}

record.forEach((el) => {
    console.log(el);
})

/* function Car(c) {
    this.color = c;
} */
/*
class Car {
    constructor(c) {
        this.color = c;
    }
}

console.log(typeof Car);
const myCar = new Car('red');
console.log(myCar);

// dekonstruktion
const modul = {
    info: '3.5.4',
    helperFunction() {
        console.log('ok');
    }
}

modul.helperFunction();
const { helperFunction, info: modulInfo } = modul;
helperFunction();
console.log(modulInfo);

// wird verwendet im useState-Hook
const dataRecord = [34, 'Headline', 'Tim Taler'];
const [id, title, author] = dataRecord;

console.log(author);
*/