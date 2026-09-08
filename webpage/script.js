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
