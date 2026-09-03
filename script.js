function makeCounter() {
    let count = 0;
    return function() {
        count = count + 1;
        return count;
    };
}

const counter1 = makeCounter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = makeCounter();
console.log(counter2());

// Variables
const name1 = "Prakruthi";
let age1 = 26;

console.log(name1, age1);

// const prevents reassignment
age1 = 27;  // fine, since age was declared with let
console.log(age1);

// Type checking
console.log(typeof name1);    // "string"
console.log(typeof age1);     // "number"
console.log(typeof true);    // "boolean"

// Coercion examples — run these and see for yourself
console.log("5" + 3);        
console.log("5" - 3);        
console.log(5 == "5");       
console.log(5 === "5");

// Function declaration
function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5));

// Function expression
const divide = function(a, b) {
    return a / b;
};
console.log(divide(10, 2));

// Arrow function, full syntax
const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(10, 3));

// Arrow function, shorthand (implicit return)
const add = (a, b) => a + b;
console.log(add(3, 4));

// Default parameters (same idea as Python's default args)
const power = (base, exponent = 2) => base ** exponent;
console.log(power(5));       // uses default exponent
console.log(power(5, 3));    // overrides default

// Template literals — JS's version of Python's f-strings
const name = "Prakruthi";
const age = 26;
console.log(`Hello, ${name}. You are ${age} years old.`);


const even = (n) => n%2===0;

const welcome= (names, greeting = "Hello") => `${greeting} ${names}!`;
 

function isPrime(x) {
    let count = 0;
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            count = count + 1;
        }
    }
    if (count === 0 && x > 1) {
        return "Prime number";
    } else {
        return "Not Prime";
    }
}

console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(2));
console.log(isPrime(1));