<form id="contactForm">
<input type="text" placeholder="Enter your name" id="nameInput" required>
<button type="submit">Submit</button>
</form>
<script>
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
event.preventDefault(); // Prevent the form from submitting
const name = document.getElementById("nameInput").value;
console.log("Form submitted. Name:", name);
});
</script>