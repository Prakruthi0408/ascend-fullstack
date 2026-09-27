//how variables work inside the function with var let const if it is mutable or not.

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

// concept of let and var const variables
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


//arrow has no this and concept of this 
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

console.log("1: First");

//settimeout 
setTimeout(function() {
    console.log("2: This runs LATER, even with 0ms delay");
}, 0);

console.log("3: Third");
function greetAfterDelay(name, callback) {
    setTimeout(function() {
        callback(name);
    }, 1000);
}

greetAfterDelay("Prakruthi", function(name) {
    console.log(`Hello, ${name}! (after 1 second)`);
});

/*getUser(id, function(user) {
   getOrders(user.id, function(orders) {
    getOrderDetails(orders[0].id, function(details) {
        console.log(details);
             deeply nested, hard to read, hard to handle errors cleanly
        });
    });
});*/

//exercise for callback and settimeout
function processOrder(orderName, callback) {
 setTimeout (function() {
    callback(orderName);
 },1500);
}
 
 processOrder("pizza", function(orderName){
 console.log(`Order for ${orderName} is ready!`);
});


//promises concept.
const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        const success = true;
        if (success) {
            resolve("It worked!");
        } else {
            reject("It failed!");
        }
    }, 1000);
});

//for catching the promises success then and failure catch
myPromise
    .then(function(result) {
        console.log("Success:", result);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

 //flatening without deeply nesting it.chaining, which flattens what would otherwise be deeply nested callbacks
/*getUser(id)
.then(user => getOrders(user.id))
.then(orders => getOrderDetails(orders[0].id))
.then(details => console.log(details))
.catch(error => console.log("Something failed:", error));*/


function processOrderPromise(orderName) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (orderName) {
                resolve(`Order for ${orderName} is ready!`);
            } else {
                reject("No order name provided!");
            }
        }, 1500);
    });
}

//with parameter
processOrderPromise("burger")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

    //without parameter
    processOrderPromise("")
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });

    //async and await
    async function getOrder() {
    try {
        const result = await processOrderPromise("burger");
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

getOrder();

async function getOrder(orderName) {
    try {
        const result = await processOrderPromise(orderName);
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

getOrder("tacos");
getOrder("");

//fetch api requests
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();   // parse the response body as JSON
        console.log(data);
    } catch (error) {
        console.log("Fetch failed:", error);
    }
}

/*if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
}*/

async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.log("Fetch failed:", error);
    }
}

getUsers();