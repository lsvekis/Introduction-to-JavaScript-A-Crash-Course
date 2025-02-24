const Singleton = (function() {
let instance;
function createInstance() {
return { name: "Singleton Instance" };
}
return {
getInstance() {
if (!instance) {
instance = createInstance();
}
return instance;
}
};
})();
const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();
console.log("Same instance?", s1 === s2); // true
Factory Pattern
Creates objects without exposing the creation logic.