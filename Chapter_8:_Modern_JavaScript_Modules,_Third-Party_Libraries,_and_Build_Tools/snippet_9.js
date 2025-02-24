import _ from 'lodash';
const users = [
{ name: 'Alice', age: 28 },
{ name: 'Bob', age: 22 },
{ name: 'Charlie', age: 35 }
];
const sortedUsers = _.sortBy(users, ['age']);
console.log("Users sorted by age:", sortedUsers);