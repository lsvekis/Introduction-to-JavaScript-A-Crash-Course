<p id="removePara">Right-click me to remove me.</p>
<script>
document.getElementById("removePara").addEventListener("contextmenu", function(e) {
e.preventDefault();
this.remove();
});
</script>