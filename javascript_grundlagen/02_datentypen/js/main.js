/**
 * Datentypen in ECMAScript / JavaScript
 * 
 * Einfache Datentypen
 * string, number, boolean, undefined, symbol, BigInt
 * 
 * Referenztypen
 * function, object
 * 
 * Operator zur Typermittlung: typeof
 */

// string
// Operatoren: + += 

// Variable mit let
// Konstante mit const
// var bitte nicht mehr verwenden
let htmlSnippet = '<ul class="top">'; // ; sind optional

htmlSnippet = htmlSnippet + '<li>';
htmlSnippet += "List-Item";
htmlSnippet += '</li></ul>';

console.log(htmlSnippet);

// Template Literal, Shift+Akzent+Space
const p = 'mehrzeilig';
let templateLit = `
    Das ist 
    ein 
        ${p.toUpperCase()}er Text;
`;

console.log(templateLit);
console.log(typeof templateLit);

// Wrapper Type
// In diesem Fall: String.prototype
const textBaustein = 'Das ist ein Baustein';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes?retiredLocale=de
let r = textBaustein.includes('ist');
console.log(r);




/*





// number
// + -  * / % 
// += -= *= /= %=
// ++ --
let result; // undefined
console.log(typeof result);

result = 4 * 4;
console.log(result, typeof result);

result = 488574.234;
result = result.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
}); // de-CH

console.log(result);
console.log(Math.LN10);

result = Math.cos(0.5);
console.log(result);

result = 'Kuchen' / 7;
console.log(result, isNaN(result), typeof result); // Literalkonstante NaN

// Typumwandlung
let ageInputValue = '34.3'; // Zum Beispiel aus einem Formular
console.log(ageInputValue, typeof ageInputValue);

result = +ageInputValue; // Vorzeichenänderung bewirkt impliziter Cast
console.log(result, typeof result);

result = parseFloat(ageInputValue); // Erwartet Fließkommazahl
console.log(result, typeof result);

result = parseInt(ageInputValue, 16); // Erwartet Ganzzahl, Basis optional
console.log(result, typeof result);

// boolean
// < > <= >= !== === 
// bitte nicht verwenden: != ==
console.log(1 == "1");
console.log(1 === "1");

// ! && || ?? 
const inputValue = 30;
result = inputValue > 21;
console.log(result, typeof result);
if(result) {
    console.log(inputValue + ' ist größer als 21');
} // else {}

result = (1 < 2) ? 'A': 'B';
console.log(result);

// undefined
let temp;
console.log(temp, typeof temp);

temp = undefined;
console.log(temp, typeof temp);

temp = void 0; // übliche Notation
console.log(temp, typeof temp);

const input = undefined;

if(input === void 0) {
    console.warn('Eingabe ungültig');
}

*/