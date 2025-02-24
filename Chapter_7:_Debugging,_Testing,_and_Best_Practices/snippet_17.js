<script>
function debounce(func, delay) {
let timeoutId;
return function (...args) {
clearTimeout(timeoutId);
timeoutId = setTimeout(() => func.apply(this, args), delay);
};
}
const inputField = document.getElementById("debounceInput");
inputField.addEventListener("input", debounce((e) => {
console.log("User typed:", e.target.value);
}, 400));
</script>