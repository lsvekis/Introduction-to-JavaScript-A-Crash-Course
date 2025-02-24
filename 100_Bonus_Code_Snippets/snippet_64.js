<form id="myForm">
<input type="text" id="nameInput" placeholder="Enter name">
<button type="submit">Submit</button>
</form>
<script>
document.getElementById("myForm").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("nameInput").value;
console.log("Form submitted with name:", name);
});
</script>