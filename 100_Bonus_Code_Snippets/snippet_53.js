function createListManager() {
const list = [];
return {
add(item) { list.push(item); },
remove(item) {
const index = list.indexOf(item);
if (index > -1) list.splice(index, 1);
},
getList() { return [...list]; }
};
}
const listManager = createListManager();
listManager.add("apple");
listManager.add("banana");
console.log(listManager.getList());
listManager.remove("apple");
console.log(listManager.getList());