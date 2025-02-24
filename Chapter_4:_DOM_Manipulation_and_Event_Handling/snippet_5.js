// Select a button element
const button = document.createElement("button");
button.textContent = "Click Me!";
document.body.appendChild(button);
// Add a click event listener
button.addEventListener("click", function(event) {
alert("Button was clicked!");
});