let v = sum(4, 6);
console.log(v);
// Funktionsdefinition wird an den Anfang verschoben (Hoisting);
function sum(a, b = 1) {
    if (a === void 0) {
        throw new Error('a is not defined')
    }
    return a + b;
}

// sum = undefined; 
let result;
try {
    result = sum();
    console.log(result);
} catch (e) {
    console.warn(e);
}

console.log('test');
result = sum(5);
console.log(result);

// Funktionsausdruck
const compute = function (x = 1, y = 1) {
    return x * y;
};

console.log(compute(4, 5));
console.log(compute(3));

// Arrow-Funktion (arbeitet anders mit this)
const arrowFunction = (a, b) => {
    return a + b;
};
console.log(arrowFunction(3, 5))

// Arrow-Funktion in Short.
const aFunc = (a, b) => a + b;
console.log(aFunc(3, 5));

console.log(aFunc);
console.dir(aFunc);
console.dir(sum);
console.log(typeof sum);
console.log(typeof arrowFunction);