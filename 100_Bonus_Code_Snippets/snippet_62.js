<ul id="delegatedList">
<li>Item A</li>
<li>Item B</li>
<li>Item C</li>
</ul>
<script>
document.getElementById("delegatedList").addEventListener("click", function(event) {
if (event.target.tagName === "LI") {
console.log("Clicked item:", event.target.textContent);
}
});
</script>