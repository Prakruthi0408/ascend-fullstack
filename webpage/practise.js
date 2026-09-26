function scopeDemo() {
    if (true) {
        let insideBlock = "block scoped";
        var insideFunction = "function scoped";
    }
    console.log(insideFunction);
}
scopeDemo();

console.log(typeof hoistedVar);
var hoistedVar = "I exist now";

function early() {
    console.log("Called before my definition appears in the file!");
}
early();


console.log(userName);   // prints "undefined" — no error, easy to miss!
// ... 50 lines of other code ...
var userName = "Prakruthi";

//console.log(hoistedLet);
let hoistedLet = "value";

const person1 = {
    name: "Prakruthi",
    greet: function() {
        console.log(`Hi, I'm ${this.name}`);
    }
};
person1.greet();   // "Hi, I'm Prakruthi" — `this` = person, because greet() was called AS person.greet()

const greetFn = person1.greet;
greetFn();   // "Hi, I'm undefined" — `this` is NOT person anymore, because it wasn't called AS person.greetFn()

const person2 = {
    name: "Prakruthi",
    greet: () => {
        console.log(`Hi, I'm ${this.name}`);   // BROKEN — arrow function has no own `this`,
    }                                            // inherits from OUTSIDE the object (likely undefined here)
};
person2.greet();   // "Hi, I'm undefined" — NOT what you'd want!

const person = {
    name: "Prakruthi",
    greetRegular: function() {
        console.log(`Regular: Hi, I'm ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Arrow: Hi, I'm ${this.name}`);
    }
};

person.greetRegular();   // "Regular: Hi, I'm Prakruthi"
person.greetArrow();     // "Arrow: Hi, I'm undefined"