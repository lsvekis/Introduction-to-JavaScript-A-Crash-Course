// Define the array to hold contacts
let addressBook = [];
// Function to add a new contact
function addContact(name, phone, email, address) {
let contact = { name, phone, email, address };
addressBook.push(contact);
}
// Function to display all contacts
function displayContacts() {
console.log("Address Book:");
addressBook.forEach((contact, index) => {
console.log(`${index + 1}. ${contact.name} - Phone: ${contact.phone}, Email: ${contact.email}`);
});
}
// Function to search for a contact by name
function searchContact(name) {
return addressBook.filter(contact => contact.name.toLowerCase() === name.toLowerCase());
}
// Adding sample contacts
addContact("Alice Johnson", "555-1234", "alice@example.com", "123 Maple St");
addContact("Bob Smith", "555-5678", "bob@example.com", "456 Oak Ave");
// Display all contacts
displayContacts();
// Searching for a contact
let results = searchContact("Alice Johnson");
console.log("Search Results:", results);
Coding Exercise: Mini Project Enhancement