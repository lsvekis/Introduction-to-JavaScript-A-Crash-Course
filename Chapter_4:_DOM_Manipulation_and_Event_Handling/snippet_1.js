<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>DOM Introduction</title>
</head>
<body>
<h1 id="title">Hello, World!</h1>
<p class="description">This is a sample paragraph.</p>
<script>
// Accessing an element by its ID
const titleElement = document.getElementById("title");
console.log("Title:", titleElement.textContent);
// Using querySelector to access an element by class
const descElement = document.querySelector(".description");
console.log("Description:", descElement.textContent);
</script>
</body>
</html>