const introText = document.getElementById("intro-text");
console.log(introText);   // confirm we actually found the element

introText.textContent = "This text was changed by JavaScript!";
introText.style.color = "red";
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();   // stop the default page reload

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;

    console.log("Name entered:", nameValue);
    console.log("Email entered:", emailValue);

    alert(`Thanks, ${nameValue}! We'll get back to you.`);
});

//const button=document.getElementById(button);
button.addEventListener("click", function(){
    console.log("Button clicked!")
});

const cards = document.querySelectorAll(".card");   // gets ALL cards, as a NodeList
cards.forEach(function(card) {
card.addEventListener("click", function(event){
  event.target.style.backgroundColor = "purple";
})
});

const navLinks = document.querySelector(".nav-links");
navLinks.addEventListener("click", function(event) {
    console.log(event.target.textContent);   // not .textContent.target — fix this too
});

document.querySelector(".navbar").addEventListener("click", function() {
    console.log("Navbar (parent) was clicked");
});

document.querySelector(".nav-links").addEventListener("click", function() {
    console.log("Nav-links (child) was clicked");
});

function scopeDemo() {
    if (true) {
        let insideBlock = "block scoped";
        var insideFunction = "function scoped";
    }
    console.log(insideFunction);   // works
    // console.log(insideBlock);   // would ERROR if uncommented
}
scopeDemo();

// Hoisting demo
console.log(typeof hoistedVar);    // "undefined" - declaration hoisted
var hoistedVar = "I exist now";

function early() {
    console.log("Called before my definition appears in the file!");
}
early();   // works fine - function declarations are fully hoisted