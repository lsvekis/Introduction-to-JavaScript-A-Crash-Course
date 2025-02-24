{ name: "Laptop", price: 999.99, inStock: true },
{ name: "Smartphone", price: 499.99, inStock: false },
{ name: "Tablet", price: 299.99, inStock: true }
];
products.forEach(product => {
console.log(`Product: ${product.name}, Price: $${product.price}, In Stock: ${product.inStock}`);
});