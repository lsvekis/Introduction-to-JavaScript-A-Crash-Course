<input type="text" id="inputField" placeholder="Type here...">
<script>
document.getElementById("inputField").addEventListener("input", function(e) {
console.log("Current input:", e.target.value);
});
</script>