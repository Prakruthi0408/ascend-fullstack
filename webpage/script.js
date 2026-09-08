const introText = document.getElementById("intro-text");
console.log(introText);   // confirm we actually found the element

introText.textContent = "This text was changed by JavaScript!";
introText.style.color = "red";